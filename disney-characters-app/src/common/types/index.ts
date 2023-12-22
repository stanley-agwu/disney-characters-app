import { MutableRefObject } from 'react';

import { ButtonSize } from 'common/components/Button/enums';

export interface Character {
  _id: string;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
  allies: string[];
  enemies: string[];
  sourceUrl: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  __v: number;
}

export interface CharacterState {
  characters: Character[] | [];
  selectedCharacter: Character | null;
  filters: FilterOptions;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}

export interface FilterOptions {
  count?: number;
  previousPage?: string | null;
  nextPage?: string | null;
  totalPages?: number;
  pageNumber?: string;
  pageSize?: string;
  name?: string;
  isPaginationQuery?: boolean;
}

export interface RequestOptions {
  url: string;
  filters: FilterOptions;
}

export interface QueryParams {
  name?: string;
  page?: string;
  pageSize?: string;
}

export interface PaginationProps {
  isFirstPage: boolean;
  isLastPage: boolean;
  totalPages: number;
  selectedPage: number;
  marginPagesDisplayed: number;
  pageChangeHandler: ({ selected }: { selected: number }) => void;
  ref: MutableRefObject<HTMLDivElement | any | null>;
  buttonSize?: ButtonSize;
  buttonClassName?: string;
}
