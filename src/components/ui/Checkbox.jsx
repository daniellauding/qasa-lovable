import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@heroicons/react/24/outline';

const Checkbox = forwardRef(({
  id,
  label,
  helperText,
  error,
  className = '',
  ...props
}, ref) => {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <CheckboxPrimitive.Root
        id={id}
        ref={ref}
        className={`
          h-3 w-3 shrink-0
          rounded-md
          border-2
          ${error ? 'border-red-500' : 'border-gray-40'}
          bg-white
          hover:bg-gray-10
          focus:outline-none
          focus:ring-2
          focus:ring-brown/20
          disabled:cursor-not-allowed
          disabled:opacity-50
          data-[state=checked]:bg-gray-40
          data-[state=checked]:border-gray-40
        `}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center">
          <CheckIcon className="h-2 w-2 text-brown" />
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
  className: PropTypes.string,
};

export default Checkbox; 