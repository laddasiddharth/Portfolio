import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  num: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  category: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: 'zenith-vault',
    num: '01',
    name: 'Zenith Vault',
    tagline: 'Zero-knowledge password manager with AES-256-GCM encryption',
    description: 'A high-security password management system built with a true zero-knowledge architecture. Features client-side AES-256-GCM encryption, privacy-preserving breach detection using k-Anonymity, and multi-platform support with a browser extension.',
    tags: ['Security', 'Showcased', 'Featured'],
    category: 'Security',
    tech: ['Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Express'],
    liveUrl: 'https://zero-knowledge-password-manager-frontend.onrender.com/',
    githubUrl: 'https://github.com/SE-Project-Team-13/Zero-Knowledge-Password-Manager',
  },
  {
    id: 'notivos-ai',
    num: '02',
    name: 'Notivos-AI',
    tagline: 'AI-powered desktop note-taking app with Gemini integration',
    description: 'Desktop note-taking application built using Electron.js with core CRUD, sorting, and search functionality. Integrated Google Gemini for AI-powered answering, summarization, and text-to-speech accessibility.',
    tags: ['AI Systems', 'Showcased'],
    category: 'AI Tooling',
    tech: ['Electron.js', 'JavaScript', 'Gemini API', 'Node.js'],
    githubUrl: 'https://github.com/laddasiddharth/Notivos-AI',
  },
  {
    id: 'freshfetch',
    num: '03',
    name: 'FreshFetch',
    tagline: 'Real-time grocery shopping app with responsive UI',
    description: 'A modern grocery and essentials shopping web application featuring product listings, detailed views, cart functionality, and a clean, responsive UI built with React.',
    tags: ['Frontend', 'Showcased'],
    category: 'Web Interface',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    liveUrl: 'https://fresh-fetch.vercel.app/',
    githubUrl: 'https://github.com/laddasiddharth/FreshFetch',
  },
  {
    id: 'gradeai-predictor',
    num: '04',
    name: 'GradeAI Predictor',
    tagline: 'AI-driven student performance prediction using regression models',
    description: 'AI-driven student performance prediction system that analyzes academic data to forecast student grades. Utilizes regression models and data visualization to provide insights into factors affecting academic success.',
    tags: ['AI Systems', 'ML'],
    category: 'Machine Learning',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com/laddasiddharth/GradeAI-Student-Predictor',
  },
  {
    id: 'spam-detection',
    num: '05',
    name: 'Spam Email Detection',
    tagline: 'ML-powered spam detection with NLP classification',
    description: 'Machine learning-powered spam detection system using Natural Language Processing and classification algorithms. Features real-time email analysis, high accuracy spam filtering, and comprehensive model evaluation metrics.',
    tags: ['ML', 'NLP'],
    category: 'Machine Learning',
    tech: ['Python', 'Scikit-learn', 'NLTK', 'Pandas'],
    githubUrl: 'https://github.com/laddasiddharth/Spam-Email-Detection',
  },
  {
    id: 'secure-legal',
    num: '06',
    name: 'Secure Legal Case System',
    tagline: 'Zero-trust document management for the legal industry',
    description: 'A high-security document management platform engineered for the legal industry to handle sensitive judicial data. Built with a Zero-Trust philosophy ensuring complete confidentiality and document integrity.',
    tags: ['Security', 'Infrastructure'],
    category: 'Security Systems',
    tech: ['TypeScript', 'Node.js', 'React', 'Express', 'Cryptography'],
    githubUrl: 'https://github.com/laddasiddharth/Secure-Legal-Case-Client-Confidential-Document-Management-System',
  },
  {
    id: 'adaptive-fl',
    num: '07',
    name: 'Adaptive FL with Compression',
    tagline: 'Edge-computing system for low-latency federated learning',
    description: 'Edge-computing system designed for low-latency local processing using CI-based decision logic. Implemented lightweight modules enabling efficient distributed computation with minimal cloud dependency.',
    tags: ['Infrastructure', 'ML'],
    category: 'Distributed Systems',
    tech: ['Python', 'Federated Learning', 'Edge Computing', 'TensorFlow'],
    githubUrl: 'https://github.com/laddasiddharth/Edge_Computing-Project',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={sectionRef}
      style={{ paddingTop: 'calc(56px + 4rem)', paddingBottom: '6rem' }}
    >
      <div className="container-editorial" style={{ paddingBottom: '3rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
          PROJECT ARCHIVE
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'flex-end',
          }}
          className="projects-header-grid"
        >
          <div>
            <h1
              className="reveal stagger-1"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 900,
                fontSize: 'clamp(4rem, 10vw, 8.5rem)',
                lineHeight: 0.85,
                letterSpacing: '-0.03em',
                color: 'var(--foreground)',
              }}
            >
              Selected<br />Work
            </h1>
          </div>

          <div className="reveal stagger-2" style={{ paddingBottom: '0.5rem' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: 'var(--foreground)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '30rem' }}>
              Backends, security systems, AI tooling, and the occasional unfinished idea that still taught something useful.
            </p>

          </div>
        </div>
      </div>
      <div className="container-editorial" style={{ paddingTop: '5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '4rem',
          }}
          className="projects-grid"
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 100} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-header-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        paddingTop: '2rem',
        borderTop: '1px solid var(--border)',
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)' }}>
          {project.num}
        </span>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {project.tags.map(tag => (
            <span
              key={tag}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.65rem',
                color: tag === 'Featured' ? 'var(--background)' : 'var(--muted-foreground)',
                background: tag === 'Featured' ? 'var(--accent)' : 'transparent',
                border: `1px solid ${tag === 'Featured' ? 'var(--accent)' : 'var(--border)'}`,
                padding: '0.15rem 0.6rem',
                borderRadius: '1rem',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 800,
            fontSize: '1.85rem',
            color: hovered ? 'var(--accent)' : 'var(--foreground)',
            lineHeight: 1.15,
            marginBottom: '0.75rem',
            transition: 'color 0.2s',
          }}
        >
          {project.name}
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--foreground)', fontWeight: 500, marginBottom: '0.75rem' }}>
          {project.tagline}
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.65 }}>
          {project.description}
        </p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
        {project.tech.map(t => (
          <span key={t} className="tech-pill">{t}</span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1rem' }}>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button-primary"
            style={{ padding: '0.4rem 1rem', fontSize: '0.75rem' }}
          >
            Live Demo <ExternalLink size={12} />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button-secondary"
            style={{ padding: '0.4rem 1rem', fontSize: '0.75rem' }}
          >
            <Github size={12} /> Source Code
          </a>
        )}
      </div>
    </div>
  );
}
