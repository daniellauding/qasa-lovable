import React from 'react';
import PropTypes from 'prop-types';

const VARIANT_CLASSES = {
  none: 'bg-transparent',
  inset: 'bg-[var(--color-background-inset)]',
  gray10: 'bg-[var(--color-gray-10)]',
  softPink: 'bg-[var(--color-softPink)]',
  tertiary: 'bg-[var(--color-button-tertiary-bg)]',
};

const PADDING_CLASSES = {
  none: '',
  sm: 'px-2 md:px-4 py-6',
  md: 'px-2 md:px-4 py-10',
  lg: 'px-2 md:px-6 py-14',
};

const SectionContainer = ({
  children,
  variant = 'none',
  roundedTop = false,
  padding = 'md',
  className = '',
  contentClassName = '',
}) => {
  const backgroundClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.none;
  const paddingClass = PADDING_CLASSES[padding] || PADDING_CLASSES.md;

  return (
    <div className={[
      'w-full',
      backgroundClass,
      roundedTop ? 'rounded-t-[32px]' : '',
      className,
    ].filter(Boolean).join(' ')}>
      <div className={[paddingClass, contentClassName].filter(Boolean).join(' ')}>
        {children}
      </div>
    </div>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['none', 'inset', 'gray10', 'softPink', 'tertiary']),
  roundedTop: PropTypes.bool,
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  className: PropTypes.string,
  contentClassName: PropTypes.string,
};

export default SectionContainer;


