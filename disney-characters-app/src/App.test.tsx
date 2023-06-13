import App from './App';
import defaultAppStore from './test/store';
import { render, screen } from './test/test-util';

test.skip('App', async () => {
  render(<App />, { store: defaultAppStore() });
  const input = await screen.findByLabelText('Search characters');
  screen.debug();
  expect(input).toBeInTheDocument();
});
