import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';

import type { RootState } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const useAppDispatch = (...args: unknown[]) => useDispatch<AppDispatch>(...args);
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
