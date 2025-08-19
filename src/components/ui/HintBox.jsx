import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';
import Button from './Button';

const HintBox = ({
  title,
  children,
  className = '',
  description,
  icon = null,
  actions = [], // [{label, onClick, variant, icon, iconOnly}]
}) => {
  return (
    <div className={`bg-[var(--color-background-inset,#f9f9f6)] rounded-2xl p-5 ${className}`}>
      <div className={`flex items-start gap-3 ${icon ? '' : ''}`}>
        {icon ? <div className="flex-shrink-0">{icon}</div> : null}
        <div className="flex-1">
          {title && (
            <Typography variant="title-sm" className="mb-1">
              {title}
            </Typography>
          )}
          {description && (
            <Typography variant="body-sm" color="secondary" className="mb-2">
              {description}
            </Typography>
          )}
          {children && (
            <div className="text-[var(--color-text-primary)] text-sm font-normal">{children}</div>
          )}
          {actions?.length > 0 && (
            <div className="mt-3 flex gap-2 flex-wrap">
              {actions.map((a, i) => (
                <Button
                  key={i}
                  size="sm"
                  variant={a.variant || 'tertiary'}
                  onClick={a.onClick}
                  icon={a.icon}
                  iconOnly={a.iconOnly}
                  aria-label={a.iconOnly ? (typeof a.label === 'string' ? a.label : 'action') : undefined}
                >
                  {a.iconOnly ? null : a.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

HintBox.propTypes = {
  title: PropTypes.string,
  description: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.node,
  actions: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.node.isRequired, onClick: PropTypes.func, variant: PropTypes.string })
  ),
};

export default HintBox; 