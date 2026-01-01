import { Code, Database, Zap, Brain, Wrench } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: 'Code',
      skills: ['Python', 'JavaScript', 'C++', 'C', 'Java']
    },
    {
      title: 'Web Development',
      icon: 'Zap',
      skills: ['React', 'React Native', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS']
    },
    {
      title: 'Backend & Databases',
      icon: 'Database',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Node.js', 'Express.js', 'Django']
    },
    {
      title: 'AI / ML',
      icon: 'Brain',
      skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      title: 'Tools & Platforms',
      icon: 'Wrench',
      skills: ['Git', 'Docker', 'Linux', 'VS Code', 'Postman']
    }
  ];

  const getIcon = (iconName: string) => {
    if (iconName === 'Code') return <Code className="h-6 w-6" />;
    if (iconName === 'Database') return <Database className="h-6 w-6" />;
    if (iconName === 'Zap') return <Zap className="h-6 w-6" />;
    if (iconName === 'Brain') return <Brain className="h-6 w-6" />;
    if (iconName === 'Wrench') return <Wrench className="h-6 w-6" />;
    return null;
  };

  return (
    <section id="skills" className="relative py-20">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-background/15 backdrop-blur-[0.5px]" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glassmorphism Card Container */}
        <div className="max-w-6xl mx-auto bg-background/60 backdrop-blur-ultra rounded-3xl p-8 md:p-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Technical <span className="text-accent">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {skillCategories.map((category, idx) => (
              <SpotlightCard key={idx} className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-8 hover:shadow-lg hover:border-accent/50 transition-all w-full md:w-[30%] min-w-[300px]" spotlightColor="var(--spotlight-color-theme)">
                <h3 className="flex items-center gap-3 text-xl font-bold mb-6 text-foreground">
                  <div className="text-accent bg-accent/10 p-3 rounded-lg">{getIcon(category.icon)}</div>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="bg-muted/50 hover:bg-accent/10 border border-border/50 hover:border-accent/50 rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-all">
                      {skill}
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
