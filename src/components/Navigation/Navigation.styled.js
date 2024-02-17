import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ellipse from './ellipse.svg';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 96px;
  margin: 0 auto;
  top: 0;
  background-color: ${({ theme }) => theme.colors.backgroundMain};

  color: ${({ theme }) => theme.colors.black};
  z-index: 1;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

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

  &:visited {
    color: inherit;
  }
`;

export const SpanLogo = styled.span`
  cursor: pointer;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  &:visited {
    color: inherit;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  position: relative;
  cursor: pointer;
  text-decoration: none;
  line-height: 1.25;
  margin-right: 2.777%;
  color: ${({ theme }) => theme.colors.black};

  &:visited {
    color: inherit;
  }

  &:after {
    content: url(${ellipse});
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0; /* Initially hidden */
    transition: opacity 0.3s ease;
  }

  &.active:after {
    opacity: 1;
  }
`;
