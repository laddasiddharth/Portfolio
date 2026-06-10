export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '1.5rem 0',
        background: 'var(--background)',
      }}
    >
      <div
        className="container-editorial footer-flex"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              color: 'var(--muted-foreground)',
              letterSpacing: '0.05em',
            }}
          >
            © {currentYear} Siddharth Ladda. All rights reserved.
          </span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'flex-end' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/laddasiddharth' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/siddharth-ladda' },
            { label: 'Email', href: 'mailto:siddharthladda@gmail.com' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: 'var(--muted-foreground)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-foreground)')}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-flex {
            flex-direction: column !important;
            justify-content: center !important;
            text-align: center !important;
          }
          .footer-flex > div {
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
