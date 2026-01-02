{/*atur nih besok, ukuran font dari radix*/} 
import { Outlet } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import { useTheme } from '../contexts/useTheme.jsx';
import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';
import "../styles/global.css";
import "@radix-ui/themes/styles.css";


export default function Layout() {
  const { theme } = useTheme();

  return (
    <Theme appearance={theme === 'dark' ? 'dark' : 'light'}>
      <Navigation />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </Theme>
  );
}