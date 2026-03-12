import { Mail, Github, Linkedin, Instagram } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

export default function Contact() {
  const contactLinks = [
    { icon: Mail, text: 'Email', url: 'mailto:siddharthladda@gmail.com' },
    { icon: Github, text: 'GitHub', url: 'https://github.com/laddasiddharth' },
    { icon: Linkedin, text: 'LinkedIn', url: 'https://linkedin.com/in/siddharth-ladda' },
    { icon: Instagram, text: 'Instagram', url: 'https://instagram.com/siddharthladda' },
  ];

  return (
    <section id="contact" className="relative h-screen max-h-screen flex items-center justify-center overflow-hidden">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-background/15 backdrop-blur-[0.5px]" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        {/* Glassmorphism Card Container */}
        <div className="max-w-3xl w-full mx-auto bg-background border border-gray-200 dark:border-transparent shadow-lg dark:shadow-none backdrop-blur-ultra rounded-3xl p-10 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Connect With <span className="text-accent">Me</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Looking to collaborate? Reach out to discuss your next project, idea, or opportunity.
            </p>
          </div>

          {/* Contact Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
              {contactLinks.map((link, idx) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <SpotlightCard
                      className="flex items-center gap-4 p-8 rounded-xl border border-border/50 bg-card/30 hover:border-accent/50 hover:bg-card/50 transition-all group backdrop-blur"
                      spotlightColor="var(--spotlight-color-theme)"
                    >
                      <div className="flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-accent" />
                      </div>
                      <span className="text-foreground group-hover:text-accent transition-colors font-medium">
                        {link.text}
                      </span>
                    </SpotlightCard>
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
