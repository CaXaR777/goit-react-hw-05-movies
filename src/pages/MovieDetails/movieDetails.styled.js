import styled from 'styled-components';

export const MovieInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 60px;
  border: 2px solid #c8c8c8;
  padding: 20px;
  border-radius: 10px;
`;

export const MovieImg = styled.div`
  flex: 1 0 20px;
  margin-right: 20px;
`;

export const Img = styled.img`
  max-width: 200px;
  height: auto;
`;

export const MovieDetails = styled.div`
  flex: 2 1 750px;
  margin-left: 20px;
`;

export const MovieTitle = styled.h1`
  margin-top: 0;
`;

export const MovieText = styled.p`
  margin-bottom: 10px;
`;

export const Return = styled.div`
  position: absolute;
  top: 60px;
  left: 20px;
  font-weight: bold;
`;

export const CastReviews = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  border-top: 2px solid #c8c8c8;
  padding-top: 0;
`;

export const View = styled.div`
  margin-right: 20px;
`;

export const Inf = styled.div`
  display: flex;
  align-items: center;
`;

export const ExtraInfo = styled.h4`
  margin-left: 20px;
`;
