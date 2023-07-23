import { useEffect } from 'react';

import { useAppDispatch } from 'common/api/store/hooks';
import { getCharacters } from 'common/api/store/slices/characterSlice';
import { coreConfig } from 'common/core/config';

import { getQueryParams } from '../utils/disneyCharactersUtils';

const useCharactersDispatch = (search: string) => {
  const dispatch = useAppDispatch();
  const queryParams = getQueryParams(search);
  const hasPageParams = Boolean(queryParams?.page && queryParams.pageSize);
  const hasNameParam = Boolean(queryParams?.name);

  useEffect(() => {
    if (search && hasNameParam) {
      const { page, pageSize, name } = queryParams;
      dispatch(
        getCharacters({
          url: `${coreConfig.endpoints.url}?name=${name}&page=${page || 1}&pageSize=${
            pageSize || 50
          }`,
          filters: { pageNumber: page || 1, pageSize: pageSize || 50, name: name as string },
        })
      );
    }
    if (search && hasPageParams && !hasNameParam) {
      const { page, pageSize } = queryParams as { page: string; pageSize: string };
      dispatch(
        getCharacters({
          url: `${coreConfig.endpoints.url}?page=${page}&pageSize=${pageSize}`,
          filters: { pageNumber: page, pageSize },
        })
      );
    }
  }, [search, hasNameParam, hasPageParams]);
};

export default useCharactersDispatch;
