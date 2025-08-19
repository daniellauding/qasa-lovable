import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown } from 'lucide-react';
import Typography from '../Typography';

/**
 * QDS Accordion
 * - Single or multiple open items
 * - Token-based colors; minimal shadow option
 */
const Accordion = ({
  items,
  allowMultiple = false,
  defaultOpenIndices = [],
  className = '',
}) => {
  const [open, setOpen] = useState(new Set(defaultOpenIndices));

  const toggle = (idx) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else {
        if (!allowMultiple) next.clear();
        next.add(idx);
      }
      return next;
    });
  };

  return (
    <div className={className}>
      {items.map((item, idx) => {
        const isOpen = open.has(idx);
        return (
          <div key={idx} className="border-b border-[var(--color-border)]">
            <button
              type="button"
              className="w-full flex items-center justify-between py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => toggle(idx)}
            >
              <Typography variant="title-md">{item.title}</Typography>
              <ChevronDown className={['w-5 h-5 transition-transform', isOpen ? 'rotate-180' : 'rotate-0'].join(' ')} />
            </button>
            <div className={isOpen ? 'pb-4' : 'hidden'}>
              <Typography variant="body-md" color="secondary">{item.content}</Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.node.isRequired, content: PropTypes.node.isRequired })
  ).isRequired,
  allowMultiple: PropTypes.bool,
  defaultOpenIndices: PropTypes.arrayOf(PropTypes.number),
  className: PropTypes.string,
};

export default Accordion;


