import { useState, useEffect, useCallback, useRef } from 'react';
import { Moon, Sun, Monitor, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

type Theme = 'system' | 'dark' | 'light';

function getSystemTheme(): 'dark' | 'light' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  const resolved = theme === 'system' ? getSystemTheme() : theme;
  const html = document.documentElement;
  if (resolved === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
}

export default function Header() {
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light' || saved === 'system') return saved;
    return 'system';
  });

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Education', path: '/education' },
    { label: 'Contact', path: '/contact' },
  ];

  const getIsActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  const themeOptions: { value: Theme; label: string; icon: React.ReactNode }[] = [
    { value: 'system', label: 'System', icon: <Monitor className="h-4 w-4" /> },
    { value: 'dark', label: 'Dark', icon: <Moon className="h-4 w-4" /> },
    { value: 'light', label: 'Light', icon: <Sun className="h-4 w-4" /> },
  ];

  // Apply theme on change
  useEffect(() => {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  }, [theme]);

  // Listen for system theme changes when in system mode
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      if (theme === 'system') applyTheme('system');
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [theme]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setThemeDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleNavClick = useCallback((path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
  }, [navigate]);

  const currentThemeIcon = theme === 'dark' ? <Moon className="h-4 w-4" /> : theme === 'light' ? <Sun className="h-4 w-4" /> : <Monitor className="h-4 w-4" />;

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-background/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen || themeDropdownOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => {
          setMobileMenuOpen(false);
          setThemeDropdownOpen(false);
        }}
      />

      {/* 1. Desktop Navbar (Centered) */}
      <div className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        <nav className="p-1.5 rounded-full bg-background/80 backdrop-blur-xl border border-border shadow-lg pointer-events-auto">
          <ul className="flex items-center px-2">
            {navItems.map((item) => {
              const isActive = getIsActive(item.path);
              return (
                <li key={item.path}>
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className={`px-4 py-1.5 text-sm rounded-full transition-colors duration-300 ${
                      isActive ? 'bg-foreground text-background font-medium' : 'text-foreground/60 hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* 2. Theme Toggle (Fixed)
          - Desktop: Top Right
          - Mobile: Top Left
      */}
      <div className="fixed top-6 left-4 md:left-auto md:right-6 z-50 pointer-events-none">
        <div ref={dropdownRef} className="relative pointer-events-auto">
          <button
            onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
            className="p-3 md:p-2 rounded-xl md:rounded-full bg-background/80 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border border-border md:border-transparent shadow-lg md:shadow-none hover:bg-foreground/10 text-foreground/70 hover:text-foreground transition-all duration-300 flex items-center justify-center"
            title="Change theme"
          >
            {currentThemeIcon}
          </button>

          {/* Dropdown — opens downward */}
          <div className={`absolute left-0 md:left-auto md:right-0 top-full mt-3 w-36 rounded-xl border border-border bg-card backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300 origin-top-left md:origin-top-right ${
            themeDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
          }`}>
            {themeOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { setTheme(opt.value); setThemeDropdownOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-200 ${
                  theme === opt.value
                    ? 'bg-foreground/10 text-foreground font-medium'
                    : 'text-foreground/70 hover:bg-foreground/5 hover:text-foreground'
                }`}
              >
                {opt.icon}
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Mobile Navbar Toggle (Top Right) */}
      <div className="md:hidden fixed top-6 right-4 z-50 pointer-events-none">
        <div ref={mobileMenuRef} className="relative pointer-events-auto">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 rounded-xl bg-background/80 backdrop-blur-xl border border-border shadow-lg text-foreground/70 hover:text-foreground transition-all duration-300 flex items-center justify-center"
            title="Menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>

          {/* Mobile Dropdown */}
          <div className={`absolute right-0 top-full mt-3 w-48 rounded-xl border border-border bg-card backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300 origin-top-right ${
            mobileMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
          }`}>
            <ul className="flex flex-col p-2">
              {navItems.map((item) => {
                const isActive = getIsActive(item.path);
                return (
                  <li key={item.path}>
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className={`w-full text-left px-4 py-2.5 text-sm rounded-lg transition-colors duration-300 ${
                        isActive
                          ? 'bg-foreground/10 text-foreground font-medium'
                          : 'text-foreground/70 hover:bg-foreground/5 hover:text-foreground'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
