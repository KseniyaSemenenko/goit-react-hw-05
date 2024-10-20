import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div>
            <p>Sorry, this page is not found...</p>
            <Link to="/">Go Home</Link>
        </div>
    )
}