import { useState, useMemo } from 'react';
import { Button } from '@mui/material';
import styles from './Home.module.scss';
import Input from '../../components/Input/Input';
import useDisneyCharactersData from '../../hooks/useDisneyCharactersData';
import { getAllDisneyCharacters } from '../../services/fetchDisneyCharacters';

const allCharactersUrl = 'https://api.disneyapi.dev/character';

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

  const handleFetchCharacters = () => {
    SetRequestParam(allCharactersUrl);
  };

  return (
    <div className={styles.home}>
      <div className={styles.inputWrapper}>
        <Input name="search" label="Search characters" />
      </div>
      <div className={styles.buttonWrapper}>
        <Button variant="contained" size="large" onClick={handleFetchCharacters}>
          characters
        </Button>
      </div>
    </div>
  );
};

export default Home;
