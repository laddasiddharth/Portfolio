import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: 'var(--section-gap) 0', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="t-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>
            Ready to deploy?
          </h2>
          <p className="t-body" style={{ fontSize: '1.2rem' }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '4rem' }}
        >
          <a href="mailto:siddharthladda@gmail.com" className="t-body" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><Mail size={20} /> Email</a>
          <a href="https://github.com/laddasiddharth" target="_blank" rel="noopener noreferrer" className="t-body" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><Github size={20} /> GitHub</a>
          <a href="https://linkedin.com/in/siddharth-ladda" target="_blank" rel="noopener noreferrer" className="t-body" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><Linkedin size={20} /> LinkedIn</a>
          <a href="tel:+919989111900" className="t-body" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><Phone size={20} /> Phone</a>
        </motion.div>

      </div>
    </section>
  );
}
