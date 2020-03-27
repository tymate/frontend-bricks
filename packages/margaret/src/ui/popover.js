import styled, { css } from 'styled-components';
import { ButtonReset } from './base';

export const PopoverContainer = styled.div`
  position: relative;
`;

export const PopoverMenu = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + ${({ theme }) => theme.spacing(0.25)});
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  min-width: 100%;
  width: 200px;
  background-color: #fff;
  max-height: 200px;
  overflow-y: auto;

  ${({ size }) =>
    size === 'auto' &&
    `
      width: auto
    `}

  ${({ alignment }) =>
    alignment === 'right' &&
    `
      left: auto;
      right: 0
    `};

  ${({ variant, theme }) =>
    variant === 'tooltip' &&
    `
      padding: ${theme.spacing()};
      max-height: 300px;
      width: 300px;
      top: auto;
      bottom: calc(100% + ${theme.spacing(1.5)});
      left: 50%;
      right: auto;
      transform: translateX(-50%);
    `}
`;

export const PopoverItemButton = styled(ButtonReset)`
  display: flex;
  text-align: center;
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing(0.75)}
    ${({ theme }) => theme.spacing()};
  cursor: pointer;
  text-align: left;
  line-height: 1.1;
  font-size: 1rem;
  color: ${({ theme }) => theme.textLight};
  display: flex;
  align-items: center;
  svg {
    margin-right: ${({ theme }) => theme.spacing(0.5)};
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  ${props =>
    props.isActive &&
    css`
      color: ${({ theme }) => theme.primary};
    `}
`;

export const PopoverItem = styled.div`
  display: flex;
  flex-direction: column;
`;
