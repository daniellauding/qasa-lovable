import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Typography from '../Typography';
import Avatar from '../Avatar';
import Chip from '../Chip';
import { IdCard, Calendar, Home, Users, Coins, Sofa } from 'lucide-react';

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
      className={`bg-gray-10 cursor-pointer hover:shadow-md border-0 transition-shadow ${className}`}
      onClick={onCardClick}
      {...props}
    >
      <div className="text-center flex-1 flex flex-col justify-between">
        <div>
          <Avatar src={user.avatar} alt={user.name} size="3xl" className="mx-auto mb-4" />

          <Typography variant="title-2xs">{user.name}</Typography>

          <Typography variant="title-xs" className="mb-4">
            {user.description}
          </Typography>

          {verified && (
            <div className="flex items-center justify-center gap-2 mb-4 bg-gray-20 rounded-full p-2 px-4 w-fit mx-auto">
              <IdCard className="w-4 h-4 text-black" />
              <Typography variant="label-sm">ID Verified</Typography>
            </div>
          )}

          {/* {matchPercentage && (
            <Chip size="sm" className="mb-4">
              {matchPercentage}% match
            </Chip>
          )} */}
        </div>

        <div className="space-y-6 mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-black" />
              <Typography variant="body-sm">{user.people} people</Typography>
            </div>
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-black" />
              <Typography variant="body-sm">{user.rooms}</Typography>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Coins className="w-5 h-5 text-black" />
              <Typography variant="body-sm">Max {user.maxRent}</Typography>
            </div>

            <div className="flex items-center gap-2">
              <Sofa className="w-5 h-5 text-black" />
              <Typography variant="body-sm">{user.furnished}</Typography>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-black" />
            <Typography variant="body-sm">{user.moveDate}</Typography>
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