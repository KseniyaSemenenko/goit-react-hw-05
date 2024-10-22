
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieCast } from '../../movies-api'; 
import css from './MovieCast.module.css'
const MovieCast = ({defaultImg}) => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCast = async () => {
            setLoading(true);
      setError(null);
            try {
                const { cast } = await movieCast(movieId);
                setCast(cast);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getCast();
    }, [movieId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className={css.castInfo}>
            <h3 className={css.castInfoHead}>Cast</h3>
            <ul className={css.castList}>
                {cast.length > 0 ? (cast.map(actor => (
                    <li className={css.castItem} key={actor.id}>
                        <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : defaultImg} alt="" width="154px" height="154px"/>
                        <p>{actor.name} as {actor.character}</p></li>
                    
                ))) : <p>No cast information available</p>
            }
                </ul>
        </div>
    );
};

export default MovieCast;
