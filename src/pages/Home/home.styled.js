import styled from 'styled-components';

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 20px;
`;

export const Item = styled.li`
  margin: 10px 0;
  font-weight: bold;
`;

export const Title = styled.h2`
  text-decoration: none;
  color: #0000ff;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
