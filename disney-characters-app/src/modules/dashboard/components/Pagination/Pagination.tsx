import { FC, RefObject } from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

import { FilterOptions } from 'common/types';
import { INITIAL_PAGE } from 'common/utils/common';
import useScreenSize from 'modules/dashboard/hooks/useScreenSize';
import {
  displayZeroIndex,
  formatPageSize,
  getAllCharactersPath,
} from 'modules/dashboard/utils/disneyCharactersUtils';

import PaginationButton from './PaginationButton';

import styles from './Pagination.module.scss';

interface PaginationProps {
  options: FilterOptions;
  paginationRef: RefObject<HTMLDivElement> | null;
}

interface Options {
  totalPages: number;
  pageNumber: string;
  pageSize: string;
  name?: string;
}

const Pagination: FC<PaginationProps> = ({ options, paginationRef }): JSX.Element => {
  const navigate = useNavigate();
  const { paginationMarginButton } = useScreenSize();

  const { totalPages, pageNumber, pageSize, name } = options as Options;
  const isFirstPage = Boolean(Number(pageNumber) === 1);
  const isLastPage = Boolean(Number(pageNumber) === totalPages);

  const firstPageChangeHandler = () => {
    navigate(getAllCharactersPath(name, INITIAL_PAGE, formatPageSize(pageSize)), {
      state: { isPaginationQuery: true },
    });
  };
  const lastPageChangeHandler = () => {
    navigate(getAllCharactersPath(name, String(totalPages), formatPageSize(pageSize)), {
      state: { isPaginationQuery: true },
    });
  };
  const pageChangeHandler = ({ selected }: { selected: number }) => {
    if (selected < 0 || selected > totalPages + 1) {
      return;
    }
    navigate(getAllCharactersPath(name, String(selected + 1), formatPageSize(pageSize)), {
      state: { isPaginationQuery: true },
    });
  };
  const selectPageSizeHandler = ({ value }: { value: string }) => {
    navigate(getAllCharactersPath(name, INITIAL_PAGE, value), {
      state: { isPaginationQuery: true },
    });
  };

  return (
    <div ref={paginationRef} className={styles.paginationContainer}>
      <div className={styles.paginationRangeContainer}>
        <div className={styles.paginationRange}>
          <span className={styles.paginationNumber}>
            Page
            <span className={styles.paginationSpan}>
              {displayZeroIndex(Number(pageNumber), totalPages)}
            </span>
            of <span className={styles.paginationSpan}>{displayZeroIndex(totalPages, null)}</span>
          </span>
        </div>
        <select value={pageSize} onChange={({ target }) => selectPageSizeHandler(target)}>
          {[5, 10, 20, 30, 40, 50].map((sizeNumber) => (
            <option key={sizeNumber} value={sizeNumber}>
              Show {sizeNumber}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.paginationContent}>
        <div className={styles.paginationWrapper}>
          <PaginationButton
            onClick={firstPageChangeHandler}
            isDisabled={isFirstPage}
            aria-disabled={isFirstPage}
          >
            {'<<'}
          </PaginationButton>
          <ReactPaginate
            previousLabel={<PaginationButton isDisabled={isFirstPage}>{'<'}</PaginationButton>}
            nextLabel={<PaginationButton isDisabled={isLastPage}>{'>'}</PaginationButton>}
            onPageChange={(e) => pageChangeHandler(e)}
            breakLabel="..."
            pageCount={displayZeroIndex(totalPages, null)}
            forcePage={Number(pageNumber) - 1 || 0}
            containerClassName={styles.pagination}
            activeLinkClassName={styles.activeLinkClass}
            pageLinkClassName={styles.paginationLinkClass}
            breakClassName={styles.breakClass}
            disabledClassName={styles.disabledClass}
            marginPagesDisplayed={paginationMarginButton}
            pageRangeDisplayed={paginationMarginButton}
            renderOnZeroPageCount={null}
          />
          <PaginationButton onClick={lastPageChangeHandler} isDisabled={isLastPage}>
            {'>>'}
          </PaginationButton>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
