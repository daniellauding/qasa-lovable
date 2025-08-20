import React from 'react';
import PropTypes from 'prop-types';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import Typography from '../Typography';
import { getRadioStyles, getItemStyles } from './styles';

const RadioItem = ({ option, variant }) => {
  return (
    <RadioGroupPrimitive.Item
      value={option.value}
      className={getItemStyles(variant)}
    >
      {variant === 'card' && (
        <div>
          <Typography variant="body1" weight="medium">
            {option.label}
          </Typography>
          {option.description && (
            <Typography variant="body2" color="secondary" className="mt-1">
              {option.description}
            </Typography>
          )}
        </div>
      )}
      
      <div className={variant === 'card' ? 'absolute right-4 top-1' : ''}>
        <div className={getRadioStyles(variant)}>
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center w-full h-full">
            <div className="w-2 h-2 bg-[var(--color-text-primary,#322721)] rounded-full" />
          </RadioGroupPrimitive.Indicator>
        </div>
      </div>

      {variant === 'default' && (
        <div className="flex flex-col">
          <Typography variant="body1">
            {option.label}
          </Typography>
          {option.description && (
            <Typography variant="body2" color="secondary">
              {option.description}
            </Typography>
          )}
        </div>
      )}
    </RadioGroupPrimitive.Item>
  );
};

RadioItem.propTypes = {
  option: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
  variant: PropTypes.oneOf(['default', 'card']).isRequired,
};

export default RadioItem; 