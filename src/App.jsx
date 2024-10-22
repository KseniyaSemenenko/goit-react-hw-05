import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from "react";

import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import Navigation from './components/Navigation/Navigation';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));


const App = () => {
  const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'
  return (
    <div>
      <Navigation />

      <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/movies"
          element={<MoviesPage />}
        />
        <Route
          path="/movies/:movieId"
          element={
            <MovieDetailsPage defaultImg={defaultImg } />
          }
        >
          <Route path="cast" element={<MovieCast defaultImg={defaultImg }/>} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
    </div>
  );
};

export default App;
