import React, { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

const RangeSlider = ({
  label,
  min = 0,
  max = 100,
  value,
  onChange,
  suffix = '',
  className = '',
  ...props
}) => {
  const [isDragging, setIsDragging] = useState(null);
  const sliderRef = useRef(null);
  
  const minValue = Array.isArray(value) ? value[0] : min;
  const maxValue = Array.isArray(value) ? value[1] : value || min;

  const getPercentage = useCallback((val) => {
    return ((val - min) / (max - min)) * 100;
  }, [min, max]);

  const handleMouseDown = (index) => (e) => {
    e.preventDefault();
    setIsDragging(index);
  };

  const handleMouseMove = useCallback((e) => {
    if (isDragging === null || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.min(Math.max(0, (e.clientX - rect.left) / rect.width), 1);
    const newValue = min + percentage * (max - min);

    if (Array.isArray(value)) {
      const newValues = [...value];
      newValues[isDragging] = Math.round(newValue);
      
      // Ensure min doesn't exceed max and vice versa
      if (isDragging === 0 && newValues[0] > newValues[1]) {
        newValues[0] = newValues[1];
      } else if (isDragging === 1 && newValues[1] < newValues[0]) {
        newValues[1] = newValues[0];
      }
      
      onChange?.(newValues);
    } else {
      onChange?.(Math.round(newValue));
    }
  }, [isDragging, min, max, value, onChange]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(null);
  }, []);

  React.useEffect(() => {
    if (isDragging !== null) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const minPercentage = getPercentage(minValue);
  const maxPercentage = getPercentage(maxValue);
  const isRange = Array.isArray(value);

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-90 mb-3">
          {label}
        </label>
      )}
      
      <div className="relative mb-4">
        {/* Track */}
        <div
          ref={sliderRef}
          className="relative h-2 bg-[#e5e5df] rounded-full cursor-pointer"
          {...props}
        >
          {/* Fill */}
          <div
            className="absolute h-2 bg-black rounded-full"
            style={{
              left: `${isRange ? minPercentage : 0}%`,
              width: `${isRange ? maxPercentage - minPercentage : maxPercentage}%`,
            }}
          />
          
          {/* Handles */}
          {isRange && (
            <div
              className="absolute w-4 h-4 bg-white border-2 border-[#e5e5df] rounded-full cursor-grab active:cursor-grabbing transform -translate-x-1/2 -translate-y-1/2 top-1/2 shadow-sm hover:shadow-md transition-shadow"
              style={{ left: `${minPercentage}%` }}
              onMouseDown={handleMouseDown(0)}
            />
          )}
          
          <div
            className="absolute w-4 h-4 bg-white border-2 border-[#e5e5df] rounded-full cursor-grab active:cursor-grabbing transform -translate-x-1/2 -translate-y-1/2 top-1/2 shadow-sm hover:shadow-md transition-shadow"
            style={{ left: `${maxPercentage}%` }}
            onMouseDown={handleMouseDown(isRange ? 1 : 0)}
          />
        </div>
      </div>
      
      {/* Value display */}
      <div className="flex justify-between text-sm text-gray-60">
        <span>
          {suffix ? `${min} ${suffix}` : min}
        </span>
        <span>
          {suffix ? `${max} ${suffix}` : max}
        </span>
      </div>
      
      {/* Current values */}
      <div className="text-center text-sm font-medium text-gray-90 mt-2">
        {isRange ? (
          <span>
            {suffix ? `${minValue} ${suffix}` : minValue} - {suffix ? `${maxValue} ${suffix}` : maxValue}
          </span>
        ) : (
          <span>
            {suffix ? `${maxValue} ${suffix}` : maxValue}
          </span>
        )}
      </div>
    </div>
  );
};

RangeSlider.propTypes = {
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  suffix: PropTypes.string,
  className: PropTypes.string,
};

export default RangeSlider; 