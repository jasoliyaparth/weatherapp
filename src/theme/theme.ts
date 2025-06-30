import { Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();

export const themes = {
  light: {
    background: '#f2f4f8',
    text: '#000',
    card: '#fff',
    input: '#fff',
    button: '#3399ff',
    error: '#ff4d4f',
  },
  dark: {
    background: '#1c1c1e',
    text: '#f2f2f2',
    card: '#2c2c2e',
    input: '#3a3a3c',
    button: '#0a84ff',
    error: '#ff453a',
  },
};

export const getCurrentTheme = () => {
  return colorScheme === 'dark' ? themes.dark : themes.light;
};
