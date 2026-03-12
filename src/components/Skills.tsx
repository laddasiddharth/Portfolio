import SpotlightCard from './ui/SpotlightCard';

interface Skill {
  name: string;
  iconSlug: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
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
      skills: [
        { name: 'Git', iconSlug: 'git' },
        { name: 'Docker', iconSlug: 'docker' },
        { name: 'Linux', iconSlug: 'linux' },
        { name: 'Postman', iconSlug: 'postman' },
        { name: 'Vercel', iconSlug: 'vercel' },
      ]
    }
  ];

  return (
    <section id="skills" className="relative h-screen max-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        {/* Glassmorphism Card Container */}
        <div className="max-w-6xl mx-auto bg-background border border-gray-200 dark:border-transparent shadow-lg dark:shadow-none backdrop-blur-ultra rounded-3xl p-8 md:p-12">

          {/* Skills Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">Technical <span className="text-accent">Skills</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-24">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="flex items-center justify-center mb-6">
                    <h3 className="text-xl font-bold text-foreground/90">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex justify-center gap-x-[26px]">
                    {category.skills.map((skill, skillIdx) => (
                      <div
                        key={skillIdx}
                        className="flex flex-col items-center gap-2 group flex-shrink-0"
                      >
                        <SpotlightCard
                          className="w-[54px] h-[54px] bg-background/40 backdrop-blur-sm border border-border/40 rounded-lg flex items-center justify-center p-2 transition-all duration-300 group-hover:border-accent/40 group-hover:scale-110 group-hover:shadow-lg"
                          spotlightColor="rgba(var(--accent-rgb), 0.15)"
                        >
                          <img
                            src={`https://skillicons.dev/icons?i=${skill.iconSlug}`}
                            alt={skill.name}
                            className="w-full h-full object-contain transition-all duration-300"
                            loading="lazy"
                          />
                        </SpotlightCard>
                        <span className="text-[9px] font-medium uppercase tracking-wider text-muted-foreground group-hover:text-accent transition-colors duration-300 text-center whitespace-nowrap">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
