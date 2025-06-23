import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import Typography from '../Typography';
import RadioItem from './RadioItem';

const RadioGroup = forwardRef(({
  label,
  options,
  variant = 'default',
  className = '',
  ...props
}, ref) => {
  return (
    <div className={className}>
      {label && (
        <Typography variant="body1" weight="medium" className="mb-4">
          {label}
        </Typography>
      )}
      
      <RadioGroupPrimitive.Root
        ref={ref}
        className="space-y-3"
        {...props}
      >
        {options.map((option) => (
          <RadioItem
            key={option.value}
            option={option}
            variant={variant}
          />
        ))}
      </RadioGroupPrimitive.Root>
    </div>
  );
});

RadioGroup.displayName = 'RadioGroup';

RadioGroup.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    description: PropTypes.string,
  })).isRequired,
  variant: PropTypes.oneOf(['default', 'card']),
  className: PropTypes.string,
};

export default RadioGroup; 