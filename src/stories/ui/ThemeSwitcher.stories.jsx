import React from 'react';
import { ThemeSwitcher } from '../../components/ui/ThemeSwitcher';
import { ThemeProvider } from '../../contexts/ThemeContext';

export default {
  title: 'UI/ThemeSwitcher',
  component: ThemeSwitcher,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="p-4">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {},
};

export const WithContainer = {
  render: () => (
    <div className="bg-[var(--color-background-inset)] p-8 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Theme Configuration</h3>
      <ThemeSwitcher />
      <div className="mt-6 space-y-4">
        <div className="h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white font-medium">
          Primary Color
        </div>
        <div className="h-12 bg-[var(--color-secondary)] rounded-lg flex items-center justify-center text-white font-medium">
          Secondary Color
        </div>
        <div className="h-12 bg-[var(--color-tertiary)] rounded-lg flex items-center justify-center text-white font-medium">
          Tertiary Color
        </div>
      </div>
    </div>
  ),
}; 