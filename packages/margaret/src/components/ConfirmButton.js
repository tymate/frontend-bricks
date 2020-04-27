import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Buttons, ButtonReset } from '../ui/base';
import Button from './Button';
import Modal from './Modal';

const ConfirmButton = ({
  modalContent,
  modalTitle,
  onSubmit,
  modalCancelTitle,
  modalSubmitTitle,
  confirmElement = <Button as="span">Oui, supprimer</Button>,
}) => {
  const [modalIsShown, setModalIsShown] = useState(false);

  return (
    <>
      <ButtonReset onClick={() => setModalIsShown(true)}>
        {confirmElement}
      </ButtonReset>
      <Modal
        onRequestClose={() => setModalIsShown(false)}
        isOpen={modalIsShown}
        title={modalTitle}
        style={{ textAlign: 'center' }}
      >
        {modalContent}
        <Buttons style={{ marginTop: 32 }} alignX="center">
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
