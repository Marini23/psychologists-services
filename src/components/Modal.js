import Modal from 'react-modal';

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

Modal.setAppElement('#modal-root');

export const ModalWindow = ({ isOpen, isClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={isClose}
      ariaHideApp={false}
    >
      {children}
    </Modal>
  );
};
