import { useEffect } from 'react';

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
  const queryParams: QueryParams = getQueryParams(search);
  const hasPageParams = Boolean(queryParams?.page && queryParams.pageSize);
  const hasNameParam = Boolean(queryParams?.name);

  useEffect(() => {
    if (search && hasNameParam) {
      const { name, page, pageSize } = queryParams as NonNullQueryParams;
      dispatch(
        getCharacters({
          url: coreConfig.endpoints.characters.name.format(name, page, pageSize),
          filters: { pageNumber: page, pageSize, name },
        })
      );
    }
    if (search && hasPageParams && !hasNameParam) {
      const { page, pageSize } = queryParams as Omit<NonNullQueryParams, 'name'>;
      dispatch(
        getCharacters({
          url: coreConfig.endpoints.characters.page.format(page, pageSize),
          filters: { pageNumber: page, pageSize },
        })
      );
    }
  }, [search, hasNameParam, hasPageParams]);
};

export default useCharactersDispatch;
