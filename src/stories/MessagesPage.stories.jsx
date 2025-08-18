import React from 'react';
import MessagesPage from '../prototypes/messages/MessagesPage';
import { AuthProvider } from '../contexts/AuthContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { ThemeSwitcher } from '../components/ui/ThemeSwitcher';

export default {
  title: 'Pages/MessagesPage',
  component: MessagesPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <AuthProvider>
          <div style={{ position: 'relative' }}>
              <div style={{ position: 'fixed', top: '16px', right: '16px', zIndex: 1000, background: 'white', padding: '8px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <ThemeSwitcher />
              </div>
              <Story />
            </div>
        </AuthProvider>
      </ThemeProvider>
    ),
  ],
};

export const Default = {};

export const QasaTheme = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <AuthProvider>
          <div style={{ '--color-primary': '#E91E63' }}>
              <Story />
            </div>
        </AuthProvider>
      </ThemeProvider>
    ),
  ],
};

export const BlocketTheme = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <AuthProvider>
          <div style={{ '--color-primary': '#EF4444', '--color-tertiary': '#10B981' }}>
              <Story />
            </div>
        </AuthProvider>
      </ThemeProvider>
    ),
  ],
}; 