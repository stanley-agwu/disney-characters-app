export const allCharactersUrl = 'https://api.disneyapi.dev/character';

export const getCharacterUrlFromName = (name: string) => {
  const url = new URL(allCharactersUrl);
  const params = new URLSearchParams();
  params.append('name', name);
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
  return { name, page, pageSize };
};

type PageType = string | number | undefined;

export const getAllCharactersPath = (pageNumber: PageType, pageSize: PageType, name: PageType) =>
  name
    ? `/character?name=${name}&page=${pageNumber}&pageSize=${pageSize}`
    : `/character?page=${pageNumber}&pageSize=${pageSize}`;

export const displayZeroIndex = (pageNumber: PageType, count?: PageType): number => {
  if (Number(pageNumber) === 0) {
    return Number(pageNumber);
  }
  if (!pageNumber) {
    return 1;
  }
  return count === 0 ? 0 : Number(pageNumber);
};