import React from 'react';
import styled, { css } from 'styled-components';
import 'loaders.css';

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

export default Spinner;
