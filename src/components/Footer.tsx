import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ padding: '2rem 0 1rem 0', background: 'transparent', position: 'relative', zIndex: 10, marginTop: '2rem', borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        
        {/* Top Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem', paddingBottom: '2rem' }}>
          
          {/* Left: Bio */}
          <div style={{ gridColumn: 'span 12' }}>
            <h3 className="t-heading" style={{ fontSize: '1.1rem', color: 'var(--text)', margin: 0 }}>
              Siddharth Ladda
            </h3>
          </div>

          {/* Middle: Links */}
          <div style={{ gridColumn: 'span 12' }}>
            <h4 className="t-heading" style={{ fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.75rem' }}>Links</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gridTemplateRows: 'repeat(3, auto)', gridAutoFlow: 'column', gap: '0.5rem 2rem' }}>
              {['Home', 'About', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="t-body"
                  style={{ 
                    background: 'transparent', 
                    border: 'none', 
                    color: 'var(--text-secondary)', 
                    textAlign: 'left',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    fontSize: '0.95rem',
                    width: 'fit-content'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Connect */}
          <div style={{ gridColumn: 'span 12' }}>
            <h4 className="t-heading" style={{ fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.75rem' }}>Connect</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a 
                href="https://linkedin.com/in/siddharth-ladda" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--text)', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#22c55e'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text)'}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/laddasiddharth" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--text)', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#22c55e'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text)'}
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:siddharthladda@gmail.com" 
                style={{ color: 'var(--text)', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#22c55e'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text)'}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', display: 'flex', justifyContent: 'center' }}>
          <span className="t-label" style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} Siddharth Ladda. All rights reserved.
          </span>
        </div>

      </div>
      <style>{`
        @media (min-width: 768px) {
          footer > div > div > div:nth-child(1) {
            grid-column: span 6 !important;
          }
          footer > div > div > div:nth-child(2) {
            grid-column: span 3 !important;
          }
          footer > div > div > div:nth-child(3) {
            grid-column: span 3 !important;
          }
        }
      `}</style>
    </footer>
  );
}
