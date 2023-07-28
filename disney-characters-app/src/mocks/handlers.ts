import { rest } from 'msw';

import getAllCharactersMock from './results/getAllCharactersMock';
import getCharacterMock from './results/getCharacterMock';
import getCharactersWithQueryParamMock from './results/getCharactersWithQueryParamMock';

export const getAllCharactersUrl = 'https://api.disneyapi.dev/character';
export const getSingleCharacterUrl = 'https://api.disneyapi.dev/character/:id';

export const handlers = [
  rest.get(getAllCharactersUrl, (req, res, ctx) => {
    if (req.url.searchParams.get('name') === 'Mickey') {
      return res(ctx.json(getCharactersWithQueryParamMock));
    }
    return res(ctx.json(getAllCharactersMock));
  }),

  rest.get(getSingleCharacterUrl, (_, res, ctx) => res(ctx.json(getCharacterMock))),
];
