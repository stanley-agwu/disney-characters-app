import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { useAppDispatch } from 'common/api/store/hooks';
import { getCharacters } from 'common/api/store/slices/characterSlice';
import { coreConfig } from 'common/core/config';
import { getQueryParams } from 'modules/dashboard/utils/disneyCharactersUtils';

interface QueryParams {
  name: string | null;
  page: string | null;
  pageSize: string | null;
}

interface NonNullQueryParams {
  name: string;
  page: string;
  pageSize: string;
}

const useCharactersDispatch = (search: string) => {
  const dispatch = useAppDispatch();
  const { state } = useLocation();
  const queryParams: QueryParams = getQueryParams(search);
  const { name, page, pageSize } = queryParams;
  const hasPageParams = Boolean(page && pageSize);
  const hasNameParam = Boolean(name);

  useEffect(() => {
    if (search && hasNameParam) {
      const { name, page, pageSize } = queryParams as NonNullQueryParams;
      const isPaginationQuery = state?.isPaginationQuery;
      dispatch(
        getCharacters({
          url: coreConfig.endpoints.characters.name.format(name, page, pageSize),
          filters: { pageNumber: page, pageSize, name, isPaginationQuery },
        })
      );
    }
    if (search && hasPageParams && !hasNameParam) {
      const { page, pageSize } = queryParams as Omit<NonNullQueryParams, 'name'>;
      const isPaginationQuery = state?.isPaginationQuery;
      dispatch(
        getCharacters({
          url: coreConfig.endpoints.characters.page.format(page, pageSize),
          filters: { pageNumber: page, pageSize, isPaginationQuery },
        })
      );
    }
  }, [search, hasNameParam, hasPageParams]);
};

export default useCharactersDispatch;
