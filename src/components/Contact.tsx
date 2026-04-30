import { Mail, Github, Linkedin, Instagram, Phone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="relative pt-24 sm:pt-28 pb-10 sm:pb-12">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div ref={sectionRef} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="section-heading">Get In <span className="gradient-text">Touch</span></h2>
            <p className="section-subheading">Looking to collaborate? Reach out to discuss your next project, idea, or opportunity.</p>
          </div>

          {/* Contact cards row */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href="mailto:siddharthladda@gmail.com" className="flex items-center gap-4 p-5 glass-card rounded-xl group">
              <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-0.5">Email</p>
                <p className="text-foreground font-medium group-hover:text-accent transition-colors duration-300 text-sm">siddharthladda@gmail.com</p>
              </div>
            </a>
            <a href="tel:+919989111900" className="flex items-center gap-4 p-5 glass-card rounded-xl group">
              <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-0.5">Phone</p>
                <p className="text-foreground font-medium group-hover:text-accent transition-colors duration-300 text-sm">+91 9989111900</p>
              </div>
            </a>
          </div>

          {/* Social links grid */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground/60 mb-8">Find me on</p>
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                { icon: Github, url: 'https://github.com/laddasiddharth', label: 'GitHub', color: 'hover:text-foreground' },
                { icon: Linkedin, url: 'https://linkedin.com/in/siddharth-ladda', label: 'LinkedIn', color: 'hover:text-[#0A66C2]' },
                { icon: Instagram, url: 'https://instagram.com/siddharthladda', label: 'Instagram', color: 'hover:text-[#E4405F]' },
                { icon: Mail, url: 'mailto:siddharthladda@gmail.com', label: 'Email', color: 'hover:text-accent' },
              ].map((link, idx) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-5 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 group hover:border-accent/30 hover:bg-accent/5 hover:-translate-y-1 hover:shadow-glow-sm`}
                    aria-label={link.label}
                  >
                    <div className={`p-3 rounded-xl bg-accent/10 text-muted-foreground group-hover:bg-accent/20 transition-all duration-300 ${link.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground group-hover:text-foreground transition-colors duration-300">
                        {link.label}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
