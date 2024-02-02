import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Modal from 'react-modal';

const modalRoot = document.querySelector(`#modal-root`);

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const ModalWindow = ({ isClose, children, isOpen }) => {
  useEffect(() => {
    const isCloseEscape = e => {
      if (e.code === `Escape`) {
        isClose();
      }
    };
    window.addEventListener('keydown', isCloseEscape);

    return () => {
      window.removeEventListener('keydown', isCloseEscape);
    };
  }, [isClose]);

  return createPortal(
    <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      style={customStyles}
      ariaHideApp={false}
    >
      {children}
    </Modal>,
    modalRoot
  );
};
