import React from 'react';
import styled, { css } from 'styled-components';
import { trim } from 'lodash';
import PropTypes from 'prop-types';

const AvatarWrapper = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing(3)};
  height: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  border-radius: 100%;
  background-size: cover;
  background-position: center center;

  ${props =>
    props.size === 'small' &&
    css`
      height: ${({ theme }) => theme.spacing(2)};
      width: ${({ theme }) => theme.spacing(2)};
    `};

  ${props =>
    props.size === 'medium' &&
    css`
      height: ${({ theme }) => theme.spacing(4)};
      width: ${({ theme }) => theme.spacing(4)};
    `};

  ${props =>
    props.size === 'large' &&
    css`
      height: ${({ theme }) => theme.spacing(6)};
      width: ${({ theme }) => theme.spacing(6)};
    `};
`;

const Avatar = ({ firstName, lastName, size, imageUrl, ...props }) => (
  <AvatarWrapper
    size={size}
    style={{ backgroundImage: `url(${imageUrl})` }}
    {...props}
  >
    {!Boolean(imageUrl) && (
      <>
        {trim(firstName).charAt(0)}
        {trim(lastName).charAt(0)}
      </>
    )}
  </AvatarWrapper>
);

Avatar.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  imageUrl: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Avatar.defaultProps = {
  firstName: '',
  lastName: '',
};

export default Avatar;