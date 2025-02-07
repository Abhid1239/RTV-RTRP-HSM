import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { AuthState, LoginCredentials } from '@shared/types/auth';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<LoginCredentials>) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<{ id: string; email: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: () => initialState
  }
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
