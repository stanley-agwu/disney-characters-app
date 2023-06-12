import { useState, useMemo, ChangeEvent, useEffect } from 'react';
import { Button } from '@mui/material';
import { debounce } from 'lodash';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './Home.module.scss';
import Input from '../../components/Input/Input';
import { allCharactersUrl, getCharacterUrlFromName } from '../../utils/disneyCharactersUtils';
import Table from '../../components/Table/Table';
import PageLoader from '../../components/Loader/PageLoader';
import { showError } from '../../components/Toast';
import { getCharacters } from '../../store/slices/characterSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const { characters, isLoading, isError, isSuccess, errorMessage } = useAppSelector(
    (state) => state.character
  );

  const tableData = characters;

  const handleFetchCharacters = () => {
    navigate(allCharactersUrl);
  };

  const handleOnCharacterSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    navigate(getCharacterUrlFromName(value));
  };

  const debouncedCharacterSearch = debounce(handleOnCharacterSearch, 2000);

  const displayCharactersResults = () => {
    if (isLoading) {
      return <PageLoader width={200} height={200} />;
    }
    if (isSuccess) {
      return <Table characters={tableData} />;
    }
    return null;
  };

  const queryParams = queryString.parse(search);
  const hasPageParams = Boolean(queryParams?.page && queryParams.pageSize);
  const hasNameParam = Boolean(queryParams?.name);

  useEffect(() => {
    if (pathname && hasPageParams) {
      const { page, pageSize } = queryParams;
      dispatch(getCharacters(`${allCharactersUrl}?page=${page}${pageSize}`));
    }
    if (pathname && hasNameParam) {
      dispatch(getCharacters(`${allCharactersUrl}?name=${queryParams.name}`));
    }
    if (isError) {
      showError('Error', errorMessage);
    }
  }, [pathname, hasPageParams, hasNameParam, isError]);

  return (
    <>
      <div className={styles.home}>
        <div className={styles.inputWrapper}>
          <Input name="search" label="Search characters" onChange={debouncedCharacterSearch} />
        </div>
        <div className={styles.buttonWrapper}>
          <Button variant="contained" size="large" onClick={handleFetchCharacters}>
            characters
          </Button>
        </div>
      </div>
      {(isLoading || isSuccess) && (
        <div className={styles.tableWrapper}>{displayCharactersResults()}</div>
      )}
    </>
  );
};

export default Home;
