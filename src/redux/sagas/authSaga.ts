import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { loginFailure, loginRequest, loginSuccess } from './authSlice';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  user: { id: string; email: string };
}

function* handleLogin(action: PayloadAction<LoginCredentials>): Generator {
  try {
    const response = yield call(async () => {
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(action.payload)
      });
      if (!res.ok) throw new Error('Login failed');
      return res.json() as Promise<LoginResponse>;
    });

    yield put(loginSuccess((response as LoginResponse).user));
  } catch (error) {
    yield put(loginFailure(error instanceof Error ? error.message : 'Login failed'));
  }
}

export function* watchAuth(): Generator {
  yield takeLatest(loginRequest.type, handleLogin);
}
