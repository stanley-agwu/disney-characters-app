import { useEffect, useState } from 'react';
import { DisneyCharacterData } from '../types';

const useDisneyCharactersData = (
  asyncFunc: (url: string) => Promise<any>,
  url?: string,
  dependency?: string
) => {
  const [disneyCharacterData, setDisneyCharacterData] = useState<DisneyCharacterData>();
  const [errorState, setErrorState] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (url) {
      (async () => {
        try {
          setIsLoading(true);
          const response = await asyncFunc(url);
          if (response) {
            setDisneyCharacterData(response);
          }
        } catch (error) {
          setErrorState(error as string);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [dependency]);

  return { disneyCharacterData, errorState, isLoading };
};

export default useDisneyCharactersData;
