import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'common/api/store/hooks';
import { getCharacter } from 'common/api/store/slices/characterSlice';
import PageLoader from 'common/components/Loader/PageLoader';
import { showError } from 'common/components/Toast';
import { coreConfig } from 'common/core/config';

import { detailsMap, pathRegexMatch } from '../utils/constants';

import CharacterInfoMap from './CharacterInfoMap/CharacterInfoMap';
import CharacterInfoItem from './CharacterInfoMap/components/CharacterInfoItem/CharacterInfoItem';

import styles from './CharacterDetails.module.scss';

const CharacterDetails = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { pathname, search } = location;
  const { selectedCharacter, isLoading, isError, errorMessage } = useAppSelector(
    (state) => state.character
  );

  useEffect(() => {
    if (pathRegexMatch.test(pathname) && !search) {
      const id = pathname.split('/').reverse()[0];
      dispatch(getCharacter(coreConfig.endpoints.character.format(id)));
    }
    if (isError) {
      showError('Error', errorMessage);
    }
  }, [isError, pathname, search]);

  if (isLoading) {
    return <PageLoader width={120} height={120} />;
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
        <CharacterInfoMap
          detailsMap={detailsMap}
          character={selectedCharacter}
          Component={CharacterInfoItem}
        />
      </div>
    </div>
  );
};

export default CharacterDetails;
