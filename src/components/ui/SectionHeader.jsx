import PropTypes from 'prop-types';
import React from 'react';
import Typography from './Typography';

const SectionHeader = ({ 
  title, 
  description, 
  className = '',
  titleVariant = 'title-lg',
  titleColor = 'text-[var(--color-text-primary)]',
  descriptionVariant = 'body-lg',
  descriptionColor = 'text-[var(--color-text-secondary)]'
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {title && (
        <Typography variant={titleVariant} className={titleColor}>
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant={descriptionVariant} className={descriptionColor}>
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
  titleVariant: PropTypes.string,
  titleColor: PropTypes.string,
  descriptionVariant: PropTypes.string,
  descriptionColor: PropTypes.string,
};

export default SectionHeader;


