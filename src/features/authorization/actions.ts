import { createAction } from '@reduxjs/toolkit';

export const login = createAction<{ user: string; password: string }>('login/LOGIN');
export const logout = createAction('login/LOGOUT');
export const isLoading = createAction<boolean>('login/IS_LOADING');
export const setIsLogged = createAction<{ isLogged: boolean }>('login/SET_IS_LOGGED');

// fixme example to delete
export const checkIfLogged = createAction('login/CHECK_IF_LOGGED');
