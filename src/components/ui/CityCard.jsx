import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';
import Button from './Button';

const CityCard = ({ imageSrc, city, homesCount, ctaText = 'View homes', onClick }) => {
  return (
    <div className="w-[260px] sm:w-[300px] rounded-xl overflow-hidden bg-white border border-gray-200">
      <div className="aspect-[4/3] bg-gray-100">
        {imageSrc ? (
          <img src={imageSrc} alt={city} className="w-full h-full object-cover" />
        ) : null}
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <Typography variant="label-md">{city}</Typography>
          <Typography variant="body-sm" color="secondary">{homesCount}</Typography>
        </div>
        <Button variant="tertiary" size="sm" onClick={onClick}>{ctaText}</Button>
      </div>
    </div>
  );
};

CityCard.propTypes = {
  imageSrc: PropTypes.string,
  city: PropTypes.string.isRequired,
  homesCount: PropTypes.string.isRequired,
  ctaText: PropTypes.string,
  onClick: PropTypes.func,
};

export default CityCard;
