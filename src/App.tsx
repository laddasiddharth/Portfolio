import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Background from "./components/Background";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { LenisContext } from "./lib/LenisContext";

function App() {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const instance = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    setLenis(instance);

    function raf(time: number) {
      instance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis }}>
      <div className="bg-background text-foreground relative min-h-screen flex flex-col">
        <Background />
        <ScrollToTop />

        {/* Shared layout */}
        <div className="relative z-10 flex-1">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<><About /><Skills /></>} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
        
        <Footer />
      </div>
    </LenisContext.Provider>
  );
}

export default App;

