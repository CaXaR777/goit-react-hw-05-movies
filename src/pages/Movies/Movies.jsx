import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { fetchMovies } from '../../api/api.js/api';
import * as S from './movies.styled';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchMovies(searchParams.get('textQuery'));
        setSearchResults(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchParams]);

  const handleSubmit = async event => {
    event.preventDefault();
    if (searchTerm) {
      setSearchParams({ textQuery: searchTerm });
      setSearchTerm('');
    } else {
      setSearchResults([]);
      setSearchParams({});
    }
  };

//   console.log(location);

  return (
    <S.Movie>
      <S.Title>Movies</S.Title>
      <form onSubmit={handleSubmit}>
        <S.Lable htmlFor="search">Search for movies:</S.Lable>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleChange}
        />
        <S.Button type="submit">Search</S.Button>
      </form>
      <S.MovieList>
        {searchResults.map(movie => (
          <S.MovieItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </S.MovieItem>
        ))}
      </S.MovieList>
    </S.Movie>
  );
};


export default Movies;
