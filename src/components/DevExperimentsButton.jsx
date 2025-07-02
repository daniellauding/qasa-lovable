import React, { useState } from 'react';
import { BeakerIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ui/ThemeSwitcher';

// Import all experiments from App.jsx
const experiments = [
  {
    name: 'Apply Home',
    path: '/tenants/apply-home',
    description: 'Tenant application flow prototype'
  },
  {
    name: 'BET: Increase Application Quality',
    path: '/tenants/bet-increase-quality',
    description: 'Experiment to increase application quality through gamification'
  },
  {
    name: 'Find Tenant',
    path: '/landlords/find-tenant',
    description: 'Landlord prototype for finding and connecting with tenants'
  },
  {
    name: 'Create Listing',
    path: '/landlords/create-listing',
    description: 'Step-by-step flow for creating property listings'
  },
  {
    name: 'Media Management for Landlords',
    path: '/landlords/create-listing/step/14',
    description: 'Advanced image upload and management features'
  },
  {
    name: 'Edit Listing Overview',
    path: '/landlords/edit-listing',
    description: 'Overview page for editing property listings with step navigation'
  },
  {
    name: 'Landlord Dashboard',
    path: '/landlords/dashboard',
    description: 'Dashboard overview for landlords to manage property listings and rental information'
  },
  {
    name: 'Experiments Dashboard',
    path: '/experiments',
    description: 'Overview of all available experiments and prototypes'
  },
  {
    name: 'Login Flow',
    path: '/auth/login',
    description: 'User authentication and login flow with forgot password functionality'
  },
  {
    name: 'Register Flow',
    path: '/auth/register',
    description: 'User registration flow with email verification and profile completion'
  },
  {
    name: 'Homes Search & Map',
    path: '/homes',
    description: 'Property search interface with listings and interactive map'
  },
  {
    name: 'Messages Inbox',
    path: '/messages',
    description: 'Inbox interface for managing property conversations with landlords'
  },
  {
    name: 'Tenant Profile (Edit)',
    path: '/tenants/profile',
    description: 'Complete tenant profile with edit modals'
  },
  {
    name: 'Tenant Profile (Public)',
    path: '/tenants/profile?view=public',
    description: 'Public view of tenant profile for landlords'
  },
  {
    name: 'Landlord Profile',
    path: '/landlords/profile',
    description: 'Landlord profile page with personal information and published listings'
  },
  {
    name: 'Mail Template: Welcome to Premium',
    path: '/mail-templates/welcome-to-premium',
    description: 'Email template preview for Premium welcome messages with theme support'
  }
];

function DevExperimentsButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#6E3FF3] p-3 rounded-full shadow-lg hover:bg-[#5B35CC] transition-colors"
        aria-label="Toggle experiments menu"
      >
        <BeakerIcon className="h-6 w-6 text-white" />
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Experiments</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-2 max-h-80 overflow-y-auto">
              {experiments.map((experiment) => (
                <Link
                  key={experiment.path}
                  to={experiment.path}
                  className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="text-sm font-medium text-gray-900">{experiment.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{experiment.description}</div>
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 space-y-3">
              <ThemeSwitcher />
              <a
                href="/storybook"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[#6E3FF3] hover:text-[#5B35CC] font-medium"
              >
                Open Storybook →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DevExperimentsButton; 