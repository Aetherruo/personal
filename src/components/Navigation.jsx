import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/useTheme';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import linkedin from '../assets/linkedin.png';
import themeIcon from '../assets/theme.svg';
import docs from '../assets/docs.svg';
import heart from '../assets/heart.svg';
import home from '../assets/home.svg';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [awstTime, setAwstTime] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-AU', {
        timeZone: 'Australia/Perth',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setAwstTime(formatted);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' },
  ];

  const linkedinUrl = 'https://www.linkedin.com/in/ali-rahman-bjb/';
  const docsUrl = 'https://docs.yoursite.com';
  const donateUrl = 'https://ko-fi.com/donrahman';

  // Tutup menu saat ukuran layar berubah ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Overlay menu untuk mobile */}
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: theme === 'light' ? '#ffffffdd' : '#000000dd',
            backdropFilter: 'blur(5px)',
            zIndex: 1001,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
          }}
          onClick={closeMenu}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(false);
            }}
            aria-label="Close menu"
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              color: theme === 'light' ? '#000' : '#fff',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              style={{
                fontSize: '1.5rem',
                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                color:
                  location.pathname === item.path
                    ? theme === 'light'
                      ? '#ff0000ff'
                      : '#ff4d4dff'
                    : theme === 'light'
                    ? '#000'
                    : '#fff',
                textDecoration: 'none',
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Header utama */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'transparent',
          color: theme === 'light' ? '#000000' : '#ffffff',
          padding: '1rem 2rem',
          zIndex: 1000,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Waktu */}
          <div
            style={{
              position: 'absolute',
              top: '-1rem',
              right: 0,
              fontSize: '0.875rem',
              opacity: 0.8,
              fontFamily: 'monospace',
              pointerEvents: 'none',
            }}
          >
            {awstTime} AWST
          </div>

          {/* Logo */}
          <Link
            to="/"
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: theme === 'light' ? '#000000' : '#ffffff',
              textDecoration: 'none',
              padding: '0.25rem 0.5rem',
              borderRadius: '4px',
              border: '1px solid transparent',
              transition: 'border-color 0.2s ease, transform 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor =
                theme === 'light' ? '#00000033' : '#ffffff33';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img
              src={home}
              alt=""
              style={{
                width: '18px',
                height: '18px',
                display: 'block',
              }}
            />
            Rahman Sites
          </Link>

          {/* Desktop Nav - hanya ditampilkan di layar ≥768px */}
          <nav
            style={{
              display: 'none',
              gap: '1.5rem',
            }}
            className="desktop-nav"
          >
            <ul
              style={{
                display: 'flex',
                gap: '1.5rem',
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    style={{
                      color:
                        location.pathname === item.path
                          ? theme === 'light'
                            ? '#ff0000ff'
                            : '#ff4d4dff'
                          : 'inherit',
                      textDecoration: 'none',
                      fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                      padding: '0.25rem 0',
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social & Controls - desktop only */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1rem',
            }}
            className="desktop-controls"
          >
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <img
                src={linkedin}
                alt=""
                style={{
                  width: '24px',
                  height: '24px',
                }}
              />
            </a>

            <a
              href={docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                background: 'none',
                border: '1px solid',
                borderColor: theme === 'light' ? '#ccc' : '#555',
                borderRadius: '4px',
                padding: '0.25rem 0.5rem',
                color: 'inherit',
                textDecoration: 'none',
                fontSize: '0.875rem',
              }}
            >
              <img src={docs} alt="" style={{ width: '16px', height: '16px' }} />
              Docs
            </a>

            <a
              href={donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                background: '#dc3545',
                color: '#ffffff',
                border: 'none',
                borderRadius: '4px',
                padding: '0.25rem 0.75rem',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 'bold',
              }}
            >
              Donate
              <img src={heart} alt="" style={{ width: '16px', height: '16px' }} />
            </a>

            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.25rem',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={themeIcon}
                alt=""
                style={{ width: '20px', height: '20px', display: 'block' }}
              />
              <VisuallyHidden.Root>
                {`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              </VisuallyHidden.Root>
            </button>
          </div>

          {/* Hamburger button - hanya di mobile (<768px) */}
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: theme === 'light' ? '#000' : '#fff',
            }}
            className="mobile-menu-button"
          >
            ☰
          </button>
        </div>
      </header>

      {/* CSS Responsif Inline (atau bisa dipindah ke file terpisah) */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-controls {
            display: flex !important;
          }
        }

        @media (max-width: 767px) {
          .mobile-menu-button {
            display: block !important;
          }
          nav, .desktop-controls {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}