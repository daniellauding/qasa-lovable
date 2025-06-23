import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Typography from '../Typography';

const ContactCard = ({
  property,
  message,
  className = '',
  ...props
}) => {
  return (
    <Card variant="compact" className={className} {...props}>
      <div className="flex gap-3">
        <img
          src={property.image}
          alt={property.title}
          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
        />
        
        <div className="flex-1 min-w-0">
          <Typography variant="title-2xs" className="mb-1">
            {property.location}
          </Typography>
          <Typography variant="body-sm" color="secondary" className="mb-2">
            {property.details}
          </Typography>
          <Typography variant="title-2xs">
            {property.price}
          </Typography>
          
          {message && (
            <div className="mt-3 pt-3 border-t border-gray-20">
              <Typography variant="body-sm">
                {message}
              </Typography>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

ContactCard.propTypes = {
  property: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    location: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  message: PropTypes.string,
  className: PropTypes.string,
};

export default ContactCard; 