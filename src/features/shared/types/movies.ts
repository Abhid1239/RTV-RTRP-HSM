export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieSearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
  Error?: string;
}

export interface MoviesState {
  items: Movie[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
}
