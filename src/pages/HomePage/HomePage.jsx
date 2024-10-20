import MovieList from "../../components/MovieList/MovieList"
import css from './HomePage.module.css'

export default function HomePage({movies}) {
    return (
        <div>
            <h1 className={css.headerName}>Trending today</h1>
            <MovieList movies={movies} />
        </div>
    )
}