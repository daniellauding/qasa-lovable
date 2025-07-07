import React from 'react';
import CreateTenantListingStep8 from '../../prototypes/tenants/create-tenant-listing/components/CreateTenantListingStep8';
import { LanguageProvider } from '../../utils/translations/LanguageContext';

export default {
  title: 'Tenant Listing/Step 8 - Max Rent',
  component: CreateTenantListingStep8,
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
  maxRent: '',
};

export const Default = {
  args: {
    formData: mockFormData,
    onNext: () => console.log('Next clicked'),
    onPrev: () => console.log('Previous clicked'),
    updateFormData: (data) => console.log('Form data updated:', data),
  },
};

export const WithMaxRent = {
  args: {
    formData: {
      maxRent: '25000',
    },
    onNext: () => console.log('Next clicked'),
    onPrev: () => console.log('Previous clicked'),
    updateFormData: (data) => console.log('Form data updated:', data),
  },
}; 