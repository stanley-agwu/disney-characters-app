import { ChangeEvent, FormEvent, Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';

import { useAppDispatch, useAppSelector } from 'common/api/store/hooks';
import { reset } from 'common/api/store/slices/characterSlice';
import { showError } from 'common/components/Toast';
import { coreConfig } from 'common/core/config';
import CharactersResultDisplay from 'modules/dashboard/components/CharactersResultDisplay/CharactersResultDisplay';
import Form from 'modules/dashboard/components/Form/Form';
import useCharactersDispatch from 'modules/dashboard/hooks/useCharactersDispatch';
import { getCharacterUrlFromName } from 'modules/dashboard/utils/disneyCharactersUtils';

import styles from './CharactersDashboard.module.scss';

const CharactersDashboard = () => {
  const [searchQuery, setSearchQuery] = useState<string>();
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const navigate = useNavigate();
  const paginationRef = useRef<HTMLDivElement | null>(null);
  useCharactersDispatch(search);

  const { characters, filters, isLoading, isError, isSuccess, errorMessage } = useAppSelector(
    (state) => state.character
  );

  const handleFetchCharacters = () => {
    navigate(coreConfig.routes.characters.page.format('1', '50'));
  };

  const handleClearCharacters = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(reset());
    navigate(coreConfig.routes.characters.url);
    setSearchQuery('');
  };

  const debouncedCharacterSearch = debounce((...args: (string | undefined)[]) => {
    const [name, page, pageSize] = args;
    navigate(getCharacterUrlFromName(name, page, pageSize));
  }, 500);

  const debounceCallback = useCallback(
    (...args: (string | undefined)[]) => debouncedCharacterSearch(...args),
    []
  );

  const handleCharacterSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
    debounceCallback(value, '1', filters?.pageSize);
  };

  const scrollPaginationIntoView = () => paginationRef.current?.scrollIntoView();

  useEffect(() => {
    if (isError) {
      showError('Error', errorMessage);
    }
    if (!isSuccess) {
      dispatch(reset());
    }
    if (isSuccess && filters.isPaginationQuery) {
      scrollPaginationIntoView();
    }
  }, [isError, isSuccess, filters]);

  return (
    <Fragment>
      <Form
        searchQuery={searchQuery ?? ''}
        handleCharacterSearch={handleCharacterSearch}
        handleFetchCharacters={handleFetchCharacters}
        handleClearCharacters={handleClearCharacters}
      />
      <div className={styles.tableWrapper}>
        <CharactersResultDisplay
          isLoading={isLoading}
          isSuccess={isSuccess}
          filters={filters}
          characters={characters}
          paginationRef={paginationRef}
        />
      </div>
    </Fragment>
  );
};

export default CharactersDashboard;
