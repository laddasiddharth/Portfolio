import { User, Target, Briefcase } from 'lucide-react';

interface AboutContent {
  introduction?: string;
  careerGoals?: string;
  professionalSummary?: string;
}

export default function About() {
  // TODO: Add your about content here manually
  const aboutMe: AboutContent = {
    introduction: 'Welcome to my portfolio! I am a B.Tech student passionate about technology and innovation.',
    careerGoals: 'Aspiring to become a skilled software engineer and contribute to innovative projects.',
    professionalSummary: 'Dedicated student with a strong foundation in computer science and hands-on project experience.'
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">About <span className="text-accent">Me</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card/50 backdrop-blur border border-border/50 hover:border-accent/50 rounded-xl p-8 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <User className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Introduction</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {aboutMe?.introduction}
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur border border-border/50 hover:border-accent/50 rounded-xl p-8 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Career Goals</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {aboutMe?.careerGoals}
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur border border-border/50 hover:border-accent/50 rounded-xl p-8 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Professional Summary</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {aboutMe?.professionalSummary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
