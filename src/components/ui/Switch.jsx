import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { CheckIcon } from '@heroicons/react/24/solid';
import Typography from './Typography';

const Switch = forwardRef(({
  id,
  label,
  description,
  className = '',
  ...props
}, ref) => {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <SwitchPrimitive.Root
        id={id}
        ref={ref}
        className={`
          relative
          inline-flex
          h-8
          w-14
          shrink-0
          cursor-pointer
          rounded-full
          transition-colors
          focus:outline-none
          disabled:cursor-not-allowed
          disabled:opacity-50
          data-[state=checked]:bg-brown
          data-[state=unchecked]:bg-gray-40
        `}
        {...props}
      >
        <SwitchPrimitive.Thumb
          className={`
            relative
            flex
            items-center
            justify-center
            h-6
            w-6
            rounded-full
            bg-white
            shadow-sm
            ring-0
            transition-transform
            data-[state=checked]:translate-x-8
            data-[state=unchecked]:translate-x-1
            translate-y-1
          `}
        >
          <CheckIcon 
            className={`
              h-3
              w-3
              transition-colors
              data-[state=checked]:text-brown
              data-[state=unchecked]:text-transparent
            `}
            data-state={props.checked ? 'checked' : 'unchecked'}
          />
        </SwitchPrimitive.Thumb>
      </SwitchPrimitive.Root>

      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <label
              htmlFor={id}
              className="text-sm font-medium text-gray-900 cursor-pointer"
            >
              {label}
            </label>
          )}
          {description && (
            <Typography variant="body2" color="secondary">
              {description}
            </Typography>
          )}
        </div>
      )}
    </div>
  );
});

Switch.displayName = 'Switch';

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};

export default Switch; 