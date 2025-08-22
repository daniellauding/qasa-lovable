import React from 'react';
import PropTypes from 'prop-types';

const PremiumBadge = ({
  className = '',
  size = 'md',
  ...props
}) => {
  
  const sizeClasses = {
    xs: 'transform scale-50',
    sm: 'transform scale-75', 
    md: 'transform scale-100',
    lg: 'transform scale-125',
    xl: 'transform scale-150',
  };
  return (
    <div className={`inline-block ${sizeClasses[size]} ${className}`} {...props}>
      <span className="xl:hidden">
        <span className="qasa-premium-badge-mobile">
          <span style={{ display: 'inline-block', translate: '0px 1px', whiteSpace: 'nowrap' }}>
            Qasa Premium
          </span>
        </span>
      </span>
      <span className="hidden xl:inline">
        <span className="qasa-premium-badge-desktop">
          <span style={{ display: 'inline-block', translate: '0px 1px', whiteSpace: 'nowrap' }}>
            Qasa Premium
          </span>
        </span>
      </span>
    </div>
  );
};

PremiumBadge.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

export default PremiumBadge;
