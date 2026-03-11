import { ArrowDown, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const titles = ["Software Engineer", "AI Enthusiast", "Full-Stack Developer", "Explorer"];
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glassmorphism Card Container */}
        <div className="max-w-6xl mx-auto bg-background border border-gray-200 dark:border-transparent shadow-lg dark:shadow-none backdrop-blur-ultra rounded-3xl p-6 md:p-10">
          <div className="flex items-center justify-center min-h-[70vh]">
            <div className="flex flex-col items-center justify-center gap-8 w-full">
              {/* Greeting - Above everything */}
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-bold animate-fade-in text-center">
                {greeting}!
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 w-full">
                {/* Profile Photo - Left Side */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-20 animate-pulse" />
                    <img
                      src="/assets/photo_1.jpeg"
                      alt="Siddharth Ladda"
                      className="relative rounded-full w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover object-[center_80%] border-4 border-accent shadow-2xl"
                    />
                  </div>
                </div>

                {/* Content - Right Side */}
                <div className="flex-1 text-center md:text-left space-y-6">

                {/* Name */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
                  <span className="text-accent">Siddharth Ladda</span>
                </h1>

                {/* Animated Subtitle */}
                <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center md:justify-start">
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
                <div className="flex flex-col sm:flex-row items-center md:items-start md:justify-start justify-center gap-4 pt-4">
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
                <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

