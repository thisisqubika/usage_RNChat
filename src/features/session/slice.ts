import type { PayloadAction } from '@reduxjs/toolkit';
import { createSelector, createSlice } from '@reduxjs/toolkit';

import { RootState } from 'services/store/store';

export interface User {
	email: string;
	firstName: string;
	gender: string;
	id: number;
	image?: string;
	lastName: string;
	token: string;
	username: string;
}

interface SessionState {
	user: User | null;
}

const initialState: SessionState = {
	user: null,
};

export const sessionSlice = createSlice({
	initialState,
	name: 'session',
	reducers: {
		logOut(state) {
			state.user = initialState.user;
		},
		logIn(state, action: PayloadAction<User>) {
			state.user = action.payload;
		},
	},
});

export const selectUser = createSelector(
	(state: RootState) => state,
	(state) => state.session.user ?? false,
);

export const { logOut, logIn } = sessionSlice.actions;
