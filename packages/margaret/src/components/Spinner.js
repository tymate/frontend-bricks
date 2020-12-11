import React from 'react';
import styled, { css } from 'styled-components';
import 'loaders.css';
import PropTypes from 'prop-types';

const Spin = styled.div`
  > div {
    background-color: ${({ theme }) => theme.primary};

    ${props =>
      props.variant === 'button' &&
      css`
        background-color: rgba(0, 0, 0, 0.38);
      `};
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;

  ${props =>
    props.variant === 'button' &&
    css`
      display: block;
      transform: scale(0.4);
      margin-right: ${({ theme }) => theme.spacing(1.5)};
      min-height: 0;
    `};
`;

const Spinner = ({ loader, variant }) => (
  <Wrapper variant={variant}>
    <Spin className={loader} variant={variant}>
      {[...Array(8)].map((div, index) => (
        <div key={index} />
      ))}
    </Spin>
  </Wrapper>
);

Spinner.defaultProps = {
  loader: 'ball-spin-fade-loader',
};

Spinner.propTypes = {
  loader: PropTypes.oneOf([
    'ball-pulse',
    'ball-pulse-sync',
    'ball-scale',
    'ball-scale-random',
    'ball-rotate',
    'ball-clip-rotate',
    'ball-clip-rotate-pulse',
    'ball-clip-rotate-multiple',
    'ball-scale-ripple',
    'ball-scale-ripple-multiple',
    'ball-beat',
    'ball-scale-multiple',
    'ball-triangle-path',
    'ball-pulse-rise',
    'ball-grid-beat',
    'ball-grid-pulse',
    'ball-spin-fade-loader',
    'ball-spin-loader',
    'ball-zig-zag',
    'ball-zig-zag-deflect',
    'line-scale',
    'line-scale-random',
    'line-scale-pulse-out',
    'line-scale-pulse-out-rapid',
    'line-spin-fade-loader',
    'triangle-skew-spin',
    'square-spin',
    'pacman',
    'cube-transition',
    'semi-circle-spin',
  ]),
};

export default Spinner;
