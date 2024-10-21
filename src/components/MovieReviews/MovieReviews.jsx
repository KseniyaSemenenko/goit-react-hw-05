
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviews } from '../../movies-api'; 
import css from './MovieReviews.module.css'

const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [moreText, setMoreText] = useState(false);

    useEffect(() => {
        const getReviews = async () => {
            try {
                const { reviews } = await movieReviews(movieId);
                setReviews(reviews);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        getReviews();
    }, [movieId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h3 className={css.reviewsHead}>Reviews</h3>
            <ul className={css.reviewsList}>
                {reviews.length > 0 ? (
                    reviews.map(review => (
                        <li className={css.reviewsItem} key={review.id}>
                            <p className={css.reviewsText}><strong>{review.author}:</strong> {moreText ? review.content : review.content.slice(0, 200)}...</p>
                            <button className={css.reviewsBtn} type='button'  onClick={()=>{setMoreText(!moreText)}}>{moreText ? "Read less" : "Read more..."}</button>
                        </li>
                    ))
                ) : (
                    <p>No reviews available.</p>
                )}
            </ul>
        </div>
    );
};

export default MovieReviews;


