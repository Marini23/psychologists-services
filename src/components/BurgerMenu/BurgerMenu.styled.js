import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: none;
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
  @media screen and (max-width: 1120px) {
    display: flex;
  }
`;

export const Wrapper = styled.div`
  display: none;
  @media screen and (max-width: 1120px) {
    display: flex;
  }
`;

export const NavStyled = styled.nav`
  width: 100%;
  margin: 0 auto;
  height: 96px;
  display: flex;
  justify-content: start;
  align-items: center;
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
`;

export const AvatarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${props => `${props.theme.colors.primary}`};
  border-radius: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 14px;
`;

export const Name = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.25;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.875rem;
  margin-bottom: 14px;
`;

export const Button = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  margin-bottom: 14px;
`;
