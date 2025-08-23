import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
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
          <div key={idx}>
            <button
              type="button"
              className="sm:hover:bg-gray-10 w-full rounded-md py-4 sm:pr-7 md:py-6 md:pl-8"
              aria-expanded={isOpen}
              onClick={() => toggle(idx)}
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-start text-left">
                  <Typography variant="title-sm" className="mb-1">
                    {item.title}
                  </Typography>
                  {item.description && (
                    <Typography variant="body-md" className="text-gray-600">
                      {item.description}
                    </Typography>
                  )}
                </div>
                <Icon 
                  name="ArrowDown" 
                  size="md" 
                  className={`w-10 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                />
              </div>
            </button>
            {isOpen && (
              <div className="px-4 md:px-8 pb-6">
                {item.content}
              </div>
            )}
            {idx < items.length - 1 && (
              <div className="md:px-8">
                <div className="border-t border-gray-200" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ 
      title: PropTypes.node.isRequired, 
      description: PropTypes.node,
      content: PropTypes.node.isRequired 
    })
  ).isRequired,
  allowMultiple: PropTypes.bool,
  defaultOpenIndices: PropTypes.arrayOf(PropTypes.number),
  className: PropTypes.string,
};

export default Accordion;


