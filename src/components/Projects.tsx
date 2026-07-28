import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 'zero-knowledge-password-manager',
    name: 'Zero Knowledge Password Manager',
    category: 'SECURITY',
    tagline: 'Cross-platform password manager with zero-knowledge architecture',
    description: 'A highly secure password manager featuring true zero-knowledge architecture and client-side AES-256-GCM encryption. Includes an autofill browser extension, k-Anonymity breach detection, and a blind sync protocol to ensure your data stays completely private.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Web Crypto API', 'Node.js', 'Express.js', 'MongoDB'],
    liveUrl: 'https://zero-knowledge-password-manager-frontend.onrender.com/',
    githubUrl: 'https://github.com/laddasiddharth/Zero-Knowledge-Password-Manager',
  },
  {
    id: 'notivos-ai',
    name: 'Notivos-AI',
    category: 'DESKTOP AI',
    tagline: 'AI-powered desktop note-taking app with offline-first design',
    description: "An offline-first desktop note-taking app featuring a context-aware AI assistant powered by Google Gemini. Offers intelligent summarization, writing assistance, and built-in text-to-speech, all backed by secure local storage.",
    image: 'https://images.unsplash.com/photo-1672834015694-81eb160868f0?q=80&w=2070&auto=format&fit=crop',
    tech: ['Electron.js', 'JavaScript', 'Node.js', 'Google Gemini API'],
    githubUrl: 'https://github.com/laddasiddharth/Notivos-AI',
  },
  {
    id: 'conseal',
    name: 'Conseal',
    category: 'PRIVACY',
    tagline: 'AI-assisted PII redaction correction tool',
    description: "An AI-powered PII redaction tool featuring a robust two-tier detection model. It combines Gemini's analysis with an offline heuristic fallback for maximum accuracy. Allows manual reviewer corrections, AI-generated explanations, and secure export across multiple document formats.",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tech: ['Next.js', 'FastAPI (Python)', 'Google Gemini API', 'PyMuPDF', 'pdfjs-dist'],
    liveUrl: 'https://sprintfour-seven.vercel.app',
    githubUrl: 'https://github.com/laddasiddharth/sprintfour',
  },
  {
    id: 'freshfetch',
    name: 'FreshFetch',
    category: 'E-COMMERCE',
    tagline: 'Full-stack MERN grocery marketplace',
    description: 'A modern MERN-stack grocery marketplace offering a complete shopping experience. Features seamless Stripe checkout, secure JWT authentication, and a dedicated seller dashboard for managing products and orders efficiently.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop',
    tech: ['React 19', 'Vite', 'Tailwind CSS', 'Node.js', 'Express 5', 'MongoDB (Mongoose)', 'Stripe', 'Cloudinary', 'JWT'],
    liveUrl: 'https://fresh-fetch.vercel.app',
    githubUrl: 'https://github.com/laddasiddharth/FreshFetch',
  }
];

function GridProject({ project, index }: { project: typeof PROJECTS[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-elevated)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
      }}
      className="project-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'var(--border)';
      }}
      onClick={() => window.open(project.liveUrl || project.githubUrl, '_blank')}
    >
      {/* Image Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        paddingTop: '60%', 
        overflow: 'hidden',
        background: '#000',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      }}>
        <img 
          src={project.image}
          alt={project.name}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Content Container */}
      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ marginBottom: '0.75rem' }}>
          <span style={{ 
            fontSize: '0.75rem', 
            fontWeight: 600, 
            letterSpacing: '0.05em', 
            color: 'var(--text-secondary)',
            textTransform: 'uppercase'
          }}>
            {project.category}
          </span>
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text)', marginBottom: '1rem' }}>
          {project.name}
        </h3>

        <p style={{ 
          fontSize: '0.95rem', 
          color: 'var(--text-secondary)', 
          lineHeight: 1.6,
          marginBottom: '1.5rem',
          flex: 1
        }}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {project.tech.map((t) => (
            <span key={t} style={{ 
              padding: '0.35rem 0.8rem', 
              background: 'rgba(255, 255, 255, 0.03)', 
              border: '1px solid rgba(255, 255, 255, 0.1)', 
              borderRadius: 'var(--radius-full)', 
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
              fontWeight: 500
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
          {project.githubUrl && project.githubUrl !== '#' && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', borderRadius: 'var(--radius-full)', color: 'var(--text)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>
              <Github size={16} /> Source Code
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', borderRadius: 'var(--radius-full)', background: 'var(--text)', color: 'var(--bg)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
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
          style={{ marginBottom: '4rem' }}
        >
          <span className="t-label">Selected Work</span>
          <h2 className="t-heading" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginTop: '1rem' }}>
            Featured Projects.
          </h2>
        </motion.div>

        <div className="projects-grid" style={{ 
          display: 'grid', 
          gap: '2rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
        }}>
          {PROJECTS.map((project, idx) => (
            <GridProject key={project.id} project={project} index={idx} />
          ))}
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
