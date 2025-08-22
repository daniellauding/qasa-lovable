import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Typography from './Typography';
import PremiumBadge from './PremiumBadge';

const RichPromoCard = ({
  imageSrc,
  label,
  title,
  buttonText,
  onButtonClick,
  showPremiumBadge = false,
  buttonVariant = 'tertiary',
  buttonSize = 'md',
  titleSize = 'display-sm',
  className = '',
}) => {
  return (
    <article className={`relative overflow-hidden rounded-2xl min-h-[420px] ${className}`}>
      <img src={imageSrc} alt={label} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
        {label ? (
          <Typography variant="body-sm" color="white" className="opacity-85">{label}</Typography>
        ) : <span />}
        <div>
          <Typography variant={titleSize} color="white" className={showPremiumBadge ? "mb-4" : ""}>
            {title}
          </Typography>
          {showPremiumBadge && (
            <PremiumBadge />
          )}
        </div>
        <div>
          <Button variant={buttonVariant} size={buttonSize} onClick={onButtonClick}>{buttonText}</Button>
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
  showPremiumBadge: PropTypes.bool,
  buttonVariant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'outline', 'ghost', 'transparent', 'bordered', 'premium']),
  buttonSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  titleSize: PropTypes.oneOf(['display-lg', 'display-md', 'display-sm', 'title-xl', 'title-lg', 'title-md', 'title-sm', 'title-xs']),
  className: PropTypes.string,
};

export default RichPromoCard;
