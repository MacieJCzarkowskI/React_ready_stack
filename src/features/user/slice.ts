/* eslint-disable guard-for-in */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-syntax */
import { createSlice } from '@reduxjs/toolkit';
import { setUserData } from './actions';

import { IUserModel } from '../../models/user/user';

export const initialUser: IUserModel = {
	name: '',
	lastName: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState: initialUser,
	reducers: {},
	extraReducers: builder => {
		builder.addMatcher(setUserData.match, (state, { payload }) => {
			state.name = payload.name;
			state.lastName = payload.lastName;
		});
	},
});

export const userReducer = userSlice.reducer;
