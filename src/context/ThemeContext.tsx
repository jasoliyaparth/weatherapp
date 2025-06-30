import React, { createContext, useState, useContext } from 'react';
import { themes } from '../theme/theme';

type ThemeType = 'light' | 'dark';

interface ThemeContextType {
  theme: typeof themes.light;
  mode: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: themes.light,
  mode: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const value = {
    mode,
    theme: mode === 'light' ? themes.light : themes.dark,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
