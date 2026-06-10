import { useEffect, useRef } from 'react';

export default function Education() {
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

  const educationData = [
    {
      period: 'Aug 2023 – Jul 2027 (Expected)',
      level: 'Bachelor of Technology',
      institution: 'Amrita Vishwa Vidyapeetham, Coimbatore',
      degree: 'Computer Science & Engineering',
      note: 'Focus on software systems, distributed computing, and applied AI. Building real projects alongside coursework.',
      current: true,
    },
    {
      period: 'Jun 2021 – May 2023',
      level: 'Higher Secondary Education',
      institution: 'SR Edu Centre, Warangal',
      degree: 'Science Stream — Physics, Chemistry, Mathematics',
      note: 'Top performer in mathematics. Strong analytical foundations.',
      current: false,
    },
    {
      period: 'Jun 2020 – Apr 2021',
      level: 'Secondary Education',
      institution: 'Platinum Jubilee High School, Warangal',
      degree: '',
      note: '',
      current: false,
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{ paddingTop: 'calc(56px + 4rem)', paddingBottom: '6rem' }}
    >
      <div
        className="container-editorial"
        style={{ paddingBottom: '3rem', borderBottom: '1px solid var(--border)' }}
      >
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
          EDUCATION TIMELINE
        </div>
        <h1
          className="reveal stagger-1"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 900,
            fontSize: 'clamp(3.5rem, 9vw, 8rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            color: 'var(--foreground)',
          }}
        >
          Academic<br />Journey
        </h1>
      </div>
      <div className="container-editorial" style={{ paddingTop: '4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {educationData.map((item, i) => (
            <div
              key={i}
              className="reveal edu-timeline-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '240px 1fr',
                gap: '3rem',
                padding: '3rem 0',
                borderBottom: i < educationData.length - 1 ? '1px solid var(--border)' : 'none',
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <div>
                {item.current && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)' }} />
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.06em' }}>
                      CURRENT
                    </span>
                  </div>
                )}
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
                  {item.period}
                </p>
              </div>
              <div
                style={{
                  background: 'var(--card)',
                  border: `1px solid ${item.current ? 'var(--accent)' : 'var(--border)'}`,
                  padding: '2rem',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => {
                  if (!item.current) (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                }}
                onMouseLeave={e => {
                  if (!item.current) (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 700,
                    fontSize: '1.35rem',
                    color: 'var(--foreground)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.level}
                </h3>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                  {item.institution}
                </p>
                {item.degree && (
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', marginBottom: item.note ? '0.75rem' : '0' }}>
                    {item.degree}
                  </p>
                )}
                {item.note && (
                  <p style={{ fontSize: '0.825rem', color: 'var(--muted-foreground)', fontStyle: 'italic', lineHeight: 1.65 }}>
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .edu-timeline-row {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
