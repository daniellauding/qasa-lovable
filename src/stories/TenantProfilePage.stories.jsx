import React from 'react';
import TenantProfilePage from '../prototypes/tenants/profile/TenantProfilePage';
import { AuthProvider } from '../contexts/AuthContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { MemoryRouter } from 'react-router-dom';
import { ThemeSwitcher } from '../components/ui/ThemeSwitcher';

export default {
  title: 'Pages/TenantProfilePage',
  component: TenantProfilePage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <AuthProvider>
          <MemoryRouter>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'fixed', top: '16px', right: '16px', zIndex: 1000, background: 'white', padding: '8px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <ThemeSwitcher />
              </div>
              <Story />
            </div>
          </MemoryRouter>
        </AuthProvider>
      </ThemeProvider>
    ),
  ],
};

export const Default = {
  args: {},
};

export const WithDifferentThemes = {
  render: () => (
    <div>
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Complete Tenant Profile</h2>
        <p className="text-gray-600 mb-4">
          A comprehensive tenant profile page with multiple edit modals for different sections:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
          <li><strong>Overview:</strong> Basic profile info, name, bio, photo upload</li>
          <li><strong>Introduction:</strong> Personal description and pet information</li>
          <li><strong>Looking For:</strong> Search criteria, location, rent, room count</li>
          <li><strong>Preferences:</strong> Amenities like balcony, dishwasher, parking</li>
          <li><strong>Requirements:</strong> Pet policy, accessibility needs</li>
          <li><strong>Employment:</strong> Job title, company, dates with add/edit/delete</li>
          <li><strong>Housing Situation:</strong> Current living arrangement, moving reason</li>
        </ul>
        <p className="text-sm text-gray-500">
          Use the theme switcher above to test different brand themes. All modals match the provided HTML structure.
        </p>
      </div>
      <TenantProfilePage />
    </div>
  ),
}; 