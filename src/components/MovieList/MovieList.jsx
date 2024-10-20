import { Link, useLocation } from "react-router-dom"
import css from './MovieList.module.css'

export default function MovieList({movies}) {
    const location = useLocation();
    return (
        <ul className={css.moviesList}>
            {movies.map((movie) => {
                return (
                    <li className={css.movieItem} key={movie.id}>
                        <Link state={{ from: location }} to={`/movies/${movie.id}`}>{movie.original_title}</Link> 
                    </li>
                )
            })}
        </ul>
    )
}