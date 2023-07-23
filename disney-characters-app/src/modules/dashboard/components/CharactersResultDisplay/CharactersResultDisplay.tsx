import { RefObject } from 'react';

import PageLoader from 'common/components/Loader/PageLoader';
import { Character, FilterOptions } from 'common/types';
import Table from 'modules/dashboard/components/Table/Table';

interface CharactersResultDisplayProps {
  characters: Character[];
  paginationRef: RefObject<HTMLDivElement>;
  isLoading: boolean;
  isSuccess: boolean;
  filters: FilterOptions;
}

const CharactersResultDisplay = ({
  isLoading,
  isSuccess,
  filters,
  characters,
  paginationRef,
}: CharactersResultDisplayProps) => {
  if (isLoading) {
    return <PageLoader width={200} height={200} />;
  }
  if (isSuccess && Boolean(filters?.count)) {
    return <Table characters={characters} filters={filters} paginationRef={paginationRef} />;
  }
  return null;
};

export default CharactersResultDisplay;
