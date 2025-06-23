import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';

const HintBox = ({
  children,
  className = '',
}) => {
  return (
    <div className={`
      bg-gray-50
      rounded-2xl
      px-6
      py-5
      text-gray-600
      ${className}
    `}>
      <Typography variant="body2" className="text-gray-600">
        {children}
      </Typography>
    </div>
  );
};

HintBox.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default HintBox; 