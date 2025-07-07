import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';

const HintBox = ({
  title,
  children,
  className = '',
  showButton = false,
  buttonText = '',
  onButtonClick = () => {},
}) => {
  return (
    <div className={`bg-[#f9f9f6] rounded-xl p-4 ${className}`}>
      {title && (
        <Typography variant="body-sm" className="text-[#362b25] font-normal mb-2">
          {title}
        </Typography>
      )}
      <div className="text-[#362b25] text-sm font-normal">
        {children}
      </div>
      {showButton && (
        <button
          onClick={onButtonClick}
          className="inline-flex items-center justify-center font-medium transition-all duration-150 ease-in-out focus:outline-none focus:ring-0 disabled:cursor-not-allowed active:scale-95 h-10 px-5 text-sm rounded-full mt-2 hover:bg-gray-100"
        >
          <span className="truncate">{buttonText}</span>
        </button>
      )}
    </div>
  );
};

HintBox.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  showButton: PropTypes.bool,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default HintBox; 