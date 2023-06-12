import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import characterSliceReducer, { characterModuleName } from './slices/characterSlice';
import getCharacter from './slices/characterSlice';

const rootReducer = combineReducers({
  [characterModuleName]: characterSliceReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(),
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
