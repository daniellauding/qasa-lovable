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
    <div className="flex items-center justify-center gap-2">
      {icon && iconPosition === 'left' && (
        <span className="flex-shrink-0 flex items-center">{icon}</span>
      )}
      {children && <span className="truncate flex items-center">{children}</span>}
      {icon && iconPosition === 'right' && (
        <span className="flex-shrink-0 flex items-center">{icon}</span>
      )}
    </div>
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