import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'common/api/store/hooks';
import { getCharacter } from 'common/api/store/slices/characterSlice';
import GenericNotFound from 'common/components/GenericNotFound/GenericNotFound';
import PageLoader from 'common/components/Loader/PageLoader';
import { showError } from 'common/components/Toast';
import { coreConfig } from 'common/core/config';

import { detailsMap, pathRegexMatch } from '../utils/constants';

import CharacterInfoMap from './CharacterInfoMap/CharacterInfoMap';
import CharacterInfoItem from './CharacterInfoMap/components/CharacterInfoItem/CharacterInfoItem';
import GenericImage from './generic-image.png';

import styles from './CharacterDetails.module.scss';

const CharacterDetails = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { pathname, search } = location;
  const { selectedCharacter, isLoading, isError, errorMessage } = useAppSelector(
    (state) => state.character
  );

  const isCharacterDetailsPath = pathRegexMatch.test(pathname) && !search;

  useEffect(() => {
    if (isCharacterDetailsPath) {
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

  if (!isCharacterDetailsPath || !selectedCharacter?._id) {
    return (
      <GenericNotFound
        title="No character Found"
        message="The character for this url does not exist, please check the url"
      />
    );
  }

  return (
    <div className={styles.character}>
      <div className={styles.characterName}>{selectedCharacter?.name}</div>
      <div className={styles.characterImage}>
        <img src={selectedCharacter?.imageUrl || GenericImage} alt={selectedCharacter?.name} />
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
