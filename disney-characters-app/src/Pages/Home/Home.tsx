import { ChangeEvent, useCallback, useEffect, useRef, Fragment, useState, FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import { Button } from '@mui/material';

import Input from 'components/Input/Input';
import PageLoader from 'components/Loader/PageLoader';
import Table from 'components/Table/Table';
import { showError } from 'components/Toast';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getCharacters, reset } from 'store/slices/characterSlice';
import {
  allCharactersUrl,
  getCharacterUrlFromName,
  getQueryParams,
} from 'utils/disneyCharactersUtils';
import styles from './Home.module.scss';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const navigate = useNavigate();
  const paginationRef = useRef<HTMLDivElement>(null);

  const { characters, filters, isLoading, isError, isSuccess, errorMessage } = useAppSelector(
    (state) => state.character
  );

  const tableData = characters;
  const FIRSTPAGE = '/character?page=1&pageSize=50';

  const handleFetchCharacters = () => {
    navigate(FIRSTPAGE);
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

  const displayCharactersResults = () => {
    if (isLoading) {
      return <PageLoader width={200} height={200} />;
    }
    return <Table characters={tableData} filters={filters} paginationRef={paginationRef} />;
  };

  const queryParams = getQueryParams(search);
  const hasPageParams = Boolean(queryParams?.page && queryParams.pageSize);
  const hasNameParam = Boolean(queryParams?.name);

  useEffect(() => {
    if (search && hasNameParam) {
      const { page, pageSize, name } = queryParams;
      dispatch(
        getCharacters({
          url: `${allCharactersUrl}?name=${name}&page=${page || 1}&pageSize=${pageSize || 50}`,
          filters: { pageNumber: page || 1, pageSize: pageSize || 50, name: name as string },
        })
      );
    }
    if (search && hasPageParams && !hasNameParam) {
      const { page, pageSize } = queryParams as { page: string; pageSize: string };
      dispatch(
        getCharacters({
          url: `${allCharactersUrl}?page=${page}&pageSize=${pageSize}`,
          filters: { pageNumber: page, pageSize },
        })
      );
    }
  }, [search, hasNameParam, hasPageParams]);

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
      <div className={styles.home}>
        <div className={styles.inputWrapper}>
          <Input
            name="search"
            type="text"
            label="Search characters"
            value={searchQuery}
            onChange={handleCharacterSearch}
          />
        </div>
        <div className={styles.buttonWrapperSearch}>
          <Button variant="contained" type="button" size="large" onClick={handleFetchCharacters}>
            characters
          </Button>
        </div>
        <div className={styles.buttonWrapperClear}>
          <Button
            variant="contained"
            type="reset"
            color="secondary"
            size="large"
            onClick={handleClearCharacters}
          >
            Clear table
          </Button>
        </div>
      </div>
      {(isLoading || (isSuccess && filters?.count)) && (
        <div className={styles.tableWrapper}>{displayCharactersResults()}</div>
      )}
    </Fragment>
  );
};

export default Home;
