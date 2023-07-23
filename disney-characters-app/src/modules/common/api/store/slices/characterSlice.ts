import moment from 'moment';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Character, CharacterState, RequestOptions } from 'types';
import { getAllDisneyCharacters, getDisneyCharacter } from 'services/fetchDisneyCharacters';
import {
  formatDateForArrayPayLoad,
  formatDateForObjectPayLoad,
  isNonEmptyArray,
  isNonEmptyObject,
} from 'store/common';

const initialState: CharacterState = {
  characters: [],
  selectedCharacter: null,
  filters: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

const ErrorMessage = 'An error occurred while fetching disney character';

export const getCharacters = createAsyncThunk(
  'characters/getAll',
  async (requestConfig: RequestOptions, thunkAPI) => {
    const { url, filters } = requestConfig;
    try {
      const characters = await getAllDisneyCharacters(url);
      return { characters: characters.data as Character[], dataInfo: characters.info, filters };
    } catch (error) {
      return thunkAPI.rejectWithValue(ErrorMessage);
    }
  }
);

export const getCharacter = createAsyncThunk('character/getOne', async (url: string, thunkAPI) => {
  try {
    const character = await getDisneyCharacter(url);
    return character.data as Character;
  } catch (error) {
    return thunkAPI.rejectWithValue(ErrorMessage);
  }
});

export const characterModuleName = 'character';

export const characterSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: characterModuleName,
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCharacters.fulfilled, (state, { payload: { characters, dataInfo, filters } }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = '';
        // eslint-disable-next-line no-nested-ternary
        const formattedCharacters: Character[] = isNonEmptyArray(characters)
          ? formatDateForArrayPayLoad(characters)
          : isNonEmptyObject(characters)
          ? formatDateForObjectPayLoad(characters as unknown as Character)
          : [];
        state.characters = formattedCharacters;
        state.filters = { ...filters, ...dataInfo };
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload as string;
      })
      .addCase(getCharacter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCharacter.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = '';
        const character: Character = {
          ...payload,
          createdAt: payload?.createdAt
            ? moment.utc(payload.createdAt).format('DD/MM/YYYY HH:mm:ss')
            : payload?.createdAt,
          updatedAt: payload?.updatedAt
            ? moment.utc(payload.updatedAt).format('DD/MM/YYYY HH:mm:ss')
            : payload?.updatedAt,
        };
        state.selectedCharacter = character;
      })
      .addCase(getCharacter.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload as string;
      });
  },
  /* eslint-enable no-param-reassign */
});

export const { reset } = characterSlice.actions;
export default characterSlice.reducer;

export const getCharactersState = (state: CharacterState) => state.characters;
export const getCharacterState = (state: CharacterState) => state.selectedCharacter;
