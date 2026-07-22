import { motion } from 'framer-motion';

export default function About() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 15 } }
  };

  return (
    <section id="about" style={{ padding: 'var(--section-gap) 0', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        
        {/* ── Biography ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="t-label" style={{ marginBottom: '1.5rem', display: 'block', color: 'var(--text-tertiary)', letterSpacing: '0.1em' }}>BIOGRAPHY</span>
          <h2 className="t-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
            Engineering solutions that blend deep technical capability with extreme aesthetic polish.
          </h2>
          <p className="t-body" style={{ fontSize: '1.1rem', maxWidth: '700px', color: 'var(--text-secondary)' }}>
            I'm an undergraduate software engineer with a heavy focus on full-stack development, applied cryptography, and intelligent interfaces. My goal is to bridge the gap between complex backend architectures and flawless user experiences.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
