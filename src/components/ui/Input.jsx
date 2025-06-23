import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(({
  size = 'md',
  error,
  className = '',
  ...props
}, ref) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-4 py-3 text-lg',
  };

  return (
    <div className="w-full">
      <input
        ref={ref}
        className={`
          w-full
          rounded-lg
          border
          ${error ? 'border-red-500' : 'border-gray-300'}
          ${sizeClasses[size]}
          focus:outline-none
          focus:ring-2
          ${error ? 'focus:ring-red-500/20' : 'focus:ring-primary/20'}
          ${error ? 'focus:border-red-500' : 'focus:border-primary'}
          disabled:bg-gray-50
          disabled:text-gray-500
          disabled:cursor-not-allowed
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  error: PropTypes.string,
  className: PropTypes.string,
};

export default Input; 