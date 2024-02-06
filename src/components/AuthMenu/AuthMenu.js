import { useState } from 'react';
import { ModalWindow } from 'components/Modal/Modal';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { LogInForm } from 'components/LogInForm/LogInForm';

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
  );
};
