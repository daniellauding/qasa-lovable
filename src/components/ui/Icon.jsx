import React from 'react';
import PropTypes from 'prop-types';
import * as HeroIcons from '@heroicons/react/24/outline';

const sizeClasses = {
  xs: 'w-4 h-4',
  sm: 'w-5 h-5',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-10 h-10',
};

const Icon = ({
  name,
  size = 'md',
  className = '',
  ...props
}) => {
  const IconComponent = HeroIcons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const classes = [
    sizeClasses[size],
    className,
  ].filter(Boolean).join(' ');

  return <IconComponent className={classes} {...props} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
};

export default Icon; 