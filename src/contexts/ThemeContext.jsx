import React, { createContext, useContext, useState, useEffect } from 'react';

const themes = {
  qasa: {
    name: 'Qasa',
    colors: {
      primary: '#f19ec1', // Qasa Pink
      primaryHover: '#e785b4', // Darker pink
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
    },
    badge: {
      bg: '#f19ec1',
      text: '#000000',
    },
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="#342620" viewBox="0 0 1808.5 623.62" height="36" style={{transform: 'translateY(4px)'}}>
        <path d="M1322.33 105.88v-.02c.01 14.99-6.47 43.35-10.55 64.29-3.5 17.94-8.3 42.18-38.9 42.18-62.97 0-54.32-80.21-105.54-80.21-21.14 0-33.66 15.83-33.66 35.54 0 14.78 9.03 28.57 22.89 38.79l50.94 38.35c42.55 29.36 59.83 68.38 59.83 98.55 0 56.78-49.46 99.15-109.11 99.15h-126.48c-47.72 0-71.79-14.49-85.6-48.57-3.63-10.23-23.2-60.3-23.2-77.89 0-26.58 18.35-47.1 46.34-47.1 53.86 0 77.4 80.17 121.7 80.17 17.41 0 30.34-15.08 30.34-30.68 0-11.64-7.53-24.2-21.38-34.42l-44.29-34.94c-37.04-28.12-58.13-60.47-58.13-94.96 0-63.22 49.91-120.53 127.28-120.53h127.15c40.88 0 70.37 36.27 70.37 72.3ZM881.14 295.91c0 27.44 12.89 58.75 12.89 86.87 0 30.68-24.42 59.71-60.37 59.71-45.03 0-44.93-42.79-69.72-42.79s-26.57 47.99-104.97 47.99-165.01-83.33-165.01-195.81S568.1 38.75 683.14 38.75c65.77 0 89.74 40.1 112.39 40.1 29.49 0 29.88-50.5 83.17-50.5 33.39 0 59.71 27.72 59.71 60.56 0 52.37-57.27 131.15-57.27 206.99ZM772.7 243.23c0-43.51-35.27-78.78-78.78-78.78s-78.78 35.27-78.78 78.78 35.27 78.78 78.78 78.78s78.78-35.27 78.78-78.78Zm948.72 52.68c0 27.44 12.89 58.75 12.89 86.87 0 30.68-24.42 59.71-60.37 59.71-45.03 0-44.93-42.79-69.72-42.79s-26.57 47.99-104.97 47.99-165.01-83.33-165.01-195.81 74.14-213.13 189.18-213.13c65.77 0 89.74 40.1 112.39 40.1 29.49 0 29.88-50.5 83.17-50.5 33.39 0 59.71 27.72 59.71 60.56 0 52.37-57.27 131.15-57.27 206.99Zm-108.44-52.68c0-43.51-35.27-78.78-78.78-78.78s-78.78 35.27-78.78 78.78 35.27 78.78 78.78 78.78s78.78-35.27 78.78-78.78ZM483.95 89.73c0 26.72-16.41 67.54-38.1 154.2-21.69 86.66-34.22 133.32-34.22 176.24s19.98 69.73 19.98 107.12-30.47 68-60.36 68h-52.38c-33.9 0-59.49-36.36-59.49-68 0-54.67 58.92-71.14 58.92-105.71 0-14.49-10.16-27.07-24.88-27.07-27.96 0-34.34 37.59-97.54 37.59-78.7 0-166.07-75.77-166.07-190.7S122.69 38.76 220.69 38.76c70.78 0 88.44 40.1 117.08 40.1 30.51 0 34.43-50.5 84.82-50.5 30.92 0 61.37 24.92 61.37 61.37ZM318.4 243.24c0-43.51-35.27-78.78-78.78-78.78s-78.78 35.27-78.78 78.78 35.27 78.78 78.78 78.78s78.78-35.27 78.78-78.78Z"></path>
      </svg>
    )
  },
  blocket: {
    name: 'Blocket',
    colors: {
      primary: '#e3372a', // Blocket red
      primaryHover: '#e74238', // Blocket red hover
      secondary: '#9C27B0', // Same as Qasa (Purple)
      tertiary: '#6B7280', // Same as Qasa (Gray)
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
    },
    badge: {
      bg: '#e3372a',
      text: '#ffffff',
    },
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 230 33" height="28" style={{transform: 'translateY(1px)'}}>
        <path fill="#F71414" d="M0 24.715V.147h6.725v5.641a11.277 11.277 0 0 1 2.207-.254c5.9 0 9.436 3.289 9.436 9.583 0 6.367-3.773 9.587-10.08 9.587L0 24.715Zm6.725-5.884H7.96c2.264 0 3.467-1.416 3.467-3.703s-1.271-3.561-3.536-3.561a6.017 6.017 0 0 0-1.166.138v7.126ZM26.936.15h-6.725v24.565h6.725V.151ZM28.79 15.27c0-6.436 3.363-9.725 9.746-9.725 6.383 0 9.745 3.289 9.745 9.725s-3.362 9.8-9.745 9.8c-6.383 0-9.746-3.353-9.746-9.8Zm12.557 0c0-2.008-.824-3.565-2.811-3.565-1.988 0-2.816 1.557-2.816 3.565 0 2.007.825 3.63 2.816 3.63 1.99 0 2.811-1.627 2.811-3.63ZM49.79 15.27c0-6.298 3.535-9.725 9.745-9.725 1.67.021 3.322.35 4.875.97v6.17a10.16 10.16 0 0 0-3.914-.98c-2.401 0-3.776 1.314-3.776 3.565 0 2.25 1.375 3.63 3.776 3.63a10.22 10.22 0 0 0 3.914-.966v6.171c-1.553.621-3.205.95-4.875.97-6.21 0-9.745-3.496-9.745-9.802M73.194 24.715h-6.725V.151h6.725V12.05l4.67-6.157h8.2l-6.624 8.233 6.624 10.589H78l-4.806-8.302v8.302Z"/>
        <path fill="#F71414" d="M84.963 15.27c0-6.367 3.467-9.725 9.36-9.725 5.562 0 8.547 3.63 8.547 9.438v1.837H91.828c.205 1.902 2.056 2.697 4.561 2.697a19.195 19.195 0 0 0 6.481-1.35v5.397a19.853 19.853 0 0 1-7.654 1.489c-6.999 0-10.26-3.355-10.26-9.801l.007.018Zm11.452-2.284c0-1.452-.72-2.54-2.3-2.54-1.581 0-2.298 1.088-2.298 2.54h4.598ZM104.731 15.2V1.045h6.725v4.853h4.803v6.015h-4.803v3.147c0 2.77 1.8 3.703 4.461 3.703h.342v6.011c-.646.112-1.3.169-1.955.17-6.282 0-9.573-3.39-9.573-9.753"/>
        <path fill="#000" d="M139.645 10.05a1.201 1.201 0 0 0-1.698-1.698L134 12.301l-3.951-3.947a1.201 1.201 0 0 0-1.698 1.698L132.302 14l-3.947 3.95a1.201 1.201 0 0 0 1.698 1.698l3.947-3.95 3.951 3.947a1.201 1.201 0 0 0 1.698-1.698L135.698 14l3.947-3.95ZM208.371 9.754v-.001c.001.673-.29 1.946-.473 2.887-.157.805-.373 1.893-1.747 1.893-2.827 0-2.439-3.6-4.738-3.6-.95 0-1.512.71-1.512 1.595 0 .663.406 1.283 1.028 1.741l2.287 1.722c1.911 1.319 2.686 3.07 2.686 4.425 0 2.55-2.22 4.452-4.898 4.452h-5.679c-2.143 0-3.224-.65-3.844-2.18-.163-.46-1.041-2.708-1.041-3.498 0-1.194.824-2.115 2.08-2.115 2.419 0 3.475 3.6 5.464 3.6.782 0 1.363-.677 1.363-1.378 0-.522-.338-1.086-.96-1.545l-1.989-1.569c-1.663-1.262-2.61-2.715-2.61-4.264 0-2.838 2.241-5.411 5.715-5.411h5.709c1.835 0 3.159 1.628 3.159 3.246Zm-19.809 8.532c0 1.232.579 2.638.579 3.9a2.685 2.685 0 0 1-2.71 2.681c-2.022 0-2.018-1.92-3.131-1.92s-1.193 2.154-4.713 2.154-7.409-3.742-7.409-8.792 3.329-9.57 8.494-9.57c2.953 0 4.03 1.801 5.047 1.801 1.324 0 1.341-2.267 3.734-2.267 1.499 0 2.681 1.244 2.681 2.719 0 2.351-2.572 5.888-2.572 9.294Zm-4.868-2.365a3.538 3.538 0 1 0-7.075 0 3.538 3.538 0 0 0 7.075 0Zm42.596 2.365c0 1.232.579 2.638.579 3.9a2.686 2.686 0 0 1-2.711 2.681c-2.021 0-2.017-1.92-3.13-1.92s-1.193 2.154-4.713 2.154-7.409-3.742-7.409-8.792 3.329-9.57 8.494-9.57c2.953 0 4.029 1.801 5.046 1.801 1.325 0 1.342-2.267 3.735-2.267 1.499 0 2.681 1.244 2.681 2.719 0 2.351-2.572 5.888-2.572 9.294Zm-4.869-2.365a3.537 3.537 0 1 0-7.073-.001 3.537 3.537 0 0 0 7.073 0Zm-50.692-6.892c0 1.2-.737 3.032-1.711 6.923-.974 3.891-1.536 5.986-1.536 7.913 0 1.927.897 3.131.897 4.81 0 1.679-1.368 3.053-2.71 3.053h-2.352c-1.522 0-2.671-1.633-2.671-3.053 0-2.455 2.645-3.194 2.645-4.746 0-.651-.456-1.216-1.117-1.216-1.255 0-1.542 1.688-4.379 1.688-3.534 0-7.457-3.402-7.457-8.562 0-5.16 4.171-9.099 8.571-9.099 3.178 0 3.971 1.8 5.257 1.8 1.369 0 1.545-2.267 3.808-2.267 1.388 0 2.755 1.12 2.755 2.756Zm-7.433 6.892a3.537 3.537 0 1 0-7.075 0 3.537 3.537 0 0 0 7.075 0Z"/>
      </svg>
    )
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
      root.style.setProperty('--color-primary-hover', theme.colors.primaryHover);
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
      root.style.setProperty('--color-badge-bg', theme.badge.bg);
      root.style.setProperty('--color-badge-text', theme.badge.text);
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