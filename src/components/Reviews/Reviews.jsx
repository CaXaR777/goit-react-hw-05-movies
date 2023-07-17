import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { fetchMovieReviews } from '../../api/api.js/api';
import { useParams } from 'react-router-dom';
import * as S from './reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await fetchMovieReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <S.Title>Reviews</S.Title>
      {reviews.length ? (
        <ul>
          {reviews.map(review => (
            <S.Item key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </S.Item>
          ))}
        </ul>
      ) : (
        <p>No reviews yet</p>
      )}
    </div>
  );
};

// Reviews.propTypes = {
//   movieId: PropTypes.number.isRequired,
//   reviews: PropTypes.array.isRequired,
// };

export default Reviews;
