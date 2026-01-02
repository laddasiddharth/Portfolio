import { useEffect, useState } from "react";
import Lenis from "lenis";
import { BackgroundPaths } from "./components/ui/background-paths";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content 1 second after loading completes
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);
  useEffect(() => {
    // Initialize Lenis with optimized settings for smooth timeline animation
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smoother deceleration
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
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
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}

      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Circuit Board Background - Fixed across entire page - Dark mode only */}
        <div className="fixed inset-0 z-0 hidden dark:block">
          <BackgroundPaths
            className="pointer-events-none h-full"
            svgOptions={{ duration: 8 }}
          >
            <></>
          </BackgroundPaths>
        </div>

        {/* Content - Above background */}
        {showContent && (
          <div className="relative z-10 animate-fade-in">
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
        )}
      </div>
    </>
  );
}

export default App;
