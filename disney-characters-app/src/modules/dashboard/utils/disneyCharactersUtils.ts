import { coreConfig } from 'common/core/config';

export const getCharacterUrlFromName = (name: string) => {
  const url = new URL(coreConfig.endpoints.root);
  const params = new URLSearchParams();
  name && params.append('name', name);
  params.append('page', '1');
  params.append('page', '50');
  url.search = params.toString();
  return url.search;
};

export const getQueryParams = (query: string) => {
  const params = new URLSearchParams(query);
  const name = params.get('name');
  const page = params.get('page');
  const pageSize = params.get('pageSize');
  return { name, page, pageSize: pageSize || '50' };
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

export const formatPageSize = (page: string | undefined) => (page ? String(page) : '50');

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
