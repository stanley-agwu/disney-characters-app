import App from './App';
import defaultAppStore from './test/store';
import { render, screen } from './test/test-util';

test('App', async () => {
  render(<App />, { store: defaultAppStore() });
  const input = await screen.findByText('Search characters');

  expect(input).toBeInTheDocument();
});
