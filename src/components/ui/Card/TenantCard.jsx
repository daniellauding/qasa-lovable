import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Typography from '../Typography';
import Avatar from '../Avatar';
import Chip from '../Chip';
import { CheckCircle, Calendar, Home, Users } from 'lucide-react';

const TenantCard = ({
  user,
  verified = false,
  matchPercentage,
  onCardClick,
  className = '',
  ...props
}) => {
  return (
    <Card 
      variant="tenant" 
      className={`bg-gray-10 cursor-pointer hover:shadow-md transition-shadow ${className}`} 
      onClick={onCardClick}
      {...props}
    >
      <div className="text-center flex-1 flex flex-col justify-between">
        <div>
          <Avatar
            src={user.avatar}
            alt={user.name}
            size="3xl"
            className="mx-auto mb-4"
          />
          
          <Typography variant="title-sm" className="mb-2">
            {user.name}
          </Typography>
          
          <Typography variant="body-md" color="secondary" className="mb-4">
            {user.description}
          </Typography>

          {verified && (
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle className="w-4 h-4 text-text-subtle" />
              <Typography variant="label-sm" color="secondary">ID Verified</Typography>
            </div>
          )}

          {matchPercentage && (
            <Chip size="sm" className="mb-4">
              {matchPercentage}% match
            </Chip>
          )}
        </div>

        <div className="space-y-3 mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-text-subtle" />
              <Typography variant="body-sm" color="secondary">
                {user.people} people
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <Home className="w-4 h-4 text-text-subtle" />
              <Typography variant="body-sm" color="secondary">
                {user.rooms}
              </Typography>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Typography variant="body-sm" color="secondary">
              Max {user.maxRent}
            </Typography>
            <Typography variant="body-sm" color="secondary">
              {user.furnished}
            </Typography>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-text-subtle" />
            <Typography variant="body-sm" color="secondary">
              {user.moveDate}
            </Typography>
          </div>
        </div>
      </div>
    </Card>
  );
};

TenantCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    description: PropTypes.string.isRequired,
    people: PropTypes.string.isRequired,
    rooms: PropTypes.string.isRequired,
    maxRent: PropTypes.string.isRequired,
    furnished: PropTypes.string.isRequired,
    moveDate: PropTypes.string.isRequired,
  }).isRequired,
  verified: PropTypes.bool,
  matchPercentage: PropTypes.number,
  onCardClick: PropTypes.func,
  className: PropTypes.string,
};

export default TenantCard; 