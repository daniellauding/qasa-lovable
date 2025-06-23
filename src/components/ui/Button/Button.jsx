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
  fullWidth = false,
  loading = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const isDisabled = disabled || loading;
  const classes = getButtonClasses(size, variant, fullWidth, className);

  return (
    <button 
      className={classes} 
      disabled={isDisabled}
      {...props}
    >
      <ButtonContent
        icon={icon}
        iconPosition={iconPosition}
        loading={loading}
      >
        {children}
      </ButtonContent>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button; 