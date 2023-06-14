import { FC, RefObject } from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

import PaginationButton from './PaginationButton';
import styles from './Pagination.module.scss';
import { FilterOptions } from '../../types';
import { displayZeroIndex, getAllCharactersPath } from '../../utils/disneyCharactersUtils';
import useScreenSize from '../../hooks/useScreenSize';

interface PaginationProps {
  options: FilterOptions;
  paginationRef: RefObject<HTMLDivElement>;
}

const Pagination: FC<PaginationProps> = ({ options, paginationRef }): JSX.Element => {
  const navigate = useNavigate();
  const { paginationMarginButton } = useScreenSize();

  const { totalPages, pageNumber, pageSize, name } = options;
  const isFirstPage = Boolean(Number(pageNumber) === 1);
  const isLastPage = Boolean(Number(pageNumber) === totalPages);

  const firstPageChangeHandler = () => {
    navigate(getAllCharactersPath(1, pageSize, name));
  };
  const lastPageChangeHandler = () => {
    navigate(getAllCharactersPath(totalPages, pageSize, name));
  };
  const pageChangeHandler = ({ selected }: { selected: number }) => {
    if (selected < 0 || selected > Number(totalPages) + 1) {
      return;
    }
    navigate(getAllCharactersPath(selected + 1, pageSize, name));
  };
  const selectPageSizeHandler = ({ value }: { value: string }) => {
    navigate(getAllCharactersPath(1, value, name));
  };

  return (
    <div ref={paginationRef} className={styles.paginationContainer}>
      <div className={styles.paginationRangeContainer}>
        <div className={styles.paginationRange}>
          <span className={styles.paginationNumber}>
            Page
            <span className={styles.paginationSpan}>
              {displayZeroIndex(pageNumber, totalPages)}
            </span>
            of <span className={styles.paginationSpan}>{displayZeroIndex(totalPages)}</span>
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
            pageCount={displayZeroIndex(totalPages)}
            forcePage={Number(pageNumber as number) - 1 || 0}
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
