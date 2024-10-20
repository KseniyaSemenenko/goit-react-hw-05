import { useLocation, useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { searchMovie } from '../../movies-api';

export default function MoviesPage({ onSearch }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  const query = searchParams.get('query') || '';

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.search.value.trim();
    if (inputValue === '') {
      alert('Input search term');
      return;
    }
    setSearchParams({ query: inputValue });

    form.reset();
  };

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        if (query) {
          const { movie } = await searchMovie(query);
          setMovies(movie);
          onSearch(movie);
        } else {
          setMovies([]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [query]);


  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} />
      <MovieList movies={movies} location={location} />
    </div>
  );
}
