import { useDispatch, useSelector } from 'react-redux';
import {
  AvatarIcon,
  Button,
  List,
  Name,
  NavLinkStyled,
  UserInfo,
  Wrapper,
} from './BurgerMenu.styled';
import { selectIsLoggedIn, selectName } from '../../redux/selectors';
import avatar from '../UserMenu/avatar_user.svg';
import { slide as Menu } from 'react-burger-menu';
import { ReactComponent as CloseIcon } from './close_icon.svg';
import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { ModalWindow } from 'components/Modal/Modal';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { LogInForm } from 'components/LogInForm/LogInForm';
import { logOut } from '../../redux/authSlice/authOperations';

export const BurgerMenu = () => {
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const name = useSelector(selectName);
  const [modalIsOpenRegister, setModalIsOpenRegister] = useState(false);
  const [modalIsOpenLogIn, setModalIsOpenLogIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const handleStateChange = state => {
    setIsMenuOpen(state.isOpen);
  };

  const openModalRegister = () => {
    setModalIsOpenRegister(true);
  };

  const closeModalRegister = () => {
    setModalIsOpenRegister(false);
  };

  const openModalLogIn = () => {
    setModalIsOpenLogIn(true);
  };

  const closeModalLogIn = () => {
    setModalIsOpenLogIn(false);
  };

  const styles = {
    bmBurgerButton: {
      position: 'relative',
      marginLeft: '20px',
      width: '46px',
      height: '40px',
    },
    bmBurgerBars: {
      background: '#373a47',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      width: '320px',
      top: 0,
      right: 0,
      background: theme.colors.background,
    },
    bmMenu: {
      background: theme.colors.secondary,
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
      top: '20px',
      right: '40px',
    },
    bmOverlay: {
      top: 0,
      right: 0,
      background: 'transparent',
    },
    bmItemList: {
      display: 'flex',
      flexDirection: 'column',
    },
    bmitem: {
      display: 'flex',
      gap: '20px',
    },
  };

  return (
    <Wrapper>
      <Menu
        styles={styles}
        right
        customCrossIcon={<CloseIcon />}
        isOpen={isMenuOpen}
        onStateChange={handleStateChange}
      >
        <div>
          {isLoggedIn && (
            <UserInfo>
              <AvatarIcon>
                <img src={avatar} alt="avatar" width={24} height={24} />
              </AvatarIcon>
              <Name>{name}</Name>
            </UserInfo>
          )}
          <List>
            <li>
              <NavLinkStyled onClick={() => handleCloseMenu()} to="/">
                Home
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled
                onClick={() => handleCloseMenu()}
                to="/psychologists"
              >
                Psychologists
              </NavLinkStyled>
            </li>
            <li>
              {isLoggedIn && (
                <NavLinkStyled
                  onClick={() => handleCloseMenu()}
                  to="/Favorites"
                >
                  Favorites
                </NavLinkStyled>
              )}
            </li>
          </List>
          {!isLoggedIn && (
            <Button type="submit" onClick={openModalRegister}>
              Registration
            </Button>
          )}
          {!isLoggedIn && (
            <Button type="submit" onClick={openModalLogIn}>
              Log In
            </Button>
          )}
          {isLoggedIn && (
            <Button onClick={() => dispatch(logOut())}>Log out</Button>
          )}
        </div>
      </Menu>
      <ModalWindow isClose={closeModalRegister} isOpen={modalIsOpenRegister}>
        <RegisterForm isClose={closeModalRegister} />
      </ModalWindow>
      <ModalWindow isClose={closeModalLogIn} isOpen={modalIsOpenLogIn}>
        <LogInForm isClose={closeModalLogIn} />
      </ModalWindow>
    </Wrapper>
  );
};
