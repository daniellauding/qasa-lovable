import React from 'react';
import PropTypes from 'prop-types';

const LoadingDots = ({
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'h-1 w-1 mx-0.5',
    md: 'h-1.5 w-1.5 mx-0.5',
    lg: 'h-2 w-2 mx-1',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={`
            rounded-full bg-white
            ${sizeClasses[size]}
            animate-pulse
          `}
          style={{
            animationDelay: `${(i - 1) * 0.2}s`,
            animationDuration: '1s',
          }}
        />
      ))}
    </div>
  );
};

LoadingDots.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default LoadingDots; 