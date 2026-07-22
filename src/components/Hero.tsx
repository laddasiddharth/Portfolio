import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section 
      id="hero"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 0 2rem',
        overflow: 'hidden'
      }}
    >
      {/* ── Minimalist Background Elements ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80vw',
          height: '40vh',
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 100%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* ── Content ── */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '4rem',
          maxWidth: '1200px',
        }}
      >
        {/* Left Column: Text Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', gap: '2rem' }}>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="t-display"
            style={{
              fontSize: 'clamp(3rem, 6vw, 6.5rem)',
              color: 'var(--text)',
              lineHeight: 1,
            }}
          >
            Engineering
            <br />
            <span style={{ color: 'var(--text-tertiary)' }}>the future.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="t-body"
            style={{
              fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
              maxWidth: '500px',
            }}
          >
            I'm Siddharth Ladda, a software engineer obsessed with crafting highly-polished digital experiences, secure systems, and scalable backends.
          </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              padding: '0.8rem 1.8rem',
              borderRadius: 'var(--radius-full)',
              background: 'var(--text)',
              color: 'var(--bg)',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.95rem',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(255, 255, 255, 0.1)',
            }}
          >
            View Work
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              padding: '0.8rem 1.8rem',
              borderRadius: 'var(--radius-full)',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.95rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--surface-hover)';
              e.currentTarget.style.borderColor = 'var(--border-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--surface)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            Contact
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('/assets/Siddharth_Ladda_Resume.pdf', '_blank')}
            style={{
              padding: '0.8rem 1.8rem',
              borderRadius: 'var(--radius-full)',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.95rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--surface-hover)';
              e.currentTarget.style.borderColor = 'var(--border-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--surface)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            Resume
          </motion.button>
        </motion.div>
        
        </div> {/* End Left Column */}

        {/* Right Column: Profile Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '380px',
              aspectRatio: '1/1',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-2xl)',
              position: 'relative',
            }}
          >
            <img 
              src="/assets/photo_1.jpeg" 
              alt="Siddharth Ladda" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
