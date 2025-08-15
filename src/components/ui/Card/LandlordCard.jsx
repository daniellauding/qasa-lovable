import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Typography from '../Typography';
import Avatar from '../Avatar';
import { CheckCircle } from 'lucide-react';

const LandlordCard = ({
  landlord,
  verified = false,
  className = '',
  ...props
}) => {
  return (
    <Card variant="landlord" className={className} {...props}>
      <div className="flex items-center gap-3">
        <Avatar
          src={landlord.avatar}
          alt={landlord.name}
          size="sm"
          fallback={landlord.initials}
        />
        
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Typography variant="label-md">
              {landlord.name}
            </Typography>
            {verified && (
              <CheckCircle className="w-4 h-4 text-text-subtle" />
            )}
          </div>
          <Typography variant="body-sm" color="secondary">
            {landlord.role}
          </Typography>
        </div>
      </div>
    </Card>
  );
};

LandlordCard.propTypes = {
  landlord: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    initials: PropTypes.string,
    role: PropTypes.string.isRequired,
  }).isRequired,
  verified: PropTypes.bool,
  className: PropTypes.string,
};

export default LandlordCard; 