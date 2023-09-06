import { RootState } from '@/services/store/store';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Login {
  email: string | null;
  isLogged: boolean | null;
}

interface LoginState {
  login: Login;
}

const initialState: LoginState = {
  login: {
    email: null,
    isLogged: null,
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
    setLoggedUser(state) {
      state.login.isLogged = true;
    },
  },
});

export const selectLogin = createSelector(
  (state: RootState) => state,
  state => state.login ?? '',
);

export const { clearLogin, updateLoginEmail, setLoggedUser } =
  loginSlice.actions;
