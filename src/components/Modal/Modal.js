import Modal from 'react-modal';
import './Modal.css';
import { IoCloseOutline } from 'react-icons/io5';
Modal.setAppElement('#modal-root');

export const ModalWindow = ({ isOpen, isClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      ariaHideApp={false}
      overlayClassName={'modal-overlay'}
      className={'modal-content'}
    >
      <IoCloseOutline
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
        }}
        size="32px"
        color="black"
        onClick={isClose}
      />
      {children}
    </Modal>
  );
};
