import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'services/store/store';

export interface User {
	email: string | null;
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
		logout(state) {
			state.user = initialState.user;
		},
		login(state, action: PayloadAction<User>) {
			state.user = action.payload;
		},
	},
});

export const selectUser = createSelector(
	(state: RootState) => state,
	state => state.session.user ?? false,
);

export const { logout, login } = sessionSlice.actions;
