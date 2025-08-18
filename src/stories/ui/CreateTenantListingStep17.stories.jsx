import React from 'react';
import CreateTenantListingStep17 from '../../prototypes/tenants/create-tenant-listing/components/CreateTenantListingStep17';

export default {
  title: 'Prototypes/Tenants/Create Tenant Listing/17 Final Step',
  component: CreateTenantListingStep17,
  parameters: {
    layout: 'fullscreen',
  },
};

const sampleFormData = {
  firstName: 'Daniel',
  bioTitle: 'Jag jobbar platsoberoende och gillar att laga mat',
  bio: 'Just nu bor jag på internet och söker andra lägenheter att jobba ifrån när jag jobbar på distans',
  bioPets: 'Nej jag har bara dammråttor',
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
      endMonth: '',
      endYear: ''
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
    },
    {
      id: 3,
      type: 'other',
      title: 'Tar körkort',
      subtitle: '',
      scheduleType: 'part_time',
      startMonth: '0',
      startYear: '2025',
      isOngoing: true,
      endMonth: '',
      endYear: ''
    },
    {
      id: 4,
      type: 'retired',
      title: 'Pensionerad',
      subtitle: '',
      scheduleType: 'full_time',
      startMonth: '3',
      startYear: '2017',
      isOngoing: true,
      endMonth: '',
      endYear: ''
    }
  ]
};

export const Default = {
  args: {
    onNext: () => console.log('Next clicked'),
    onPrev: () => console.log('Previous clicked'),
    formData: sampleFormData,
    updateFormData: (data) => console.log('Form updated:', data),
  },
};

export const EmptyProfile = {
  args: {
    onNext: () => console.log('Next clicked'),
    onPrev: () => console.log('Previous clicked'),
    formData: {},
    updateFormData: (data) => console.log('Form updated:', data),
  },
}; 