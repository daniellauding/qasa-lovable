import React, { createContext, useContext, useState, useEffect } from 'react';

const themes = {
  qasa: {
    name: 'Qasa',
    colors: {
      primary: '#E91E63', // Pink
      secondary: '#9C27B0', // Purple  
      tertiary: '#6B7280', // Gray
      success: '#10B981', // Green
      warning: '#F59E0B', // Amber
      danger: '#EF4444', // Red
      background: '#FFFFFF',
      surface: '#F9FAFB',
      text: {
        primary: '#111827',
        secondary: '#6B7280',
        tertiary: '#9CA3AF'
      }
    }
  },
  blocket: {
    name: 'Blocket',
    colors: {
      primary: '#EF4444', // Red
      secondary: '#F97316', // Orange
      tertiary: '#10B981', // Green
      success: '#10B981', // Green
      warning: '#F59E0B', // Amber
      danger: '#DC2626', // Dark red
      background: '#FFFFFF',
      surface: '#F3F4F6',
      text: {
        primary: '#111827',
        secondary: '#6B7280',
        tertiary: '#9CA3AF'
      }
    }
  }
};

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('qasa');

  // Check URL parameters for theme
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const themeParam = urlParams.get('theme');
    if (themeParam && themes[themeParam]) {
      setCurrentTheme(themeParam);
    }
  }, []);

  // Apply CSS custom properties when theme changes
  useEffect(() => {
    const theme = themes[currentTheme];
    if (theme) {
      const root = document.documentElement;
      root.style.setProperty('--color-primary', theme.colors.primary);
      root.style.setProperty('--color-secondary', theme.colors.secondary);
      root.style.setProperty('--color-tertiary', theme.colors.tertiary);
      root.style.setProperty('--color-success', theme.colors.success);
      root.style.setProperty('--color-warning', theme.colors.warning);
      root.style.setProperty('--color-danger', theme.colors.danger);
      root.style.setProperty('--color-background', theme.colors.background);
      root.style.setProperty('--color-surface', theme.colors.surface);
      root.style.setProperty('--color-text-primary', theme.colors.text.primary);
      root.style.setProperty('--color-text-secondary', theme.colors.text.secondary);
      root.style.setProperty('--color-text-tertiary', theme.colors.text.tertiary);
    }
  }, [currentTheme]);

  const switchTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
      // Update URL parameter
      const url = new URL(window.location);
      url.searchParams.set('theme', themeName);
      window.history.replaceState({}, '', url);
    }
  };

  const value = {
    currentTheme,
    theme: themes[currentTheme],
    availableThemes: Object.keys(themes),
    themes,
    switchTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 