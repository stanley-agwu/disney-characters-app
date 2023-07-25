import { render, screen } from 'tests/test-utils';

import Pagination from './Pagination';

describe('Pagination', () => {
  const defaultProps = {
    options: {
      count: 20,
      previousPage: '1',
      nextPage: '3',
      totalPages: 20,
      pageNumber: '2',
      pageSize: '50',
    },
    paginationRef: null,
  };
  it('renders Pagination', async () => {
    render(<Pagination {...defaultProps} />);

    expect(await screen.findByRole('button', { name: '>' })).toBeInTheDocument();
  });
});
