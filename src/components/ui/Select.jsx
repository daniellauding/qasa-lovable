import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/24/outline';

const Select = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  error,
  helperText,
  disabled = false,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef(null);
  const optionsRef = useRef([]);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setFocusedIndex(selectedOption ? options.indexOf(selectedOption) : 0);
    }
  };

  const handleSelect = (option) => {
    onChange?.(option.value);
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (disabled) return;

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (isOpen && focusedIndex >= 0) {
          handleSelect(options[focusedIndex]);
        } else {
          setIsOpen(!isOpen);
          setFocusedIndex(selectedOption ? options.indexOf(selectedOption) : 0);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (isOpen) {
          setFocusedIndex(prev => (prev + 1) % options.length);
        } else {
          setIsOpen(true);
          setFocusedIndex(selectedOption ? options.indexOf(selectedOption) : 0);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) {
          setFocusedIndex(prev => (prev - 1 + options.length) % options.length);
        } else {
          setIsOpen(true);
          setFocusedIndex(selectedOption ? options.indexOf(selectedOption) : 0);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && optionsRef.current[focusedIndex]) {
      optionsRef.current[focusedIndex].scrollIntoView({
        block: 'nearest',
      });
    }
  }, [focusedIndex, isOpen]);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-90 mb-2">
          {label}
        </label>
      )}

      <div className="relative">
        <button
          type="button"
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className={`
            w-full px-4 py-2.5 pr-12 text-left rounded-xl border
            ${error ? 'border-red-500' : 'border-gray-30'}
            ${disabled 
              ? 'bg-gray-10 text-gray-50 cursor-not-allowed' 
              : 'bg-white text-gray-90 hover:border-gray-50 cursor-pointer'
            }
            focus:outline-none focus:ring-0
            ${error ? 'focus:border-red-500' : 'focus:border-gray-50'}
            transition-colors
          `}
          {...props}
        >
          <span className={selectedOption ? 'text-gray-90' : 'text-gray-50'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          
          <span className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronDownIcon className={`w-5 h-5 ${disabled ? 'text-gray-40' : 'text-gray-60'}`} />
          </span>
        </button>
      </div>

      {helperText && !error && (
        <p className="mt-2 text-sm text-gray-60">{helperText}</p>
      )}

      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}

      {isOpen && !disabled && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-30 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <button
              key={option.value}
              ref={el => optionsRef.current[index] = el}
              type="button"
              onClick={() => handleSelect(option)}
              className={`
                w-full px-4 py-3 text-left flex items-center justify-between
                transition-colors
                ${focusedIndex === index ? 'bg-gray-10' : 'hover:bg-gray-10'}
                ${selectedOption?.value === option.value ? 'text-gray-90 font-medium' : 'text-gray-90'}
                ${index === 0 ? 'rounded-t-xl' : ''}
                ${index === options.length - 1 ? 'rounded-b-xl' : ''}
              `}
            >
              <span>{option.label}</span>
              {selectedOption?.value === option.value && (
                <CheckIcon className="w-4 h-4 text-gray-90" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Select; 