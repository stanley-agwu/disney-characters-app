import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Character } from '../../types';
import styles from './Character.module.scss';
import { useAppSelector } from '../../store/hooks';
import PageLoader from '../../components/Loader/PageLoader';
import { showError } from '../../components/Toast';

const CharacterDetails: FC = (): JSX.Element => {
  const { selectedCharacter, isLoading, isError, errorMessage } = useAppSelector(
    (state) => state.character
  );

  useEffect(() => {
    if (isError) {
      showError('Error', errorMessage);
    }
  }, [isError]);

  if (isLoading) {
    return <PageLoader width={200} height={200} />;
  }

  return (
    <div className={styles.character}>
      <div className={styles.characterName}>{selectedCharacter?.name}</div>
      <div className={styles.characterImage}>
        <img src={selectedCharacter?.imageUrl} alt={selectedCharacter?.name} />
      </div>
      <div className={styles.characterDetails}>
        <div className={styles.created}>
          <div className={styles.titles}>Date created: </div>
          {selectedCharacter?.createdAt}
        </div>
        <div className={styles.updated}>
          <div className={styles.titles}>Date updated: </div>
          {selectedCharacter?.updatedAt}
        </div>
        <div className={styles.films}>
          <div className={styles.titles}>Films: </div>
          {selectedCharacter?.films?.map((film, idx) => (
            <div key={idx}>{film}</div>
          ))}
        </div>
        <div className={styles.enemies}>
          <div className={styles.titles}>Enemies: </div>
          {selectedCharacter?.enemies?.map((enemy, idx) => (
            <div key={idx} className={styles.enemy}>
              {enemy}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
