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

export type DisneyCharacterData = Character[] | [];

export interface CharactersResponse {
  data: Character[];
}

export interface CharacterState {
  characters: Character[] | [];
  selectedCharacter: Character | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}
