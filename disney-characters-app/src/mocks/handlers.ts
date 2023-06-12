import { rest } from 'msw'
import getAllCharactersMock from './results/getAllCharactersMock'
import getCharacterMock from './results/getCharacterMock'

export const handlers = [
  rest.get('https://api.disneyapi.dev/character', (req, res, ctx) => res(ctx.json(getAllCharactersMock))),

  rest.get('https://api.disneyapi.dev/character/119', (req, res, ctx) => res(ctx.json(getCharacterMock))),
]