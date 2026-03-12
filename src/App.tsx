import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { DottedGlowBackground } from "./components/ui/dotted-glow-background";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);
  const isHomePage = location.pathname === '/';
  const isSkillsPage = location.pathname === '/skills';

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change with Lenis
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  return (
    <>
      <div className={`bg-background text-foreground relative ${isHomePage || isSkillsPage ? 'h-screen max-h-screen overflow-hidden' : 'min-h-screen'}`}>
        {/* Dotted Glow Background - Fixed across entire page */}
        <div className="fixed inset-0 z-0">
          <DottedGlowBackground className="pointer-events-none dark:opacity-100 opacity-70" />
        </div>

        {/* Glassy Overlay */}
        <div className="fixed inset-0 z-[1] pointer-events-none bg-background/20 backdrop-blur-[0.5px]" />

        {/* Content - Above background */}
        <div className={`relative z-10 animate-fade-in flex flex-col ${isHomePage || isSkillsPage ? 'h-full overflow-hidden' : 'min-h-screen'}`}>
          <Header />
          <main className={`flex-grow ${isHomePage || isSkillsPage ? 'overflow-hidden' : ''}`}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/education" element={<Education />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

