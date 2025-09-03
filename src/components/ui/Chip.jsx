import PropTypes from 'prop-types';
import React from 'react';

const sizeClasses = {
  xs: 'h-8 px-4 text-sm rounded-full', // 32px height, 16px padding
  sm: 'h-10 px-5 text-sm rounded-full', // 40px height, 20px padding
  md: 'h-12 px-6 text-base rounded-full', // 48px height, 24px padding
  lg: 'h-14 px-8 text-lg rounded-full', // 56px height, 32px padding
  xl: 'h-16 px-8 text-xl rounded-full', // 64px height, 32px padding
};

const Chip = ({
  children,
  size = 'md',
  active = false,
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {
  const baseClasses = [
    'inline-flex items-center justify-center',
    'font-medium font-body',
    'transition-all duration-150 ease-in-out',
    'focus:outline-none focus:ring-0',
    'border',
    'w-fit',
    'select-none'
  ].join(' ');

  const stateClasses = active
    ? 'bg-gray-10 border-2 border-chip-border-active text-text-default'
    : 'bg-white border border-chip-border text-text-default hover:border-gray-40';

  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : onClick
    ? 'cursor-pointer'
    : 'cursor-default';

  const classes = [
    baseClasses,
    sizeClasses[size],
    stateClasses,
    disabledClasses,
    className,
  ].filter(Boolean).join(' ');

  const handleClick = (e) => {
    if (disabled || !onClick) return;
    onClick(e);
  };

  return (
    <div 
      className={classes}
      onClick={handleClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && onClick && !disabled) {
          e.preventDefault();
          handleClick(e);
        }
      }}
      {...props}
    >
      <span className="truncate">{children}</span>
    </div>
  );
};

Chip.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Chip; 