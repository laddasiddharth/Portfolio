import { useScrollReveal } from '../hooks/useScrollReveal';

interface Skill {
  name: string;
  iconSlug: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: '⚡',
      skills: [
        { name: 'Python', iconSlug: 'python' },
        { name: 'JavaScript', iconSlug: 'js' },
        { name: 'Java', iconSlug: 'java' },
        { name: 'C++', iconSlug: 'cpp' },
        { name: 'C', iconSlug: 'c' },
      ]
    },
    {
      title: 'Web Development',
      icon: '🌐',
      skills: [
        { name: 'React', iconSlug: 'react' },
        { name: 'Next.js', iconSlug: 'nextjs' },
        { name: 'Tailwind', iconSlug: 'tailwind' },
        { name: 'HTML5', iconSlug: 'html' },
        { name: 'CSS3', iconSlug: 'css' },
      ]
    },
    {
      title: 'Backend & Databases',
      icon: '🗄️',
      skills: [
        { name: 'Node.js', iconSlug: 'nodejs' },
        { name: 'Express.js', iconSlug: 'express' },
        { name: 'PostgreSQL', iconSlug: 'postgres' },
        { name: 'MySQL', iconSlug: 'mysql' },
        { name: 'MongoDB', iconSlug: 'mongodb' },
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: '🛠️',
      skills: [
        { name: 'Git', iconSlug: 'git' },
        { name: 'Docker', iconSlug: 'docker' },
        { name: 'Linux', iconSlug: 'linux' },
        { name: 'Postman', iconSlug: 'postman' },
        { name: 'Vercel', iconSlug: 'vercel' },
      ]
    }
  ];

  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.08 });

  return (
    <section className="relative pb-24 sm:pb-28">
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div ref={sectionRef} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="section-heading">Technical <span className="gradient-text">Skills</span></h2>
            <p className="section-subheading">Technologies and tools I work with</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <div key={idx} className={`glass-card rounded-2xl p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${200 + idx * 150}ms` }}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap justify-start gap-5">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="flex flex-col items-center gap-2">
                      <div className="w-14 h-14 bg-background/50 border border-border/40 rounded-xl flex items-center justify-center p-2">
                        <img src={`https://skillicons.dev/icons?i=${skill.iconSlug}`} alt={skill.name} className="w-full h-full object-contain" loading="lazy" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground text-center whitespace-nowrap">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
