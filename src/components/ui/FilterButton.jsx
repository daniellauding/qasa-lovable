import React from 'react';
import PropTypes from 'prop-types';
import { SlidersHorizontal } from 'lucide-react';

const FilterButton = ({
  onClick,
  size = 'md',
  className = '',
  children = 'Filters',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-4 py-3',
    lg: 'px-6 py-4 text-lg',
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-flex
        items-center
        gap-2
        ${sizeClasses[size]}
        rounded-full
        border
        border-gray-30
        bg-gray-10
        hover:bg-gray-20
        focus:outline-none
        focus:ring-0
        focus:border-gray-50
        text-gray-90
        font-medium
        transition-colors
        ${className}
      `}
      {...props}
    >
      <SlidersHorizontal className={`${iconSizeClasses[size]}`} />
      {children}
    </button>
  );
};

FilterButton.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  children: PropTypes.node,
};

export default FilterButton; 