import { ChevronLeft, ChevronRight } from 'lucide-react';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

const DatePicker = ({
  label,
  value,
  onChange,
  placeholder = 'Select date',
  error,
  helperText,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : null);
  const [viewDate, setViewDate] = useState(selectedDate || new Date());
  const containerRef = useRef(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-CA'); // YYYY-MM-DD format
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    onChange?.(formatDate(date));
    setIsOpen(false);
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startOfWeek = new Date(firstDay);
    startOfWeek.setDate(firstDay.getDate() - ((firstDay.getDay() + 6) % 7));

    const days = [];
    const current = new Date(startOfWeek);

    while (current <= lastDay || days.length % 7 !== 0) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return days;
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSameMonth = (date, month) => {
    return date.getMonth() === month;
  };

  const isSameDate = (date1, date2) => {
    if (!date1 || !date2) return false;
    return date1.toDateString() === date2.toDateString();
  };

  const navigateMonth = (direction) => {
    setViewDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const days = getDaysInMonth(viewDate);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-90 mb-2">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type="text"
          value={selectedDate ? formatDate(selectedDate) : ''}
          placeholder={placeholder}
          className={`
            w-full px-4 py-4 pr-12 rounded-2xl border-2
            ${error ? 'border-red-500' : 'border-gray-30'}
            focus:outline-none focus:ring-0
            ${error ? 'focus:border-red-500' : 'focus:border-gray-90'}
            disabled:bg-gray-10 disabled:text-gray-50 disabled:cursor-not-allowed
            placeholder:text-gray-50 text-gray-90 cursor-pointer
            focus:bg-gray-10
            focus:text-gray-90
          `}
          onClick={() => setIsOpen(!isOpen)}
          readOnly
          {...props}
        />
        
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors ${
            isOpen 
              ? 'text-[var(--color-text-primary,#322721)] bg-gray-10 rounded-lg p-2' 
              : 'text-gray-60 hover:text-gray-90 hover:bg-gray-10 rounded-lg p-2'
          }`}
        >
          <div 
            className={`
              relative
              rounded-full
              h-4
              w-4
              border-2
              border-[var(--color-gray-20,#d6d6ce)]
              bg-white
              hover:bg-gray-10
              focus:outline-none
              focus:ring-2
              focus:ring-black/10
              disabled:cursor-not-allowed
              disabled:opacity-50
              transition-colors
              data-[state=checked]:border-[var(--color-text-primary,#322721)]
              data-[state=checked]:border-4
              absolute right-4 top-0 ${
              isOpen ? 'bg-gray-10' : 'bg-red'}`}>
            <div className={`w-2 h-2 ml-0.5 mt-0.5 ${
              isOpen 
                ? 'w-2 h-2 bg-[var(--color-text-primary,#322721)] rounded-full' 
                : 'bg-[#fff]'
            }`} />
          </div>
        </button>
      </div>

      {helperText && !error && (
        <p className="mt-2 text-sm text-gray-60">{helperText}</p>
      )}

      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-30 rounded-xl shadow-lg z-50 p-4 min-w-[300px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={() => navigateMonth(-1)}
              className="p-1 hover:bg-gray-10 rounded transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-60" />
            </button>
            
            <h3 className="text-base font-semibold text-gray-90">
              {months[viewDate.getMonth()]} {viewDate.getFullYear()}
            </h3>
            
            <button
              type="button"
              onClick={() => navigateMonth(1)}
              className="p-1 hover:bg-gray-10 rounded transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-60" />
            </button>
          </div>

          {/* Week days */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-60 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => {
              const isCurrentMonth = isSameMonth(day, viewDate.getMonth());
              const isSelected = isSameDate(day, selectedDate);
              const isTodayDate = isToday(day);

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleDateSelect(day)}
                  className={`
                    w-8 h-8 text-sm rounded-md transition-colors
                    ${isSelected
                      ? 'bg-black text-white'
                      : isTodayDate
                      ? 'bg-gray-10 text-gray-90 font-semibold'
                      : isCurrentMonth
                      ? 'text-gray-90 hover:bg-gray-10'
                      : 'text-gray-40 hover:bg-gray-10'
                    }
                  `}
                >
                  {day.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

DatePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
  className: PropTypes.string,
};

export default DatePicker; 