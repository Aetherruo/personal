{/* harus dipelajari, awalnya karena ingin ada theme */}
import { createContext, useEffect } from 'react';
import { useThemeInternal } from './useTheme.jsx'; 

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const { theme, setTheme } = useThemeInternal();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: () => setTheme(t => t === 'light' ? 'dark' : 'light') }}>
      {children}
    </ThemeContext.Provider>
  );
}