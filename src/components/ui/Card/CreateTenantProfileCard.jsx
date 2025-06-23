import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Typography from '../Typography';
import Button from '../Button';

// Tenant cat icon - more realistic cat laying down
const TenantCatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="98" height="98" viewBox="0 0 98 98" fill="none">
    <path d="M9.09315 74.5891C9.66269 74.3408 10.3916 73.304 11.0403 73.9356C14.2567 77.5718 17.8844 77.9296 20.8879 73.9441C23.3814 73.9332 26.0794 74.74 28.2553 73.1531C28.5486 72.9401 28.7932 72.6699 29.0232 72.39C31.6044 69.2588 34.6383 69.3732 38.5228 69.944C50.2895 71.1378 61.9857 71.4749 73.8218 71.6538C75.876 75.6807 82.4586 75.1623 83.6877 70.7326C86.3893 73.6825 91.4506 73.7117 92.8246 69.4754C101.469 68.0613 99.2404 56.6645 86.4721 59.7288C87.1682 56.5222 88.1137 50.7574 87.2047 37.8565C86.9503 34.247 87.7523 30.4842 86.5208 27.2532C85.2892 22.6579 79.0937 19.7494 76.0756 24.4286C74.6664 26.7189 73.7926 29.3159 72.8823 31.8825C72.0852 34.129 70.8415 36.1905 69.2205 37.938C67.8125 39.4544 66.4994 41.0753 65.5161 42.902C61.2604 42.2753 56.995 41.3796 52.6894 42.0647C50.0608 42.4748 47.6195 44.2528 44.9873 44.4086C42.5144 44.5546 41.1514 41.741 39.2724 39.4872C35.1664 34.5598 29.5879 30.8042 25.0073 26.3137C23.8317 25.1612 21.4465 25.233 20.5593 26.8868C18.2325 31.2216 21.3954 35.7889 23.7842 39.8C27.625 46.2498 25.7715 50.3376 24.4645 53.0125C23.4958 54.9961 22.5405 56.9858 22.1535 59.1751C20.0433 58.5642 17.4196 58.9865 15.9629 60.7584C12.0832 58.7297 7.29449 60.2899 3.90649 62.6471C-3.18228 67.6646 -0.131373 79.8731 9.09315 74.5891ZM59.2865 58.7528C59.6784 57.4422 60.9136 56.2775 62.0624 55.6107C62.0818 58.8636 63.6347 60.8399 64.8602 61.3011C65.2459 61.446 65.7315 61.4253 66.0041 61.1539C66.3132 60.8448 66.3424 60.3872 66.1513 60.01C65.3202 58.3719 65.0354 56.5015 65.2946 54.6943C67.1492 54.6493 68.9966 55.3636 70.4302 56.6913C71.5753 57.7525 69.3532 64.806 61.5646 62.2358C59.9838 61.7137 58.7437 60.5685 59.2865 58.7528ZM38.1747 57.3241C38.4948 55.9441 39.5888 55.4196 40.8155 55.3125C40.7815 57.2 41.5056 59.0997 42.832 60.4578C43.1241 60.7572 43.6182 60.8156 43.976 60.605C44.3058 60.4116 44.565 59.9187 44.4104 59.539C43.8932 58.2721 43.606 56.942 43.544 55.6009C45.5106 56.1206 47.2082 57.3156 48.2962 59.0376C48.7026 59.6814 48.5359 60.1414 48.1343 60.6002C47.8605 60.9142 47.5137 61.1612 47.1413 61.3474C45.0274 62.4086 43.4612 62.2784 41.8573 61.9291C39.8079 61.4837 37.6381 59.6363 38.1747 57.3229V57.3241Z" fill="#342620"/>
  </svg>
);

const CreateTenantProfileCard = ({
  title = 'Want landlords to find you?',
  description = 'Publish your profile here and let your future home come to you.',
  buttonText = 'Create profile',
  onButtonClick,
  className = '',
  ...props
}) => {
  return (
    <Card 
      variant="create-profile" 
      className={`bg-ui-pink-dark text-white p-8 text-center ${className}`}
      {...props}
    >
      <div className="mb-6">
        <TenantCatIcon />
      </div>
      
      <Typography variant="title-xs" className="mb-4 text-white">
        {title}
      </Typography>
      
      <Typography variant="body-md" className="mb-6 text-white">
        {description}
      </Typography>
      
      <Button
        variant="secondary"
        size="md"
        onClick={onButtonClick}
        className="bg-brown text-white hover:bg-brown-light"
      >
        {buttonText}
      </Button>
    </Card>
  );
};

CreateTenantProfileCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
  className: PropTypes.string,
};

export default CreateTenantProfileCard; 