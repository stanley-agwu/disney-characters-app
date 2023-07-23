import { Button } from '@mui/material';

import styles from './Pagination.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isDisabled: boolean;
}

const PaginationButton = ({ onClick, isDisabled, children }: ButtonProps): JSX.Element => (
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
