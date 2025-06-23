import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Typography from '../Typography';
import Card from './Card';

const LandlordCTACard = ({ 
  title = "Looking for a tenant?",
  description = "Create a home to contact our verified tenants.",
  onClick,
  className = "",
  ...props 
}) => {
  return (
    <Card 
      className={`bg-gray-10 border border-gray-30 hover:border-gray-40 transition-colors cursor-pointer group ${className}`}
      onClick={onClick}
      {...props}
    >
      <div className="flex items-center justify-between p-6">
        <div className="flex-1">
          <Typography 
            variant="title-xs" 
            className="text-gray-90 mb-1"
          >
            {title}
          </Typography>
          <Typography 
            variant="body-md" 
            className="text-gray-70"
          >
            {description}
          </Typography>
        </div>
        <div className="ml-4 flex-shrink-0">
          <ArrowRightIcon className="h-6 w-6 text-gray-60 group-hover:text-gray-90 transition-colors" />
        </div>
      </div>
    </Card>
  );
};

LandlordCTACard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default LandlordCTACard; 