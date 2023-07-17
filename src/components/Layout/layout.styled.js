import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #000000;
  &.active {
    color: #0000ff;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #808080;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.header`
  margin: 0 20px;
`;
