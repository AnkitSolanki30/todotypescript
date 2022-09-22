import { Action, AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { State } from "history";


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: <AppDispatch extends ThunkDispatch<State, unknown,  Action> = ThunkDispatch<State, unknown,  Action>>() => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector