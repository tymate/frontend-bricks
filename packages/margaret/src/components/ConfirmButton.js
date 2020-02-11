import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Buttons } from '../ui';
import Button from './Button';
import Modal from './Modal';

const ConfirmButton = ({
  variant,
  disabled,
  children,
  modalContent,
  modalTitle,
  onSubmit,
  modalCancelTitle,
  modalSubmitTitle,
}) => {
  const [modalIsShown, setModalIsShown] = useState(false);

  return (
    <>
      <Button
        onClick={() => setModalIsShown(true)}
        variant={variant}
        disabled={disabled}
      >
        {children}
      </Button>
      <Modal
        onRequestClose={() => setModalIsShown(false)}
        isOpen={modalIsShown}
        title={modalTitle}
      >
        {modalContent}
        <Buttons style={{ marginTop: 32 }}>
          <Button onClick={() => setModalIsShown(false)} variant="phantom">
            {modalCancelTitle}
          </Button>
          <Button
            onClick={() => {
              onSubmit();
              setModalIsShown(false);
            }}
            variant="primary"
          >
            {modalSubmitTitle}
          </Button>
        </Buttons>
      </Modal>
    </>
  );
};

ConfirmButton.defaultProps = {
  modalCancelTitle: 'Cancel',
  modalSubmitTitle: 'Validate',
};

ConfirmButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
  ]),
  modalCancelTitle: PropTypes.string,
  modalSubmitTitle: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default ConfirmButton;
