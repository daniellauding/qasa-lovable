import React from 'react';
import PropTypes from 'prop-types';
import HeaderLoggedOut from './HeaderLoggedOut.jsx';
import HeaderLoggedIn from './HeaderLoggedIn.jsx';
import HeaderCreationFlow from './HeaderCreationFlow.jsx';

const Header = ({ variant = 'logged-out', ...props }) => {
  const variants = {
    'logged-out': HeaderLoggedOut,
    'logged-in': HeaderLoggedIn,
    'creation-flow': HeaderCreationFlow,
  };

  const HeaderComponent = variants[variant];

  return <HeaderComponent {...props} />;
};

Header.propTypes = {
  variant: PropTypes.oneOf(['logged-out', 'logged-in', 'creation-flow']),
};

export default Header; 