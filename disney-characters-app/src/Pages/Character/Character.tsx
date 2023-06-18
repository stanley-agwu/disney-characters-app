import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PageLoader from 'components/Loader/PageLoader';
import { showError } from 'components/Toast';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getCharacter } from 'store/slices/characterSlice';
import { allCharactersUrl } from 'utils/disneyCharactersUtils';
import styles from './Character.module.scss';

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
        {!!selectedCharacter?.tvShows.length && (
          <div className={styles.films}>
            <div className={styles.titles}>TV Shows: </div>
            {selectedCharacter.tvShows.map((show, idx) => (
              <div key={idx}>{show}</div>
            ))}
          </div>
        )}
        {!!selectedCharacter?.enemies.length && (
          <div className={styles.enemies}>
            <div className={styles.titles}>Enemies: </div>
            {selectedCharacter.enemies.map((enemy, idx) => (
              <div key={idx} className={styles.enemy}>
                {enemy}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterDetails;
