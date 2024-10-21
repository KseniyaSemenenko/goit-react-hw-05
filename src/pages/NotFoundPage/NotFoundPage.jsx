import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css"

export default function NotFoundPage() {
    return (
        <div>
            <p className={css.notFountText}>Sorry, this page is not found...</p>
            <button className={css.notFountBtn} type="button" ><Link to="/">Go Home</Link></button>
        </div>
    )
}