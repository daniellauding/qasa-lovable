import React from 'react';
import FindTenant from '../prototypes/landlords/find-tenant/FindTenant';
import { LanguageProvider } from '../utils/translations/LanguageContext';

export default {
  title: 'Prototypes/FindTenant',
  component: FindTenant,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => (
  <LanguageProvider>
      <FindTenant />
    </LanguageProvider>
);

export const SwedishVersion = () => (
  <LanguageProvider initialLanguage="sv">
      <FindTenant />
    </LanguageProvider>
);

export const FinnishVersion = () => (
  <LanguageProvider initialLanguage="fi">
      <FindTenant />
    </LanguageProvider>
); 