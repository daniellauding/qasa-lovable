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
  border = true,
  className = '',
  children,
  ...props
}) => {
  const baseClasses = [
    'rounded-3xl',
    'transition-all duration-200',
    border ? 'border border-gray-30' : 'border-0',
    'hover:shadow-sm',
    'h-full',
    'flex',
    'flex-col'
  ].join(' ');

  const variantClasses = {
    default: 'p-6 bg-white',
    tenant: 'p-6', // Background handled by TenantCard
    'create-profile': 'p-8', // Background handled by CreateTenantProfileCard
    property: 'overflow-hidden bg-white',
    landlord: 'p-4 bg-white',
    compact: 'p-4 bg-white',
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
  border: PropTypes.bool,
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