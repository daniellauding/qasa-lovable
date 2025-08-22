import React from 'react';
import PropTypes from 'prop-types';

const PremiumBadge = ({
  className = '',
  ...props
}) => {
  return (
    <div className={`inline-block ${className}`} {...props}>
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
};

export default PremiumBadge;
