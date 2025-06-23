import React from 'react';
import { BrowserRouter } from 'react-router-dom';
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
  <BrowserRouter>
    <LanguageProvider>
      <FindTenant />
    </LanguageProvider>
  </BrowserRouter>
);

export const SwedishVersion = () => (
  <BrowserRouter>
    <LanguageProvider initialLanguage="sv">
      <FindTenant />
    </LanguageProvider>
  </BrowserRouter>
);

export const FinnishVersion = () => (
  <BrowserRouter>
    <LanguageProvider initialLanguage="fi">
      <FindTenant />
    </LanguageProvider>
  </BrowserRouter>
); 