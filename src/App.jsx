import { Route, Routes } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
      <div>
          <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
              <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                  <Route path="cast" element={<MovieCast />} />
                  <Route path="reviews" element={<MovieReviews />} />
              </Route>
        <Route path="*" element={<NotFoundPage />} />      
      </Routes>
    </div>
  );
};

export default App;
