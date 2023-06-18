import { FC } from 'react';
import { Button } from '@mui/material';

import { ButtonProps } from 'types';
import styles from './Pagination.module.scss';

const PaginationButton: FC<ButtonProps> = ({ onClick, isDisabled, children }): JSX.Element => (
  <Button
    onClick={onClick}
    disabled={isDisabled}
    variant="contained"
    size="small"
    className={styles.button}
  >
    {children}
  </Button>
);

export default PaginationButton;
