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

export const fontSize = {
  h1: css`
    font-size: 1.875rem;
    line-height: 2.3125rem;
    letter-spacing: 0.012rem;

    ${media.tablet`
        font-size: 2.375rem;
        line-height: 2.875rem;
        letter-spacing: 0.011em;
      `}

    ${media.desktop`
        font-size: 3rem;
        line-height: 3.5rem;
        letter-spacing: .008em;
      `}
  `,

  h1Mega: css`
    font-size: 2.5rem;
    line-height: 3rem;
    letter-spacing: 0.011em;

    ${media.tablet`
        font-size: 3rem;
        line-height: 3.5625rem;
        letter-spacing: 0.008em;
      `}

    ${media.desktop`
        font-size: 3.75rem;
        line-height: 4.375rem;
        letter-spacing: .004em;
      `}
  `,

  h2: css`
    font-size: 1.5rem;
    line-height: 1.875rem;
    letter-spacing: 0.015em;

    ${media.tablet`
        font-size: 1.75rem;
        line-height: 2.125rem;
        letter-spacing: 0.013em;
      `}

    ${media.desktop`
        font-size: 2.125rem;
        line-height: 2.5625rem;
        letter-spacing: .011em;
      `}
  `,

  h3: css`
    font-size: 1.375rem;
    line-height: 1.75rem;
    letter-spacing: 0.016em;

    ${media.tablet`
        font-size: 1.5rem;
        line-height: 1.875rem;
        letter-spacing: 0.015em;
      `}

    ${media.desktop`
        font-size: 1.625rem;
        line-height: 2rem;
        letter-spacing: .014em;
      `}
  `,

  body: css`
    font-size: 1.0625rem;
    line-height: 1.375rem;
    letter-spacing: -0.024em;

    ${media.tablet`
        font-size: 1.125rem;
        line-height: 1.5rem;
        letter-spacing: -.02em;
      `}

    ${media.desktop`
        font-size: 1.125rem;
        line-height: 1.5rem;
        letter-spacing: -.02em;
      `}
  `,

  bodySmall: css`
    font-size: 0.9375rem;
    line-height: 1.25rem;
    letter-spacing: -0.15em;

    ${media.desktop`
        font-size: 1rem;
        line-height: 1.3125rem;
        letter-spacing: -.02em;
      `}
  `,
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
  min-width: 120px;
  font-size: 1em;
  min-height: 43px;
  border-radius: 99px;
  position: relative;
  padding: ${spacing(0.5)} ${spacing(1)};

  &:hover {
    background-color: ${({ theme }) => theme.background};
  }

  ${props =>
    props.variant === 'primary' &&
    css`
      box-shadow: none;
      background: ${({ theme }) => theme.primary};
      color: #fff;
      padding: ${spacing(0.75)} ${spacing(1.5)};

      &:hover {
        background: ${({ theme }) => theme.primaryLight};
      }
    `};

  ${props =>
    props.variant === 'outline' &&
    css`
      color: ${({ theme }) => theme.textLight};
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.textLight};
      padding: ${spacing(0.5)} ${spacing(1)};

      &:hover {
        color: ${({ theme }) => theme.textLight};
        background-color: transparent;
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.textLight};
      }
    `}

  ${props =>
    props.variant === 'square' &&
    css`
      color: rgba(0, 0, 0, 0.87);
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.separator};
      padding: ${spacing(0.5)} ${spacing(1)};
      border-radius: 4px;
      background-color: ${({ theme }) => theme.background};

      svg {
        font-size: 1.5em;
      }

      &:hover {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.textLight};
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.textLight};
      }
    `}

  > svg {
    margin-right: ${spacing(0.25)};
  }

  ${props =>
    props.size === 'full' &&
    css`
      padding: ${spacing(0.875)} ${spacing()};
      min-width: 120px;
      width: 100%;
    `};

  ${props =>
    props.size === 'big' &&
    css`
      font-size: 1.5em;
    `}

  ${props =>
    props.variant === 'textButton' &&
    css`
      color: ${({ theme }) => theme.text};
      padding: 0;

      &:hover {
        color: ${({ theme }) => theme.primary};
        background-color: transparent;
      }
    `}

  &:disabled {
    background-color: ${({ theme }) => theme.boxShadowColor};
    color: rgba(0, 0, 0, 0.38);
    cursor: not-allowed;
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
