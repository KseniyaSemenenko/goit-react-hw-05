import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import MoviesPage from './pages/MoviesPage/MoviesPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';
import Navigation from './components/Navigation/Navigation';
import { moviesGenre, trendingMovies } from './movies-api';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const handleTrendingMovies = async () => {
      try {
        const { results } = await trendingMovies();
        const { genres } = await moviesGenre();
        setMovies(results);
        setGenres(genres);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    handleTrendingMovies();
  }, []);

  const getProductById = movieId => {
    return movies.find(movie => movie.id === movieId);
  };

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route
          path="/movies/:movieId"
          element={
            <MovieDetailsPage getProductById={getProductById} genres={genres} />
          }
        >
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
