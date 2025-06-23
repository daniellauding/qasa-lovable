import React from 'react';
import PropTypes from 'prop-types';
import { 
  variantClasses, 
  colorClasses, 
  weightClasses,
  typographyVariants,
  typographyColors,
  typographyWeights
} from './styles.js';

const Typography = ({
  variant = 'body-md',
  color = 'default',
  weight,
  component,
  className = '',
  children,
  ...props
}) => {
  const Component = component || (variant.startsWith('h') ? variant : 'p');
  
  const classes = [
    variantClasses[variant],
    colorClasses[color],
    weight && weightClasses[weight],
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf(typographyVariants),
  color: PropTypes.oneOf(typographyColors),
  weight: PropTypes.oneOf(typographyWeights),
  component: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Typography; 