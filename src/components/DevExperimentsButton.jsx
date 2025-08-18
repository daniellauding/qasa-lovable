import React, { useState } from 'react';
import { FlaskConical, X, ChevronDown, Link as LinkIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from './ui/ThemeSwitcher';
import { parseVariantFromUrl, getPrototypeVariants, getVariantUrl, variantStatusConfig, variantRegistry } from '../utils/variants';

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
    name: 'Create Tenant Listing',
    path: '/tenants/create-tenant-listing',
    description: 'Step-by-step flow for tenants to create profile listings to attract landlords'
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
    name: 'Discover (Homes + Tenants)',
    path: '/homes?variant=discover',
    description: 'Combined homes and tenants discovery with toggle interface and unified map view'
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
  const [isVariantDropdownOpen, setIsVariantDropdownOpen] = useState(false);
  const location = useLocation();
  const currentVariant = parseVariantFromUrl();

  // Detect current prototype from URL
  const getCurrentPrototype = () => {
    const path = location.pathname;
    
    // Map URL patterns to prototype IDs
    if (path.startsWith('/auth/register')) return 'register';
    if (path.startsWith('/auth/login')) return 'login';
    if (path.startsWith('/tenants/create-tenant-listing')) return 'create-tenant-listing';
    if (path.startsWith('/landlords/find-tenant')) return 'find-tenant';
    if (path.startsWith('/landlords/create-listing')) return 'create-listing';
    if (path.startsWith('/homes')) return 'homes';
    
    return null;
  };

  const currentPrototypeId = getCurrentPrototype();
  const currentPrototype = currentPrototypeId ? variantRegistry[currentPrototypeId] : null;
  const currentVariants = currentPrototype ? getPrototypeVariants(currentPrototypeId) : [];
  const hasVariants = currentVariants.length > 1;

  const copyVariantLink = (variant, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Get base path for current prototype
    let basePath = '';
    if (currentPrototypeId === 'register') basePath = '/auth/register';
    else if (currentPrototypeId === 'create-tenant-listing') basePath = '/tenants/create-tenant-listing';
    else if (currentPrototypeId === 'find-tenant') basePath = '/landlords/find-tenant';
    else if (currentPrototypeId === 'create-listing') basePath = '/landlords/create-listing';
    else if (currentPrototypeId === 'homes') basePath = '/homes';
    
    const url = window.location.origin + getVariantUrl(basePath, variant.id);
    navigator.clipboard.writeText(url);
    
    // Show feedback
    const button = e.target.closest('button');
    if (button) {
      const originalTitle = button.title;
      button.title = 'Copied!';
      setTimeout(() => {
        button.title = originalTitle;
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[var(--color-primary,#6E3FF3)] p-3 rounded-full shadow-lg hover:bg-[var(--color-primary-hover,#5B35CC)] transition-colors relative"
        aria-label="Toggle experiments menu"
      >
        <FlaskConical className="h-6 w-6 text-white" />
        {currentVariant !== 'default' && (
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-yellow-400 rounded-full"></span>
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Experiments</h3>
                {currentVariant !== 'default' && (
                  <div className="text-xs text-yellow-600 bg-yellow-50 px-2 py-1 rounded mt-1">
                    Variant: {currentVariant}
                  </div>
                )}
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Current prototype variants */}
            {hasVariants && (
              <div className="mb-4 pb-4 border-b border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-gray-700">
                    {currentPrototype.name} Variants
                  </h4>
                  <button
                    onClick={() => setIsVariantDropdownOpen(!isVariantDropdownOpen)}
                    className="text-xs text-gray-500 hover:text-gray-700 flex items-center"
                  >
                    <ChevronDown className={`w-3 h-3 ml-1 transition-transform ${isVariantDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {isVariantDropdownOpen && (
                  <div className="space-y-1 max-h-40 overflow-y-auto">
                    {currentVariants.map((variant) => (
                      <div
                        key={variant.id}
                        className={`p-2 rounded hover:bg-gray-50 cursor-pointer flex items-center justify-between ${
                          currentVariant === variant.id ? 'bg-blue-50 border border-blue-200' : ''
                        }`}
                      >
                        <Link
                          to={getVariantUrl(
                            currentPrototypeId === 'register' ? '/auth/register' :
                            currentPrototypeId === 'create-tenant-listing' ? '/tenants/create-tenant-listing' :
                            currentPrototypeId === 'find-tenant' ? '/landlords/find-tenant' :
                            currentPrototypeId === 'create-listing' ? '/landlords/create-listing' :
                            currentPrototypeId === 'homes' ? '/homes' : '',
                            variant.id
                          )}
                          className="flex-1 min-w-0"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex items-center">
                            <span className="text-xs font-medium text-gray-900">
                              {variant.name}
                            </span>
                            {variant.status && variant.status !== 'active' && (
                              <span className={`ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium ${
                                variant.status === 'draft' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                              }`}>
                                {variantStatusConfig[variant.status]?.label}
                              </span>
                            )}
                            {currentVariant === variant.id && (
                              <span className="ml-2 text-xs text-blue-600">•</span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">{variant.description}</p>
                        </Link>
                        <button
                          onClick={(e) => copyVariantLink(variant, e)}
                          className="ml-2 p-1 text-gray-400 hover:text-gray-600 flex-shrink-0"
                          title="Copy link"
                        >
                          <LinkIcon className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

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
                className="block text-sm text-[var(--color-primary,#6E3FF3)] hover:text-[var(--color-primary-hover,#5B35CC)] font-medium"
              >
                Open Storybook →
              </a>
              <Link
                to="/experiments"
                className="block text-sm text-[var(--color-primary,#6E3FF3)] hover:text-[var(--color-primary-hover,#5B35CC)] font-medium"
                onClick={() => setIsOpen(false)}
              >
                View All Variants →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DevExperimentsButton; 