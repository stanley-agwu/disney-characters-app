import { forwardRef, MutableRefObject } from 'react';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames';

import { Button } from 'common/components/Button/Button';
import { ButtonSize } from 'common/components/Button/enums';
import { PaginationProps } from 'common/types';

import Chevron from './assets/chevron.svg';

import styles from './Pagination.module.scss';

const Pagination = forwardRef<MutableRefObject<HTMLDivElement | null>, PaginationProps>(
  (
    {
      isFirstPage,
      isLastPage,
      totalPages,
      marginPagesDisplayed,
      selectedPage,
      pageChangeHandler,
      buttonSize,
      buttonClassName,
    }: PaginationProps,
    ref
  ) => (
    <div
      ref={ref as MutableRefObject<HTMLDivElement | null>}
      className={styles.paginationContainer}
    >
      <div className={styles.paginationContent}>
        <ReactPaginate
          previousLabel={
            <Button
              disabled={isFirstPage}
              size={buttonSize || ButtonSize.small}
              className={classNames(buttonClassName, styles.buttonClass)}
            >
              <img src={Chevron} aria-label="Previous" alt="Previous" />
            </Button>
          }
          nextLabel={
            <Button
              disabled={isLastPage}
              size={buttonSize || ButtonSize.small}
              className={classNames(buttonClassName, styles.buttonClass)}
            >
              <img src={Chevron} className={styles.rotateChevron} aria-label="Next" alt="Next" />
            </Button>
          }
          onPageChange={pageChangeHandler}
          breakLabel="..."
          pageCount={totalPages}
          forcePage={selectedPage}
          containerClassName={styles.pagination}
          activeLinkClassName={styles.activeLinkClass}
          pageLinkClassName={styles.paginationLinkClass}
          breakClassName={styles.breakClass}
          disabledClassName={styles.disabledClass}
          marginPagesDisplayed={marginPagesDisplayed}
          pageRangeDisplayed={marginPagesDisplayed}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  )
);

Pagination.displayName = 'Pagination';

export default Pagination;
