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
      
      <RadioGroupPrimitive.Indicator
        className={getRadioStyles(variant)}
      />

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