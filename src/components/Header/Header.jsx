import React from 'react';
import PropTypes from 'prop-types';
import HeaderLoggedOut from './HeaderLoggedOut.jsx';
import HeaderLoggedIn from './HeaderLoggedIn.jsx';
import HeaderCreationFlow from './HeaderCreationFlow.jsx';

const Header = ({ variant = 'logged-out', ...props }) => {
  const variants = {
    'logged-out': HeaderLoggedOut,
    'logged-in': HeaderLoggedIn, // backward compat → landlord
    'landlord': HeaderLoggedIn,
    'tenant': HeaderLoggedIn,
    'creation-flow': HeaderCreationFlow,
  };

  const HeaderComponent = variants[variant] || HeaderLoggedOut;
  const role = variant === 'tenant' ? 'tenant' : 'landlord';

  return <HeaderComponent role={role} {...props} />;
};

Header.propTypes = {
  variant: PropTypes.oneOf(['logged-out', 'logged-in', 'landlord', 'tenant', 'creation-flow']),
};

export default Header; 