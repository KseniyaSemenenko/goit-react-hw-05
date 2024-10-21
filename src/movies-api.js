import axios from 'axios';

const movieInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});
const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjFmMGEyZmViNjg0ZjgzOTkxOTM3NzI0MzRiMDQwNCIsIm5iZiI6MTcyOTEwMjU4Mi4zMzc0MDUsInN1YiI6IjY3MGZlZWUwNmJmZmExNGNmNDEwZTY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u0tJTKLrMjbYgOBbmiJTwY4-20Pc0q-CEoXMfr8s9ZI',
  },
};

export const trendingMovies = async () => {
  const { data } = await movieInstance.get('/trending/movie/day', options);

  return {
    results: data.results,
  };
};

export const searchMovie = async searchValue => {
  if (!searchValue) return { movie: [] };
  
  const { data } = await movieInstance.get(`/search/movie`, {
    ...options,
    params: { query: searchValue },
  });
  return {
    movies: data.results,
  };
};
export const movieForId = async movieId => {
  const { data } = await movieInstance.get(`/movie/${movieId}`, options);
  console.log(data);
  
  return data;
};

export const movieCast = async movieId => {
  const { data } = await movieInstance.get(
    `/movie/${movieId}/credits`,
    options
  );
  const limitedCast = data.cast.slice(0, 10);
  return {
    cast: limitedCast,
  };
};
export const movieReviews = async movieId => {
  const { data } = await movieInstance.get(
    `/movie/${movieId}/reviews`,
    options
  );

  return {
    reviews: data.results,
  };
};
