import { ChangeEvent, FormEvent } from 'react';

import { Button } from 'common/components/Button/Button';
import { ButtonSize, ButtonTheme } from 'common/components/Button/enums';

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
        <Button
          type="button"
          theme={ButtonTheme.primary}
          size={ButtonSize.default}
          onClick={handleFetchCharacters}
          aria-label="Characters"
        >
          Characters
        </Button>
      </div>
      <div className={styles.buttonWrapperClear}>
        <Button
          type="reset"
          color="secondary"
          theme={ButtonTheme.secondary}
          size={ButtonSize.default}
          onClick={handleClearCharacters}
          aria-label="Clear table"
        >
          Clear table
        </Button>
      </div>
    </div>
  );
};

export default Form;
