import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, FileText } from 'lucide-react';

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
          className="container-editorial hero-split-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '4rem',
            alignItems: 'center',
            width: '100%',
            paddingTop: '2rem',
            paddingBottom: '2rem',
          }}
        >
          {/* Left: Typography */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 10 }}>
            <div className="reveal stagger-1" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }} />
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.05em' }}>IST {time}</span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--muted-foreground)', letterSpacing: '0.05em' }}>— Full-Stack Engineer</span>
            </div>
            
            <h1
              className="hero-name reveal stagger-2"
              style={{ marginBottom: '0', lineHeight: 0.85 }}
            >
              Siddharth<br/>
              <span style={{ color: 'var(--accent)' }}>Ladda</span>
            </h1>
            
            <p className="hero-description reveal stagger-3" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', maxWidth: '30rem' }}>
              Building things people rely on — from secure backends to intelligent, minimalist interfaces.
            </p>
            
            <div className="reveal stagger-4" style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <button onClick={() => navigate('/projects')} className="cta-button-primary">
                View Projects <ArrowRight size={14} />
              </button>
              <a href="/assets/Siddharth_Ladda_Resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button-secondary" style={{ textDecoration: 'none' }}>
                <FileText size={14} style={{ marginRight: '0.4rem' }} /> Resume
              </a>
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
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--muted-foreground)',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'var(--accent)';
                        e.currentTarget.style.color = 'var(--accent)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'var(--border)';
                        e.currentTarget.style.color = 'var(--muted-foreground)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Right: Floating Image */}
          <div className="reveal-left stagger-3" style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <div
              className="animate-float"
              style={{
                width: '100%',
                maxWidth: '400px',
                aspectRatio: '3/4',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                position: 'relative',
                zIndex: 5,
              }}
            >
              <img
                src="/assets/photo_1.jpeg"
                alt="Siddharth Ladda"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            
            {/* Decorative background blur */}
            <div style={{
               position: 'absolute',
               top: '10%',
               right: '-10%',
               width: '70%',
               aspectRatio: '1',
               borderRadius: '50%',
               background: 'var(--accent)',
               filter: 'blur(120px)',
               opacity: 0.15,
               zIndex: 1,
            }} />
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
          @media (max-width: 900px) {
            .hero-split-grid {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
              text-align: center;
            }
            .hero-split-grid > div:first-child {
              align-items: center;
            }
            .hero-split-grid .hero-name {
              font-size: clamp(3.5rem, 15vw, 5.5rem) !important;
            }
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
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: 'var(--foreground)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              Projects that had to work.
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
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
          }}
          className="project-cards-grid"
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.num} project={p} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .project-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .project-card-wrapper {
            margin-top: 0 !important;
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

function ProjectCard({ project, index }: { project: { num: string; name: string; category: string; desc: string; tech: string[]; href: string }, index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="project-card-wrapper" style={{ height: '100%' }}>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: hovered ? 'var(--card)' : 'rgba(255, 255, 255, 0.02)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          textDecoration: 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          cursor: 'pointer',
          minHeight: '280px',
          height: '100%',
          borderRadius: '1.5rem',
          border: '1px solid var(--border)',
          transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
          boxShadow: hovered ? '0 30px 60px rgba(0,0,0,0.5), 0 0 30px rgba(var(--accent-rgb), 0.15)' : '0 10px 30px rgba(0,0,0,0.2)',
          zIndex: hovered ? 10 : 1,
          position: 'relative',
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
        fontFamily: 'Space Grotesk, sans-serif',
        fontWeight: 700,
        fontSize: '1.5rem',
        letterSpacing: '-0.02em',
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
    </div>
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

