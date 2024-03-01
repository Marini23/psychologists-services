import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  max-width: 1440px;
  min-width: 320px;
  height: 96px;
  margin: 0 auto;
  padding-left: 8.88%;
  padding-right: 8.88%;
  top: 0;
  background-color: ${({ theme }) => theme.colors.backgroundMain};

  color: ${({ theme }) => theme.colors.black};
  z-index: 1;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const NavStyled = styled.nav`
  width: 100%;
  margin: 0 auto;
  height: 96px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10%;
  /* margin-left: auto; */
  margin-right: auto;
  @media screen and (max-width: 1120px) {
    display: none;
  }
`;

export const NavLinkStyledLogo = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  font-size: 1.25em;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.black};
  margin-right: 7.9%;

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
  color: ${({ theme }) => theme.colors.black};

  &:visited {
    color: inherit;
  }

  &:after {
    content: '';
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &.active:after {
    opacity: 1;
  }
`;
