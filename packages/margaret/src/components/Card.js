import React from 'react';
import {
  CardWrapper,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardHeader,
  CardDescription,
  CardFooter,
} from '../ui';
import PropTypes from 'prop-types';

const Card = ({
  title,
  subtitle,
  fixedSize,
  children,
  variant,
  alignment,
  thumbnailUrl,
  header,
  footer,
  description,
  ...props
}) => (
  <CardWrapper fixedSize={fixedSize} variant={variant} {...props}>
    {(thumbnailUrl || header) && (
      <CardHeader thumbnailUrl={thumbnailUrl}></CardHeader>
    )}
    <CardContent alignment={alignment}>
      {title && <CardTitle>{title}</CardTitle>}
      {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
      {description && <CardDescription>{description}</CardDescription>}
      {children}
    </CardContent>
    {footer && <CardFooter>{footer}</CardFooter>}
  </CardWrapper>
);

Card.defaultProps = {
  alignment: 'left',
};

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  fixedSize: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  variant: PropTypes.oneOf(['raised', 'subtle', 'link']),
  alignment: PropTypes.oneOf(['center']),
  thumbnailUrl: PropTypes.string,
  footer: PropTypes.node,
};

export default Card;
