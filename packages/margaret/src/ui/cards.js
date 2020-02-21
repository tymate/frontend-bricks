import styled, { css } from 'styled-components';
import { media } from './utils';

export const CardWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.separator};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;

  ${({ fixedSize, theme }) =>
    fixedSize &&
    `
      width: ${fixedSize}px;
      max-width: calc(100vw - ${theme.spacing(2)});
    `}

  ${({ isSpaced, theme }) =>
    isSpaced &&
    `
      margin-top: ${theme.spacing(2)};
    `}

  ${({ gridColumnStart }) =>
    gridColumnStart &&
    css`
      ${media.desktop`
      grid-column-start: ${({ gridColumnStart }) => gridColumnStart}`};
    `}

  ${props =>
    props.gridColumnEnd &&
    css`
      ${media.desktop`
      grid-column-end: ${({ gridColumnEnd }) => gridColumnEnd}`};
    `}

  ${({ variant }) =>
    variant === 'raised' &&
    `
      box-shadow: 0 2px 24px rgba(0, 0, 0, 0.24);
      border: 0;
    `}

  ${({ variant, theme }) =>
    variant === 'subtle' &&
    `
      box-shadow: inset 0 -1px 0 0 ${theme.separator};
      border: 0;
    `}

    ${({ variant, theme }) =>
      variant === 'link' &&
      `
        cursor: pointer;
        box-shadow: 0 2px 4px ${theme.boxShadowColor};
        &:hover {
          box-shadow: 0 4px 8px ${theme.boxShadowColorHover};
        }
      `}
`;

export const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing()};

  ${({ variant }) =>
    variant === 'padded' &&
    css`
      padding: ${({ theme }) => theme.spacing()};

      ${media.tablet`
      padding: ${({ theme }) => theme.spacing(2)}`};
    `}

  ${({ alignment }) =>
    alignment === 'center' &&
    `
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;

export const CardTitle = styled.h3`
  font-weight: bold;
  margin: 0;
`;

export const CardSubtitle = styled.h4`
  margin: 0;
  margin-top: ${({ theme }) => theme.spacing(0.5)};
  color: ${({ theme }) => theme.textLight};
`;

export const CardDescription = styled.p`
  margin-top: ${({ theme }) => theme.spacing(0.25)};
  margin-bottom: 0;

  ${({ variant }) =>
    variant === 'oneLiner' &&
    `
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;

export const CardHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardHeader = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacing()};
  background-size: cover;
  background-position: center center;

  ${({ thumbnailUrl }) =>
    thumbnailUrl &&
    `
      padding: 0;
      padding-top: 56.25%;
      background-image: url(${thumbnailUrl});
  `}

  + ${CardContent} {
    border-top: 1px solid ${({ theme }) => theme.separator};
  }

  ${({ variant }) =>
    variant === 'centered' &&
    `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
`;

export const CardFooter = styled.div`
  border-top: 1px solid ${({ theme }) => theme.separator};
  padding: ${({ theme }) => theme.spacing()};
`;
