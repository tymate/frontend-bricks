import React from 'react';
import styled, { css } from 'styled-components';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';

export const BASE = 1;
export const spacing = (input = 1) => `${input}rem`;

export const VIEWPORT_SIZES = {
  desktop: 1200,
  medium: 1000,
  tablet: 750,
};

const mediaQuery = (...query) => (...rules) =>
  css`
    @media ${css(...query)} {
      ${css(...rules)};
    }
  `;

export const media = {
  tablet: mediaQuery`(min-width: ${VIEWPORT_SIZES.tablet / 16}em)`,
  medium: mediaQuery`(min-width: ${VIEWPORT_SIZES.medium / 16}em)`,
  desktop: mediaQuery`(min-width: ${VIEWPORT_SIZES.desktop / 16}em)`,
};

export const ButtonReset = styled.button`
  border: 0;
  background-color: transparent;
  text-decoration: none;
  color: inherit;
  outline: none;
  cursor: pointer;
  padding: 0;

  ${props =>
    props.size === 'full' &&
    css`
      width: 100%;
    `}
`;

const ButtonWrapper = styled(ButtonReset)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  line-height: 1;
  transition: background 150ms ease;
  white-space: nowrap;
  font-size: 1em;
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
  padding: ${spacing(0.825)} ${spacing(1.5)};

  &:hover {
    color: ${({ theme }) => theme.primaryLight};
  }

  > svg {
    margin-right: ${spacing(0.25)};
  }

  ${props => console.log}
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

    ${props =>
      props.variant &&
      css`
        background-color: ${({ theme }) => theme.disabled};
        color: rgba(0, 0, 0, 0.38);
        box-shadow: none;
      `}

      ${props =>
        props.variant &&
        css`
          color: ${({ theme }) => theme.textLight};
          box-shadow: none;
        `}
  }
`;

export const Button = ({ isLoading, children, icon, as, ...props }) => (
  <ButtonWrapper
    {...props}
    as={Boolean(props.to) ? Link : Boolean(as) ? as : null}
    disabled={props.disabled || isLoading}
  >
    {isLoading && (
      <Spinner style={{ marginRight: spacing() }} variant="button" />
    )}
    {!isLoading && icon}
    {children}
  </ButtonWrapper>
);

export const Container = styled.div`
  padding-left: ${({ theme }) => theme.spacing()};
  padding-right: ${({ theme }) => theme.spacing()};
  max-width: 100%;
  width: 75rem;
  margin-left: auto;
  margin-right: auto;

  ${media.tablet`
    padding-left: ${({ theme }) => theme.spacing(2)};
    padding-right: ${({ theme }) => theme.spacing(2)};
  `}

  ${props =>
    props.size === 'narrow' &&
    css`
      width: 45rem;
    `}

  ${props =>
    props.variant === 'bare' &&
    css`
      padding-left: 0;
      padding-right: 0;

      ${media.tablet`
        padding-left: 0;
        padding-right: 0;
      `}
    `}

  ${props =>
    props.variant === 'main' &&
    css`
      padding-top: ${({ theme }) => theme.spacing(2)};
      padding-bottom: ${({ theme }) => theme.spacing(2)};
    `}

    ${props =>
      props.alignment === 'center' &&
      css`
        display: flex;
        align-items: center;
        flex-direction: column;
      `}
`;

export const List = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style-type: none;
`;
export const Buttons = styled.div`
  margin-left: ${spacing(-1)};
  margin-top: ${spacing(-1)};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > * {
    margin-left: ${spacing()};
    margin-top: ${spacing()};
  }

  ${props =>
    props.alignment === 'right' &&
    css`
      justify-content: flex-end;
    `};

  ${props =>
    props.alignment === 'left' &&
    css`
      justify-content: flex-start;
    `}

  ${props =>
    props.hasTopMargin &&
    css`
      margin-top: ${({ theme }) => theme.spacing()};
    `};

  ${props =>
    props.spacingSize === 'small' &&
    css`
      margin-left: ${spacing(-0.5)};
      margin-top: ${spacing(-0.5)};

      > * {
        margin-left: ${spacing(0.5)};
        margin-top: ${spacing(0.5)};
      }
    `}

  ${props =>
    props.spacingSize === 'big' &&
    css`
      margin-left: ${spacing(-2)};
      margin-top: ${spacing(-2)};

      > * {
        margin-left: ${spacing(2)};
        margin-top: ${spacing(2)};
      }
    `}
`;
