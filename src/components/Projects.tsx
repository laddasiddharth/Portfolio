import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 'zenith-vault',
    name: 'Zenith Vault',
    category: 'Security',
    tagline: 'Zero-knowledge password manager with AES-256-GCM encryption',
    description: 'A high-security password management system built with a true zero-knowledge architecture. Features client-side AES-256-GCM encryption, privacy-preserving breach detection using k-Anonymity, and multi-platform support with a browser extension.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Web Crypto API'],
    liveUrl: 'https://zero-knowledge-password-manager-frontend.onrender.com/',
    githubUrl: 'https://github.com/SE-Project-Team-13/Zero-Knowledge-Password-Manager',
  },
  {
    id: 'notivos-ai',
    name: 'Notivos-AI',
    category: 'Desktop',
    tagline: 'AI-powered desktop note-taking app with Gemini integration',
    description: 'Desktop note-taking application built using Electron.js with core CRUD, sorting, and search functionality. Integrated Google Gemini for AI-powered answering, summarization, and text-to-speech accessibility.',
    image: 'https://images.unsplash.com/photo-1672834015694-81eb160868f0?q=80&w=2070&auto=format&fit=crop',
    tech: ['Electron', 'React', 'Gemini API', 'SQLite'],
    githubUrl: 'https://github.com/laddasiddharth/Notivos-AI',
  },
  {
    id: 'gradeai-predictor',
    name: 'GradeAI Predictor',
    category: 'AI/ML',
    tagline: 'AI-driven student performance prediction using regression',
    description: 'An AI-driven student performance prediction system that analyzes multi-dimensional academic data to forecast student grades. Utilizes regression models and provides rich data visualizations for educators.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn'],
    githubUrl: 'https://github.com/laddasiddharth/GradeAI-Student-Predictor',
  }
];

function CinematicProject({ project, index }: { project: typeof PROJECTS[0], index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={containerRef}
      style={{
        display: 'flex',
        flexDirection: isEven ? 'row' : 'row-reverse',
        alignItems: 'center',
        gap: '4rem',
        padding: '6rem 0',
        minHeight: '80vh',
      }}
      className="project-row"
    >
      {/* Image Side */}
      <div 
        style={{ 
          flex: '1.2', 
          position: 'relative',
          height: '600px',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          background: 'var(--bg-elevated)',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border)'
        }}
      >
        <motion.img 
          src={project.image}
          alt={project.name}
          style={{
            width: '100%',
            height: '130%',
            objectFit: 'cover',
            y,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)', pointerEvents: 'none' }} />
      </div>

      {/* Content Side */}
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="t-label" style={{ color: 'var(--text-secondary)' }}>{String(index + 1).padStart(2, '0')} // {project.category}</span>
          <h3 className="t-heading" style={{ fontSize: '3rem', margin: '1rem 0' }}>{project.name}</h3>
          <p className="t-body" style={{ fontSize: '1.1rem', color: 'var(--text)', marginBottom: '1rem' }}>{project.tagline}</p>
          <p className="t-body">{project.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}
        >
          {project.tech.map(t => (
            <span key={t} style={{ padding: '0.4rem 1rem', background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontFamily: "'Space Mono', monospace", color: 'var(--text-secondary)' }}>
              {t}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}
        >
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-full)', color: 'var(--text)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
              Live Demo <ExternalLink size={16} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-full)', color: 'var(--text)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-secondary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text)'}>
              Source Code <Github size={16} />
            </a>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: 'var(--section-gap) 0', background: 'var(--bg)', position: 'relative' }}>
      <div className="container">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '6rem' }}
        >
          <span className="t-label">Selected Work</span>
          <h2 className="t-heading" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginTop: '1rem' }}>
            Featured Projects.
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {PROJECTS.map((project, idx) => (
            <CinematicProject key={project.id} project={project} index={idx} />
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .project-row {
            flex-direction: column !important;
            gap: 2rem !important;
            padding: 3rem 0 !important;
            min-height: auto !important;
          }
          .project-row > div:first-child {
            height: 400px !important;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
