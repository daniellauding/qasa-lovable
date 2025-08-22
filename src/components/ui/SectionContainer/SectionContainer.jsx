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
  sm: 'px-2 md:px-4 py-4',
  md: 'px-2 md:px-4 py-6',
  lg: 'px-2 md:px-6 py-14',
};

const PADDING_X_CLASSES = {
  none: '',
  sm: 'px-2 md:px-4',
  md: 'px-2 md:px-4',
  lg: 'px-2 md:px-6',
};

const PADDING_Y_CLASSES = {
  none: '',
  sm: 'py-4',
  md: 'py-6',
  lg: 'py-14',
};

const SectionContainer = ({
  children,
  variant = 'none',
  roundedTop = false,
  padding = 'md',
  paddingX = null,
  paddingY = null,
  className = '',
  contentClassName = '',
}) => {
  const backgroundClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.none;
  
  // Use separate paddingX/paddingY if provided, otherwise use combined padding
  let paddingClass;
  if (paddingX !== null || paddingY !== null) {
    const xClass = PADDING_X_CLASSES[paddingX] || '';
    const yClass = PADDING_Y_CLASSES[paddingY] || '';
    paddingClass = [xClass, yClass].filter(Boolean).join(' ');
  } else {
    paddingClass = PADDING_CLASSES[padding] || PADDING_CLASSES.md;
  }

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
  paddingX: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  paddingY: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  className: PropTypes.string,
  contentClassName: PropTypes.string,
};

export default SectionContainer;


