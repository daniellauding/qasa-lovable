import React from 'react';
import CreateTenantListingStep3 from '../../prototypes/tenants/create-tenant-listing/components/CreateTenantListingStep3';
import { LanguageProvider } from '../../utils/translations/LanguageContext';

export default {
  title: 'Tenant Listing/Step 3 - What to Rent',
  component: CreateTenantListingStep3,
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
  sharedAccommodation: 'all',
  furnishedType: 'both',
  propertyTypes: ['apartment'],
  tenantType: 'none',
};

export const Default = {
  args: {
    formData: mockFormData,
    onNext: () => console.log('Next clicked'),
    onPrev: () => console.log('Previous clicked'),
    updateFormData: (data) => console.log('Form data updated:', data),
  },
};

export const WithMultipleSelections = {
  args: {
    formData: {
      ...mockFormData,
      sharedAccommodation: 'onlyPrivate',
      furnishedType: 'furnished',
      propertyTypes: ['apartment', 'house', 'terraceHouse'],
      tenantType: 'student',
    },
    onNext: () => console.log('Next clicked'),
    onPrev: () => console.log('Previous clicked'),
    updateFormData: (data) => console.log('Form data updated:', data),
  },
}; 