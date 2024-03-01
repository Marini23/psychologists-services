import {
  Header,
  NavLinkStyled,
  NavLinkStyledLogo,
  NavStyled,
  NavWrapper,
  SpanLogo,
} from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <NavStyled>
        <NavLinkStyledLogo to="/">
          <SpanLogo>psychologists.</SpanLogo>services
        </NavLinkStyledLogo>
        <NavWrapper>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/psychologists">Psychologists</NavLinkStyled>
          {isLoggedIn && (
            <NavLinkStyled to="/Favorites">Favorites</NavLinkStyled>
          )}
        </NavWrapper>
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </NavStyled>
      <BurgerMenu />
      <ThemeSwitcher />
    </Header>
  );
};
