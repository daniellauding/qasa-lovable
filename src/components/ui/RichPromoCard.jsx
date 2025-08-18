import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Typography from './Typography';

const RichPromoCard = ({
  imageSrc,
  label,
  title,
  buttonText,
  onButtonClick,
  className = '',
}) => {
  return (
    <article className={`relative overflow-hidden rounded-2xl min-h-[420px] ${className}`}>
      <img src={imageSrc} alt={label} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="relative z-10 h-full p-6 md:p-10 flex flex-col justify-between">
        {label ? (
          <Typography variant="body-sm" color="white" className="opacity-85">{label}</Typography>
        ) : <span />}
        <div>
          <Typography variant="display-sm" color="white" className="mb-8">{title}</Typography>
          <Button variant="tertiary" onClick={onButtonClick}>{buttonText}</Button>
        </div>
      </div>
    </article>
  );
};

RichPromoCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
  className: PropTypes.string,
};

export default RichPromoCard;
