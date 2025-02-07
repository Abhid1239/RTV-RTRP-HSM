import MovieList from "@features/movies/components/MovieList/index";

const MoviesPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Movie Search</h1>
            <MovieList />
        </div>
    );
};

export default MoviesPage; 