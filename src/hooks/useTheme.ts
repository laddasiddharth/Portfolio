import { useState } from 'react';

export type Theme = 'dark' | 'light';

const THEME_COLOR: Record<Theme, string> = { dark: '#09090B', light: '#F8F7F4' };

function readTheme(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[next]);
    localStorage.setItem('portfolio-theme', next);
    setTheme(next);
  };

  return { theme, toggle };
}
