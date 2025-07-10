import React from 'react';
import { ThemeProvider } from '../src/contexts/ThemeContext';
import '../src/index.css';

// Theme decorator to wrap stories with theme context
const withTheme = (Story, context) => {
  const theme = context.globals.theme || 'qasa';
  
  return (
    <ThemeProvider>
      <div data-theme={theme}>
        <Story />
      </div>
    </ThemeProvider>
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
  },
  decorators: [withTheme],
};

export default preview;