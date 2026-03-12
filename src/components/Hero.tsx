import { ArrowDown, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const titles = ["Software Engineer", "AI Enthusiast", "Full-Stack Developer", "Explorer"];
  const aboutContent = `I'm a Computer Science undergraduate with a strong passion for building web applications and exploring artificial intelligence. I enjoy creating software that is practical, efficient, and user-focused. Throughout my journey, I have worked on developing full-featured web platforms, designing smooth and responsive user experiences, connecting frontend interfaces with backend systems, and organizing data efficiently for various real-world applications.

Alongside web development, I actively explore how intelligent systems can solve everyday problems. I have hands-on experience creating smart desktop tools, building systems that understand and process text, developing programs that can learn from data and make predictions, and designing automated solutions that help users save time and work more effectively with high accuracy and dependability.

I'm currently seeking opportunities to continue learning, collaborate with motivated teams, and contribute to innovative projects that create meaningful real-world impact through technology.`;
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [greeting, setGreeting] = useState('');
  const [timeOfDay, setTimeOfDay] = useState<'morning' | 'afternoon' | 'evening'>('morning');
  const navigate = useNavigate();

  useEffect(() => {
    // Set greeting based on time
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        setGreeting('Good Morning');
        setTimeOfDay('morning');
      } else if (hour >= 12 && hour < 18) {
        setGreeting('Good Afternoon');
        setTimeOfDay('afternoon');
      } else {
        setGreeting('Good Evening');
        setTimeOfDay('evening');
      }
    };

    updateGreeting();
    // Update greeting every minute
    const greetingInterval = setInterval(updateGreeting, 60000);

    return () => clearInterval(greetingInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Github, url: 'https://github.com/laddasiddharth', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/siddharth-ladda', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://instagram.com/siddharthladda', label: 'Instagram' },
    { icon: Mail, url: 'mailto:siddharthladda@gmail.com', label: 'Email' },
  ];

  return (
    <section
      id="hero"
      className="relative h-full flex items-center justify-center py-24"
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-start">
        {/* Glassmorphism Card Container */}
        <div className="max-w-6xl w-full mx-auto bg-background border border-gray-200 dark:border-transparent shadow-lg dark:shadow-none backdrop-blur-ultra rounded-3xl p-8 md:p-12">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-10 w-full">
              {/* Greeting - Above everything */}
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-bold animate-fade-in text-center">
                {greeting}!
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14 w-full">
                {/* Profile Photo - Left Side */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-20 animate-pulse" />
                    <img
                      src="/assets/photo_1.jpeg"
                      alt="Siddharth Ladda"
                      className="relative rounded-full w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 object-cover object-[center_80%] border-4 border-accent shadow-2xl"
                    />
                  </div>
                </div>

                {/* Content - Right Side */}
                <div className="flex-1 text-center md:text-left space-y-5">

                {/* Name */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
                  <span className="text-accent">Siddharth Ladda</span>
                </h1>

                {/* Animated Subtitle */}
                <div className="h-10 sm:h-12 md:h-14 flex items-center justify-center md:justify-start">
                  <p
                    key={currentTitleIndex}
                    className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light animate-fade-in"
                  >
                    {titles[currentTitleIndex]}
                  </p>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Building innovative solutions and learning new technologies every day
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center md:items-start md:justify-start justify-center gap-4 pt-3">
                  <button
                    onClick={() => navigate('/projects')}
                    className="w-full sm:w-auto px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    View Projects
                    <ArrowDown className="h-4 w-4" />
                  </button>
                  <a
                    href="/assets/Siddharth_Ladda_Resume.pdf"
                    target="_blank"
                    className="w-full sm:w-auto px-8 py-3 border-2 border-accent rounded-lg font-semibold text-foreground hover:bg-accent/10 transition-all flex items-center justify-center gap-2"
                  >
                    Resume
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center md:justify-start gap-6 pt-3">
                  {socialLinks.map((link, idx) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label={link.label}
                      >
                        <IconComponent className="h-6 w-6" />
                      </a>
                    );
                  })}
                </div>
                </div>
              </div>

              {/* About Me - Merged into Hero card */}
              <div className="w-full pt-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold">About <span className="text-accent">Me</span></h2>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div className="text-muted-foreground leading-relaxed space-y-6 text-base md:text-lg text-center">
                    {aboutContent.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

