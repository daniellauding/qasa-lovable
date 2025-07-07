import React, { useState } from 'react';
import CreateTenantListingStep15 from '../../prototypes/tenants/create-tenant-listing/components/CreateTenantListingStep15';
import { LanguageProvider } from '../../utils/translations/LanguageContext';

export default {
  title: 'Tenant Listing Flow/Step 15 - Introduction',
  component: CreateTenantListingStep15,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <LanguageProvider>
        <Story />
      </LanguageProvider>
    ),
  ],
};

const Template = (args) => {
  const [formData, setFormData] = useState({
    bioTitle: '',
    bio: '',
    bioPets: '',
    ...args.formData
  });

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  return (
    <CreateTenantListingStep15
      {...args}
      formData={formData}
      updateFormData={updateFormData}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  onNext: () => console.log('Next clicked'),
  onPrev: () => console.log('Previous clicked'),
  formData: {
    bioTitle: '',
    bio: '',
    bioPets: ''
  }
};

export const WithPrefilledData = Template.bind({});
WithPrefilledData.args = {
  onNext: () => console.log('Next clicked'),
  onPrev: () => console.log('Previous clicked'),
  formData: {
    bioTitle: 'Jag jobbar platsoberoende och gillar att laga mat',
    bio: 'Just nu bor jag på internet och söker andra lägenheter att jobba ifrån när jag jobbar på distans',
    bioPets: 'Nej jag har bara dammråttor'
  }
}; 