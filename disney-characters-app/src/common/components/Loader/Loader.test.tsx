import { render, screen } from 'tests/test-utils';

import Loader from './Loader';

describe('Loader', () => {
  it('renders Loader', async () => {
    render(<Loader />);

    expect(await screen.findByLabelText('animation')).toBeInTheDocument();
  });
});
