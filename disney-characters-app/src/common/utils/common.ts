export const INITIAL_PAGE = '1';
export const DEFAULT_PAGE_SIZE = '30';

export const paramPathString = (query: string[][]) => {
  const paramStr = new URLSearchParams(query as string | string[][]).toString();
  return paramStr ? `?${paramStr}` : '';
};

export const transformObjectToStringArray = (object: any): string[][] =>
  Object?.keys(object).reduce(
    (acc, key) => [
      ...acc,
      ...(Array.isArray(object[key])
        ? object[key].filter(Boolean).map((value: string) => [key, value])
        : [[key, object[key]]]),
    ],
    [] as string[][]
  );
