import React from 'react';
import SettingsPage from '../prototypes/settings/SettingsPage';
import { LanguageProvider } from '../utils/translations/LanguageContext';

export default {
  title: 'Pages/Settings',
  component: SettingsPage,
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
        component: 'Comprehensive Settings page with accordions, form modals, and full internationalization support. Matches production Qasa settings design with all sections: Personal, Account, Verifications, Notifications, Bank Account, Privacy, Tax Reports, Delete Account, and Promotional Code.',
      },
    },
  },
};

export const Default = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default settings page with all sections collapsed. Click on any section to expand and see the content.',
      },
    },
  },
};

export const Swedish = {
  args: {},
  decorators: [
    (Story) => (
      <LanguageProvider initialLanguage="sv">
        <Story />
      </LanguageProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Settings page in Swedish language showing full internationalization support.',
      },
    },
  },
};

export const English = {
  args: {},
  decorators: [
    (Story) => (
      <LanguageProvider initialLanguage="en">
        <Story />
      </LanguageProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Settings page in English language.',
      },
    },
  },
};

export const Finnish = {
  args: {},
  decorators: [
    (Story) => (
      <LanguageProvider initialLanguage="fi">
        <Story />
      </LanguageProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Settings page in Finnish language.',
      },
    },
  },
};

export const Norwegian = {
  args: {},
  decorators: [
    (Story) => (
      <LanguageProvider initialLanguage="no">
        <Story />
      </LanguageProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Settings page in Norwegian language.',
      },
    },
  },
};
