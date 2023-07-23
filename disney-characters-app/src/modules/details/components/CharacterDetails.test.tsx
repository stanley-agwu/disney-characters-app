import CharacterDetails from 'modules/details/components/CharacterDetails';
import defaultAppStore, {
  errorAppStore,
  loadingAppStore,
  mockSelectedCharacterAppStore,
} from 'tests/store';
import { render, screen } from 'tests/test-utils';

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

  it('displays error from redux store', async () => {
    render(<CharacterDetails />, { store: errorAppStore() });

    const errorToastMessage = await screen.findByText('An Error occured with a disney character');
    expect(errorToastMessage).toBeInTheDocument();
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
