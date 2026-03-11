import SpotlightCard from './ui/SpotlightCard';

interface Skill {
  name: string;
  iconSlug: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export default function About() {
  const aboutContent = `I'm a Computer Science undergraduate with a strong interest in full-stack development and machine learning, and I enjoy building software that is practical, efficient, and user-focused. Through projects like FreshFetch, I have worked on scalable MERN-based applications with responsive interfaces, fast API communication, and performance-oriented frontend optimization.

Alongside web development, I like exploring how intelligent systems can solve real problems. My work on Notivos-AI and a spam email detection system gave me hands-on experience with desktop applications, AI-assisted workflows, NLP pipelines, and model-driven problem solving, including building solutions that balance usability, accuracy, and system reliability.

I'm currently looking for opportunities to keep learning, collaborate with motivated teams, and contribute to projects that create meaningful real-world impact.`;

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
    <section id="about" className="relative py-20">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-background/15 backdrop-blur-[0.5px]" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glassmorphism Card Container - Single card for both About and Skills */}
        <div className="max-w-4xl mx-auto bg-background border border-gray-200 dark:border-transparent shadow-lg dark:shadow-none backdrop-blur-ultra rounded-3xl p-8 md:p-12">
          
          {/* About Me Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">About <span className="text-accent">Me</span></h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="text-muted-foreground leading-relaxed space-y-6 text-base md:text-lg text-center">
                {aboutContent.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <div className="space-y-12">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="flex items-center justify-center mb-6">
                    <h3 className="text-xl font-bold text-foreground/90">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap justify-center gap-x-7 gap-y-7 max-w-4xl mx-auto">
                    {category.skills.map((skill, skillIdx) => (
                      <div 
                        key={skillIdx} 
                        className="flex flex-col items-center gap-2 group w-18"
                      >
                        <SpotlightCard 
                          className="w-14 h-14 bg-background/40 backdrop-blur-sm border border-border/40 rounded-lg flex items-center justify-center p-2 transition-all duration-300 group-hover:border-accent/40 group-hover:scale-110 group-hover:shadow-lg"
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
