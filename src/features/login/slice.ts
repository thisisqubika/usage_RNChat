import {createSelector, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../services/store/store';

interface Login {
  email: string | null;
  phoneNumber: string | null;
}

interface LoginState {
  login: Login;
}

const initialState: LoginState = {
  login: {
    email: null,
    phoneNumber: null,
  },
};

export const loginSlice = createSlice({
  initialState,
  name: 'login',
  reducers: {
    clearLogin(state) {
      state.login = initialState.login;
    },
    updateLoginEmail(state, action: PayloadAction<string>) {
      state.login.email = action.payload;
    },
    updateLoginPhoneNumber(state, action: PayloadAction<string>) {
      state.login.phoneNumber = action.payload;
    },
  },
});

export const selectLogin = createSelector(
  (state: RootState) => state,
  state => state.login ?? '',
);

export const {clearLogin, updateLoginEmail, updateLoginPhoneNumber} =
  loginSlice.actions;
