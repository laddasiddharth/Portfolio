import { GraduationCap } from 'lucide-react';
import { Timeline } from './ui/Timeline';
import SpotlightCard from './ui/SpotlightCard';

export default function Education() {
  const educationData = [
    {
      title: "2023 - 2027",
      content: (
        <SpotlightCard className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent/50 transition-all" spotlightColor="var(--spotlight-color-theme)">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Undergraduation
            </h3>
            <p className="text-sm text-accent font-medium mb-2">
              Amrita Vishwa Vidyapeetham, Coimbatore
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              B.Tech in Computer Science & Engineering
            </p>
          </div>
        </SpotlightCard>
      ),
    },
    {
      title: "2021 - 2023",
      content: (
        <SpotlightCard className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent/50 transition-all" spotlightColor="var(--spotlight-color-theme)">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Higher Secondary Education (12th Grade)
            </h3>
            <p className="text-sm text-accent font-medium mb-2">
              SR Edu Centre, Warangal
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Science Stream - Physics, Chemistry, Mathematics
            </p>
          </div>
        </SpotlightCard>
      ),
    },
    {
      title: "2019 - 2021",
      content: (
        <SpotlightCard className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent/50 transition-all" spotlightColor="var(--spotlight-color-theme)">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Secondary Education (10th Grade)
            </h3>
            <p className="text-sm text-accent font-medium mb-2">
              Platinum Jubilee High School, Warangal
            </p>
          </div>
        </SpotlightCard>
      ),
    },
  ];

  return (
    <section id="education" className="relative py-20">
      {/* Semi-transparent overlay - reduced for better background visibility */}
      <div className="absolute inset-0 bg-background/15 backdrop-blur-[0.5px]" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glassmorphism Card Container */}
        <div className="max-w-7xl mx-auto bg-background border border-gray-200 dark:border-transparent shadow-lg dark:shadow-none backdrop-blur-ultra rounded-3xl p-6 md:p-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="h-8 w-8 text-accent" />
              <h2 className="text-4xl sm:text-5xl font-bold">
                Education <span className="text-accent">Timeline</span>
              </h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="relative w-full overflow-clip">
            <Timeline data={educationData} />
          </div>
        </div>
      </div>
    </section>
  );
}
