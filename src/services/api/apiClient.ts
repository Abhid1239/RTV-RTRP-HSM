const BASE_URL = import.meta.env.VITE_OMDB_API_URL || 'http://www.omdbapi.com/';
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

if (!API_KEY) {
  throw new Error('OMDB API key is not configured');
}

export const apiClient = {
  get: async <T>(endpoint: string, params = {}) => {
    const queryParams = new URLSearchParams({ ...params, apikey: API_KEY });
    const response = await fetch(`${BASE_URL}?${queryParams}`);
    if (!response.ok) throw new Error('API request failed');
    return response.json() as Promise<T>;
  }
};
