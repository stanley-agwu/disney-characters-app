import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'common/api/store/hooks';
import { getCharacter } from 'common/api/store/slices/characterSlice';
import PageLoader from 'common/components/Loader/PageLoader';
import { showError } from 'common/components/Toast';
import { coreConfig } from 'common/core/config';

import CharacterInfoItem from './CharacterInfoItem/CharacterInfoItem';

import styles from './CharacterDetails.module.scss';

const CharacterDetails = (): JSX.Element => {
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
      dispatch(getCharacter(coreConfig.endpoints.character.format(id)));
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
        <CharacterInfoItem detailList={selectedCharacter?.tvShows} title="TV shows" />
        <CharacterInfoItem detailList={selectedCharacter?.films} title="Films" />
        <CharacterInfoItem detailList={selectedCharacter?.shortFilms} title="Short films" />
        <CharacterInfoItem detailList={selectedCharacter?.enemies} title="Enemies" />
        <CharacterInfoItem detailList={selectedCharacter?.allies} title="Allies" />
        <CharacterInfoItem
          detailList={selectedCharacter?.parkAttractions}
          title="Park Attractions"
        />
      </div>
    </div>
  );
};

export default CharacterDetails;
