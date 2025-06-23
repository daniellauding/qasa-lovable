import React from 'react';
import PropTypes from 'prop-types';

const sizeClasses = {
  sm: 'min-h-[80px] text-sm',
  md: 'min-h-[120px] text-base',
  lg: 'min-h-[160px] text-lg',
};

const TextArea = ({
  size = 'md',
  error,
  className = '',
  ...props
}) => {
  const baseClasses = 'w-full p-3 border rounded-lg focus:ring-[#FF4B75] focus:border-[#FF4B75] transition-colors';
  const errorClasses = error ? 'border-red-500' : 'border-gray-300';
  
  const classes = [
    baseClasses,
    sizeClasses[size],
    errorClasses,
    className,
  ].join(' ');

  return (
    <div className="w-full">
      <textarea
        className={classes}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

TextArea.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  error: PropTypes.string,
  className: PropTypes.string,
};

export default TextArea; 