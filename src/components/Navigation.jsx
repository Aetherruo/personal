import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/useTheme';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import linkedin from '../assets/linkedin.png';
import docs from '../assets/docs.svg';
import heart from '../assets/heart.svg';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' },
  ];

  // Ganti dengan URL asli milikmu
  const linkedinUrl = 'https://linkedin.com/in/your-profile';
  const docsUrl = 'https://docs.yoursite.com';
  const donateUrl = 'https://ko-fi.com/donrahman'; // atau platform donasi lain

  return (
    <header
      style={{
        backgroundColor: theme === 'light' ? '#ffffff' : '#121212',
        color: theme === 'light' ? '#000000' : '#ffffff',
        padding: '1rem 2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          Bienvenue <span style={{ fontSize: '0.8rem' }}>(byan-vuh-nu)!🎉</span>
        </h1>

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
                    color: location.pathname === item.path
                      ? (theme === 'light' ? '#007bff' : '#4da6ff')
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

        {/* Right-aligned action buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* LinkedIn Icon */}
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
                filter: theme === 'dark' ? 'invert(1)' : 'none', // optional: adjust for dark mode
              }}
            />
          </a>

          {/* Docs Button */}
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

          {/* Donate Button */}
          <a
            href={donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              background: '#dc3545', // merah Bootstrap-style
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

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.25rem',
              cursor: 'pointer',
              padding: '0.25rem',
              borderRadius: '4px',
            }}
          >
            {theme === 'light' ? '🌙' : '☀️'}
            <VisuallyHidden.Root>
              {`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            </VisuallyHidden.Root>
          </button>
        </div>
      </div>
    </header>
  );
}