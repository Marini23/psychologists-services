import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavStyled = styled.nav`
  width: 100%;
  max-width: 1440px;
  min-width: 320px;
  margin: 0 auto;
  height: 96px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 8.88%;
  padding-right: 8.88%;
`;

export const NavLinkStyledLogo = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  font-size: 1.25em;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.black};
  margin-right: 9.02%;
  &.active {
    color: red;
  }
  &:visited {
    color: inherit;
  }
`;

export const SpanLogo = styled.span`
  cursor: pointer;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  &.active {
    color: red;
  }
  &:visited {
    color: inherit;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  line-height: 1.25;
  margin-right: 2.777%;
  &.active {
    color: red;
  }
  &:visited {
    color: inherit;
  }
`;
