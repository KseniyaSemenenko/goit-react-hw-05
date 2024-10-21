import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { movieForId} from '../../movies-api';

export default function MovieDetailsPage({ defaultImg }) {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMoviesDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const movieData = await movieForId(movieId);
        setMovie(movieData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMoviesDetails();
  }, [movieId]);

  const goBack = useRef(location.state?.from || '/movies');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!movie) return <p>Movie not found🤷‍♂️</p>;

  const movieGenres = movie.genres.map(genre => genre.name);
  
  return (
    <div>
      <button
        className={css.btnGoBack}
        onClick={() => navigate(goBack.current)}
        type="button"
      >
        Go back
      </button>
      <div className={css.moviesDetails}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defaultImg
          }
          alt="poster"
          width={250}
        />
        <div className={css.moviesDetailsText}>
          <h2>{movie.original_title}</h2>
          <p>Rating: {movie.popularity}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>
            {movieGenres.length > 0
              ? movieGenres.join(', ')
              : 'No genres available'}
          </p>
        </div>
      </div>
      <ul className={css.listInfo}>
        <li className={css.listInfoItem}>
          <Link to={`cast`}>Cast</Link>
        </li>
        <li className={css.listInfoItem}>
          <Link to={`reviews`}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
