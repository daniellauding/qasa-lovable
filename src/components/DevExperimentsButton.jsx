import React, { useState } from 'react';
import { BeakerIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

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
  }
];

function DevExperimentsButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
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
            <div className="space-y-2">
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
            <div className="mt-4 pt-3 border-t border-gray-100">
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