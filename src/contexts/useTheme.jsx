import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext.jsx';

const getInitialTheme = () => {
  // Jika di server (SSR), kembalikan 'dark' sebagai fallback aman
  if (typeof window === 'undefined') return 'dark';
  
  // Baca dari localStorage, jika tidak ada, gunakan 'dark' sebagai default
  return localStorage.getItem('theme') || 'dark';
};

export const useThemeInternal = () => {
  const [theme, setTheme] = useState(() => getInitialTheme());

  useEffect(() => {
    // Terapkan tema ke <html> agar bisa digunakan di CSS global
    document.documentElement.setAttribute('data-theme', theme);
    // Simpan preferensi pengguna
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