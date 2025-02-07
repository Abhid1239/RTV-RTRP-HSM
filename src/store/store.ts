import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from '@redux/slices/authSlice';
import moviesReducer from '@redux/slices/moviesSlice';
import rootSaga from '@redux/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = {
  auth: authReducer,
  movies: moviesReducer
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production'
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
