import React from 'react';
import { StyledStack, StyledButtonReset, StyledList } from '../ui';
import PropTypes from 'prop-types';

export const ButtonReset = props => <StyledButtonReset {...props} />;

ButtonReset.propTypes = {
  size: PropTypes.oneOf(['full']),
};

export const Stack = props => <StyledStack {...props} />;

Stack.defaultProps = {
  direction: 'row',
  gutterSize: 'none',
  alignX: 'flex-start',
  alignY: 'flex-start',
};

Stack.propTypes = {
  direction: PropTypes.oneOfType([
    PropTypes.oneOf(['column', 'row']),
    PropTypes.shape({
      default: PropTypes.oneOf(['column', 'row']),
      tablet: PropTypes.oneOf(['column', 'row']),
      medium: PropTypes.oneOf(['column', 'row']),
      desktop: PropTypes.oneOf(['column', 'row']),
    }),
  ]),
  /**
   * You can add all justify-content and align-items
   * properties
   */
  alignY: PropTypes.oneOfType([
    PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between']),
    PropTypes.shape({
      default: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'space-between',
      ]),
      tablet: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'space-between',
      ]),
      medium: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'space-between',
      ]),
      desktop: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'space-between',
      ]),
    }),
  ]),
  /**
   * You can add all justify-content and align-items
   * properties
   */
  alignX: PropTypes.oneOfType([
    PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between']),
    PropTypes.shape({
      default: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'space-between',
      ]),
      tablet: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'space-between',
      ]),
      medium: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'space-between',
      ]),
      desktop: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'space-between',
      ]),
    }),
  ]),
  size: PropTypes.oneOf(['full']),
  /**
   * This is the size between two elements
   * 1 = 16px
   * */
  gutterSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  marginTop: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  marginBottom: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  marginLeft: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  marginRight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  marginVertical: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  marginHorizontal: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  margin: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  paddingTop: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  paddingBottom: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  paddingLeft: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  paddingRight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  paddingVertical: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  paddingHorizontal: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
};
export const List = props => <StyledList {...props} />;

List.defaultProps = {
  as: 'ul',
  margin: 0,
  padding: 0,
};

List.propTypes = {
  as: PropTypes.string,
  direction: PropTypes.oneOfType([
    PropTypes.oneOf(['column', 'row']),
    PropTypes.shape({
      default: PropTypes.oneOf(['column', 'row']),
      tablet: PropTypes.oneOf(['column', 'row']),
      medium: PropTypes.oneOf(['column', 'row']),
      desktop: PropTypes.oneOf(['column', 'row']),
    }),
  ]),
  /**
   * You can add all justify-content and align-items
   * properties
   */
  alignY: PropTypes.oneOfType([
    PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between']),
    PropTypes.shape({
      default: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'space-between',
      ]),
      tablet: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'space-between',
      ]),
      medium: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'space-between',
      ]),
      desktop: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'space-between',
      ]),
    }),
  ]),
  /**
   * You can add all justify-content and align-items
   * properties
   */
  alignX: PropTypes.oneOfType([
    PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between']),
    PropTypes.shape({
      default: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'space-between',
      ]),
      tablet: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'space-between',
      ]),
      medium: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'space-between',
      ]),
      desktop: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'space-between',
      ]),
    }),
  ]),
  size: PropTypes.oneOf(['full']),
  /**
   * This is the size between two elements
   * 1 = 16px
   * */
  gutterSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  marginTop: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  marginBottom: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  marginLeft: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  marginRight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  marginVertical: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  marginHorizontal: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  margin: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  paddingTop: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  paddingBottom: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  paddingLeft: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  paddingRight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  paddingVertical: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  paddingHorizontal: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      default: PropTypes.number,
      tablet: PropTypes.number,
      medium: PropTypes.number,
      desktop: PropTypes.number,
    }),
  ]),
};
