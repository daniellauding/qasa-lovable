import React from 'react';
import PropTypes from 'prop-types';
import { CheckCircle } from 'lucide-react';

const FeatureBadge = ({ 
  text, 
  icon = <CheckCircle className="w-4 h-4" />,
  variant = 'default',
  className = '' 
}) => {
  const variantClasses = {
    default: 'inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-background-inset)] rounded-full',
    compact: 'inline-flex items-center gap-1.5 px-2 py-1 bg-[var(--color-background-inset)] rounded-md',
    pill: 'inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-background-inset)] rounded-full'
  };

  return (
    <span className={`${variantClasses[variant]} ${className}`}>
      <span className="text-[var(--color-text-primary)]">
        {icon}
      </span>
      <span className="text-[var(--color-text-primary)] text-sm font-medium">
        {text}
      </span>
    </span>
  );
};

FeatureBadge.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'compact', 'pill']),
  className: PropTypes.string,
};

export default FeatureBadge;
