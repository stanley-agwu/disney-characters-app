import { coreConfig } from 'common/core/config';
import { DEFAULT_PAGE_SIZE } from 'common/utils/common';

export const getQueryParams = (query: string) => {
  const params = new URLSearchParams(query);
  const name = params.get('name');
  const page = params.get('page');
  const pageSize = params.get('pageSize');
  return { name, page, pageSize: pageSize ?? DEFAULT_PAGE_SIZE };
};

export const getAllCharactersPath = (
  name: string | undefined,
  pageNumber: string,
  pageSize: string
): string =>
  name
    ? coreConfig.routes.characters.name.format(name, pageNumber, pageSize)
    : coreConfig.routes.characters.page.format(pageNumber, pageSize);

export const displayZeroIndex = (pageNumber: number | null, count: number | null): number => {
  if (pageNumber === 0) {
    return pageNumber;
  }
  if (!pageNumber) {
    return 1;
  }
  return count === 0 ? 0 : pageNumber;
};

export const formatPageSize = (page: string | undefined) =>
  page ? String(page) : DEFAULT_PAGE_SIZE;

export const avatarFallback = (name: string) => {
  const match = name.match(/\b[A-Za-z0-9]+\b/g);
  if (match && match.length > 1) {
    const firstLetter = match[0][0];
    const secondLetter = match[1][0];
    return `${firstLetter}${secondLetter}`.toUpperCase();
  }
  if (match && match.length === 1) {
    return `${match[0][0]}`.toUpperCase();
  }
  return null;
};
