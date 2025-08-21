import React from 'react';
import PropTypes from 'prop-types';
import ButtonContent from './ButtonContent';
import { getButtonClasses } from './styles';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  iconOnly = false,
  fullWidth = false,
  loading = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const isDisabled = disabled || loading;
  const classes = getButtonClasses(size, variant, fullWidth, iconOnly, className);

  return (
    <button 
      className={classes} 
      disabled={isDisabled}
      {...props}
    >
      <ButtonContent
        icon={icon}
        iconPosition={iconPosition}
        iconOnly={iconOnly}
        loading={loading}
      >
        {iconOnly ? null : children}
      </ButtonContent>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'outline', 'ghost', 'transparent', 'bordered', 'premium']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  iconOnly: PropTypes.bool,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button; 