import { useState, useEffect, useCallback, useRef } from 'react';
import { Moon, Sun, Monitor, Menu, X, Home, User, Code2, FolderKanban, GraduationCap, Mail } from 'lucide-react';
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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light' || saved === 'system') return saved;
    return 'system';
  });

  const navItems = [
    { label: 'Home', id: 'home', icon: Home },
    { label: 'About', id: 'about', icon: User },
    { label: 'Skills', id: 'skills', icon: Code2 },
    { label: 'Projects', id: 'projects', icon: FolderKanban },
    { label: 'Education', id: 'education', icon: GraduationCap },
    { label: 'Contact', id: 'contact', icon: Mail },
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

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setThemeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleNavClick = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 20;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const currentThemeIcon = theme === 'dark' ? <Moon className="h-5 w-5" /> : theme === 'light' ? <Sun className="h-5 w-5" /> : <Monitor className="h-5 w-5" />;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
      {/* Navigation Dock */}
      <nav className="flex items-center gap-1 px-3 py-2.5 rounded-2xl bg-card/90 backdrop-blur-xl border border-border shadow-2xl shadow-black/25">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const isHovered = hoveredNav === item.id;
          return (
            <div key={item.id} className="relative">
              {/* Tooltip */}
              <div className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-card border border-border text-xs font-medium text-foreground whitespace-nowrap shadow-lg transition-all duration-200 ${
                isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
              }`}>
                {item.label}
              </div>
              <button
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => setHoveredNav(item.id)}
                onMouseLeave={() => setHoveredNav(null)}
                className={`relative p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-accent to-primary text-white shadow-lg shadow-accent/30 scale-110'
                    : 'text-foreground/60 hover:text-foreground hover:bg-foreground/8'
                }`}
              >
                <Icon className="h-5 w-5" />
              </button>
            </div>
          );
        })}
      </nav>

      {/* Theme Toggle */}
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
          className="p-3 rounded-2xl bg-card/90 backdrop-blur-xl border border-border shadow-2xl shadow-black/25 text-foreground/70 hover:text-foreground transition-all duration-300"
          title="Change theme"
        >
          {currentThemeIcon}
        </button>

        {/* Dropdown — opens upward */}
        <div className={`absolute right-0 bottom-full mb-3 w-40 rounded-xl border border-border bg-card backdrop-blur-xl shadow-2xl shadow-black/30 overflow-hidden transition-all duration-300 origin-bottom-right ${
          themeDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
        }`}>
          {themeOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => { setTheme(opt.value); setThemeDropdownOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 ${
                theme === opt.value
                  ? 'bg-accent/15 text-accent font-semibold'
                  : 'text-foreground/70 hover:bg-foreground/5 hover:text-foreground'
              }`}
            >
              {opt.icon}
              {opt.label}
              {theme === opt.value && <span className="ml-auto text-accent">✓</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
