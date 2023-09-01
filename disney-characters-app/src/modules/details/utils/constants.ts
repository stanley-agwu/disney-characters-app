import { CharacterEnum } from './characterEnum';

export const detailsMap = [
  { key: CharacterEnum.tvShows, title: 'TV shows' },
  { key: CharacterEnum.films, title: 'Films' },
  { key: CharacterEnum.shortFilms, title: 'Short films' },
  { key: CharacterEnum.enemies, title: 'Enemies' },
  { key: CharacterEnum.allies, title: 'Allies' },
  { key: CharacterEnum.videoGames, title: 'Video Games' },
  { key: CharacterEnum.parkAttractions, title: 'Park attractions' },
];

export const pathRegexMatch = /^\/character\/(\d+)$/;
