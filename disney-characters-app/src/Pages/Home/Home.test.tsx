import userEvent from '@testing-library/user-event';
import defaultAppStore, { errorAppStore, loadingAppStore } from '../../test/store';
import { fireEvent, render, screen } from '../../test/test-util';
import Home from './Home';
import { mockDispatch } from '../../test/utils/mockDispatch';

describe('Home', () => {
  it('renders Home', async () => {
    render(<Home />, { store: defaultAppStore() });

    const button = await screen.findByRole('button', { name: 'characters' });
    expect(button).toBeInTheDocument();
  });

  it('displays table', async () => {
    render(<Home />, { store: defaultAppStore() });

    const tableHeaderText = await screen.findByText('Date created');
    expect(tableHeaderText).toBeInTheDocument();
  });

  it('displays loading spinner', async () => {
    render(<Home />, { store: loadingAppStore() });

    const loaderLabel = await screen.findByLabelText('animation');
    expect(loaderLabel).toBeInTheDocument();
  });

  it('displays error toast', async () => {
    render(<Home />, { store: errorAppStore() });

    const errorToastMessage = await screen.findByText('An Error occured with a disney character');
    expect(errorToastMessage).toBeInTheDocument();
  });

  it.skip('on button click', async () => {
    const dispatch = mockDispatch;
    render(<Home />, { store: errorAppStore() });

    const button = await screen.findByRole('button', { name: 'characters' });
    userEvent.click(button);
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('input rendered and changes value', async () => {
    render(<Home />, { store: errorAppStore() });

    const input: HTMLInputElement = await screen.findByLabelText('search');
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'Mickey mouse' } });
    expect(input.value).toBe('Mickey mouse');
  });
});
