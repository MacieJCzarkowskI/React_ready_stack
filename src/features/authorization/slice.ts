/* eslint-disable guard-for-in */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-syntax */
import { createSlice } from '@reduxjs/toolkit';
import { IAuthorization } from '../../models/authorization/authorization';
import { isLoading, setIsLogged } from './actions';

export const initialAuth: IAuthorization = {
	loading: true,
	isLogged: false,
};

export const authSlice = createSlice({
	name: 'authorization',
	initialState: initialAuth,
	reducers: {},
	extraReducers: builder => {
		builder.addMatcher(setIsLogged.match, (state, { payload }) => {
			state.loading = false;
			state.isLogged = payload.isLogged;
		});
		builder.addMatcher(isLoading.match, (state, { payload }) => {
			state.loading = payload;
		});
	},
});

export const authReducer = authSlice.reducer;
