import { useState, useEffect, useCallback, useRef } from 'react';
import { Moon, Sun, Monitor, Menu, X } from 'lucide-react';
import { useActiveSection } from '../hooks/useScrollReveal';

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

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  const sectionIds = navItems.map(item => item.id);
  const activeSection = useActiveSection(sectionIds);

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

  const handleNavClick = useCallback((id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

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

      <div className="fixed top-6 left-4 right-4 sm:left-6 sm:right-6 md:left-1/2 md:right-auto md:w-auto md:-translate-x-1/2 z-50 pointer-events-none">
      <nav className="flex items-center justify-between w-full md:w-auto md:p-1.5 md:rounded-full md:bg-background/80 md:backdrop-blur-xl md:border md:border-border md:shadow-lg transition-all duration-300">
        
        {/* Desktop Nav Items */}
        <ul className="hidden md:flex items-center px-2 order-1 pointer-events-auto">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-1.5 text-sm rounded-full transition-colors duration-300 ${
                    isActive
                      ? 'bg-foreground text-background font-medium'
                      : 'text-foreground/60 hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Separator */}
        <div className="hidden md:block w-[1px] h-5 bg-border mx-2 order-2 pointer-events-none"></div>

        {/* Theme Toggle (Left on Mobile, Right on Desktop) */}
        <div ref={dropdownRef} className="relative order-1 md:order-3 pointer-events-auto">
          <button
            onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
            className="p-3 md:p-2 rounded-full bg-background/80 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border border-border md:border-transparent shadow-lg md:shadow-none hover:bg-foreground/10 text-foreground/70 hover:text-foreground transition-all duration-300 flex items-center justify-center"
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

        {/* Mobile Nav Toggle (Right on Mobile) */}
        <div ref={mobileMenuRef} className="md:hidden relative flex items-center order-2 pointer-events-auto">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 rounded-full bg-background/80 backdrop-blur-xl border border-border shadow-lg text-foreground/70 hover:text-foreground transition-all duration-300 flex items-center justify-center"
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
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
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

      </nav>
    </div>
    </>
  );
}
