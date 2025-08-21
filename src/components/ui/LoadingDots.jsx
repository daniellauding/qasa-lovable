import React from 'react';
import PropTypes from 'prop-types';

const LoadingDots = ({
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'h-1 w-1',
    md: 'h-1.5 w-1.5',
    lg: 'h-2 w-2',
  };

  const containerClasses = {
    sm: 'gap-1',
    md: 'gap-1.5',
    lg: 'gap-2',
  };

  return (
    <div className={`flex items-center justify-center ${containerClasses[size]} ${className}`}>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={`
            rounded-full bg-[var(--color-brown)]
            ${sizeClasses[size]}
            animate-bounce
          `}
          style={{
            animationDelay: `${(i - 1) * 0.15}s`,
            animationDuration: '0.6s',
            animationIterationCount: 'infinite',
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