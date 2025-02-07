import { apiClient } from './apiClient';
import { MovieSearchResponse } from '../../features/shared/types/movies';

export const movieApi = {
  searchMovies: (searchTerm: string) =>
    apiClient.get('', { s: searchTerm, type: 'movie' }) as Promise<MovieSearchResponse>
};
