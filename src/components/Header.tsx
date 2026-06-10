import { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const dark = stored !== 'light'; // Default to dark
    setIsDark(dark);
    if (dark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }, [isDark]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Education', path: '/education' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '56px',
          zIndex: 50,
          background: isScrolled ? 'var(--background)' : 'transparent',
          borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'background 0.3s, border-color 0.3s',
        }}
      >
        <div className="container-editorial" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <NavLink
            to="/"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 800,
              fontSize: '1.15rem',
              color: 'var(--foreground)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.5rem',
            }}
          >
            Siddharth Ladda
          </NavLink>
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `nav-link-editorial ${isActive ? 'active' : ''}`}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  position: 'relative',
                  padding: '0.5rem 0',
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--muted-foreground)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--foreground)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-foreground)')}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--foreground)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--background)',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className="container-editorial" style={{ height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--foreground)',
              }}
            >
              <X size={24} />
            </button>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '4rem 2rem', gap: '2rem' }}>
            {navLinks.map((link, i) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: 'var(--foreground)',
                  textDecoration: 'none',
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: mobileMenuOpen ? 1 : 0,
                  transition: `transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + i * 0.05}s, opacity 0.4s ${0.1 + i * 0.05}s`,
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }

        .nav-link-editorial {
          color: var(--muted-foreground);
          transition: color 0.2s;
        }
        .nav-link-editorial:hover {
          color: var(--foreground);
        }
        .nav-link-editorial.active {
          color: var(--foreground);
        }
        .nav-link-editorial.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--foreground);
        }
      `}</style>
    </>
  );
}
