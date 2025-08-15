import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

const Checkbox = forwardRef(({
  id,
  label,
  helperText,
  error,
  size = 'md',
  className = '',
  onChange, // For backward compatibility
  onCheckedChange, // Radix UI prop
  ...props
}, ref) => {
  // Use onCheckedChange if provided, otherwise use onChange
  const handleChange = onCheckedChange || onChange;
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const iconSizeClasses = {
    sm: 'h-2.5 w-2.5',
    md: 'h-3 w-3',
    lg: 'h-4 w-4',
  };

  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <CheckboxPrimitive.Root
        id={id}
        ref={ref}
        onCheckedChange={handleChange}
        className={`
          ${sizeClasses[size]} shrink-0
          rounded-md
          border-2
          ${error ? 'border-red-500' : 'border-gray-30'}
          bg-white
          hover:bg-gray-10
          focus:outline-none
          focus:ring-2
          focus:ring-black/10
          disabled:cursor-not-allowed
          disabled:opacity-50
          data-[state=checked]:bg-gray-30
          data-[state=checked]:border-gray-30
          transition-colors
        `}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center w-full h-full">
          <Check className={`${iconSizeClasses[size]} text-[#322721] flex-shrink-0`} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      
      {(label || helperText) && (
        <div className="flex flex-col">
          {label && (
            <label
              htmlFor={id}
              className="text-sm font-medium text-gray-900 cursor-pointer"
            >
              {label}
            </label>
          )}
          {helperText && (
            <span className={`text-sm ${error ? 'text-red-500' : 'text-gray-500'}`}>
              {helperText}
            </span>
          )}
        </div>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  onChange: PropTypes.func, // For backward compatibility
  onCheckedChange: PropTypes.func, // Radix UI prop
};

export default Checkbox; 