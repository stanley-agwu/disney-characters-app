import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Character } from '../../types';
import styles from './Character.module.scss';

const CharacterDetails: FC = (): JSX.Element => {
  const location = useLocation();
  const { name, imageUrl, createdAt, updatedAt, films, tvShows, enemies } =
    location?.state as Character;

  return (
    <div className={styles.character}>
      <div className={styles.characterName}>{name}</div>
      <div className={styles.characterImage}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.characterDetails}>
        <div>
          {enemies?.map((enemy, idx) => (
            <div key={idx}>{enemy}</div>
          ))}
        </div>
        <div>{createdAt}</div>
        <div>{updatedAt}</div>
        <div>
          {films?.map((film, idx) => (
            <div key={idx}>{film}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
