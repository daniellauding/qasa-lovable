import React from 'react';
import PropTypes from 'prop-types';
import { Star, Crown, Award, Sparkles } from 'lucide-react';

const PremiumBadge = ({
  text,
  variant = 'default',
  icon = 'star',
  className = '',
  ...props
}) => {
  const iconMap = {
    star: <Star className="w-4 h-4" />,
    crown: <Crown className="w-4 h-4" />,
    award: <Award className="w-4 h-4" />,
    sparkles: <Sparkles className="w-4 h-4" />
  };

  const variantClasses = {
    default: 'inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/80 text-white rounded-full shadow-sm',
    compact: 'inline-flex items-center gap-1.5 px-2 py-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/80 text-white rounded-md shadow-sm',
    pill: 'inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/80 text-white rounded-full shadow-sm',
    outline: 'inline-flex items-center gap-2 px-3 py-1.5 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full',
    subtle: 'inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full'
  };

  return (
    <span className={`${variantClasses[variant]} ${className}`} {...props}>
      <span className="text-current">
        {iconMap[icon]}
      </span>
      <span className="text-current text-sm font-semibold">
        {text}
      </span>
    </span>
  );
};

PremiumBadge.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'compact', 'pill', 'outline', 'subtle']),
  icon: PropTypes.oneOf(['star', 'crown', 'award', 'sparkles']),
  className: PropTypes.string,
};

export default PremiumBadge;
