import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, MoviesState } from '@shared/types/movies';
import { RootState } from '@store/store';

const initialState: MoviesState = {
  items: [],
  loading: false,
  error: null,
  searchTerm: ''
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    searchMoviesRequest: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
      state.searchTerm = action.payload;
    },
    searchMoviesSuccess: (state, action: PayloadAction<Movie[]>) => {
      state.items = action.payload;
      state.loading = false;
    },
    searchMoviesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.items = [];
    }
  }
});

export const { searchMoviesRequest, searchMoviesSuccess, searchMoviesFailure } =
  moviesSlice.actions;

export const selectMovies = (state: RootState) => state.movies.items;
export const selectMoviesLoading = (state: RootState) => state.movies.loading;
export const selectMoviesError = (state: RootState) => state.movies.error;

export default moviesSlice.reducer;
