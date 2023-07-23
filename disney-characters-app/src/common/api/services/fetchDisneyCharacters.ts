export const getAllDisneyCharacters = async (url: string) => {
  const response = await fetch(url);
  if (response) {
    return response.json();
  }
  throw new Error('An error occurred while fetching disney characters');
};
