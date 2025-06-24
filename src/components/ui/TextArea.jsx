import React from 'react';
import PropTypes from 'prop-types';

const sizeClasses = {
  sm: 'min-h-[80px] text-sm',
  md: 'min-h-[120px] text-base',
  lg: 'min-h-[160px] text-lg',
};

const TextArea = ({
  label,
  size = 'md',
  error,
  helperText,
  className = '',
  ...props
}) => {
  const baseClasses = 'w-full p-3 border rounded-xl focus:ring-0 focus:outline-none transition-colors';
  const errorClasses = error ? 'border-red-500 focus:border-red-500' : 'border-gray-30 focus:border-gray-50';
  
  const classes = [
    baseClasses,
    sizeClasses[size],
    errorClasses,
    'placeholder:text-gray-50 text-gray-90',
    'disabled:bg-gray-10 disabled:text-gray-50 disabled:cursor-not-allowed',
    className,
  ].join(' ');

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-90 mb-2">
          {label}
        </label>
      )}
      <textarea
        className={classes}
        {...props}
      />
      {helperText && !error && (
        <p className="mt-2 text-sm text-gray-60">{helperText}</p>
      )}
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  error: PropTypes.string,
  helperText: PropTypes.string,
  className: PropTypes.string,
};

export default TextArea; 