import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

export const useQueryObject = <T>() => Object.fromEntries(useQuery()) as T;

export const getSearchAsObject = (search: string) =>
  Object.fromEntries(new URLSearchParams(search));
