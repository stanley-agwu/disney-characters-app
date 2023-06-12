import { rest } from 'msw';
import getAllCharactersMock from './results/getAllCharactersMock';
import getCharacterMock from './results/getCharacterMock';

export const getAllCharactersUrl = 'https://api.disneyapi.dev/character';
export const getCharactersUrl = 'https://api.disneyapi.dev/character/:id';

export const handlers = [
  rest.get(getAllCharactersUrl, (_, res, ctx) => res(ctx.json(getAllCharactersMock))),

  rest.get(getCharactersUrl, (_, res, ctx) => res(ctx.json(getCharacterMock))),
]