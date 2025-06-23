import React from 'react';
import PropTypes from 'prop-types';
import LoadingDots from '../LoadingDots';

const ButtonContent = ({
  children,
  icon,
  iconPosition = 'left',
  iconOnly = false,
  loading = false,
}) => {
  if (loading) {
    return <LoadingDots />;
  }

  // Icon-only mode - just render the icon without spacing
  if (iconOnly && icon) {
    return <span className="flex-shrink-0">{icon}</span>;
  }

  return (
    <>
      {icon && iconPosition === 'left' && (
        <span className={`flex-shrink-0 ${children ? 'mr-2' : ''}`}>{icon}</span>
      )}
      {children && <span className="truncate">{children}</span>}
      {icon && iconPosition === 'right' && (
        <span className={`flex-shrink-0 ${children ? 'ml-2' : ''}`}>{icon}</span>
      )}
    </>
  );
};

ButtonContent.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  iconOnly: PropTypes.bool,
  loading: PropTypes.bool,
};

export default ButtonContent; 