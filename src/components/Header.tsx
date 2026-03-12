import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    // Initialize from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });
  const [nameIndex, setNameIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const names = [
    "Siddharth Ladda", // English
    "सिद्धार्थ लड्डा", // Hindi
    "সিদ্ধার্থ লাড্ডা", // Bengali
    "સિદ્ધાર્થ લડ્ડા", // Gujarati
    "சித்தார்த் லத்தா", // Tamil
    "సిద్ధార్థ్ లద్దా", // Telugu
    "ಸಿದ್ಧಾರ್ಥ್ ಲಡ್ಡಾ", // Kannada
    "സിദ്ധಾರ್ത്ഥ് ಲದ್ಧ", // Malayalam
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
    };
    
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

  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Education', path: '/education' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];


  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-card/80 backdrop-blur-md shadow-lg border-b border-border/50"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:grid md:grid-cols-3">
          <Link
            to="/"
            className="text-xl font-bold dark:bg-gradient-to-r dark:from-accent dark:to-accent dark:bg-clip-text dark:text-transparent text-gray-900 hover:opacity-80 transition-opacity drop-shadow-xl justify-self-start whitespace-nowrap"
          >
            {names[nameIndex]}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 justify-self-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md drop-shadow-lg ${
                  isActive(item.path)
                    ? 'dark:text-white text-white bg-accent/30 dark:bg-accent/30'
                    : 'dark:text-white dark:hover:text-white text-gray-900 hover:text-white hover:bg-accent/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 justify-self-end">
            <button
              onClick={() => setIsDark(!isDark)}
              className="relative p-2 rounded-full hover:bg-accent/30 transition-colors flex items-center justify-center dark:hover:bg-accent/50 text-gray-900 dark:text-white drop-shadow-xl"
              title="Toggle theme"
            >
              <Sun className="h-5 w-5 hidden dark:block" />
              <Moon className="h-5 w-5 dark:hidden" />
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
          <div className="md:hidden py-4 space-y-2 border-t border-border bg-background">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-colors drop-shadow-lg ${
                  isActive(item.path)
                    ? 'dark:text-white text-white bg-accent/30 dark:bg-accent/30'
                    : 'dark:text-white dark:hover:text-white text-gray-900 hover:text-white hover:bg-accent/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

