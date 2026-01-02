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
    <section id="contact" className="relative py-32">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-background/15 backdrop-blur-[0.5px]" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glassmorphism Card Container */}
        <div className="max-w-4xl mx-auto bg-background border border-gray-200 dark:border-transparent shadow-lg dark:shadow-none backdrop-blur-ultra rounded-3xl p-6 md:p-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Get In <span className="text-accent">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Looking to collaborate? Reach out to discuss your next project, idea, or opportunity.
            </p>
          </div>

          {/* Connect Section */}
          <div className="border border-border/50 rounded-2xl p-8 md:p-12 bg-card/30 backdrop-blur">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Connect With Me</h3>
              <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
                Excited to hear about your project. Let's make it happen!
              </p>
            </div>

            {/* Contact Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
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
                      className="flex items-center gap-4 p-6 rounded-xl border border-border/50 bg-card/30 hover:border-accent/50 hover:bg-card/50 transition-all group backdrop-blur"
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
      </div>
    </section>
  );
}
