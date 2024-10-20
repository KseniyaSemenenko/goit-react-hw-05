import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { moviesGenre, trendingMovies } from './movies-api';

import MoviesPage from './pages/MoviesPage/MoviesPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';

import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'
  const onSearch = movies => {
    setMovies(movies);
  };
  
  const getProductById = movieId => {
    return movies.find(movie => movie.id === movieId);
  };

  useEffect(() => {
    const fetchMovies = async () => {
    try {
        const { results } = await trendingMovies();
        setMovies(results);
    } catch (error) {
      console.log(error);
    } finally {
    }
    };
    fetchMovies();
  }, [])
 

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const { genres } = await moviesGenre();
        setGenres(genres);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGenres();
  }, []);


  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route
          path="/movies"
          element={<MoviesPage movies={movies} onSearch={onSearch} />}
        />
        <Route
          path="/movies/:movieId"
          element={
            <MovieDetailsPage getProductById={getProductById} genres={genres} defaultImg={defaultImg } />
          }
        >
          <Route path="cast" element={<MovieCast defaultImg={defaultImg }/>} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
