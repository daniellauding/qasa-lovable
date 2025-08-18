import React, { useState } from 'react';
import CreateTenantListingStep14 from '../../prototypes/tenants/create-tenant-listing/components/CreateTenantListingStep14';
import { LanguageProvider } from '../../utils/translations/LanguageContext';

export default {
  title: 'Prototypes/Tenants/Create Tenant Listing/14 Employment',
  component: CreateTenantListingStep14,
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
    occupations: [],
    ...args.formData
  });

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  return (
    <CreateTenantListingStep14
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
    occupations: []
  }
};

export const WithExistingEmployments = Template.bind({});
WithExistingEmployments.args = {
  onNext: () => console.log('Next clicked'),
  onPrev: () => console.log('Previous clicked'),
  formData: {
    occupations: [
      {
        id: 1,
        type: 'student',
        title: 'Javascript Bootcamp',
        subtitle: 'Technigo',
        scheduleType: 'full_time',
        startMonth: '7',
        startYear: '2025',
        isOngoing: false,
        endMonth: '11',
        endYear: '2025'
      },
      {
        id: 2,
        type: 'work',
        title: 'Senior Product Design Consultant',
        subtitle: 'Qasa AB',
        scheduleType: 'full_time',
        startMonth: '4',
        startYear: '2025',
        isOngoing: true,
        endMonth: '',
        endYear: ''
      }
    ]
  }
}; 