import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'common/api/store/hooks';
import { getCharacter } from 'common/api/store/slices/characterSlice';
import PageLoader from 'common/components/Loader/PageLoader';
import { showError } from 'common/components/Toast';
import { coreConfig } from 'common/core/config';
import { CharacterEnum } from 'modules/details/utils/CharacterEnum';

import CharacterInfoMap from './CharacterInfoMap/CharacterInfoMap';
import CharacterInfoItem from './CharacterInfoMap/components/CharacterInfoItem/CharacterInfoItem';

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

  const detailsMap = [
    { key: CharacterEnum.tvShows, title: 'TV shows' },
    { key: CharacterEnum.films, title: 'Films' },
    { key: CharacterEnum.shortFilms, title: 'Short films' },
    { key: CharacterEnum.enemies, title: 'Enemies' },
    { key: CharacterEnum.allies, title: 'Allies' },
    { key: CharacterEnum.videoGames, title: 'Video Games' },
    { key: CharacterEnum.parkAttractions, title: 'Park attractions' },
  ];

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
