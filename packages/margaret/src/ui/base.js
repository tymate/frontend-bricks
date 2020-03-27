import styled, { css } from 'styled-components';
import { media } from './utils';
import { Link } from 'react-router-dom';

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

export const RawLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

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
  margin-left: ${({ theme }) => theme.spacing(-1)};
  margin-top: ${({ theme }) => theme.spacing(-1)};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > * {
    margin-left: ${({ theme }) => theme.spacing()};
    margin-top: ${({ theme }) => theme.spacing()};
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
      margin-left: ${({ theme }) => theme.spacing(-0.5)};
      margin-top: ${({ theme }) => theme.spacing(-0.5)};

      > * {
        margin-left: ${({ theme }) => theme.spacing(0.5)};
        margin-top: ${({ theme }) => theme.spacing(0.5)};
      }
    `}

  ${props =>
    props.spacingSize === 'big' &&
    css`
      margin-left: ${({ theme }) => theme.spacing(-2)};
      margin-top: ${({ theme }) => theme.spacing(-2)};

      > * {
        margin-left: ${({ theme }) => theme.spacing(2)};
        margin-top: ${({ theme }) => theme.spacing(2)};
      }
    `}
`;

export const Icon = styled.div`
  font-size: 1.25rem;
  + * {
    margin-left: ${({ theme }) => theme.spacing(0.5)};
  }
`;

export const MediaImage = styled.div`
  display: flex;
`;

export const MediaBody = styled.div`
  flex: 1;
  padding-left: ${({ theme }) => theme.spacing()};

  ${props =>
    props.variant === 'compact' &&
    css`
      padding-left: ${({ theme }) => theme.spacing(0.5)};
    `};
`;

export const Media = styled.div`
  display: flex;
  align-items: flex-start;

  ${({ variant, verticalAlign }) =>
    (variant === 'center' || verticalAlign === 'center') &&
    `
      align-items: center;
    `};

  ${({ isMargedBottom, theme }) =>
    isMargedBottom &&
    `
      margin-bottom: ${({ theme }) => theme.spacing(2)};
    `};

  ${({ size, theme }) =>
    size === 'tight' &&
    `
      ${MediaBody} {
        padding-left: ${({ theme }) => theme.spacing(0.5)};
      }
    `};

  ${({ variant }) =>
    variant === 'inverted' &&
    `
      ${MediaBody} {
        padding-left: 0;
      }
    `}
`;

export const TitleAndAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ hasTopMargin, theme }) =>
    hasTopMargin &&
    `
      margin-top: ${theme.spacing()}
    `}

  ${({ hasBottomMargin, theme }) =>
    hasBottomMargin &&
    `
      margin-bottom: ${theme.spacing()}
    `}

  ${({ hasBottomBorder, theme }) =>
    hasBottomBorder &&
    `
      padding-bottom: ${theme.spacing()};
      border-bottom: 1px solid ${theme.text}
    `}
`;
