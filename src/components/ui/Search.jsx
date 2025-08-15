import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Search as SearchIcon } from 'lucide-react';

const Search = forwardRef(({
  placeholder = 'Search cities or districts',
  size = 'md',
  className = '',
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

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4">
        <SearchIcon className={`${iconSizeClasses[size]} text-gray-60`} />
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
          border
          border-gray-30
          bg-white
          focus:outline-none
          focus:ring-0
          focus:border-gray-50
          placeholder:text-gray-60
          text-gray-90
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
  className: PropTypes.string,
};

export default Search; 