import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ isClose, children, isOpen }) => {
  useEffect(() => {
    const isCloseEscape = e => {
      if (e.code === 'Escape') {
        isClose();
      }
    };
    window.addEventListener('keydown', isCloseEscape);

    return () => {
      window.removeEventListener('keydown', isCloseEscape);
    };
  }, [isClose]);

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      isClose();
    }
  };

  return isOpen && modalRoot
    ? createPortal(
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={handleBackdropClick}
        >
          <div
            style={{
              position: 'relative',
              background: '#F9F9F9',
              padding: '40px',
              borderRadius: '24px',
              width: '541px',
              height: '752px',
            }}
          >
            {children}
          </div>
        </div>,
        modalRoot
      )
    : null;
};
