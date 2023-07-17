import { Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types';
import * as S from './layout.styled';

const Layout = () => {
  return (
    <>
      <S.Header>
        <S.List>
          <S.Item>
            <S.StyledLink to="/">Home</S.StyledLink>
          </S.Item>
          <li>
            <S.StyledLink to="/movies">Movies</S.StyledLink>
          </li>
        </S.List>
      </S.Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

// Layout.propTypes = {
//   NavLink: PropTypes.func.isRequired,
//   Outlet: PropTypes.func.isRequired,
// };

export default Layout;
