import { Link, Outlet } from "react-router-dom";

export default function MovieDetailsPage() {
    return (
        <div>
            <button>Go back</button>
            <div>
                <img src="" alt="" />
                <h2>Name movies</h2>
                <p>User Score: %</p>
                <h3>Overview</h3>
                <p>okey</p>
                <h3>Genres</h3>
                <p>drama</p>
            </div>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}