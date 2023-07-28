/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck - may need to be at the start of file
import { createMemoryHistory } from 'history';

import { coreConfig } from 'common/core/config';
import { getSingleCharacterUrl } from 'mocks/handlers';
import { rest, server } from 'mocks/server';
import CharacterDetails from 'modules/details/components/CharacterDetails';
import defaultAppStore, { loadingAppStore, mockSelectedCharacterAppStore } from 'tests/store';
import { render, screen, waitFor } from 'tests/test-utils';

describe('Character', () => {
  it('renders Character details', async () => {
    render(<CharacterDetails />, { store: defaultAppStore() });

    const img = await screen.findByRole('img', { name: 'Achilles' });
    const name = await screen.findByText('Achilles');

    expect(img).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  it('displays loading spinner', async () => {
    render(<CharacterDetails />, { store: loadingAppStore() });

    const loaderLabel = await screen.findByLabelText('animation');
    expect(loaderLabel).toBeInTheDocument();
  });

  it('displays error', async () => {
    server.use(rest.get(getSingleCharacterUrl, (_, res, ctx) => res(ctx.status(500))));
    const history = createMemoryHistory();
    history.push(coreConfig.routes.character.url.format('15'));

    render(<CharacterDetails />, {
      routerProps: { initialEntries: [coreConfig.routes.character.url.format('15')] },
    });

    expect(history.location.pathname).toEqual('/character/15');

    const errorToastMessage = await screen.findByText(
      'An error occurred while fetching disney character'
    );

    await waitFor(() => expect(errorToastMessage).toBeInTheDocument(), { timeout: 3000 });
  });

  it('dispatches an action for a character', async () => {
    const initialEntries = ['/character/13'];
    render(<CharacterDetails />, {
      store: mockSelectedCharacterAppStore(),
      routerProps: { initialEntries },
    });

    expect(await screen.findByText('A.B.E.')).toBeInTheDocument();
  });
});
