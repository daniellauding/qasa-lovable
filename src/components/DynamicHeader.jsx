import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Header from './Header';

// Dynamic Header Component that uses auth context
function DynamicHeader({ isFluid = false }) {
  const { isLoggedIn, user } = useAuth();
  
  if (isLoggedIn) {
    return (
      <Header 
        variant="logged-in" 
        user={user}
        messageCount={3}
        notificationCount={1}
        isFluid={isFluid}
      />
    );
  } else {
    return (
      <Header 
        variant="logged-out" 
        isFluid={isFluid}
      />
    );
  }
}

export default DynamicHeader; 