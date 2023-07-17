import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { fetchCastMovie } from '../../api/api.js/api';
import * as S from './cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await fetchCastMovie(movieId);
        setCast(castData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <S.Cast>
      <S.CastTitle>Cast</S.CastTitle>
      <S.CastList>
        {cast.map(actor => (
          <S.CastItem key={actor.id}>
            <div>
              {actor.profile_path && (
                <S.ActorImg
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name}'s profile`}
                />
              )}
            </div>
            <S.ActorName>{actor.name}</S.ActorName>
          </S.CastItem>
        ))}
      </S.CastList>
    </S.Cast>
  );
};

// Cast.propTypes = {
//   movieId: PropTypes.number.isRequired,
//   cast: PropTypes.array.isRequired,
// };

export default Cast;
