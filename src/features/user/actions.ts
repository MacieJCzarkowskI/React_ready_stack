import { createAction } from '@reduxjs/toolkit';

export const getUserData = createAction('user_data/GET_USER_INFO');
export const setUserData = createAction<{ name: string; lastName: string }>('user_data/SET_USER_INFO');
