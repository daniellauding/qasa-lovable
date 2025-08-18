import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../src/contexts/ThemeContext';
import { LanguageProvider } from '../src/utils/translations/LanguageContext';
import { AuthProvider } from '../src/contexts/AuthContext';
import '../src/index.css';

// Combined decorator to wrap stories with all necessary contexts
const withProviders = (Story, context) => {
  const theme = context.globals.theme || 'qasa';
  const language = context.globals.language || 'en';
  
  return (
    <MemoryRouter>
      <ThemeProvider>
        <LanguageProvider initialLanguage={language}>
          <AuthProvider>
            <div data-theme={theme}>
              <Story />
            </div>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1a1a1a',
        },
        {
          name: 'gray',
          value: '#f5f5f5',
        },
      ],
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'qasa',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'qasa', title: 'Qasa Theme', icon: 'heart' },
          { value: 'blocket', title: 'Blocket Theme', icon: 'home' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
    language: {
      description: 'UI language',
      defaultValue: 'en',
      toolbar: {
        title: 'Lang',
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'sv', title: 'Swedish' },
          { value: 'fi', title: 'Finnish' },
          { value: 'no', title: 'Norwegian' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [withProviders],
};

export default preview;