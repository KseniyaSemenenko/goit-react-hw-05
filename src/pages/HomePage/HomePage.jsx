import { useEffect, useState } from 'react';
import { trendingMovies } from '../../movies-api';
import MovieList from '../../components/MovieList/MovieList';
import css from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const { results } = await trendingMovies();
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);
    
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
    

  return (
    <div>
      <h1 className={css.headerName}>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
}
