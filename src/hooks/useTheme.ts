import { createContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

export const ThemeContext = createContext<Theme>('dark');

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined' || !window.localStorage) {
      return 'light';
    }
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      return currentTheme as Theme;
    }
    const darkThemePreferred = window?.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const resultTheme = darkThemePreferred ? 'dark' : 'light';
    localStorage.setItem('theme', resultTheme);
    return resultTheme;
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
};
