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
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(4)};

  ${props =>
    props.variant === 'button' &&
    css`
      display: block;
      margin-bottom: 0;
      transform: scale(0.5);
      margin-right: ${({ theme }) => theme.spacing(1.5)};
      margin-top: 0;
    `};
`;

const Spinner = ({ variant }) => (
  <Wrapper variant={variant}>
    <Spin className="ball-spin-fade-loader" variant={variant}>
      {[...Array(8)].map((div, index) => (
        <div key={index} />
      ))}
    </Spin>
  </Wrapper>
);

export default Spinner;
