import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';

const variantClasses = {
  standard: 'p-6 md:p-8 rounded-2xl bg-white border border-gray-200',
  compact: 'p-4 rounded-xl bg-white border border-gray-200',
};

const FeatureCard = ({ illustrationSrc, title, description, variant = 'standard', className = '' }) => {
  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {illustrationSrc ? (
        <div className="mb-4">
          <img src={illustrationSrc} alt="" aria-hidden="true" className="w-16 h-16 object-contain" />
        </div>
      ) : null}
      <Typography variant="title-sm" className="mb-1">{title}</Typography>
      <Typography variant="body-sm" color="secondary">{description}</Typography>
    </div>
  );
};

FeatureCard.propTypes = {
  illustrationSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['standard', 'compact']),
  className: PropTypes.string,
};

export default FeatureCard;
