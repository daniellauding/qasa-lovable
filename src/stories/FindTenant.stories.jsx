import React from 'react';
import FindTenant from '../prototypes/landlords/find-tenant/FindTenant';
import { LanguageProvider } from '../utils/translations/LanguageContext';

export default {
  title: 'Tenants/FindTenant',
  component: FindTenant,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => (
  <LanguageProvider initialLanguage="sv">
      <FindTenant />
    </LanguageProvider>
); 