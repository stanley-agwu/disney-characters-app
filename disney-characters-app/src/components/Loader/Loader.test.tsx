import { render, screen } from 'test/test-util';

import Loader from './Loader';

describe('Loader', () => {
  it('renders Loader', async () => {
    render(<Loader />);

    expect(await screen.findByLabelText('animation')).toBeInTheDocument();
  });
});
