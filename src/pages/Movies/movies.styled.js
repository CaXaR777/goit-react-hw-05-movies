import styled from 'styled-components';

export const Movie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 20px;
`;

export const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 20px;
`;

export const MovieItem = styled.li`
  margin: 10px 0;
  font-weight: bold;
`;

export const Title = styled.h2`
  text-decoration: none;
  color: #0000ff;
  &:hover {
    text-decoration: underline;
  }
`;

export const Lable = styled.label`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 0 4px 4px 0;
  border: none;
`;

export const Button = styled.button`
  margin-left: 10px;
`;
