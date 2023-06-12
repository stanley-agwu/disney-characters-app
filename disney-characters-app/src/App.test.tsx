import { render, screen } from '@testing-library/react';
import App from './App';
import defaultAppState from './test/store';

test('App', () => {
  // render(<App />, { store: defaultAppState});
  render(<App />);
  const input = screen.findByLabelText('Search characters');
  screen.debug();
  expect(input).toBeInTheDocument();
});
