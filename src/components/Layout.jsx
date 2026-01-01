import { Outlet } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';

export default function Layout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}