import { createContext } from 'react';
import { useThemeInternal } from './useTheme.jsx'; 

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const { theme, setTheme } = useThemeInternal();

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}