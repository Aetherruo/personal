import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext.jsx';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';
  return localStorage.getItem('theme') || 'light';
};

export const useThemeInternal = () => {
  const [theme, setTheme] = useState(() => getInitialTheme());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};