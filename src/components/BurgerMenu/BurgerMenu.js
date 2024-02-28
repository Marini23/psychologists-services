import { useSelector } from 'react-redux';
import { AvatarIcon, Name, NavLinkStyled, UserInfo } from './BurgerMenu.styled';
import { selectIsLoggedIn, selectName } from '../../redux/selectors';
import avatar from '../UserMenu/avatar_user.svg';
import { slide as Menu } from 'react-burger-menu';

export const BurgerMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const name = useSelector(selectName);

  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '20px',
      top: '20px',
    },
    bmBurgerBars: {
      background: '#373a47',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
  };

  return (
    <div>
      <Menu styles={styles} right>
        {isLoggedIn && (
          <UserInfo>
            <AvatarIcon>
              <img src={avatar} alt="avatar" width={24} height={24} />
            </AvatarIcon>
            <Name>{name}</Name>
          </UserInfo>
        )}
        <div>
          <ul>
            <li>
              <NavLinkStyled to="/">Home</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/psychologists">Psychologists</NavLinkStyled>
            </li>
            <li>
              {isLoggedIn && (
                <NavLinkStyled to="/Favorites">Favorites</NavLinkStyled>
              )}
            </li>
          </ul>
          {!isLoggedIn && <button>Registration</button>}
          {!isLoggedIn && <button>Log In</button>}
          {isLoggedIn && <button>Log out</button>}
        </div>
      </Menu>
    </div>
  );
};
