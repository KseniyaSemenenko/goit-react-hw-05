import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { useRef } from 'react';

export default function MovieDetailsPage({
  getProductById,
  genres,
  defaultImg,
}) {
  const { movieId } = useParams();
  const movieDetails = getProductById(Number(movieId));
  const navigate = useNavigate();
  const location = useLocation();
  if (!movieDetails) {
    return <p>Movie not found🤷‍♂️</p>;
  }
  const movieGenres = movieDetails.genre_ids
    .map(movieId => {
      const genre = genres.find(item => item.id === movieId);
      return genre ? genre.name : null;
    })
    .filter(Boolean);

  const goBack = useRef(location.state?.from || '/movies');
  return (
    <div className={css.movies}>
      <button className={css.btnGoBack} onClick={() => navigate(goBack.current)} type="submit">
        Go back
      </button>
      <div className={css.moviesDetails}>
        <img
          className={css.moviesImg}
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
              : defaultImg
          }
          alt="poster"
          width={250}
        />
        <div className={css.moviesDetailsText}>
          <h2 className={css.moviesName}>{movieDetails.original_title}</h2>
          <p className={css.moviesText}>Rating: {movieDetails.popularity}%</p>
          <h3 className={css.moviesTextAbout}>Overview</h3>
          <p className={css.moviesText}>{movieDetails.overview}</p>
          <h3 className={css.moviesTextAbout}>Genres</h3>
          <p className={css.moviesText}>
            {movieGenres.length > 0
              ? movieGenres.join(', ')
              : 'No genres available'}
          </p>
        </div>
      </div>
      <ul className={css.listInfo}>
        <li className={css.listInfoItem}>
          <Link
            // state={{ from: location.state.from }}
            to={`cast`}
          >
            Cast
          </Link>
        </li>
        <li className={css.listInfoItem}>
          <Link
            // state={{ from: location.state.from }}
            // to={`/movies/${movieId}/reviews`}
             to={`reviews`}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
