/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from 'moment';

import { Character } from 'common/types';

export const isNonEmptyArray = (value: any): boolean =>
  typeof value === 'object' && Array.isArray(value) && !!value?.length;

export const isNonEmptyObject = (value: any): boolean =>
  typeof value === 'object' &&
  !Array.isArray(value) &&
  value !== null &&
  Boolean(Object.keys(value).length);

const formatDateForArrayPayLoad = (payload: Character[]): Character[] =>
  payload.map((character) => ({
    ...character,
    createdAt: character.createdAt
      ? moment.utc(character.createdAt).format('DD/MM/YYYY')
      : character.createdAt,
    updatedAt: character.updatedAt
      ? moment.utc(character.updatedAt).format('DD/MM/YYYY')
      : character.updatedAt,
  }));

const formatDateForObjectPayLoad = (payload: Character): Character[] => [
  {
    ...payload,
    createdAt: payload.createdAt
      ? moment.utc(payload.createdAt).format('DD/MM/YYYY')
      : payload.createdAt,
    updatedAt: payload.updatedAt
      ? moment.utc(payload.updatedAt).format('DD/MM/YYYY')
      : payload.updatedAt,
  },
];

export const formatDateCharactersPayLoad = (characters: Character[] | Character) => {
  if (isNonEmptyArray(characters)) {
    return formatDateForArrayPayLoad(characters as Character[]);
  }
  if (isNonEmptyObject(characters)) {
    return formatDateForObjectPayLoad(characters as Character);
  }
  return [];
};

export const formatDateSelectedCharacterPayLoad = (payload: Character): Character => ({
  ...payload,
  createdAt: payload.createdAt
    ? moment.utc(payload.createdAt).format('DD/MM/YYYY HH:mm:ss')
    : payload.createdAt,
  updatedAt: payload.updatedAt
    ? moment.utc(payload.updatedAt).format('DD/MM/YYYY HH:mm:ss')
    : payload.updatedAt,
});
