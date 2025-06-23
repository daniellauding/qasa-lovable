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
      className={`bg-gray-10 rounded-[16px] p-[16px] border border-gray-30 hover:border-gray-40 transition-colors cursor-pointer group w-fit ${className}`}
      onClick={onClick}
      {...props}
    >
      <div className="flex items-center justify-between p-0">
        <div className="flex-1">
          <Typography variant="title-2xs" className="text-gray-90">
            {title}
          </Typography>
          <Typography variant="body-md" className="text-gray-70">
            {description}
          </Typography>
        </div>
        <div
          className="ml-4 flex-shrink-0 rounded-full h-12 w-12 align-center justify-center flex items-center bg-bg-brand-tertiary text-text-on-brand-tertiary hover:bg-bg-brand-tertiary-hover focus:bg-bg-brand-tertiary-focus focus:scale-95 disabled:bg-loading disabled:text-white"
        >
          <ArrowRightIcon className="h-5 w-5 text-black group-hover:text-gray-90 transition-colors" />
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