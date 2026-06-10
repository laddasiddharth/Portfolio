import { useEffect, useRef } from 'react';

export default function About() {
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

  const metaItems = [
    { label: 'Location', value: 'Coimbatore, India' },
    { label: 'University', value: 'Amrita Vishwa Vidyapeetham' },
    { label: 'Degree', value: 'B.Tech — Computer Science & Engineering' },
    { label: 'Expected Graduation', value: 'July 2027' },
    { label: 'Status', value: 'Open to Internships' },
    { label: 'Contact', value: 'siddharthladda@gmail.com' },
  ];

  return (
    <section
      ref={sectionRef}
      style={{ paddingTop: 'calc(56px + 4rem)', paddingBottom: '0' }}
    >
      <div
        className="container-editorial"
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          paddingBottom: '2rem',
          borderBottom: '1px solid var(--border)',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            ABOUT — HE / HIM
          </div>
          <h1
            className="reveal stagger-1"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 900,
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              color: 'var(--foreground)',
            }}
          >
            Siddharth<br />Ladda
          </h1>
        </div>
        <p
          className="reveal stagger-2"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            lineHeight: 1.75,
            color: 'var(--muted-foreground)',
            maxWidth: '30rem',
          }}
        >
          Computer Science undergraduate who builds things because problems bother me — and building is how I stop being bothered.
        </p>
      </div>
      <div
        className="container-editorial"
        style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--border)' }}
      >
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}
          className="about-main-grid"
        >
          <div className="reveal stagger-1" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              BIO
            </div>
            {[
              "I build things because problems bother me. What started as scratch-your-own-itch pragmatism has grown into a genuine obsession with software craftsmanship.",
              "I'm a CS undergrad at Amrita Vishwa Vidyapeetham, but my real education happens outside the classroom — reinventing wheels on purpose, building things that actually have to work. My focus is full-stack development: responsive frontends, scalable backends, and the occasional dive into NLP, predictive models, and automation.",
              "I want to work with people who are ahead of me. That's the fastest way to grow.",
            ].map((para, i) => (
              <p key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.85, color: 'var(--foreground)' }}>
                {para}
              </p>
            ))}
          </div>
          <div className="reveal stagger-2">
            <div style={{ marginBottom: '2.5rem' }}>
              {metaItems.map(m => (
                <div
                  key={m.label}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '0.75rem 0',
                    borderBottom: '1px solid var(--border)',
                    gap: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.7rem',
                      color: 'var(--muted-foreground)',
                      letterSpacing: '0.04em',
                      width: '150px',
                      flexShrink: 0,
                    }}
                  >
                    {m.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.82rem',
                      color: 'var(--foreground)',
                      fontWeight: 500,
                    }}
                  >
                    {m.value}
                  </span>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-main-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
