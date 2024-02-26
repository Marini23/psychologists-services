import {
  Header,
  NavLinkStyled,
  NavLinkStyledLogo,
  NavStyled,
  SpanLogo,
} from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <NavStyled>
        <NavLinkStyledLogo to="/">
          <SpanLogo>psychologists.</SpanLogo>services
        </NavLinkStyledLogo>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/psychologists">Psychologists</NavLinkStyled>
        {isLoggedIn && <NavLinkStyled to="/Favorites">Favorites</NavLinkStyled>}
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        <ThemeSwitcher />
      </NavStyled>
    </Header>
  );
};
