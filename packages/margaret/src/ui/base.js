import styled, { css } from 'styled-components';
import { media } from './utils';
import { Link } from 'react-router-dom';
import { keys } from 'lodash';

export const Legend = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.textLight};
`;

export const Name = styled.span`
  font-weight: 500;
`;

const getSpacingFromSize = ({ theme, gutterSize }) => {
  if (typeof gutterSize === 'number') {
    return theme.spacing(gutterSize);
  }

  return 0;
};

export const gutterSizes = ({ theme, gutterSize, direction }) => {
  if (typeof gutterSize === 'object') {
    return css`
      margin-${direction}: ${getSpacingFromSize({
      theme,
      gutterSize: gutterSize?.default,
    })};

    ${keys(gutterSize)
      .filter(key => key !== 'default')
      .map(
        breakpoint => media[breakpoint]`
          
          margin-${direction}: ${getSpacingFromSize({
          theme,
          gutterSize: gutterSize[breakpoint],
        })}
        `,
      )};`;
  }

  return css`
    margin-${direction}: ${getSpacingFromSize({ theme, gutterSize })}
  `;
};

export const spacings = props => css`
  ${({ margin }) =>
    (Boolean(margin) || margin === 0) &&
    css`
      margin: ${({ theme }) => theme.spacing(margin)};
    `}

  ${({ marginVertical }) =>
    (Boolean(marginVertical) || marginVertical === 0) &&
    css`
      margin-top: ${({ theme }) => theme.spacing(marginVertical)};
      margin-bottom: ${({ theme }) => theme.spacing(marginVertical)};
    `}

  ${({ marginHorizontal }) =>
    (Boolean(marginHorizontal) || marginHorizontal === 0) &&
    css`
      margin-left: ${({ theme }) => theme.spacing(marginHorizontal)};
      margin-right: ${({ theme }) => theme.spacing(marginHorizontal)};
    `}

  ${({ marginTop }) =>
    (Boolean(marginTop) || marginTop === 0) &&
    css`
      margin-top: ${({ theme }) => theme.spacing(marginTop)};
    `}

  ${({ marginBottom }) =>
    (Boolean(marginBottom) || marginBottom === 0) &&
    css`
      margin-bottom: ${({ theme }) => theme.spacing(marginBottom)};
    `}

  ${({ marginLeft }) =>
    (Boolean(marginLeft) || marginLeft === 0) &&
    css`
      margin-left: ${({ theme }) => theme.spacing(marginLeft)};
    `}

  ${({ marginRight }) =>
    (Boolean(marginRight) || marginRight === 0) &&
    css`
      margin-right: ${({ theme }) => theme.spacing(marginRight)};
    `}

  ${({ padding }) =>
    (Boolean(padding) || padding === 0) &&
    css`
      padding: ${({ theme }) => theme.spacing(padding)};
    `}

  ${({ paddingVertical }) =>
    (Boolean(paddingVertical) || paddingVertical === 0) &&
    css`
      padding-top: ${({ theme }) => theme.spacing(paddingVertical)};
      padding-bottom: ${({ theme }) => theme.spacing(paddingVertical)};
    `}

  ${({ paddingHorizontal }) =>
    (Boolean(paddingHorizontal) || paddingHorizontal === 0) &&
    css`
      padding-left: ${({ theme }) => theme.spacing(paddingHorizontal)};
      padding-right: ${({ theme }) => theme.spacing(paddingHorizontal)};
    `}

  ${({ paddingTop }) =>
    (Boolean(paddingTop) || paddingTop === 0) &&
    css`
      padding-top: ${({ theme }) => theme.spacing(paddingTop)};
    `}

  ${({ paddingBottom }) =>
    (Boolean(paddingBottom) || paddingBottom === 0) &&
    css`
      padding-bottom: ${({ theme }) => theme.spacing(paddingBottom)};
    `}

  ${({ paddingLeft }) =>
    (Boolean(paddingLeft) || paddingLeft === 0) &&
    css`
      padding-left: ${({ theme }) => theme.spacing(paddingLeft)};
    `}

  ${({ paddingRight }) =>
    (Boolean(paddingRight) || paddingRight === 0) &&
    css`
      padding-right: ${({ theme }) => theme.spacing(paddingRight)};
    `}
`;

export const Box = styled.div`
  ${spacings()}

  ${({ size }) =>
    size === 'full' &&
    css`
      width: 100%;
    `}
`;

export const StyledStack = styled(Box)`
  display: flex;
  
  ${({ direction }) =>
    typeof direction === 'string' &&
    css`
      flex-direction: ${({ direction }) => direction};
    `}
  
  ${({ direction }) =>
    typeof direction === 'object' &&
    css`
      flex-direction: ${({ direction }) => direction?.default};
      align-items: ${({ alignX, alignY }) =>
        direction?.default === 'row'
          ? typeof alignY === 'object'
            ? alignY?.default
            : alignY
          : typeof alignX === 'object'
          ? alignX?.default
          : alignX};
      justify-content: ${({ alignX, alignY }) =>
        direction?.default === 'row'
          ? typeof alignX === 'object'
            ? alignX?.default
            : alignX
          : typeof alignY === 'object'
          ? alignY?.default
          : alignY};

      > * + * {
        ${({ theme, gutterSize }) =>
          gutterSizes({
            theme,
            gutterSize,
            direction: direction?.default === 'column' ? 'top' : 'left',
          })};
      }

      ${keys(direction)
        .filter(key => key !== 'default')
        .map(
          breakpoint => media[breakpoint]`
            flex-direction: ${({ direction }) => direction[breakpoint]};
            align-items: ${({ alignX, alignY }) =>
              direction[breakpoint] === 'row'
                ? typeof alignY === 'object'
                  ? alignY[breakpoint]
                  : alignY
                : typeof alignX === 'object'
                ? alignX[breakpoint]
                : alignX};
            justify-content: ${({ alignX, alignY }) =>
              direction[breakpoint] === 'row'
                ? typeof alignX === 'object'
                  ? alignX[breakpoint]
                  : alignX
                : typeof alignY === 'object'
                ? alignY[breakpoint]
                : alignY};

            > * + * {
              ${({ theme, gutterSize }) =>
                gutterSizes({
                  theme,
                  gutterSize: 0,
                  direction:
                    direction[breakpoint] === 'column' ? 'left' : 'top',
                })};

              ${({ theme, gutterSize }) =>
                gutterSizes({
                  theme,
                  gutterSize,
                  direction:
                    direction[breakpoint] === 'column' ? 'top' : 'left',
                })};
                
              align-items: ${({ alignX, alignY }) =>
                direction[breakpoint] === 'column' ? alignX : alignY};
              justify-content: ${({ alignX, alignY }) =>
                direction[breakpoint] === 'column' ? alignY : alignX};
            }
          `,
        )}
    `}

  ${({ direction }) =>
    direction === 'row' &&
    css`
      align-items: ${({ alignY }) => alignY};
      justify-content: ${({ alignX }) => alignX};

      > * + * {
        ${({ theme, gutterSize }) =>
          gutterSizes({ theme, gutterSize, direction: 'left' })};
      }

      ${({ variant }) =>
        variant === 'multiLine' &&
        css`
          flex-wrap: wrap;

          ${({ theme, gutterSize }) =>
            gutterSizes({
              theme,
              gutterSize: -1 * gutterSize,
              direction: 'left',
            })};
          ${({ theme, gutterSize }) =>
            gutterSizes({
              theme,
              gutterSize: -1 * gutterSize,
              direction: 'top',
            })};

          > * {
            ${({ theme, gutterSize }) =>
              gutterSizes({ theme, gutterSize, direction: 'left' })};
            ${({ theme, gutterSize }) =>
              gutterSizes({ theme, gutterSize, direction: 'top' })};
          }
        `}
    `}

  ${({ direction }) =>
    direction === 'column' &&
    css`
      align-items: ${({ alignX }) => alignX};
      justify-content: ${({ alignY }) => alignY};

      > * + * {
        ${({ theme, gutterSize }) =>
          gutterSizes({ theme, gutterSize, direction: 'top' })};
      }
    `}
`;

export const StyledList = styled(StyledStack)`
  list-style-type: none;
`;

export const InlineList = styled(StyledList)`
  flex-wrap: wrap;
`;

InlineList.defaultProps = {
  direction: 'row',
  marginTop: 0,
  marginBottom: 0,
};

export const Subtitle = styled(StyledStack)`
  font-size: 1.189em;
  font-weight: 600;
`;

Subtitle.defaultProps = {
  marginTop: 2,
  marginBottom: 0.5,
};

export const StyledButtonReset = styled.button`
  border: 0;
  background-color: transparent;
  text-decoration: none;
  color: inherit;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: inherit;
  font-family: inherit;

  ${({ size }) =>
    size === 'full' &&
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
    props.size === 'full' &&
    css`
      width: 100%;
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

      ${media.tablet`
        padding-top: ${({ theme }) => theme.spacing()};
        padding-bottom: ${({ theme }) => theme.spacing()};
      `}
    `}

    ${props =>
      props.alignment === 'center' &&
      css`
        display: flex;
        align-items: center;
        flex-direction: column;
      `}
`;

export const Buttons = styled(Box)`
  margin-left: ${({ theme }) => theme.spacing(-1)};
  margin-top: ${({ theme }) => theme.spacing(-1)};
  display: flex;
  justify-content: ${({ theme }) => theme.buttonsDefaultAlignX};
  flex-wrap: wrap;

  > * {
    margin-left: ${({ theme }) => theme.spacing()};
    margin-top: ${({ theme }) => theme.spacing()};
  }

  ${({ alignX }) =>
    Boolean(alignX) &&
    css`
      justify-content: ${({ alignX }) => alignX};
    `}

  ${({ alignY }) =>
    Boolean(alignY) &&
    css`
      align-items: ${({ alignY }) => alignY};
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
