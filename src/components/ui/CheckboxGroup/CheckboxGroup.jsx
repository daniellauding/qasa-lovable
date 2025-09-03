import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../Typography';
import CheckboxItem from './CheckboxItem';

const CheckboxGroup = ({
  label,
  options,
  value = [],
  onValueChange,
  className = '',
  error,
  helperText,
  variant = 'default',
}) => {
  const handleCheckboxChange = (optionValue, checked) => {
    let newValue;
    if (checked) {
      newValue = [...value, optionValue];
    } else {
      newValue = value.filter(v => v !== optionValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <div className={className}>
      {label && (
        <Typography variant="body-md" className="text-gray-900 font-medium mb-3">
          {label}
        </Typography>
      )}
      
      <div className={`space-y-3 ${variant === 'card' ? 'space-y-2' : ''}`}>
        {options.map((option) => (
          <CheckboxItem
            key={option.value}
            option={option}
            checked={value.includes(option.value)}
            onCheckedChange={(checked) => handleCheckboxChange(option.value, checked)}
            variant={variant}
          />
        ))}
      </div>

      {helperText && (
        <Typography 
          variant="body-sm" 
          className={`mt-2 ${error ? 'text-red-500' : 'text-gray-600'}`}
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
};

CheckboxGroup.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
  onValueChange: PropTypes.func,
  className: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'card']),
};

export default CheckboxGroup; 