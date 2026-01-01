// src/components/Navigation.jsx
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/useTheme.jsx';
import '../styles/navigation.css';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="navigation">
      <div className="nav-content">
        <h1 className="nav-logo">Portfolio</h1>

        {/* Desktop Navigation */}
        <nav className="nav-menu">
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Toggle */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
}