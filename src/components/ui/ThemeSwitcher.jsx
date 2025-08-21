import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Button from './Button';

export const ThemeSwitcher = ({ className = '' }) => {
  const { currentTheme, availableThemes, switchTheme, themes } = useTheme();

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm font-medium text-gray-700">Theme:</span>
      {availableThemes.map((themeName) => (
        <Button
          key={themeName}
          variant={currentTheme === themeName ? 'primary' : 'outline'}
          size="sm"
          onClick={() => switchTheme(themeName)}
          style={{
            backgroundColor: currentTheme === themeName ? themes[themeName].colors.primary : undefined,
            borderColor: themes[themeName].colors.primary,
            color: currentTheme === themeName ? 'white' : themes[themeName].colors.primary
          }}
        >
          {themes[themeName].name}
        </Button>
      ))}
    </div>
  );
};

export default ThemeSwitcher; 