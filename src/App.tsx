import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
