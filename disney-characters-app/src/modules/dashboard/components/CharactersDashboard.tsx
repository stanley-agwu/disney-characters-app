import { ChangeEvent, FormEvent, Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';

import { useAppDispatch, useAppSelector } from 'common/api/store/hooks';
import { reset } from 'common/api/store/slices/characterSlice';
import { showError } from 'common/components/Toast';
import { coreConfig } from 'common/core/config';
import { formatString } from 'common/utils';
import CharactersResultDisplay from 'modules/dashboard/components/CharactersResultDisplay/CharactersResultDisplay';
import Form from 'modules/dashboard/components/Form/Form';

import useCharactersDispatch from '../hooks/useCharactersDispatch';
import { getCharacterUrlFromName } from '../utils/disneyCharactersUtils';

import styles from './CharactersDashboard.module.scss';

const CharactersDashboard = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const navigate = useNavigate();
  const paginationRef = useRef<HTMLDivElement | null>(null);
  useCharactersDispatch(search);

  const { characters, filters, isLoading, isError, isSuccess, errorMessage } = useAppSelector(
    (state) => state.character
  );

  const handleFetchCharacters = () => {
    navigate(formatString(coreConfig.routes.characters.firstPage, '1', '50'));
  };

  const handleClearCharacters = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearchQuery('');
    dispatch(reset());
    navigate('/character');
  };

  const debouncedCharacterSearch = debounce(
    (value: string) => navigate(getCharacterUrlFromName(value)),
    500
  );

  const debounceCallback = useCallback(
    (searchTerm: string) => debouncedCharacterSearch(searchTerm),
    []
  );

  const handleCharacterSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
    debounceCallback(value);
  };

  useEffect(() => {
    if (isError) {
      showError('Error', errorMessage);
      setSearchQuery('');
    }
    if (!isSuccess) {
      dispatch(reset());
    }
  }, [isError, isSuccess]);

  return (
    <Fragment>
      <Form
        searchQuery={searchQuery}
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
