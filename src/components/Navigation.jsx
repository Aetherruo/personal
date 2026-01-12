import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/useTheme';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import linkedin from '../assets/linkedin.png';
import themeIcon from '../assets/theme.svg';
import docs from '../assets/docs.svg';
import heart from '../assets/heart.svg';
import { useEffect, useState } from 'react';
import home from '../assets/home.svg';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [awstTime, setAwstTime] = useState('');

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

  const linkedinUrl = 'https://linkedin.com/in/your-profile';
  const docsUrl = 'https://docs.yoursite.com';
  const donateUrl = 'https://ko-fi.com/donrahman';

  return (
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
          position: 'relative', // ← penting untuk posisi absolut waktu
        }}
      >
        {/* Waktu diposisikan di atas container, rata kanan */}
        <div
          style={{
            position: 'absolute',
            top: '-1rem',
            right: 0,
            fontSize: '0.875rem',
            opacity: 0.8,
            fontFamily: 'monospace',
            pointerEvents: 'none', // mencegah gangguan klik
          }}
        >
          {awstTime} AWST
        </div>

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
            transition: 'border-color 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor =
              theme === 'light' ? '#00000033' : '#ffffff33';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'transparent';
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

        <nav>
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
      </div>
    </header>
  );
}