export const getDisneyCharacter = async (url: string) => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error('An error occurred while fetching disney character');
};
