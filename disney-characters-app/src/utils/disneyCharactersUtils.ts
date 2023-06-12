export const allCharactersUrl = 'https://api.disneyapi.dev/character';

export const getCharacterUrlFromName = (name: string) => {
  const url = new URL(allCharactersUrl);
  const params = new URLSearchParams();
  params.append('name', name);
  url.search = params.toString();
  return url.search;
};
