import React from 'react';
import PropTypes from 'prop-types';

const variantClasses = {
  default: 'bg-white',
  gray: 'bg-gray-50',
};

const Box = ({
  children,
  variant = 'default',
  shadow = false,
  rounded = true,
  padding = 'default',
  className = '',
  ...props
}) => {
  const baseClasses = 'w-full';
  const shadowClasses = shadow ? 'shadow-lg' : '';
  const roundedClasses = rounded ? 'rounded-lg' : '';
  const paddingClasses = padding === 'default' ? 'p-4' : padding;

  const classes = [
    baseClasses,
    variantClasses[variant],
    shadowClasses,
    roundedClasses,
    paddingClasses,
    className,
  ].join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'gray']),
  shadow: PropTypes.bool,
  rounded: PropTypes.bool,
  padding: PropTypes.string,
  className: PropTypes.string,
};

export default Box; 