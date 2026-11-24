import { useEffect, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { SECTIONS, profile } from '@/data/profile';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

const SECTION_IDS = SECTIONS.map((s) => s.id);

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      className="-mr-2 flex h-11 w-11 items-center justify-center text-fg2 transition-colors hover:text-fg"
    >
      {theme === 'dark' ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />}
    </button>
  );
}

export default function Nav() {
  const active = useActiveSection(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobile menu: lock scroll, close on Escape, move focus into the sheet
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    menuRef.current?.querySelector('a')?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-14 border-b bg-bg transition-colors',
        scrolled || open ? 'border-border' : 'border-transparent',
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-bg focus:px-3 focus:py-1 focus:text-sm"
      >
        Skip to content
      </a>

      <div className="page flex h-full items-center justify-between">
        <a href="#top" className="text-sm font-medium tracking-tight text-fg">
          {profile.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {SECTIONS.map((s) => {
            const isActive = active === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={cn(
                  'font-mono text-xs uppercase tracking-label text-fg3 transition-colors hover:text-fg',
                  isActive && 'text-fg',
                )}
              >
                <span className={cn('mr-1.5', isActive && 'text-accent')}>{s.n}</span>
                {s.label}
              </a>
            );
          })}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="-mr-2 h-11 px-2 font-mono text-xs uppercase tracking-label text-fg"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" ref={menuRef} className="fixed inset-x-0 bottom-0 top-14 overflow-y-auto bg-bg md:hidden">
          <nav aria-label="Mobile" className="page">
            <ul>
              {SECTIONS.map((s) => (
                <li key={s.id} className="border-b border-border">
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-5 text-2xl font-medium tracking-tight text-fg"
                  >
                    <span className="font-mono text-xs text-accent">{s.n}</span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
