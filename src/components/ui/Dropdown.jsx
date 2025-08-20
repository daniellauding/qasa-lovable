import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const TriggerButton = forwardRef(({ children, className = '', ...props }, ref) => (
  <button
    ref={ref}
    className={`flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border rounded-lg hover:bg-[var(--color-background-inset)] ${className}`}
    {...props}
  >
    {children}
  </button>
));

TriggerButton.displayName = 'TriggerButton';

export const DropdownItem = forwardRef(({
  children,
  icon,
  className = '',
  ...props
}, ref) => (
  <DropdownMenu.Item
    ref={ref}
    className={`flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer outline-none ${className}`}
    {...props}
  >
    {icon && <span className="w-6">{icon}</span>}
    {children}
  </DropdownMenu.Item>
));

DropdownItem.displayName = 'DropdownItem';

const Dropdown = ({
  trigger,
  children,
  align = 'end',
  className = '',
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {trigger}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align={align}
          className={`bg-white rounded-lg shadow-lg py-2 z-50 min-w-[200px] animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 ${className}`}
          sideOffset={4}
        >
          {children}
          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

Dropdown.propTypes = {
  trigger: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['start', 'center', 'end']),
  className: PropTypes.string,
};

export default Dropdown; 