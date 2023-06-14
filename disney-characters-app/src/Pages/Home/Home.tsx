import { ChangeEvent, useEffect, useRef, Fragment, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import { Button } from '@mui/material';

import Input from '../../components/Input/Input';
import PageLoader from '../../components/Loader/PageLoader';
import Table from '../../components/Table/Table';
import { showError } from '../../components/Toast';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getCharacters, reset } from '../../store/slices/characterSlice';
import {
  allCharactersUrl,
  getCharacterUrlFromName,
  getQueryParams,
} from '../../utils/disneyCharactersUtils';
import styles from './Home.module.scss';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string | undefined>();
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

  const handleOnCharacterSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
    navigate(getCharacterUrlFromName(value));
  };

  const debouncedCharacterSearch = debounce(handleOnCharacterSearch, 2000);

  const displayCharactersResults = () => {
    if (isLoading) {
      return <PageLoader width={200} height={200} />;
    }
    if (isSuccess && filters.count) {
      return <Table characters={tableData} filters={filters} paginationRef={paginationRef} />;
    }
    return null;
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
      setSearchQuery(undefined);
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
            label="Search characters"
            value={searchQuery}
            onChange={debouncedCharacterSearch}
          />
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
    </Fragment>
  );
};

export default Home;
