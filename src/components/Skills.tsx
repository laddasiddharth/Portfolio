import { useEffect, useRef } from 'react';

interface SkillItem { name: string; desc: string; }
interface SkillGroup { category: string; count: number; items: SkillItem[]; }

export default function Skills() {
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

  const groups: SkillGroup[] = [
    {
      category: 'Programming Languages',
      count: 5,
      items: [
        { name: 'Python', desc: 'ML tooling & scripting' },
        { name: 'JavaScript', desc: 'Daily driver' },
        { name: 'Java', desc: 'OOP projects' },
        { name: 'C++', desc: 'DSA & systems' },
        { name: 'C', desc: 'Low-level' },
      ],
    },
    {
      category: 'Web Development',
      count: 5,
      items: [
        { name: 'React', desc: 'Production apps' },
        { name: 'Next.js', desc: 'SSR, App Router' },
        { name: 'Tailwind CSS', desc: 'Utility-first styling' },
        { name: 'HTML5', desc: 'Semantic markup' },
        { name: 'CSS3', desc: 'Modern styling' },
      ],
    },
    {
      category: 'Backend & Databases',
      count: 5,
      items: [
        { name: 'Node.js', desc: 'Express backends' },
        { name: 'Express.js', desc: 'REST APIs' },
        { name: 'PostgreSQL', desc: 'pgvector, GIN indexes' },
        { name: 'MySQL', desc: 'Relational workhorse' },
        { name: 'MongoDB', desc: 'Document store' },
      ],
    },
    {
      category: 'Tools & Platforms',
      count: 5,
      items: [
        { name: 'Git', desc: 'PR-driven workflow' },
        { name: 'Docker', desc: 'Compose for everything' },
        { name: 'Linux', desc: 'Daily environment' },
        { name: 'Postman', desc: 'API testing' },
        { name: 'Vercel', desc: 'Frontend deployment' },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{ paddingTop: '5rem', paddingBottom: '6rem', borderTop: '1px solid var(--border)' }}
    >
      <div className="container-editorial">
        <div style={{ marginBottom: '3.5rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              WORKING TOOLKIT
            </div>
            <h2
              className="reveal stagger-1"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: 'var(--foreground)',
                lineHeight: 1.05,
              }}
            >
              Technologies I Reach For<br />When the Problem Is Real.
            </h2>
          </div>
        </div>
        <div className="reveal stagger-2">
          {groups.map((group, gi) => (
            <div
              key={group.category}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: '2rem',
                padding: '2.5rem 0',
                borderBottom: gi < groups.length - 1 ? '1px solid var(--border)' : 'none',
                borderTop: gi === 0 ? '1px solid var(--border)' : 'none',
              }}
              className="skill-group-row"
            >
              <div style={{ paddingTop: '0.25rem' }}>
                <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--foreground)', marginBottom: '0.25rem', fontFamily: 'Inter, sans-serif' }}>
                  {group.category}
                </p>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: 'var(--accent)' }}>
                  {group.count} tools
                </p>
              </div>
              <div
                style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}
                className="skill-cards-inner"
              >
                {group.items.map(item => (
                  <div
                    key={item.name}
                    style={{
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      padding: '0.875rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
                  >
                    <div>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: '0.82rem', color: 'var(--foreground)' }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--muted-foreground)', marginTop: '0.2rem' }}>
                        {item.desc}
                      </div>
                    </div>
                    <div style={{ width: 6, height: 6, background: 'var(--accent)', opacity: 0.5, flexShrink: 0 }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .skill-group-row {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 900px) {
          .skill-cards-inner {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .skill-cards-inner {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
