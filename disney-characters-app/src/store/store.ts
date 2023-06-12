import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import getCharacters from './slices/characterSlice';
import getCharacter from './slices/characterSlice';

export const store = configureStore({
  reducer: {
    characters: getCharacters,
    character: getCharacter,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
