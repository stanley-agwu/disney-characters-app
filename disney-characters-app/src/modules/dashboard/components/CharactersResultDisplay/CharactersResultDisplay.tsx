import { MutableRefObject, RefObject } from 'react';
import { useNavigate } from 'react-router';

import GenericNotFound from 'common/components/GenericNotFound/GenericNotFound';
import PageLoader from 'common/components/Loader/PageLoader';
import { Character, FilterOptions } from 'common/types';
import Table from 'modules/dashboard/components/Table/Table';
import useScreenSize from 'modules/dashboard/hooks/useScreenSize';
import { getAllCharactersPath } from 'modules/dashboard/utils/disneyCharactersUtils';

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
  const navigate = useNavigate();
  const { marginPagesDisplayed, selectedPage, setSelectedPage } = useScreenSize(
    filters?.pageNumber
  );

  const { totalPages, previousPage, nextPage, name } = filters;
  const isFirstPage = !previousPage;
  const isLastPage = !nextPage;

  const pageChangeHandler = ({ selected }: { selected: number }) => {
    setSelectedPage(selected);
    navigate(getAllCharactersPath(name, String(selected + 1)), {
      state: { isPaginationQuery: true },
    });
  };

  const paginationProps = {
    isFirstPage,
    isLastPage,
    totalPages: totalPages as number,
    selectedPage,
    marginPagesDisplayed,
    pageChangeHandler,
    ref: paginationRef as MutableRefObject<HTMLDivElement | null>,
  };

  if (isLoading) {
    return <PageLoader width={120} height={120} />;
  }
  if (isSuccess && Boolean(filters?.count)) {
    return <Table characters={characters} paginationProps={paginationProps} />;
  }
  if (isSuccess && filters?.pageNumber && !filters?.count) {
    return <GenericNotFound />;
  }
  return null;
};

export default CharactersResultDisplay;
