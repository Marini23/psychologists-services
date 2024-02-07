import { useState } from 'react';
import { ModalWindow } from 'components/Modal/Modal';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { LogInForm } from 'components/LogInForm/LogInForm';
import { AuthContainer, BtnLogIn, BtnRegistration } from './AuthMenu.styled';

export const AuthMenu = () => {
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
    <AuthContainer>
      <BtnLogIn type="submit" onClick={openModalLogIn}>
        Log In
      </BtnLogIn>
      <BtnRegistration type="submit" onClick={openModalRegister}>
        Registration
      </BtnRegistration>
      <ModalWindow isClose={closeModalRegister} isOpen={modalIsOpenRegister}>
        <RegisterForm isClose={closeModalRegister} />
      </ModalWindow>
      <ModalWindow isClose={closeModalLogIn} isOpen={modalIsOpenLogIn}>
        <LogInForm isClose={closeModalLogIn} />
      </ModalWindow>
    </AuthContainer>
  );
};
