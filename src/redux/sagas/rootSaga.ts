import { all } from 'redux-saga/effects';
import { watchAuth } from './authSaga';
import { watchMovies } from './moviesSaga';

export default function* rootSaga() {
  yield all([watchAuth(), watchMovies()]);
}
