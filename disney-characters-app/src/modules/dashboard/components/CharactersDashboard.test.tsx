import { scrollPaginationToViewMock } from 'setupTests';

import { getAllCharactersUrl } from 'mocks/handlers';
import { rest, server } from 'mocks/server';
import CharactersDashboard from 'modules/dashboard/components/CharactersDashboard';
import store, { loadingAppStore } from 'tests/store';
import { fireEvent, render, screen, userEvent, waitFor } from 'tests/test-utils';

describe('CharactersDashboard', () => {
  it('renders CharactersDashboard', async () => {
    render(<CharactersDashboard />);
    const button = await screen.findByRole('button', { name: 'Characters' });
    expect(button).toBeInTheDocument();
  });

  it('displays table after button click', async () => {
    render(<CharactersDashboard />);

    const button = await screen.findByRole('button', { name: 'Characters' });

    userEvent.click(button);
    expect(await screen.findByText('Date created')).toBeInTheDocument();
    expect(await screen.findByText("'Olu Mel")).toBeInTheDocument();
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
    await waitFor(() => expect(errorToastMessage).toBeInTheDocument(), { timeout: 3000 });
  });

  it('input rendered and changes value', async () => {
    render(<CharactersDashboard />);

    const input: HTMLInputElement = await screen.findByLabelText('search');
    await waitFor(() => fireEvent.change(input, { target: { value: 'Mickey' } }), {
      timeout: 3000,
    });

    expect(input.value).toBe('Mickey');
    expect((await screen.findAllByText('Mickey', { exact: false })).length).toBeGreaterThan(1);
  });

  it('renders no table when character does not exist for query', async () => {
    render(<CharactersDashboard />, {
      store: store({
        character: {
          characters: [],
        },
      }),
    });
    const tableHeader = screen.queryByText('Date created');

    await waitFor(() => expect(tableHeader).not.toBeInTheDocument(), { timeout: 3000 });
  });

  it('renders pagination', async () => {
    render(<CharactersDashboard />, {
      store: store(),
    });

    const pageSizeSelect = await screen.findByRole('combobox');
    const firstPageButton = await screen.findByRole('button', { name: '<<' });
    const lastPageButton = await screen.findByRole('button', { name: '>>' });
    expect(pageSizeSelect).toBeInTheDocument();
    expect(firstPageButton).toBeDisabled();
    expect(lastPageButton).not.toBeDisabled();

    await waitFor(() => userEvent.click(lastPageButton), { timeout: 3000 });

    expect(lastPageButton).toBeEnabled();
  });

  it('scrolls pagination to view during paginating', async () => {
    render(<CharactersDashboard />, {
      store: store(),
    });

    const nextButton = await screen.findByRole('button', { name: '>' });
    await waitFor(() => userEvent.click(nextButton), { timeout: 3000 });

    expect(nextButton).toHaveFocus();
    expect(scrollPaginationToViewMock).toHaveBeenCalledTimes(1);
  });
});
