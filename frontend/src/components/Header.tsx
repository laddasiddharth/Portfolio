import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    // Initialize from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });
  const [nameIndex, setNameIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  const names = [
    "Siddharth Ladda", // English
    "सिद्धार्थ लड्डा", // Hindi
    "সিদ্ধার্থ লাড্ডা", // Bengali
    "સિદ્ધાર્થ લડ્ડા", // Gujarati
    "சித்தார்த் லத்தா", // Tamil
    "సిద్ధార్థ్ లద్దా", // Telugu
    "ಸಿದ್ಧಾರ್ಥ್ ಲಡ್ಡಾ", // Kannada
    "സിദ്ധാർത്ഥ് ലദ്ദ", // Malayalam
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setNameIndex((prev) => (prev + 1) % names.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    
    handleScroll(); // Call once on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const htmlElement = document.documentElement;
    // Save to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    // Apply to DOM
    if (isDark) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/20 dark:bg-background/40 backdrop-blur-xl"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:grid md:grid-cols-3">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold dark:bg-gradient-to-r dark:from-accent dark:to-accent dark:bg-clip-text dark:text-transparent text-gray-900 hover:opacity-80 transition-opacity drop-shadow-xl justify-self-start whitespace-nowrap"
          >
            {names[nameIndex]}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 justify-self-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md drop-shadow-lg ${
                  activeSection === item.id
                    ? 'dark:text-accent text-accent bg-accent/30 dark:bg-accent/30'
                    : 'dark:text-white dark:hover:text-accent text-gray-900 hover:text-accent hover:bg-accent/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 justify-self-end">
            <button
              onClick={() => setIsDark(!isDark)}
              className="relative p-2 rounded-full hover:bg-accent/30 transition-colors flex items-center justify-center dark:hover:bg-accent/50 text-gray-900 dark:text-white drop-shadow-xl"
              title="Toggle theme"
            >
              <Sun className="h-5 w-5 dark:hidden" />
              <Moon className="h-5 w-5 hidden dark:block" />
              <span className="sr-only">Toggle theme</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-accent/50 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-colors drop-shadow-lg ${
                  activeSection === item.id
                    ? 'dark:text-accent text-accent bg-accent/30 dark:bg-accent/30'
                    : 'dark:text-white dark:hover:text-accent text-gray-900 hover:text-accent hover:bg-accent/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
