import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Character.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import PageLoader from '../../components/Loader/PageLoader';
import { showError } from '../../components/Toast';
import { getCharacter } from '../../store/slices/characterSlice';
import { allCharactersUrl } from '../../utils/disneyCharactersUtils';

const CharacterDetails: FC = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const pathRegexMatch = /^\/character\/(\d+)$/;
  const { pathname, search } = location;
  const { selectedCharacter, isLoading, isError, errorMessage } = useAppSelector(
    (state) => state.character
  );

  useEffect(() => {
    if (pathRegexMatch.test(pathname) && !search) {
      const id = pathname.split('/').reverse()[0];
      const formattedUrl = `${allCharactersUrl}/${id}`;
      dispatch(getCharacter(formattedUrl));
    }
    if (isError) {
      showError('Error', errorMessage);
    }
  }, [isError, pathname, search]);

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
