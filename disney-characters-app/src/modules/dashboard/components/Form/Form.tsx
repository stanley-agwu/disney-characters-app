import { ChangeEvent, FormEvent } from 'react';

import { Button } from '@mui/material';

import Input from './components/Input/Input';

import styles from './Form.module.scss';

interface FormProps {
  searchQuery: string;
  handleCharacterSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFetchCharacters: () => void;
  handleClearCharacters: (e: FormEvent<HTMLButtonElement>) => void;
}

const Form = ({
  searchQuery,
  handleCharacterSearch,
  handleFetchCharacters,
  handleClearCharacters,
}: FormProps) => {
  return (
    <div className={styles.form}>
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
  );
};

export default Form;
