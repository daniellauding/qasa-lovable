import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Typography from '../Typography';
import Button from '../Button';

const CreateProfileCard = ({
  title,
  description,
  buttonText = 'Create profile',
  onButtonClick,
  icon,
  className = '',
  ...props
}) => {
  return (
    <Card variant="create-profile" className={`bg-ui-pink-dark ${className}`} {...props}>
      <div className="text-center flex-1 flex flex-col justify-between">
        <div>
          {icon && (
            <div className="mb-6">
              {icon}
            </div>
          )}
          
          <Typography variant="title-lg" className="mb-4 text-brown">
            {title}
          </Typography>
          
          <Typography variant="body-lg" className="mb-8 text-brown">
            {description}
          </Typography>
        </div>

        <Button
          variant="secondary"
          size="lg"
          onClick={onButtonClick}
          className="mt-auto"
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

CreateProfileCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
  icon: PropTypes.node,
  className: PropTypes.string,
};

export default CreateProfileCard; 