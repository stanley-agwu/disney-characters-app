import { ChangeEvent, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { debounce } from 'lodash';
import { Button } from '@mui/material';

import Input from '../../components/Input/Input';
import PageLoader from '../../components/Loader/PageLoader';
import Table from '../../components/Table/Table';
import { showError } from '../../components/Toast';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getCharacters } from '../../store/slices/characterSlice';
import {
  allCharactersUrl,
  getCharacterUrlFromName,
  getQueryParams,
} from '../../utils/disneyCharactersUtils';
import styles from './Home.module.scss';

const Home = () => {
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const navigate = useNavigate();

  const { characters, isLoading, isError, isSuccess, errorMessage } = useAppSelector(
    (state) => state.character
  );

  const tableData = characters;
  // Characters from API is paginated - Table Pagination will be updated
  const FIRSTPAGE = '/character?page=1&pageSize=50';

  const handleFetchCharacters = () => {
    navigate(FIRSTPAGE);
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

  const queryParams = getQueryParams(search);
  const hasPageParams = Boolean(queryParams?.page && queryParams.pageSize);
  const hasNameParam = Boolean(queryParams?.name);

  useEffect(() => {
    if (search && hasPageParams) {
      const { page, pageSize } = queryParams;
      dispatch(getCharacters(`${allCharactersUrl}?page=${page}&pageSize=${pageSize}`));
    }
    if (search && hasNameParam) {
      dispatch(getCharacters(`${allCharactersUrl}?name=${queryParams.name}`));
    }
    if (isError) {
      showError('Error', errorMessage);
    }
  }, [search, isError]);

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
