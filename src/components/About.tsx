import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const aboutContent = `I'm a Computer Science undergraduate passionate about full-stack development and AI. I build practical, user-focused web applications — from responsive frontends to scalable backends — and explore intelligent systems like NLP, predictive models, and automation tools.

I'm actively seeking opportunities to collaborate with driven teams and contribute to impactful projects at the intersection of software engineering and artificial intelligence.`;

  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const paragraphs = aboutContent.split('\n\n');

  return (
    <section id="about" className="relative py-10 sm:py-14">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={sectionRef} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="section-heading">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="section-subheading">Get to know me better</p>
          </div>

          <div className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg text-center">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="transition-all duration-700" style={{ transitionDelay: `${300 + index * 150}ms` }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
