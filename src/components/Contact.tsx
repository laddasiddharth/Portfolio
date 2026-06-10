import { useEffect, useRef, useState } from 'react';
import { Copy, Check, ExternalLink, Github, Mail, Linkedin, Phone } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left').forEach(el => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('siddharthladda@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    {
      icon: Github,
      label: 'GitHub',
      sublabel: '@laddasiddharth',
      desc: 'Code, experiments, and unfinished systems',
      href: 'https://github.com/laddasiddharth',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      sublabel: 'siddharth-ladda',
      desc: 'Professional profile and connections',
      href: 'https://linkedin.com/in/siddharth-ladda',
    },
    {
      icon: Mail,
      label: 'Email',
      sublabel: 'siddharthladda@gmail.com',
      desc: 'Best way to reach me — usually reply same day',
      href: 'mailto:siddharthladda@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      sublabel: '+91 99891 11900',
      desc: 'Available during IST business hours',
      href: 'tel:+919989111900',
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{ paddingTop: 'calc(56px + 4rem)', paddingBottom: '6rem' }}
    >
      <div
        className="container-editorial"
        style={{ paddingBottom: '3rem', borderBottom: '1px solid var(--border)' }}
      >
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
          CONTACT / GET IN TOUCH
        </div>
        <h1
          className="reveal stagger-1"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 7vw, 7rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            color: 'var(--foreground)',
          }}
        >
          Let's Build<br />Something Real.
        </h1>
      </div>
      <div className="container-editorial" style={{ paddingTop: '4rem', maxWidth: '42rem' }}>
        <div className="reveal stagger-1">
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
            FIND ME ON
          </div>
            <div
              className="social-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
              }}
            >
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.25rem',
                      padding: '1.5rem',
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '0.75rem',
                      textDecoration: 'none',
                      transition: 'border-color 0.2s, background 0.2s',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'var(--accent)';
                      el.style.background = 'var(--muted)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'var(--border)';
                      el.style.background = 'var(--card)';
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: '0.5rem',
                        background: 'rgba(var(--accent-rgb), 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent)',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '1rem', color: 'var(--foreground)' }}>
                      {link.label}
                    </div>
                  </a>
                );
              })}
            </div>
            <a
              href="/assets/Siddharth_Ladda_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 1.5rem',
                marginTop: '1.5rem',
                background: 'transparent',
                border: '1px solid var(--border)',
                textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
            >
              <div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: 'var(--muted-foreground)', marginBottom: '0.35rem', letterSpacing: '0.08em' }}>
                  RESUME
                </div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.875rem', fontWeight: 500, color: 'var(--foreground)' }}>
                  Download PDF
                </div>
              </div>
              <ExternalLink size={16} style={{ color: 'var(--muted-foreground)' }} />
            </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .social-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
