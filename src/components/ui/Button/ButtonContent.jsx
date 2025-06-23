import React from 'react';
import PropTypes from 'prop-types';
import LoadingDots from '../LoadingDots';

const ButtonContent = ({
  children,
  icon,
  iconPosition = 'left',
  loading = false,
}) => {
  if (loading) {
    return <LoadingDots />;
  }

  return (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2 flex-shrink-0">{icon}</span>
      )}
      <span className="truncate">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="ml-2 flex-shrink-0">{icon}</span>
      )}
    </>
  );
};

ButtonContent.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  loading: PropTypes.bool,
};

export default ButtonContent; 