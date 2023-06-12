import moment from 'moment';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Character, CharacterState } from '../../types';
import { getAllDisneyCharacters, getDisneyCharacter } from '../../services/fetchDisneyCharacters';

const initialState: CharacterState = {
  characters: [],
  selectedCharacter: undefined,
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

const ErrorMessage = 'An error occurred while fetching disney character';

export const getCharacters = createAsyncThunk(
  'characters/getAll',
  async (url: string, thunkAPI) => {
    try {
      const characters = await getAllDisneyCharacters(url);
      return characters.data as Character[];
    } catch (error) {
      return thunkAPI.rejectWithValue(ErrorMessage);
    }
  }
);

export const getCharacter = createAsyncThunk('character/getOne', async (url: string, thunkAPI) => {
  try {
    const character: Character = await getDisneyCharacter(url);
    return character;
  } catch (error) {
    return thunkAPI.rejectWithValue(ErrorMessage);
  }
});

export const characterSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'character',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCharacters.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = '';
        const characters: Character[] = payload.map((character) => ({
          ...character,
          createdAt: character.createdAt
            ? moment.utc(character.createdAt).format('DD/MM/YYYY HH:mm:ss')
            : character.createdAt,
          updatedAt: character.updatedAt
            ? moment.utc(character.updatedAt).format('DD/MM/YYYY HH:mm:ss')
            : character.updatedAt,
        }));
        state.characters = characters;
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
        // isLoading: false;
        // isSuccess: true;
        state.errorMessage = '';
        console.log({ payload });
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
