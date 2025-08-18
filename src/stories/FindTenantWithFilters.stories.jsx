import React from 'react';

import FindTenantWithFilters from '../prototypes/landlords/find-tenant/variants/FindTenantWithFilters';
import { LanguageProvider } from '../utils/translations/LanguageContext';

export default {
  title: 'Prototypes/Landlords/FindTenantWithFilters',
  component: FindTenantWithFilters,
  decorators: [
    (Story) => (
      <LanguageProvider>
        <Story />
      </LanguageProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Enhanced FindTenant component with comprehensive filtering functionality including filter buttons, detailed filter modal, and save search capability.',
      },
    },
  },
};

export const Default = {
  args: {
    isFluid: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default FindTenant page with filtering capabilities. Includes filter buttons, comprehensive filter modal with rent/size sliders, occupation/household checkboxes, rules selection, and save search functionality.',
      },
    },
  },
};

export const Fluid = {
  args: {
    isFluid: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Fluid layout version that takes full width of container.',
      },
    },
  },
}; 