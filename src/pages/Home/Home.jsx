import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { fetchPopular } from '../../api/api.js/api';
import * as S from './home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingMovies = await fetchPopular();
        setMovies(trendingMovies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(location);

  return (
    <S.Home>
      <S.Title>Popular Movies Today</S.Title>
      <S.List>
        {movies.map(movie => (
          <S.Item key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </S.Item>
        ))}
      </S.List>
    </S.Home>
  );
};

// Home.propTypes = {
// //   movies: PropTypes.array.isRequired,
//   location: PropTypes.object.isRequired,
// };

export default Home;
