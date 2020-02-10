import React from 'react';
import styled, { css } from 'styled-components';

export const Input = styled.input`
padding: ${({ theme }) => theme.spacing(0.5)}
  ${({ theme }) => theme.spacing()};
border: 1px solid ${({ theme }) => theme.separator};
flex: 1;
border-radius: 8px;
transition: border-color 100ms ease;
min-height: 48px;
width: 100%;

${({ type }) =>
  type === 'password' &&
  `
    padding-right: 44px;
  `}

&:not([disabled]):focus,
&:not([disabled]):active {
  outline: none;
  border: 1px solid ${({ theme }) => theme.darkSeparator};
}

&:disabled {
  background-color: ${({ theme }) => theme.disabled};
  color: #6d6d6d;
}

::placeholder {
  color: ${({ theme }) => theme.textLight};
}

${({ variant, theme }) =>
  variant === 'input' &&
  `
    border-radius: 4px 0 0 4px;
    border-right: none;
    border: 1px solid ${theme.primary};

    &:not([disabled]):focus,
    &:not([disabled]):active {
      outline: none;
      background-color: #FEEEC9;
      border: 1px solid ${theme.primary};

    }
  `}

${({ hasError, theme }) =>
  hasError &&
  `
    &,
    &:hover,
    &:active {
      border: 1px solid ${theme.error};
    }
  `}

${({ hasFixedWidth }) =>
  hasFixedWidth &&
  `
    min-width: 300px
  `}


${({ isBare }) =>
  isBare &&
  css`
    &,
    &:not([disabled]):focus,
    &:not([disabled]):active {
      background-color: transparent;
      outline: none;
      border: 0;
    }
  `}
`;

export const SearchInput = styled(Input)`
  padding: ${({ theme }) => theme.spacing(0.5)}
    ${({ theme }) => theme.spacing(2)};
  border-radius: 8px;
`;
