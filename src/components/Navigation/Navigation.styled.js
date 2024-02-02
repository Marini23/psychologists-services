import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.nav`
  position: fixed;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 48px;
  margin: 0 auto;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  &.active {
    color: red;
  }
`;
