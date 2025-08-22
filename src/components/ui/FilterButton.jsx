import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Icon from './Icon';

const FilterButton = ({
  onClick,
  size = 'md',
  className = '',
  children = 'Filters',
  count,
  ...props
}) => {
  return (
    <Button
      variant="tertiary"
      size={size}
      onClick={onClick}
      icon={<Icon name="Sliders" size="sm" />}
      iconPosition="left"
      className={className}
      {...props}
    >
      {children}
      {count && count > 0 && (
        <span className="ml-1 bg-[var(--color-primary)] text-white text-xs px-1.5 py-0.5 rounded-full min-w-[1.25rem] h-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </Button>
  );
};

FilterButton.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
  children: PropTypes.node,
  count: PropTypes.number,
};

export default FilterButton; 