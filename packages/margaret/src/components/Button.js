import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledButtonReset } from '../ui';
import Spinner from './Spinner';

const ButtonWrapper = styled(StyledButtonReset)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  line-height: 1;
  transition: background 150ms ease;
  white-space: nowrap;
  font-size: 1em;
  border-radius: ${({ theme }) => theme.borderButtonRadius};
  position: relative;
  padding: ${({ theme }) => theme.spacing(0.825)} ${({ theme }) =>
  theme.spacing(1.5)};

  &:hover {
    color: ${({ theme }) => theme.primaryLight};
  }

  > svg {
    margin-right: ${({ theme }) => theme.spacing(0.25)};
  }

  ${props =>
    props.variant === 'primary' &&
    css`
      box-shadow: none;
      background: ${({ theme }) => theme.primary};
      color: #fff;

      &:hover {
        background: ${({ theme }) => theme.primaryLight};
        color: #fff;
      }
    `};

  ${props =>
    props.variant === 'secondary' &&
    css`
      box-shadow: none;
      background: ${({ theme }) => theme.secondary};
      color: #fff;

      &:hover {
        background: ${({ theme }) => theme.secondaryLight};
        color: #fff;
      }
    `};

  ${props =>
    props.variant === 'outline' &&
    css`
      color: ${({ theme }) => theme.secondary};
      box-shadow: inset 0 0 0 2px ${({ theme }) => theme.secondary};

      &:hover {
        color: ${({ theme }) => theme.secondaryLight};
        box-shadow: inset 0 0 0 2px ${({ theme }) => theme.secondaryLight};
      }
    `}

  ${props =>
    props.isLoading &&
    css`
      padding-left: ${({ theme }) => theme.spacing(1.5)};
    `}

  ${props =>
    props.size === 'full' &&
    css`
      width: 100%;
    `};

  ${props =>
    props.size === 'big' &&
    css`
      font-size: 1.5em;
    `}

  ${props =>
    props.size === 'fixed' &&
    css`
      min-width: 220px;
    `}

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.disabled};
    color: rgba(0, 0, 0, 0.38);
    box-shadow: none;
    color: ${({ theme }) => theme.textLight};
    box-shadow: none;
  }
`;

const Button = ({ isLoading, children, icon, as, ...props }) => (
  <ButtonWrapper
    {...props}
    as={Boolean(props.to) ? Link : Boolean(as) ? as : null}
    disabled={props.disabled || isLoading}
  >
    {isLoading && <Spinner variant="button" />}
    {!isLoading && icon}
    {children}
  </ButtonWrapper>
);

Button.propTypes = {
  /**
   * Displays the spinner & disables the button
   * */
  isLoading: PropTypes.bool,
  /**
   * Changes the appearance of the button
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  disabled: PropTypes.bool,
  /**
   * If this prop is set, the button acts like a link,
   * and cannot be disabled
   */
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  size: PropTypes.oneOf(['auto', 'full', 'fixed', 'big']),
};

export default Button;
