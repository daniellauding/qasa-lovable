import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';

const SectionHeader = ({ title, description, className = '' }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {title && (
        <Typography variant="title-lg" className="text-[var(--color-text-primary)]">
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant="body-md" color="secondary">
          {description}
        </Typography>
      )}
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  className: PropTypes.string,
};

export default SectionHeader;


