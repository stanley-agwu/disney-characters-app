import defaultAppStore, {
  errorAppStore,
  loadingAppStore,
  mockSelectedCharacterAppStore,
} from '../../test/store';
import { render, screen } from '../../test/test-util';
import Character from './Character';

describe('Character', () => {
  it('renders Character details', async () => {
    render(<Character />, { store: defaultAppStore() });

    const img = await screen.findByRole('img', { name: 'Achilles' });
    const name = await screen.findByText('Achilles');

    expect(img).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  it('displays loading spinner', async () => {
    render(<Character />, { store: loadingAppStore() });

    const loaderLabel = await screen.findByLabelText('animation');
    expect(loaderLabel).toBeInTheDocument();
  });

  it('displays error from redux store', async () => {
    render(<Character />, { store: errorAppStore() });

    const errorToastMessage = await screen.findByText('An Error occured with a disney character');
    expect(errorToastMessage).toBeInTheDocument();
  });

  it('dispatches an action for a character', async () => {
    const initialEntries = ['/character/13'];
    render(<Character />, {
      store: mockSelectedCharacterAppStore(),
      routerProps: { initialEntries },
    });

    expect(await screen.findByText('A.B.E.')).toBeInTheDocument();
  });
});
