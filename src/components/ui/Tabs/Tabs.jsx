import React, { useId, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

/**
 * QDS Tabs
 * - Accessible tabs with two variants: default (pill) and simple (underline)
 * - Default: active uses brand brown fill (secondary button); Simple: active shows bottom border in brown
 * - Uses QDS Button for triggers; content is provided by caller
 */
const Tabs = ({
  tabs,
  value,
  defaultValue,
  onChange,
  variant = 'default', // 'default' | 'simple' (back-compat: 'pill' | 'underline')
  size = 'md',
  className = '',
  tabListClassName = '',
}) => {
  const baseId = useId();
  const initial = useMemo(() => {
    if (value != null) return value;
    if (defaultValue != null) return defaultValue;
    return tabs?.[0]?.value;
  }, [value, defaultValue, tabs]);
  const [internal, setInternal] = useState(initial);
  const activeValue = value != null ? value : internal;

  const handleSelect = (next) => {
    if (value == null) setInternal(next);
    if (onChange) onChange(next);
  };

  const normalizedVariant = variant === 'pill' ? 'default' : variant === 'underline' ? 'simple' : variant;
  const isPill = normalizedVariant === 'default';

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-orientation="horizontal"
        className={[
          'inline-flex items-center',
          isPill ? 'rounded-full p-1 bg-[var(--color-surface)]' : 'w-full border-b border-[var(--color-border)]',
          tabListClassName,
        ].join(' ')}
      >
        {tabs.map((tab) => {
          const isActive = tab.value === activeValue;
          const tabId = `${baseId}-tab-${tab.value}`;
          const panelId = `${baseId}-panel-${tab.value}`;
          const iconOnly = (!!tab.icon && (!tab.label || tab.iconOnly));
          return (
            <Button
              key={tab.value}
              role="tab"
              id={tabId}
              aria-controls={panelId}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              variant={isPill ? (isActive ? 'secondary' : 'transparent') : 'transparent'}
              size={size}
              className={[
                isPill ? 'rounded-full px-6' : 'rounded-none px-4',
                !isPill && (isActive ? 'border-b-2 border-[var(--color-brown)] text-[var(--color-text-primary)]' : 'border-b-2 border-transparent text-[var(--color-text-secondary)]'),
              ].join(' ')}
              onClick={() => handleSelect(tab.value)}
              icon={tab.icon}
              iconOnly={iconOnly}
            >
              {iconOnly ? null : tab.label}
            </Button>
          );
        })}
      </div>

      {tabs.map((tab) => {
        const isActive = tab.value === activeValue;
        const panelId = `${baseId}-panel-${tab.value}`;
        const tabId = `${baseId}-tab-${tab.value}`;
        return (
          <div
            key={tab.value}
            role="tabpanel"
            id={panelId}
            aria-labelledby={tabId}
            hidden={!isActive}
            className={!isActive ? 'hidden' : ''}
          >
            {typeof tab.content === 'function' ? tab.content() : tab.content}
          </div>
        );
      })}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.node,
      icon: PropTypes.node,
      iconOnly: PropTypes.bool,
      content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    })
  ).isRequired,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'simple', 'pill', 'underline']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
  tabListClassName: PropTypes.string,
};

export default Tabs;


