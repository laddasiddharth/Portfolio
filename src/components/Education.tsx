import { motion } from 'framer-motion';

const EDU_DATA = [
  {
    id: '1',
    status: 'CURRENT',
    date: 'Aug 2023 - Jul 2027 (Expected)',
    degree: 'Bachelor of Technology',
    school: 'Amrita Vishwa Vidyapeetham, Coimbatore',
    major: 'Computer Science & Engineering',
    desc: 'Focus on software systems, distributed computing, and applied AI. Building real projects alongside coursework.'
  },
  {
    id: '2',
    status: '',
    date: 'Jun 2021 - May 2023',
    degree: 'Higher Secondary Education',
    school: 'SR Edu Centre, Warangal',
    major: 'Science Stream — Physics, Chemistry, Mathematics',
    desc: 'Top performer in mathematics. Strong analytical foundations.'
  },
  {
    id: '3',
    status: '',
    date: 'Jun 2020 - Apr 2021',
    degree: 'Secondary Education',
    school: 'Platinum Jubilee High School, Warangal',
    major: '',
    desc: ''
  }
];

export default function Education() {
  return (
    <section id="education" style={{ padding: 'var(--section-gap) 0', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="t-heading" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '4rem', color: 'var(--text)', textAlign: 'center' }}>
            Edu<span style={{ color: '#22c55e' }}>cation</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {EDU_DATA.map((edu, idx) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem', borderTop: idx !== 0 ? '1px solid var(--border)' : 'none', paddingTop: idx !== 0 ? '3rem' : '0' }}>
                
                {/* Left: Dates & Status */}
                <div style={{ gridColumn: 'span 12' }} className="edu-dates">
                  {edu.status && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <span style={{ position: 'relative', display: 'flex', width: 6, height: 6 }}>
                        <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#22c55e', animation: 'pulse-ring 2s ease-out infinite' }} />
                        <span style={{ position: 'relative', width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
                      </span>
                      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: '#22c55e', letterSpacing: '0.05em' }}>{edu.status}</span>
                    </div>
                  )}
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
                    {edu.date}
                  </div>
                </div>

                {/* Right: Details */}
                <div style={{ gridColumn: 'span 12' }} className="edu-details">
                  <div style={{ padding: '2rem', background: 'var(--surface)', border: edu.status === 'CURRENT' ? '1px solid var(--border)' : '1px solid transparent', borderRadius: '12px' }}>
                    <h3 className="t-heading" style={{ fontSize: '1.5rem', color: 'var(--text)', marginBottom: '0.75rem' }}>{edu.degree}</h3>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{edu.school}</p>
                    {edu.major && <p className="t-body" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{edu.major}</p>}
                    {edu.desc && <p className="t-body" style={{ fontSize: '0.95rem', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>{edu.desc}</p>}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .edu-dates {
            grid-column: span 3 !important;
          }
          .edu-details {
            grid-column: span 9 !important;
          }
        }
      `}</style>
    </section>
  );
}
