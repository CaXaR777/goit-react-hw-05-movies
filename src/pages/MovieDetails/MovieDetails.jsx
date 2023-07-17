import { useState, useEffect, useRef } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';
// import PropTypes from 'prop-types';
import { fetchMovieDetails } from '../../api/api.js/api';
import * as S from './movieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackLocationRef = useRef(location.state?.from || '/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const {
    poster_path,
    title,
    overview,
    release_date,
    vote_average,
    genres,
    runtime,
  } = movie;
  const genresList = genres.map(genre => genre.name).join(' ');
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const runtimeDisplay = `${hours}h ${minutes}m`;
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

//   console.log(location.state);

  return (
    <>
      <S.MovieInfo>
        <S.MovieImg>
          <S.Img src={imageUrl} alt={title} />
        </S.MovieImg>
        <S.MovieDetails>
          <S.MovieTitle>{title}</S.MovieTitle>
          <S.MovieText>
            <strong>Genre:</strong> {genresList}
          </S.MovieText>
          <S.MovieText>
            <strong>Release date:</strong> {release_date}
          </S.MovieText>
          <S.MovieText>
            <strong>Rating:</strong> {vote_average} / 10
          </S.MovieText>
          <S.MovieText>
            <strong>Runtime:</strong> {runtimeDisplay}
          </S.MovieText>
          <S.MovieText>
            <strong>Overview:</strong> {overview}
          </S.MovieText>
          <S.Return>
            <Link to={goBackLocationRef.current}>Go back</Link>
          </S.Return>
        </S.MovieDetails>
      </S.MovieInfo>
      <S.CastReviews>
        <S.ExtraInfo>Additional information</S.ExtraInfo>
        <S.Inf>
          <S.View>
            <NavLink to={`/movies/${movieId}/cast`}>View Cast</NavLink>
          </S.View>
          <div>
            <NavLink to={`/movies/${movieId}/reviews`}>View Reviews</NavLink>
          </div>
        </S.Inf>
        <Outlet />
      </S.CastReviews>
    </>
  );
};



export default MovieDetails;
