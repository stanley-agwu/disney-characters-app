import { render, screen } from '@testing-library/react';
import App from './App';
import defaultAppStore from './test/store';

test.skip('App', () => {
  // render(<App />, { store: defaultAppStore() });
  render(<App />);
  const input = screen.findByLabelText('Search characters');
  screen.debug();
  expect(input).toBeInTheDocument();
});
