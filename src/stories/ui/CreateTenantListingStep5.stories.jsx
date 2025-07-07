import React from 'react';
import CreateTenantListingStep5 from '../../prototypes/tenants/create-tenant-listing/components/CreateTenantListingStep5';
import { LanguageProvider } from '../../utils/translations/LanguageContext';

export default {
  title: 'Tenant Listing/Step 5 - When to Rent',
  component: CreateTenantListingStep5,
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
  moveInType: 'indeterminate',
  moveInDate: null,
  moveOutType: 'indeterminate',
  moveOutDate: null,
};

export const Default = {
  args: {
    formData: mockFormData,
    onNext: () => console.log('Next clicked'),
    onPrev: () => console.log('Previous clicked'),
    updateFormData: (data) => console.log('Form data updated:', data),
  },
};

export const WithDates = {
  args: {
    formData: {
      moveInType: 'exact_date',
      moveInDate: new Date('2025-07-19'),
      moveOutType: 'exact_date',
      moveOutDate: new Date('2025-08-16'),
    },
    onNext: () => console.log('Next clicked'),
    onPrev: () => console.log('Previous clicked'),
    updateFormData: (data) => console.log('Form data updated:', data),
  },
}; 