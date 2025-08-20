import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Search from './Search';

const LocationSearch = ({
  suggestions = [],
  placeholder = 'Sök på stad eller område',
  onSelect,
  className = '',
  inputSize = 'lg',
  iconColorClass = 'text-gray-60',
}) => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    if (!value) return [];
    const v = value.toLowerCase();
    return suggestions.filter((s) => s.toLowerCase().includes(v)).slice(0, 8);
  }, [value, suggestions]);

  useEffect(() => {
    setOpen(value.length > 0 && filtered.length > 0);
  }, [value, filtered.length]);

  const handleSelect = (s) => {
    onSelect?.(s);
    setValue('');
    setOpen(false);
  };

  return (
    <div className={`relative w-full ${className}`}>
      <Search
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        size={inputSize}
        iconColorClass={iconColorClass}
      />
      {open && (
        <div className="absolute top-full left-0 right-0 z-[60] mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
          {filtered.map((s, i) => (
            <button
              key={`${s}-${i}`}
              type="button"
              onClick={() => handleSelect(s)}
              className="w-full text-left px-4 py-3 hover:bg-[var(--color-background-inset)] border-b border-gray-100 last:border-b-0 flex items-center gap-3"
            >
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-900">{s}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

LocationSearch.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  onSelect: PropTypes.func,
  className: PropTypes.string,
  inputSize: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default LocationSearch;
