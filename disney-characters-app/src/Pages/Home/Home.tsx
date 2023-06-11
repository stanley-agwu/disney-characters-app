import { useState, useMemo, ChangeEvent, useEffect } from 'react';
import { Button } from '@mui/material';
import { debounce } from 'lodash';
import styles from './Home.module.scss';
import Input from '../../components/Input/Input';
import useDisneyCharactersData from '../../hooks/useDisneyCharactersData';
import { getAllDisneyCharacters } from '../../services/fetchDisneyCharacters';
import { allCharactersUrl, getCharacterUrlFromName } from '../../utils/disneyCharactersUtils';
import Table from '../../components/Table/Table';
import PageLoader from '../../components/Loader/PageLoader';
import { showError } from '../../components/Toast';

const Home = () => {
  const [requestParam, SetRequestParam] = useState<string | undefined>();
  const allCharactersResults = useDisneyCharactersData(
    getAllDisneyCharacters,
    requestParam,
    requestParam
  );

  const { disneyCharacterData, errorState, isLoading } = useMemo(
    () => allCharactersResults,
    [allCharactersResults]
  );

  const tableData = disneyCharacterData || [];

  const handleFetchCharacters = () => {
    SetRequestParam(allCharactersUrl);
  };

  const handleOnCharacterSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    SetRequestParam(getCharacterUrlFromName(value));
  };

  const debouncedCharacterSearch = debounce(handleOnCharacterSearch, 2000);

  const isDisplayTable = Boolean(tableData?.length);

  const displayCharactersResults = () => {
    if (isLoading) {
      return <PageLoader width={200} height={200} />;
    }
    if (isDisplayTable) {
      return <Table characters={tableData} />;
    }
    return null;
  };

  useEffect(() => {
    if (errorState) {
      showError('Error', errorState);
    }
  }, [errorState]);

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
      {(isLoading || isDisplayTable) && (
        <div className={styles.tableWrapper}>{displayCharactersResults()}</div>
      )}
    </>
  );
};

export default Home;
