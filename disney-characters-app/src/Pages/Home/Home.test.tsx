import userEvent from '@testing-library/user-event';

import { getAllCharactersUrl } from 'mocks/handlers';
import { rest, server } from 'mocks/server';
import defaultAppStore, { characterSearchAppStore, noCharacterAppStore } from 'test/store';
import { fireEvent, render, screen } from 'test/test-util';
import Home from './Home';

describe('Home', () => {
  it('renders Home', async () => {
    render(<Home />);

    const button = await screen.findByRole('button', { name: 'characters' });
    expect(button).toBeInTheDocument();
  });

  it('displays table after button click', async () => {
    render(<Home />, { store: defaultAppStore() });

    const button = await screen.findByRole('button', { name: 'characters' });

    userEvent.click(button);
    expect(await screen.findByText('Date created')).toBeInTheDocument();
  });

  it('displays loading spinner', async () => {
    render(<Home />);

    const button = await screen.findByRole('button', { name: 'characters' });
    const tableHeaderText = screen.queryByText('Date created');
    expect(tableHeaderText).not.toBeInTheDocument();

    userEvent.click(button);

    const loaderLabel = await screen.findByLabelText('animation');
    expect(loaderLabel).toBeInTheDocument();
  });

  it('displays error toast', async () => {
    server.use(rest.get(getAllCharactersUrl, (_, res, ctx) => res(ctx.status(500))));
    render(<Home />);

    const button = await screen.findByRole('button', { name: 'characters' });
    userEvent.click(button);

    const errorToastMessage = await screen.findByText(
      'An error occurred while fetching disney character'
    );
    expect(errorToastMessage).toBeInTheDocument();
  });

  it('input rendered and changes value', async () => {
    render(<Home />);

    const input: HTMLInputElement = await screen.findByLabelText('search');

    fireEvent.change(input, { target: { value: 'Mickey mouse' } });
    expect(input.value).toBe('Mickey mouse');
  });

  it('renders no table when character does not exist for query', async () => {
    render(<Home />, { store: noCharacterAppStore() });

    const tableHeader = screen.queryByText('Date created');

    expect(tableHeader).not.toBeInTheDocument();
  });

  // Not Exact coverage, needs to be updated
  it('displays character search', async () => {
    render(<Home />, { store: characterSearchAppStore() });

    const tableCell = screen.queryAllByText('Jim ', { exact: false });

    expect(tableCell.length).toBeGreaterThan(1);
  });
});
