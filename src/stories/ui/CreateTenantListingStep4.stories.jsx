import React from 'react';
import CreateTenantListingStep4 from '../../prototypes/tenants/create-tenant-listing/components/CreateTenantListingStep4';
import { LanguageProvider } from '../../utils/translations/LanguageContext';

export default {
  title: 'Prototypes/Tenants/Create Tenant Listing/04 Home Size',
  component: CreateTenantListingStep4,
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
  numberOfTenants: '',
  minimumRooms: '',
  minimumSquareMeters: '',
};

export const Default = {
  args: {
    formData: mockFormData,
    onNext: () => console.log('Next clicked'),
    onPrev: () => console.log('Previous clicked'),
    updateFormData: (data) => console.log('Form data updated:', data),
  },
};

export const WithSelections = {
  args: {
    formData: {
      numberOfTenants: '2',
      minimumRooms: '3',
      minimumSquareMeters: '75',
    },
    onNext: () => console.log('Next clicked'),
    onPrev: () => console.log('Previous clicked'),
    updateFormData: (data) => console.log('Form data updated:', data),
  },
}; 