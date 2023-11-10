import { rest } from 'msw';

import getAllCharactersMock from './results/getAllCharactersMock';
import getCharacterMock from './results/getCharacterMock';

export const getAllCharactersUrl = 'https://api.disneyapi.dev/character';
export const getSingleCharacterUrl = 'https://api.disneyapi.dev/character/:id';

export const handlers = [
  rest.get(getAllCharactersUrl, (req, res, ctx) => res(ctx.json(getAllCharactersMock))),

  rest.get(getSingleCharacterUrl, (_, res, ctx) => res(ctx.json(getCharacterMock))),
];
