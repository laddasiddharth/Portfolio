import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Education() {
  const educationData = [
    {
      period: "June 2020 - April 2021",
      title: "Secondary Education",
      institution: "Platinum Jubilee High School, Warangal",
      degree: "",
      icon: "🏫",
    },
    {
      period: "June 2021 - May 2023",
      title: "Higher Secondary Education",
      institution: "SR Edu Centre, Warangal",
      degree: "Science Stream - Physics, Chemistry, Mathematics",
      icon: "📚",
    },
    {
      period: "August 2023 - Expected July 2027",
      title: "Undergraduation",
      institution: "Amrita Vishwa Vidyapeetham, Coimbatore",
      degree: "B.Tech in Computer Science & Engineering",
      icon: "🎓",
    },
  ];

  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="relative py-24 sm:py-28">
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div ref={sectionRef} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="h-8 w-8 text-accent" />
            </div>
            <h2 className="section-heading">Education <span className="gradient-text">Timeline</span></h2>
            <p className="section-subheading">My academic journey</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/60 via-primary/40 to-transparent" />

            {educationData.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex items-start mb-12 last:mb-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ transitionDelay: `${300 + idx * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-12 h-12 rounded-full bg-card border-2 border-accent/50 flex items-center justify-center text-xl shadow-glow transition-all duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`} style={{ transitionDelay: `${400 + idx * 200}ms` }}>
                    {item.icon}
                  </div>
                </div>

                {/* Card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass-card rounded-2xl p-6 group">
                    <div className="flex items-center gap-2 text-xs text-accent font-semibold mb-2">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.period}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                    <div className="flex items-center gap-1.5 text-sm text-accent/80 font-medium mb-2">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.institution}
                    </div>
                    {item.degree && <p className="text-sm text-muted-foreground">{item.degree}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
