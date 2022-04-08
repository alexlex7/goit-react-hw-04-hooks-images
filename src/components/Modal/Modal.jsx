import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer, ModalImage } from './Modal.styled';
import { useEffect, useCallback } from 'react';

const modalRoot = document.querySelector('#modal-root');

function Modal({ image, toggleModal }) {
  const handleKeydown = useCallback(
    e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    },
    [toggleModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleClick}>
      <ModalContainer>
        <ModalImage src={image} alt="photo" />
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
