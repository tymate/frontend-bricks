import styled, { css } from 'styled-components';
import { media } from './';
import { fontSize } from './typography';

export const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.separator};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;

  ${props =>
    props.size === 'fixed' &&
    css`
      width: 550px;
      max-width: calc(100vw - ${({ theme }) => theme.spacing(2)});
    `}

  ${props =>
    props.isSpaced &&
    css`
      margin-top: ${({ theme }) => theme.spacing(2)};
    `}

  ${props =>
    props.gridColumnStart &&
    css`
      ${media.desktop`grid-column-start: ${props => props.gridColumnStart}`};
    `}

  ${props =>
    props.gridColumnEnd &&
    css`
      ${media.desktop`grid-column-end: ${props => props.gridColumnEnd}`};
    `}

  ${props =>
    props.variant === 'raised' &&
    css`
      padding: ${({ theme }) => theme.spacing()};
      box-shadow: 0 2px 24px rgba(0, 0, 0, 0.24);
      border: 0;

      ${media.tablet`padding: ${({ theme }) => theme.spacing(2)}`};
    `}

  ${props =>
    props.variant === 'subtle' &&
    css`
      box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.separator};
      border: 0;
    `}

    ${props =>
      props.hasLink &&
      css`
        box-shadow: 0 2px 4px ${({ theme }) => theme.boxShadowColor};
        &:hover {
          box-shadow: 0 4px 8px ${({ theme }) => theme.boxShadowColorHover};
        }
      `}
`;

export const CardContent = styled.div`
  padding:  ${({ theme }) => theme.spacing()};

  ${props =>
    props.variant === 'padded' &&
    css`
      padding: ${({ theme }) => theme.spacing()};

      ${media.tablet`padding: ${({ theme }) => theme.spacing(2)}`};
    `}

  ${props =>
    props.variant === 'semiPadded' &&
    css`
      padding: ${({ theme }) => theme.spacing()};
    `}
  
  ${props =>
    props.alignment === 'center' &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;

export const CardTitle = styled.h3`
  ${fontSize.h3}
  font-weight: bold;
  margin: 0;
`;

export const CardSubtitle = styled.h4`
  margin: 0;
  margin-top: ${({ theme }) => theme.spacing(0.5)};
  ${fontSize.h4}
  color: ${({ theme }) => theme.textLight};
`;

export const CardDescription = styled.p`
  margin-top: ${({ theme }) => theme.spacing(0.25)};
  margin-bottom: 0;

  ${({ variant }) =>
    variant === 'oneLiner' &&
    css`
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

  + ${CardContent} {
    border-top: 1px solid ${({ theme }) => theme.separator};
  }

  ${props =>
    props.hasMinimumHeight &&
    css`
      height: 100px;
    `}

  ${props =>
    props.variant === 'centered' &&
    css`
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
