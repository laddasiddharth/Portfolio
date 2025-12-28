import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Photo and Name Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-12">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent rounded-full blur-3xl opacity-30 animate-pulse" />
                <img
                  src="/assets/generated/photo.jpg"
                  alt="Siddharth Ladda"
                  className="relative rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover object-bottom border-4 border-accent shadow-2xl"
                />
              </div>
            </div>

            {/* Name and Tagline */}
            <div className="text-center md:text-left space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight dark:text-white text-black drop-shadow-lg">
                Siddharth Ladda
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl dark:text-white/90 text-black/80 font-light drop-shadow-md">
                Building the future, one project at a time
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="text-center space-y-8">

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={scrollToAbout}
                className="w-full sm:w-auto px-8 py-3 bg-accent dark:bg-accent text-white dark:text-accent-foreground rounded-lg font-medium hover:bg-accent/90 dark:hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl drop-shadow-md"
              >
                Explore My Work
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-3 border-2 border-accent dark:border-accent rounded-lg font-medium dark:text-white text-black hover:bg-accent/10 dark:hover:bg-accent/10 hover:border-accent transition-all drop-shadow-md"
              >
                Get In Touch
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-12">
              <button
                onClick={scrollToAbout}
                className="mx-auto block animate-bounce"
                aria-label="Scroll to content"
              >
                <ArrowDown className="h-6 w-6 dark:text-white/80 text-black/60 drop-shadow-md" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
