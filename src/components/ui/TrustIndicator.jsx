import { Award, IdCard, Shield, UserCheck } from 'lucide-react';
import PropTypes from 'prop-types';
import React from 'react';

const TrustIndicator = ({
  text,
  type = 'verified',
  variant = 'default',
  className = '',
}) => {
  const iconMap = {
    verified: <IdCard className="w-4 h-4" />,
    secure: <Shield className="w-4 h-4" />,
    trusted: <UserCheck className="w-4 h-4" />,
    premium: <Award className="w-4 h-4" />,
  };

  const variantClasses = {
    default:
      'inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-button-tertiary-bg)] rounded-full',
    compact:
      'inline-flex items-center gap-1.5 px-2 py-1 bg-[var(--color-button-tertiary-bg)] rounded-md',
    pill: 'inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-button-tertiary-bg)] rounded-full',
  };

  return (
    <span className={`${variantClasses[variant]} ${className}`}>
      <span className="text-[var(--color-text-primary)]">{iconMap[type]}</span>
      <span className="text-[var(--color-text-primary)] text-sm font-medium">
        {text}
      </span>
    </span>
  );
};

TrustIndicator.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['verified', 'secure', 'trusted', 'premium']),
  variant: PropTypes.oneOf(['default', 'compact', 'pill']),
  className: PropTypes.string,
};

export default TrustIndicator;
