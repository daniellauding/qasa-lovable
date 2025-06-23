import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(({
  label,
  size = 'md',
  error,
  helperText,
  suffix,
  className = '',
  ...props
}, ref) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5',
    lg: 'px-4 py-3 text-lg',
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-90 mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        <input
          ref={ref}
          className={`
            w-full
            rounded-xl
            border
            ${error ? 'border-red-500' : 'border-gray-30'}
            ${sizeClasses[size]}
            ${suffix ? 'pr-12' : ''}
            focus:outline-none
            focus:ring-0
            ${error ? 'focus:border-red-500' : 'focus:border-gray-50'}
            disabled:bg-gray-10
            disabled:text-gray-50
            disabled:cursor-not-allowed
            placeholder:text-gray-50
            text-gray-90
            ${className}
          `}
          {...props}
        />
        
        {suffix && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-60 text-sm">
            {suffix}
          </div>
        )}
      </div>
      
      {helperText && !error && (
        <p className="mt-2 text-sm text-gray-60">{helperText}</p>
      )}
      
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  error: PropTypes.string,
  helperText: PropTypes.string,
  suffix: PropTypes.string,
  className: PropTypes.string,
};

export default Input; 