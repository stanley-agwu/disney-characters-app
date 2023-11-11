import { ReactComponent as NotFoundIcon } from './not-found.svg';

import styles from './GenericNotFound.module.scss';

interface GenericNotFoundProps {
  title?: string;
  message?: string;
}

const GenericNotFound = ({ title, message }: GenericNotFoundProps) => (
  <div className={styles.genericNotFound}>
    <div className={styles.icon}>
      <NotFoundIcon />
    </div>
    <div className={styles.text}>
      <div className={styles.title}>{title ?? 'No characters found'}</div>
      <div className={styles.subtitle}>
        {message ??
          'Please search for another disney character as this name does not match an existing character.'}
      </div>
    </div>
  </div>
);

export default GenericNotFound;
