import { useState, useMemo, ChangeEvent, useEffect } from 'react';
import { Button } from '@mui/material';
import { debounce } from 'lodash';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './Home.module.scss';
import Input from '../../components/Input/Input';
import useDisneyCharactersData from '../../hooks/useDisneyCharactersData';
import { getAllDisneyCharacters } from '../../services/fetchDisneyCharacters';
import { allCharactersUrl, getCharacterUrlFromName } from '../../utils/disneyCharactersUtils';
import Table from '../../components/Table/Table';
import PageLoader from '../../components/Loader/PageLoader';
import { showError } from '../../components/Toast';
import { getCharacters, getCharactersState } from '../../store/slices/characterSlice';

const Home = () => {
  const dispatch = useAppDispatch();

  const { characters, isLoading, isError, errorMessage } = useAppSelector(
    (state) => state.characters
  );

  const tableData = characters;

  const handleFetchCharacters = async () => {
    await dispatch(getCharacters(allCharactersUrl));
  };

  const handleOnCharacterSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const url = getCharacterUrlFromName(value);
    await dispatch(getCharacters(url));
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
    if (isError) {
      showError('Error', errorMessage);
    }
  }, [isError]);

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
