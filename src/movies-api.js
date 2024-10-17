import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjFmMGEyZmViNjg0ZjgzOTkxOTM3NzI0MzRiMDQwNCIsIm5iZiI6MTcyOTEwMjU4Mi4zMzc0MDUsInN1YiI6IjY3MGZlZWUwNmJmZmExNGNmNDEwZTY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u0tJTKLrMjbYgOBbmiJTwY4-20Pc0q-CEoXMfr8s9ZI',
  },
};

export const trendingMovies = async () => {
  const { data } = await axios.get('/trending/movie/day', options);

  return {
    results: data.results,
  };
};
export const moviesGenre = async () => {
  const {data} = await axios.get('/genre/movie/list', options);

  return {
    genres: data.genres,
  };
};

// const trendingUrl = "https://api.themoviedb.org/3/trending/movie/day"
// const searchUrl = "https://api.themoviedb.org/3/search/movie"
// const movieUrl = "https://api.themoviedb.org/3/movie/{movie_id}"
// const creditUrl = "https://api.themoviedb.org/3/movie/{movie_id}/credits"
// const reviewsUrl = "https://api.themoviedb.org/3/movie/{movie_id}/reviews"
