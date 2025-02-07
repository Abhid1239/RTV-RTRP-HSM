import { Movie } from '@shared/types/movies';

interface MovieCardProps {
    movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg">
            <img
                src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png'}
                alt={movie.Title}
                className="w-full h-96 object-cover"
            />
            <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{movie.Title}</h3>
                <p className="text-gray-600">{movie.Year}</p>
            </div>
        </div>
    );
};

export default MovieCard; 