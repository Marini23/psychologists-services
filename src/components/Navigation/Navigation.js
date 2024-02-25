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
        <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </NavStyled>
    </Header>
  );
};
