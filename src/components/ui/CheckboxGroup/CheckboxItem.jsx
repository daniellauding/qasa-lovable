import React from 'react';
import PropTypes from 'prop-types';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import Typography from '../Typography';
import { getCheckboxItemStyles, getCheckboxStyles } from './styles';

const CheckboxItem = ({ option, checked, onCheckedChange, variant }) => {
  return (
    <div className={getCheckboxItemStyles(variant)}>
      {variant === 'card' && (
        <div className="flex-1">
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
      
      <CheckboxPrimitive.Root
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={getCheckboxStyles(variant)}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center w-full h-full">
          <Check className="h-3 w-3 text-[var(--color-text-primary)] flex-shrink-0" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

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
    </div>
  );
};

CheckboxItem.propTypes = {
  option: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
  checked: PropTypes.bool.isRequired,
  onCheckedChange: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['default', 'card']).isRequired,
};

export default CheckboxItem; 