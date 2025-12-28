import { GraduationCap } from 'lucide-react';
import { Timeline } from './ui/Timeline';

export default function Education() {
  const educationData = [
    {
      title: "2023 - 2027",
      content: (
        <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent/50 transition-all">
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
        </div>
      ),
    },
    {
      title: "2021 - 2023",
      content: (
        <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent/50 transition-all">
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
        </div>
      ),
    },
    {
      title: "2019 - 2021",
      content: (
        <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent/50 transition-all">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Secondary Education (10th Grade)
            </h3>
            <p className="text-sm text-accent font-medium mb-2">
              Platinum Jubilee High School, Warangal
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="h-8 w-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold">
                Education <span className="text-accent">Timeline</span>
              </h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent mx-auto rounded-full mb-4" />
          </div>

          <div className="relative w-full overflow-clip">
            <Timeline data={educationData} />
          </div>
        </div>
      </div>
    </section>
  );
}
