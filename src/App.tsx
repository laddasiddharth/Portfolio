import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import Background from './components/Background';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Education from './components/Education';
import ScrollProgress from './components/ui/ScrollProgress';

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function SinglePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

function App() {
  useEffect(() => {
    // Smooth scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      wheelMultiplier: 0.8,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTopOnMount />
      <div
        style={{
          background: 'var(--bg)',
          color: 'var(--text)',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        <ScrollProgress />
        <CustomCursor />
        <Background />

        <div className="app-wrapper" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Nav />
          <main style={{ paddingTop: '80px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <SinglePage />
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
