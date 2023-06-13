import { useEffect, useState } from 'react';

import { CharactersResponse, DisneyCharacterData } from '../types';

const useDisneyCharactersData = (
  asyncFunc: (url: string) => Promise<any>,
  url?: string,
  dependency?: string
) => {
  const [disneyCharacterData, setDisneyCharacterData] = useState<DisneyCharacterData>([]);
  const [errorState, setErrorState] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (url) {
      (async () => {
        try {
          setIsLoading(true);
          const response: CharactersResponse = await asyncFunc(url);
          setDisneyCharacterData(response.data);
        } catch (error) {
          setErrorState('An error occurred while trying to fetch disney character(s)');
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [dependency]);

  return { disneyCharacterData, errorState, isLoading };
};

export default useDisneyCharactersData;
