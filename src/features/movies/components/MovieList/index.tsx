import { useState, useCallback, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { searchMoviesRequest, selectMovies, selectMoviesError, selectMoviesLoading } from '@redux/slices/moviesSlice';
import MovieCard from '../MovieCard';
import SearchBar from '@components/common/SearchBar';
import { Movie } from '@shared/types/movies';

export const MovieList = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(selectMovies);
    const loading = useAppSelector(selectMoviesLoading);
    const error = useAppSelector(selectMoviesError);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = useCallback(() => {
        if (searchTerm.trim()) {
            dispatch(searchMoviesRequest(searchTerm));
        }
    }, [dispatch, searchTerm]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);

    return (
        <div>
            <div className="mb-4">
                <SearchBar
                    value={searchTerm}
                    onChange={handleChange}
                    onSearch={handleSearch}
                    placeholder="Search for movies..."
                />
            </div>

            {loading && <div>Loading...</div>}
            {error && <div className="text-red-500">{error}</div>}

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((movie: Movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;