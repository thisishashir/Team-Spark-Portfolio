import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Team } from './components/Team';
import { Projects } from './components/Projects';
import { FocusAreas } from './components/FocusAreas';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-['Inter',system-ui,sans-serif]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Projects />
        <FocusAreas />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
