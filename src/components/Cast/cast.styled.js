import styled from 'styled-components';

export const Cast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const CastItem = styled.ul`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const CastTitle = styled.h2`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 28px;
  font-weight: bold;
`;

export const ActorImg = styled.img`
  width: 120px;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
`;

export const ActorName = styled.ul`
  font-size: 20px;
`;

// export const Return = styled.button`
//   position: absolute;
//   top: 70px;
//   left: 20px;
// `;
