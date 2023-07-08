import { render, screen } from 'test/test-util';

import Input from './Input';

describe('Input', () => {
  it('renders input label', async () => {
    render(<Input label="search character" name="search" />);

    expect(await screen.findByText('search character')).toBeInTheDocument();
  });

  it('renders input error', async () => {
    render(<Input label="search character" name="search" error="Invalid character" />);

    expect(await screen.findByText('Invalid character')).toBeInTheDocument();
  });

  it('renders input success', async () => {
    render(<Input label="search character" name="search" success="Valid character" />);

    expect(await screen.findByText('Valid character')).toBeInTheDocument();
  });

  it('renders input warning', async () => {
    render(<Input label="search character" name="search" warning="enter right character" />);

    expect(await screen.findByText('enter right character')).toBeInTheDocument();
  });
});
