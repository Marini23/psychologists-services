import { useState } from 'react';
import { Header, NavLinkStyled } from './Navigation.styled';
import { Modal } from 'components/Modal';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export const Navigation = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
        <button type="submit">Log In</button>
        <button type="submit" onClick={openModal}>
          Register
        </button>
        {modalIsOpen && (
          <Modal isClose={closeModal} isOpen={modalIsOpen}>
            <div>Register</div>
          </Modal>
        )}
      </div>
    </Header>
  );
};
