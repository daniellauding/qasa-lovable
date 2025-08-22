import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Search as SearchIcon } from 'lucide-react';

const Search = forwardRef(({ 
  placeholder = 'Search cities or districts',
  size = 'md',
  variant = 'default',
  className = '',
  iconColorClass = 'text-gray-800',
  ...props
}, ref) => {
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

  const variantClasses = {
    default: 'bg-white border border-gray-900 focus:border-gray-400',
    filled: 'bg-[var(--color-button-tertiary-bg)] border-2 border-transparent focus:bg-white focus:border-gray-900',
  };

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4">
        <SearchIcon className={`${iconSizeClasses[size]} ${iconColorClass}`} />
      </div>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={`
          w-full
          ${sizeClasses[size]}
          pl-12
          rounded-full
          ${variantClasses[variant]}
          focus:outline-none
          focus:ring-0
          focus:ring-offset-0
          placeholder:text-gray-800
          text-gray-800
          transition-colors
          ${className}
        `}
        {...props}
      />
    </div>
  );
});

Search.displayName = 'Search';

Search.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['default', 'filled']),
  className: PropTypes.string,
};

export default Search; 