import { Github, Linkedin, Instagram, Mail, FileText, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const titles = ["Software Engineer", "AI Enthusiast", "Full-Stack Developer", "Explorer"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [greeting, setGreeting] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const { ref: heroRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) setGreeting('Good Morning');
      else if (hour >= 12 && hour < 18) setGreeting('Good Afternoon');
      else setGreeting('Good Evening');
    };
    updateGreeting();
    const greetingInterval = setInterval(updateGreeting, 60000);
    return () => clearInterval(greetingInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let charIndex = 0;
    setDisplayText('');
    setIsTyping(true);
    const typeInterval = setInterval(() => {
      if (charIndex <= currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 60);
    return () => clearInterval(typeInterval);
  }, [currentTitleIndex]);

  const socialLinks = [
    { icon: Github, url: 'https://github.com/laddasiddharth', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/siddharth-ladda', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://instagram.com/siddharthladda', label: 'Instagram' },
    { icon: Mail, url: 'mailto:siddharthladda@gmail.com', label: 'Email' },
  ];


  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-24 pb-10 overflow-hidden"
    >
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div ref={heroRef} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

            {/* Left — Content */}
            <div className="flex-1 text-center md:text-left space-y-6">
              {/* Greeting */}
              <p className="text-base sm:text-lg text-muted-foreground font-medium tracking-wide animate-fade-in">
                ✨ {greeting}!
              </p>

              {/* Name */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="gradient-text">Siddharth Ladda</span>
              </h1>

              {/* Animated Subtitle — Typewriter */}
              <div className="h-10 sm:h-12 flex items-center justify-center md:justify-start">
                <p className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide">
                  <span className="text-accent font-semibold">
                    {displayText}
                    <span className={`inline-block w-[2px] h-5 sm:h-6 bg-accent ml-0.5 align-middle ${isTyping ? 'animate-pulse' : 'opacity-0'}`} />
                  </span>
                </p>
              </div>

              {/* Description */}
              <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
                Computer Science undergraduate and full-stack developer driven by a passion for building scalable web applications and integrating practical AI solutions. Experienced in React, Node.js, and Python, with a focus on delivering projects from concept to deployment.
              </p>

              {/* Social Links as pill buttons */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                {socialLinks.map((link, idx) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border text-sm font-medium text-foreground/80 hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 hover:scale-[1.03]"
                      aria-label={link.label}
                    >
                      <IconComponent className="h-4 w-4" />
                      {link.label}
                    </a>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 pt-2">
                <button
                  onClick={() => navigate('/projects')}
                  className="group w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-accent to-primary text-white rounded-xl font-semibold hover:shadow-glow-lg transition-all duration-400 flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-[0.98]"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <a
                  href="/assets/Siddharth_Ladda_Resume.pdf"
                  target="_blank"
                  className="group w-full sm:w-auto px-8 py-3.5 border-2 border-accent/40 rounded-xl font-semibold text-foreground hover:bg-accent/10 hover:border-accent/70 transition-all duration-400 flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
              </div>
            </div>

            {/* Right — Photo */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-br from-accent via-primary to-accent rounded-2xl opacity-30 group-hover:opacity-50 blur-2xl transition-all duration-700 animate-pulse-glow" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-border/50 shadow-2xl group-hover:border-accent/40 transition-all duration-500">
                  <img
                    src="/assets/photo_1.jpeg"
                    alt="Siddharth Ladda"
                    className="w-72 h-80 sm:w-80 sm:h-[22rem] md:w-[22rem] md:h-[26rem] object-cover object-[center_80%] group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
