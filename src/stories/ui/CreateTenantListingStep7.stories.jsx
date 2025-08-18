import React from 'react';
import CreateTenantListingStep7 from '../../prototypes/tenants/create-tenant-listing/components/CreateTenantListingStep7';
import { LanguageProvider } from '../../utils/translations/LanguageContext';

export default {
  title: 'Prototypes/Tenants/Create Tenant Listing/07 Preferences',
  component: CreateTenantListingStep7,
  decorators: [
    (Story) => (
      <LanguageProvider>
        <Story />
      </LanguageProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

const mockFormData = {
  preferences: ['balcony'],
};

export const Default = {
  args: {
    formData: mockFormData,
    onNext: () => console.log('Next clicked'),
    onPrev: () => console.log('Previous clicked'),
    updateFormData: (data) => console.log('Form data updated:', data),
  },
};

export const WithManyPreferences = {
  args: {
    formData: {
      preferences: ['balcony', 'parking', 'dishWasher', 'washingMachine', 'storage'],
    },
    onNext: () => console.log('Next clicked'),
    onPrev: () => console.log('Previous clicked'),
    updateFormData: (data) => console.log('Form data updated:', data),
  },
}; 