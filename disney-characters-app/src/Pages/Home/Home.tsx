import React from 'react';
import { Button } from '@mui/material';
import styles from './Home.module.scss';
import Input from '../../components/Input/Input';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.inputWrapper}>
        <Input name="search" label="Search characters" />
      </div>
      <div className={styles.buttonWrapper}>
        <Button variant="contained" size="large">
          characters
        </Button>
      </div>
    </div>
  );
};

export default Home;
