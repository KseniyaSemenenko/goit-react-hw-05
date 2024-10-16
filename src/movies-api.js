import axios from "axios";

// axios.defaults.baseURL = "https://image.tmdb.org";
// export const searchResult = async () => {
//     const options = {
//         headers: {
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjFmMGEyZmViNjg0ZjgzOTkxOTM3NzI0MzRiMDQwNCIsIm5iZiI6MTcyOTEwMjU4Mi4zMzc0MDUsInN1YiI6IjY3MGZlZWUwNmJmZmExNGNmNDEwZTY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u0tJTKLrMjbYgOBbmiJTwY4-20Pc0q-CEoXMfr8s9ZI'
//         }
//     }
//     const response = await axios.get('/3/trending/movie/day?language=en-US')
//      console.log(response);
//     return response;
// }


// const url = "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1"
// const options = {
//     headers: {
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjFmMGEyZmViNjg0ZjgzOTkxOTM3NzI0MzRiMDQwNCIsIm5iZiI6MTcyOTEwMjU4Mi4zMzc0MDUsInN1YiI6IjY3MGZlZWUwNmJmZmExNGNmNDEwZTY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u0tJTKLrMjbYgOBbmiJTwY4-20Pc0q-CEoXMfr8s9ZI'
//     }
// };
// axios.get(url, options)
// .then(response => console.log(response))
//     .catch(err => console.error(err));


const trendingUrl = "https://api.themoviedb.org/3/trending/movie/{time_window}"
const searchUrl = "https://api.themoviedb.org/3/search/movie"
const movieUrl = "https://api.themoviedb.org/3/movie/{movie_id}"  
const creditUrl = "https://api.themoviedb.org/3/movie/{movie_id}/credits"
const reviewsUrl = "https://api.themoviedb.org/3/movie/{movie_id}/reviews"

const url = "https://api.themoviedb.org/3"
const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjFmMGEyZmViNjg0ZjgzOTkxOTM3NzI0MzRiMDQwNCIsIm5iZiI6MTcyOTEwMjU4Mi4zMzc0MDUsInN1YiI6IjY3MGZlZWUwNmJmZmExNGNmNDEwZTY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u0tJTKLrMjbYgOBbmiJTwY4-20Pc0q-CEoXMfr8s9ZI'
    }
}
axios.get(`${url}/movie/14`, options)
.then(response => console.log(response))
    .catch(err => console.error(err));