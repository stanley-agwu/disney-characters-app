import moment from 'moment';

import { Character } from '../types';

export const isNonEmptyArray = (value: any): boolean =>
  typeof value === 'object' && Array.isArray(value) && !!value?.length;

export const isNonEmptyObject = (value: any): boolean =>
  typeof value === 'object' &&
  !Array.isArray(value) &&
  value !== null &&
  Boolean(Object.keys(value).length);

export const formatDateForArrayPayLoad = (payload: Character[]): Character[] =>
  payload.map((character) => ({
    ...character,
    createdAt: character.createdAt
      ? moment.utc(character.createdAt).format('DD/MM/YYYY HH:mm:ss')
      : character.createdAt,
    updatedAt: character.updatedAt
      ? moment.utc(character.updatedAt).format('DD/MM/YYYY HH:mm:ss')
      : character.updatedAt,
  }));

export const formatDateForObjectPayLoad = (payload: Character): Character[] => [
  {
    ...payload,
    createdAt: payload.createdAt
      ? moment.utc(payload.createdAt).format('DD/MM/YYYY HH:mm:ss')
      : payload.createdAt,
    updatedAt: payload.updatedAt
      ? moment.utc(payload.updatedAt).format('DD/MM/YYYY HH:mm:ss')
      : payload.updatedAt,
  },
];
