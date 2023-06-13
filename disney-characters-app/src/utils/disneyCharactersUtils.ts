export const allCharactersUrl = 'https://api.disneyapi.dev/character';

export const getCharacterUrlFromName = (name: string) => {
  const url = new URL(allCharactersUrl);
  const params = new URLSearchParams();
  params.append('name', name);
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

export const getAllCharactersPath = (pageNumber: any, pageSize: any) =>
  `/character?page=${pageNumber}&pageSize=${pageSize}`;
