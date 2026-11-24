import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Recognition from './components/Recognition';
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
        <Recognition />
        <Skills />
        <Education />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
