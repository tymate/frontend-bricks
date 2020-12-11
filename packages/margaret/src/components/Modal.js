import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { MdClose } from 'react-icons/md';
import { StyledButtonReset } from '../ui';

const StyledModal = styled(ReactModal)`
  position: absolute;
  background-color: #fff;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 2147483646;
  padding: 0;
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  outline: none;
  border: 0;
  width: 500px;
  max-width: calc(100vw - 32px);

  ${props =>
    props.size === 'full' &&
    css`
      width: auto;
    `}

  ${props =>
    props.size === 'medium' &&
    css`
      min-width: 800px;
    `}
  ${props =>
    props.size === 'big' &&
    css`
      width: 1100px;
    `}
`;

ReactModal.setAppElement(document.getElementById('root'));

export const CloseModalTriggerButton = styled(StyledButtonReset)`
  font-size: 1.5em;
  position: absolute;
  z-index: 2;
  top: ${({ theme }) => theme.spacing()};
  right: ${({ theme }) => theme.spacing()};
  color: #c3b8c6;

  ${props =>
    props.variant === 'fullscreen' &&
    css`
      position: fixed;
      border-radius: 100%
      min-height: 32px;
      min-width: 32px;
      color: #fff;
      display: flex
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.separator};
    `}
`;

const ModalTitle = styled.h1`
  margin: 0;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing(1.5)};
  font-size: 24px;
  text-align: center;
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  line-height: 1.5;

  ${({ variant }) =>
    variant === 'fullscreen' &&
    `
      height: 100%;
      max-height: 100%;
      width: 100%;
    `}

  ${({ size, variant }) =>
    (size === 'full' || variant === 'fullscreen') &&
    `
      padding: 0;
    `}
`;

const Modal = ({
  title,
  children,
  isOpen,
  onRequestClose,
  variant,
  background,
  overflow,
  size,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'auto';
    }

    return () => {
      document.documentElement.style.overflowY = 'auto';
    };
  }, [isOpen]);

  const overlayStyles = {
    zIndex: 2147483646,
    backgroundColor: background,
  };

  return (
    <StyledModal
      size={size}
      variant={variant}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          ...overlayStyles,
        },
        content: { overflow },
      }}
    >
      <Content variant={variant}>
        {title && <ModalTitle>{title}</ModalTitle>}

        {onRequestClose && (
          <CloseModalTriggerButton onClick={onRequestClose} variant={variant}>
            <MdClose />
          </CloseModalTriggerButton>
        )}

        {children}
      </Content>
    </StyledModal>
  );
};

Modal.defaultProps = {
  background: 'rgba(0, 0, 0, 0.8)',
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['medium', 'big', 'full']),
  variant: PropTypes.oneOf(['fullscreen']),
  background: PropTypes.string,
};

export default Modal;
