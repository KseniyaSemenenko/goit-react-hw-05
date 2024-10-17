import MovieList from "../../components/MovieList/MovieList"

export default function HomePage({movies}) {
    return (
        <div>
            <h1>Trending today</h1>
            <MovieList movies={movies} />
        </div>
    )
}