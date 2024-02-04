import { useState } from 'react';
import { Header, NavLinkStyled } from './Navigation.styled';
import { ModalWindow } from 'components/Modal/Modal';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { LogInForm } from 'components/LogInForm/LogInForm';

export const Navigation = () => {
  const [modalIsOpenRegister, setModalIsOpenRegister] = useState(false);
  const [modalIsOpenLogIn, setModalIsOpenLogIn] = useState(false);

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

  return (
    <Header>
      <div>
        <NavLinkStyled to="/">
          <span>psychologists.</span>services
        </NavLinkStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/psychologists">psychologists</NavLinkStyled>
      </div>
      <div>
        <button type="submit" onClick={openModalLogIn}>
          Log In
        </button>
        <button type="submit" onClick={openModalRegister}>
          Register
        </button>
        <ModalWindow isClose={closeModalRegister} isOpen={modalIsOpenRegister}>
          <RegisterForm isClose={closeModalRegister} />
        </ModalWindow>
        <ModalWindow isClose={closeModalLogIn} isOpen={modalIsOpenLogIn}>
          <LogInForm isClose={closeModalLogIn} />
        </ModalWindow>
      </div>
    </Header>
  );
};
