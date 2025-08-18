import React from 'react';
import CreateTenantListingStep16 from '../../prototypes/tenants/create-tenant-listing/components/CreateTenantListingStep16';

export default {
  title: 'Prototypes/Tenants/Create Tenant Listing/16 Review',
  component: CreateTenantListingStep16,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    onNext: () => console.log('Next clicked'),
    onPrev: () => console.log('Previous clicked'),
    formData: {},
    updateFormData: (data) => console.log('Form updated:', data),
  },
}; 