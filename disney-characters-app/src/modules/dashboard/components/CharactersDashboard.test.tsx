import { getAllCharactersUrl } from 'mocks/handlers';
import { rest, server } from 'mocks/server';
import CharactersDashboard from 'modules/dashboard/components/CharactersDashboard';
import defaultAppStore, { loadingAppStore } from 'tests/store';
import { fireEvent, render, screen, userEvent, waitFor } from 'tests/test-utils';

describe('CharactersDashboard', () => {
  it('renders CharactersDashboard', async () => {
    render(<CharactersDashboard />);
    const button = await screen.findByRole('button', { name: 'Characters' });
    expect(button).toBeInTheDocument();
  });

  it('displays table after button click', async () => {
    render(<CharactersDashboard />, { store: defaultAppStore() });

    const button = await screen.findByRole('button', { name: 'Characters' });

    userEvent.click(button);
    expect(await screen.findByText('Date created')).toBeInTheDocument();
  });

  it('displays loading spinner', async () => {
    render(<CharactersDashboard />, {
      store: loadingAppStore(),
    });

    const button = await screen.findByRole('button', { name: 'Characters' });
    const tableHeaderText = screen.queryByText('Date created');
    expect(tableHeaderText).not.toBeInTheDocument();

    userEvent.click(button);

    const loaderLabel = await screen.findByLabelText('animation');
    expect(loaderLabel).toBeInTheDocument();
  });

  it('displays error toast', async () => {
    server.use(rest.get(getAllCharactersUrl, (_, res, ctx) => res(ctx.status(500))));
    render(<CharactersDashboard />);

    const button = await screen.findByRole('button', { name: 'Characters' });
    userEvent.click(button);

    const errorToastMessage = await screen.findByText(
      'An error occurred while fetching disney character'
    );
    expect(errorToastMessage).toBeInTheDocument();
  });

  it('input rendered and changes value', async () => {
    render(<CharactersDashboard />);

    const input: HTMLInputElement = await screen.findByLabelText('search');
    fireEvent.change(input, { target: { value: 'Mickey mouse' } });
    expect(input.value).toBe('Mickey mouse');
  });

  it('renders no table when character does not exist for query', async () => {
    render(<CharactersDashboard />, {
      preloadedState: {
        character: {
          characters: [],
          selectedCharacter: null,
          isLoading: false,
          isSuccess: true,
          isError: false,
          errorMessage: '',
          filters: {
            count: 0,
          },
        },
      },
    });
    const tableHeader = screen.queryByText('Date created');

    await waitFor(() => expect(tableHeader).not.toBeInTheDocument(), { timeout: 3000 });
  });
});
