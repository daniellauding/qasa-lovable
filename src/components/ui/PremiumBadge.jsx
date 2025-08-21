import React from 'react';
import PropTypes from 'prop-types';
import { Star, Crown, Award, Sparkles, Megaphone, Lightbulb, Zap, Clock, Send } from 'lucide-react';

const PremiumBadge = ({
  text,
  variant = 'default',
  icon = 'star',
  premiumFeature = null,
  className = '',
  ...props
}) => {
  const iconMap = {
    star: <Star className="w-4 h-4" />,
    crown: <Crown className="w-4 h-4" />,
    award: <Award className="w-4 h-4" />,
    sparkles: <Sparkles className="w-4 h-4" />,
    // Premium feature icons (yellow)
    megaphone: <Megaphone className="w-4 h-4 text-yellow-500" />,
    bulb: <Lightbulb className="w-4 h-4 text-yellow-500" />,
    flashlight: <Zap className="w-4 h-4 text-yellow-500" />,
    chicken: <Clock className="w-4 h-4 text-yellow-500" />,
    plane: <Send className="w-4 h-4 text-yellow-500" />
  };

  const premiumFeatureMap = {
    'super-apply': {
      icon: 'megaphone',
      text: 'Super apply',
      description: 'Give your application an extra boost'
    },
    'exclusive-insights': {
      icon: 'bulb',
      text: 'Exclusive insights',
      description: 'See how the rent compares to similar homes'
    },
    'highlighted-profile': {
      icon: 'flashlight',
      text: 'Highlighted profile',
      description: 'Get a premium badge on your profile'
    },
    'apply-earlier': {
      icon: 'chicken',
      text: 'Apply earlier',
      description: 'Apply before everyone else'
    },
    'more-applications': {
      icon: 'plane',
      text: 'More applications',
      description: 'Apply to 10 first-hand homes simultaneously'
    }
  };

  const variantClasses = {
    // Premium-specific variants (yellowish/gold only)
    premium: 'inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-500 text-[var(--color-brown)] rounded-full shadow-sm font-semibold',
    'premium-outline': 'inline-flex items-center gap-2 px-3 py-1.5 border-2 border-yellow-500 text-yellow-600 rounded-full font-semibold',
    'premium-subtle': 'inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-100 text-yellow-700 rounded-full font-semibold'
  };

  // If premiumFeature is provided, use its data
  const featureData = premiumFeature ? premiumFeatureMap[premiumFeature] : null;
  const displayText = featureData ? featureData.text : text;
  const displayIcon = featureData ? featureData.icon : icon;

  return (
    <span className={`${variantClasses[variant]} ${className}`} {...props}>
      <span className="text-current">
        {iconMap[displayIcon]}
      </span>
      <span className="text-current text-sm font-semibold">
        {displayText}
      </span>
    </span>
  );
};

PremiumBadge.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'compact', 'pill', 'outline', 'subtle', 'premium', 'premium-outline', 'premium-subtle']),
  icon: PropTypes.oneOf(['star', 'crown', 'award', 'sparkles', 'megaphone', 'bulb', 'flashlight', 'chicken', 'plane']),
  premiumFeature: PropTypes.oneOf(['super-apply', 'exclusive-insights', 'highlighted-profile', 'apply-earlier', 'more-applications']),
  className: PropTypes.string,
};

export default PremiumBadge;
