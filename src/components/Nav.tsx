import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' 
      ? document.documentElement.getAttribute('data-theme') || 'dark'
      : 'dark'
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll spy logic
      let current = '';
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if the section takes up the middle of the screen
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.2) {
            current = section.id;
          }
        }
      }
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
      style={{
        position: 'fixed',
        top: '2rem',
        left: 0,
        right: 0,
        margin: '0 auto',
        width: 'max-content',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        padding: '0.5rem',
        background: 'var(--nav-glass)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: 'var(--radius-full)',
        border: '1px solid var(--border)',
        boxShadow: scrolled ? 'var(--shadow-lg)' : 'none',
        transition: 'background 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text)',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: '0.95rem',
            padding: '0.6rem 1rem',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
            display: 'flex',
            alignItems: 'center',
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          Siddharth Ladda
        </button>
        
        <div style={{ width: '1px', height: '20px', background: 'var(--border)', margin: '0 0.5rem 0 0' }} />

        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              style={{
                position: 'relative',
                padding: '0.6rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 500,
                color: isActive ? 'var(--bg)' : 'var(--text-secondary)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = 'var(--text)';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'var(--text)',
                    borderRadius: 'var(--radius-full)',
                    zIndex: -1,
                  }}
                />
              )}
              {section.label}
            </button>
          );
        })}
        
        <div style={{ width: '1px', height: '20px', background: 'var(--border)', margin: '0 0.5rem' }} />
        
        <button
          onClick={toggleTheme}
          style={{
            background: 'transparent',
            border: 'none',
            padding: '0.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text)',
            borderRadius: '50%',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-hover)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </motion.nav>
  );
}
