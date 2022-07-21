import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { Epic } from 'redux-observable';
import { Action } from 'redux';
import store from '../appConfig/store';
import services from '../services';
type Services = typeof services;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<IRedux> = useSelector;
export type AppEpic<AppAction extends Action> = Epic<AppAction, any, IRedux, Services>;
