import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left').forEach(el => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/laddasiddharth' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/siddharth-ladda' },
    { icon: Mail, label: 'Email', href: 'mailto:siddharthladda@gmail.com' },
  ];

  return (
    <div ref={sectionRef} style={{ background: 'var(--background)' }}>
      <section
        style={{
          minHeight: 'calc(100vh - 56px)',
          paddingTop: '56px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          className="container-editorial"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '2.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid var(--border)',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {['B.Tech Computer Science', 'Full-Stack Engineer', 'AI Enthusiast'].map((tag, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.7rem',
                  color: i === 0 ? 'var(--accent)' : 'var(--muted-foreground)',
                  letterSpacing: '0.05em',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--muted-foreground)' }}>
              IST {time}
            </span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--muted-foreground)' }}>
              Coimbatore, India
            </span>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="container-editorial" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
            <div
              className="reveal stagger-1"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '3rem',
                marginBottom: '2.5rem',
                flexWrap: 'wrap',
              }}
            >
              <h1
                className="hero-name"
                style={{ marginBottom: '0', flex: 1, minWidth: '300px' }}
              >
                Siddharth Ladda
              </h1>
              <div
                style={{
                  width: '280px',
                  aspectRatio: '4/5',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  flexShrink: 0,
                }}
              >
                <img
                  src="/assets/photo_1.jpeg"
                  alt="Siddharth Ladda"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'bottom' }}
                />
              </div>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '3rem',
                borderTop: '1px solid var(--border)',
                paddingTop: '2.5rem',
              }}
              className="hero-bottom-grid"
            >
              <div className="reveal stagger-2">
                <p className="hero-description" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.3rem)' }}>
                  Building things people rely on — from secure backends to intelligent interfaces.
                </p>
              </div>
              <div className="reveal stagger-3" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  onClick={() => navigate('/projects')}
                  className="cta-button-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  View Projects <ArrowRight size={14} />
                </button>
                <a
                  href="/assets/Siddharth_Ladda_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button-secondary"
                  style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}
                >
                  Resume
                </a>
              </div>
              <div className="reveal stagger-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {socialLinks.map(link => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        style={{
                          width: 36,
                          height: 36,
                          border: '1px solid var(--border)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--muted-foreground)',
                          textDecoration: 'none',
                          transition: 'border-color 0.2s, color 0.2s',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = 'var(--accent)';
                          e.currentTarget.style.color = 'var(--accent)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = 'var(--border)';
                          e.currentTarget.style.color = 'var(--muted-foreground)';
                        }}
                      >
                        <Icon size={15} />
                      </a>
                    );
                  })}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: 'var(--muted-foreground)' }}>
                    Open to Engineering Internships — Summer 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div
          className="container-editorial featured-banner-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr auto',
            gap: '3rem',
            padding: '3rem 2rem',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              FEATURED BUILD
            </div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>
              Security · 2024
            </div>
          </div>
          <div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 800,
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              color: 'var(--foreground)',
              marginBottom: '0.5rem',
              lineHeight: 1.1,
            }}>
              Zenith Vault — Zero-Knowledge Password Manager
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
              Client-side AES-256-GCM encryption with k-Anonymity breach detection. Multi-platform support with browser extension.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flexShrink: 0 }}>
            <a
              href="https://zero-knowledge-password-manager-frontend.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-primary"
              style={{ fontSize: '0.8rem' }}
            >
              Live Demo <ExternalLink size={13} />
            </a>
            <a
              href="https://github.com/SE-Project-Team-13/Zero-Knowledge-Password-Manager"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-secondary"
              style={{ fontSize: '0.8rem' }}
            >
              <Github size={13} /> GitHub
            </a>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .featured-banner-grid {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
          }
        `}</style>
      </section>
      <ProjectsPreview navigate={navigate} />
      <StatsStrip />

    </div>
  );
}
/* Projects Preview — Card-based horizontal section
  ---------------------------------------- */
function ProjectsPreview({ navigate }: { navigate: (path: string) => void }) {
  const projects = [
    {
      num: '01',
      name: 'Zenith Vault',
      category: 'Security',
      desc: 'Zero-knowledge password manager with client-side AES-256-GCM encryption and k-Anonymity breach detection.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Cryptography'],
      href: 'https://zero-knowledge-password-manager-frontend.onrender.com/',
    },
    {
      num: '02',
      name: 'Notivos-AI',
      category: 'AI / Desktop',
      desc: 'AI-powered desktop note-taking app with Gemini integration for smart summarization and text-to-speech.',
      tech: ['Electron.js', 'JavaScript', 'Gemini API'],
      href: 'https://github.com/laddasiddharth/Notivos-AI',
    },
    {
      num: '03',
      name: 'FreshFetch',
      category: 'Frontend',
      desc: 'Modern grocery shopping app with product listings, cart management, and a fully responsive interface.',
      tech: ['React', 'JavaScript', 'Tailwind CSS'],
      href: 'https://fresh-fetch.vercel.app/',
    },
    {
      num: '04',
      name: 'GradeAI Predictor',
      category: 'ML / Data',
      desc: 'Student performance prediction using regression models with data visualization for academic insights.',
      tech: ['Python', 'Scikit-learn', 'Pandas'],
      href: 'https://github.com/laddasiddharth/GradeAI-Student-Predictor',
    },
  ];

  return (
    <section style={{ paddingTop: '5rem', paddingBottom: '5rem', borderBottom: '1px solid var(--border)' }}>
      <div className="container-editorial">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              SELECTED WORK
            </div>
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: 'var(--foreground)',
                lineHeight: 1.05,
              }}
            >
              Projects That Had To Work.
            </h2>
          </div>
          <button
            onClick={() => navigate('/projects')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.8rem',
              color: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0',
              borderBottom: '1px solid var(--accent)',
              transition: 'gap 0.2s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.gap = '1rem')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.gap = '0.5rem')}
          >
            View All Projects <ArrowRight size={13} />
          </button>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: 'var(--border)',
          }}
          className="project-cards-grid"
        >
          {projects.map((p) => (
            <ProjectCard key={p.num} project={p} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .project-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .project-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project }: { project: { num: string; name: string; category: string; desc: string; tech: string[]; href: string } }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: hovered ? 'var(--card)' : 'var(--background)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        textDecoration: 'none',
        transition: 'background 0.25s',
        cursor: 'pointer',
        minHeight: '280px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--accent)' }}>
          {project.num}
        </span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--muted-foreground)' }}>
          {project.category}
        </span>
      </div>

      <h3 style={{
        fontFamily: 'Playfair Display, serif',
        fontWeight: 700,
        fontSize: '1.4rem',
        color: hovered ? 'var(--accent)' : 'var(--foreground)',
        lineHeight: 1.2,
        transition: 'color 0.25s',
        flex: 1,
      }}>
        {project.name}
      </h3>

      <p style={{ fontSize: '0.825rem', color: 'var(--muted-foreground)', lineHeight: 1.65 }}>
        {project.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
        {project.tech.map(t => (
          <span key={t} className="tech-pill">{t}</span>
        ))}
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.7rem',
        color: 'var(--accent)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.25s',
      }}>
        Open Project <ArrowRight size={11} />
      </div>
    </a>
  );
}
/* Stats Strip
  ---------------------------------------- */
function StatsStrip() {
  const stats = [
    { value: '7+', label: 'Projects Shipped' },
    { value: '3', label: 'Open Source' },
    { value: '4+', label: 'Languages' },
    { value: '2027', label: 'Graduating' },
  ];

  return (
    <section
      style={{
        borderBottom: '1px solid var(--border)',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
      className="stats-strip"
    >
      {stats.map((s, i) => (
        <div
          key={i}
          style={{
            padding: '2.5rem 2rem',
            borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem',
          }}
        >
          <div style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 900,
            fontSize: '2.5rem',
            color: 'var(--accent)',
            lineHeight: 1,
          }}>
            {s.value}
          </div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: 'var(--muted-foreground)' }}>
            {s.label}
          </div>
        </div>
      ))}

      <style>{`
        @media (max-width: 700px) {
          .stats-strip {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

