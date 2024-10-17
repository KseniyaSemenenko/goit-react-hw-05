import { Link, Outlet, useParams } from "react-router-dom";

export default function MovieDetailsPage({getProductById, genres}) {
    const { movieId } = useParams();
    const movieDetails = getProductById(Number(movieId));
    const movieGenres = movieDetails.genre_ids.map(movieId => {
        const genre = genres.find(item => item.id === movieId);
        return genre ? genre.name : null;
    })
    
    return (
        <div>
            <button>Go back</button>
            <div>
                <img src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}` : '' } alt="" />
                <h2>{movieDetails.original_title}</h2>
                <p>Rating: {movieDetails.popularity}%</p>
                <h3>Overview</h3>
                <p>{movieDetails.overview}</p>
                <h3>Genres</h3>
                <p>{movieGenres.length > 0 ? movieGenres.join(', ') : 'No genres available'}</p>
            </div>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}