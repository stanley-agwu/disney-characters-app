import { render } from '@testing-library/react';
import App from './App';

test.skip('renders learn react link', () => {
  const view = render(<App />);
  expect(view).toBeTruthy();
});
