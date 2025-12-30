{/* harus dipelajari, awalnya karena ingin ada theme */}
import { useContext, useState } from 'react'
import { ThemeContext } from './ThemeContext'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';
  return localStorage.getItem('theme') || 'light';
};

export const useThemeInternal = () => {
  const [theme, setTheme] = useState(() => getInitialTheme());
  return { theme, setTheme };
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};