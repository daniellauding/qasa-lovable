import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Typography from '../Typography';
import { HeartIcon, CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

const PropertyCard = ({
  property,
  liked = false,
  onLikeToggle,
  onCardClick,
  className = '',
  ...props
}) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  
  // Support both single image and image array
  const images = Array.isArray(property.images) ? property.images : [property.image];
  const hasMultipleImages = images.length > 1;

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Card variant="property" className={`cursor-pointer ${className}`} onClick={onCardClick} {...props}>
      <div 
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={images[currentImageIndex]}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        
        {/* Navigation arrows - only show on hover if multiple images */}
        {hasMultipleImages && isHovered && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeftIcon className="w-4 h-4 text-text-default" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRightIcon className="w-4 h-4 text-text-default" />
            </button>
          </>
        )}
        
        {/* Heart button */}
        {onLikeToggle && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onLikeToggle();
            }}
            className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          >
            {liked ? (
              <HeartSolidIcon className="w-5 h-5 text-ui-pink" />
            ) : (
              <HeartIcon className="w-5 h-5 text-text-subtle" />
            )}
          </button>
        )}

        {/* Dots indicator */}
        {hasMultipleImages && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <Typography variant="title-xs" className="mb-1">
              {property.location}
            </Typography>
            <Typography variant="body-sm" color="secondary">
              {property.type} / {property.details}
            </Typography>
          </div>
        </div>

        <Typography variant="title-xs" className="mb-3">
          {property.price}
        </Typography>

        {property.dateRange && (
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-text-subtle" />
            <Typography variant="body-sm" color="secondary">
              {property.dateRange}
            </Typography>
          </div>
        )}
      </div>
    </Card>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    image: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    location: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    dateRange: PropTypes.string,
  }).isRequired,
  liked: PropTypes.bool,
  onLikeToggle: PropTypes.func,
  onCardClick: PropTypes.func,
  className: PropTypes.string,
};

export default PropertyCard; 