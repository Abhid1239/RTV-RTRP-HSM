import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  searchMoviesFailure,
  searchMoviesRequest,
  searchMoviesSuccess
} from '@redux/slices/moviesSlice';
import { movieApi } from '@services/api/movieApi';
import { MovieSearchResponse } from '@shared/types/movies';

function* handleSearchMovies(action: PayloadAction<string>): Generator {
  try {
    const response = (yield call(movieApi.searchMovies, action.payload)) as MovieSearchResponse;
    if (response.Response === 'True') {
      yield put(searchMoviesSuccess(response.Search));
    } else {
      yield put(searchMoviesFailure(response.Error || 'No movies found'));
    }
  } catch (error) {
    yield put(
      searchMoviesFailure(error instanceof Error ? error.message : 'Failed to fetch movies')
    );
  }
}

export function* watchMovies(): Generator {
  yield takeLatest(searchMoviesRequest.type, handleSearchMovies);
}
