import React from 'react';
import CreateTenantListingStep6 from '../../prototypes/tenants/create-tenant-listing/components/CreateTenantListingStep6';
import { LanguageProvider } from '../../utils/translations/LanguageContext';

export default {
  title: 'Prototypes/Tenants/Create Tenant Listing/06 Requirements',
  component: CreateTenantListingStep6,
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
  requirements: [],
};

export const Default = {
  args: {
    formData: mockFormData,
    onNext: () => console.log('Next clicked'),
    onPrev: () => console.log('Previous clicked'),
    updateFormData: (data) => console.log('Form data updated:', data),
  },
};

export const WithRequirements = {
  args: {
    formData: {
      requirements: ['wheelchairAccessible', 'pets'],
    },
    onNext: () => console.log('Next clicked'),
    onPrev: () => console.log('Previous clicked'),
    updateFormData: (data) => console.log('Form data updated:', data),
  },
};