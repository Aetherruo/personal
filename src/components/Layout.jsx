// src/layouts/Layout.jsx
import { Outlet } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import { useTheme } from '../contexts/useTheme.jsx';
import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';
import BookmarkSidebar from './BookmarkSidebar.jsx';
import YearAgeDisplay from '../components/YearAgeDisplay.jsx'; // ← tambahkan ini
import "../styles/global.css";
import "@radix-ui/themes/styles.css";

export default function Layout() {
  const { theme } = useTheme();

  return (
    <Theme appearance={theme === 'dark' ? 'dark' : 'light'}>
      <Navigation />
      <BookmarkSidebar />

      <main
        style={{
          marginLeft: '30%',
          minWidth: '70%',
          padding: '20px',
          marginTop: '20px',
          minHeight: 'calc(100vh - 140px)',
        }}
      >
        <Outlet />
      </main>

      <Footer />
      <YearAgeDisplay /> {/* ← tampilkan di pojok kanan bawah */}
    </Theme>
  );
}