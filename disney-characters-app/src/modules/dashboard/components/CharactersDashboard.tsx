import { ChangeEvent, FormEvent, Fragment, useCallback, useEffect, useRef } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
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
  const [searchParam, setSearchParam] = useSearchParams({ name: '', page: '1', pageSize: '50' });
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const navigate = useNavigate();
  const paginationRef = useRef<HTMLDivElement | null>(null);
  useCharactersDispatch(search);

  const { name, page, pageSize } = {
    name: searchParam.get('name'),
    page: searchParam.get('page'),
    pageSize: searchParam.get('pageSize'),
  };

  const { characters, filters, isLoading, isError, isSuccess, errorMessage } = useAppSelector(
    (state) => state.character
  );

  const handleFetchCharacters = () => {
    navigate(coreConfig.routes.characters.page.format('1', '50'));
  };

  const handleClearCharacters = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearchParam(
      (prev) => {
        prev.set('name', '');
        return prev;
      },
      { replace: true }
    );
    dispatch(reset());
    navigate(coreConfig.routes.characters.url);
  };

  const debouncedCharacterSearch = debounce(
    (value: string, pageNumber: string | null, size: string | null) =>
      navigate(getCharacterUrlFromName(value, pageNumber, size)),
    500
  );

  const debounceCallback = useCallback(
    (searchTerm: string) => debouncedCharacterSearch(searchTerm, page, pageSize),
    []
  );

  const handleCharacterSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchParam(
      (prev) => {
        prev.set('name', value);
        filters.pageNumber && prev.set('page', filters.pageNumber);
        filters.pageSize && prev.set('pageSize', filters.pageSize);
        return prev;
      },
      { replace: true }
    );
    debounceCallback(value);
  };

  const scrollPaginationIntoView = () => paginationRef.current?.scrollIntoView();

  useEffect(() => {
    if (isError) {
      showError('Error', errorMessage);
      setSearchParam(
        (prev) => {
          prev.set('name', '');
          return prev;
        },
        { replace: true }
      );
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
        searchQuery={name ?? ''}
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
