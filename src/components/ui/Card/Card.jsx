import React from 'react';
import PropTypes from 'prop-types';
import TenantCard from './TenantCard';
import CreateProfileCard from './CreateProfileCard';
import PropertyCard from './PropertyCard';
import LandlordCard from './LandlordCard';
import ContactCard from './ContactCard';
import LandlordCTACard from './LandlordCTACard';

const Card = ({
  variant = 'default',
  className = '',
  children,
  ...props
}) => {
  const baseClasses = [
    'bg-white',
    'rounded-lg',
    'transition-all duration-200',
    'border border-gray-30',
    'hover:shadow-sm',
    'h-full',
    'flex',
    'flex-col'
  ].join(' ');

  const variantClasses = {
    default: 'p-6',
    tenant: 'p-6',
    'create-profile': 'p-8',
    property: 'overflow-hidden',
    landlord: 'p-4',
    compact: 'p-4',
  };

  const classes = [
    baseClasses,
    variantClasses[variant],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  variant: PropTypes.oneOf(['default', 'tenant', 'create-profile', 'property', 'landlord', 'compact']),
  className: PropTypes.string,
  children: PropTypes.node,
};

// Attach components as properties for compound component pattern
Card.TenantCard = TenantCard;
Card.CreateProfileCard = CreateProfileCard;
Card.PropertyCard = PropertyCard;
Card.LandlordCard = LandlordCard;
Card.ContactCard = ContactCard;
Card.LandlordCTACard = LandlordCTACard;

export default Card; 