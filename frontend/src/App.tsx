import { useEffect } from 'react';
import Lenis from 'lenis';
import { DottedGlowBackground } from './components/ui/dotted-glow-background';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Dotted Glow Background - Fixed across entire page */}
      <div className="fixed inset-0 z-0">
        <DottedGlowBackground
          className="pointer-events-none"
          opacity={0.8}
          gap={16}
          radius={1.5}
          colorLightVar="--color-neutral-500"
          glowColorLightVar="--color-primary"
          colorDarkVar="--color-neutral-600"
          glowColorDarkVar="--color-primary"
          backgroundOpacity={0}
          speedMin={0.2}
          speedMax={0.8}
          speedScale={1}
        />
      </div>

      {/* Content - Above background */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;


