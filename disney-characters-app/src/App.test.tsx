import App from './App';
import defaultAppStore, { characterSearchAppStore } from './tests/store';
import { fireEvent, render, screen, userEvent, waitFor } from './tests/test-utils';

describe('App', () => {
  it('renders App', async () => {
    render(<App />, { store: defaultAppStore() });
    const input = await screen.findByText('Search characters');

    expect(input).toBeInTheDocument();
  });

  it('renders table', async () => {
    render(<App />, { store: defaultAppStore() });
    const tableHeader = await screen.findByText('Date created');

    expect(tableHeader).toBeInTheDocument();
  });

  it('displays characters and navigates to character page', async () => {
    render(<App />, { store: defaultAppStore() });

    const button = await screen.findByRole('button', { name: 'characters' });
    const homeLink = await screen.findByRole('button', { name: 'Home' });
    const characterLink = await screen.findByText('Disney characters');
    const mobilecharacterLink = await screen.findByText('disney characters');
    userEvent.click(homeLink);

    expect(await screen.findByText('Search characters')).toBeInTheDocument();
    await waitFor(() => userEvent.click(button));

    const characterRow = await screen.findByText("90's Adventure Bear");

    userEvent.click(characterRow);

    const bearPage = await screen.findByRole('img');
    expect(bearPage).toBeInTheDocument();

    await waitFor(() => userEvent.click(characterLink));
    await waitFor(() => expect(bearPage).not.toBeInTheDocument());
    await waitFor(() => userEvent.click(mobilecharacterLink));

    expect(await screen.findByText('Search characters')).toBeInTheDocument();
  });

  it('displays character search', async () => {
    render(<App />, { store: characterSearchAppStore() });

    const input: HTMLInputElement = await screen.findByLabelText('search');
    await waitFor(() => fireEvent.change(input, { target: { value: 'Jim' } }));
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 3000));

    expect(input.value).toEqual('Jim');
    expect((await screen.findAllByText('Jim', { exact: false })).length).toBeGreaterThan(1);
  }, 10000);

  it('displays table after button click', async () => {
    render(<App />, { store: defaultAppStore() });

    const button = await screen.findByRole('button', { name: 'characters' });
    userEvent.click(button);
    expect(await screen.findByText('Date created')).toBeInTheDocument();
    expect(await screen.findByText("90's Adventure Bear")).toBeInTheDocument();
  });
});
