import { useState, useMemo, ChangeEvent } from 'react';
import { Button } from '@mui/material';
import { debounce } from 'lodash';
import styles from './Home.module.scss';
import Input from '../../components/Input/Input';
import useDisneyCharactersData from '../../hooks/useDisneyCharactersData';
import { getAllDisneyCharacters } from '../../services/fetchDisneyCharacters';
import { allCharactersUrl, getCharacterUrlFromName } from '../../utils/disneyCharactersUtils';

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

  const handleOnCharacterSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    SetRequestParam(getCharacterUrlFromName(value));
  };

  const debouncedCharacterSearch = debounce(handleOnCharacterSearch, 2000);

  return (
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
  );
};

export default Home;
