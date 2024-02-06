import { Header, NavLinkStyled } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <div>
        <NavLinkStyled to="/">
          <span>psychologists.</span>services
        </NavLinkStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/psychologists">psychologists</NavLinkStyled>
      </div>
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </Header>
  );
};
