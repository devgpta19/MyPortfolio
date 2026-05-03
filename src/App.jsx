import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import HUD from './components/HUD';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './styles/main.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import BootScreen from './components/BootScreen';

function App() {
  const [isBooting, setIsBooting] = React.useState(true);

  useEffect(() => {
    // Global scrolling animations can go here
  }, []);

  return (
    <ThemeProvider>
      <div className="app-wrapper">
        {isBooting && <BootScreen onComplete={() => setIsBooting(false)} />}
        {!isBooting && (
          <>
            <HUD />
            <main>
              <Hero />
              <Experience />
              <Education />
              <Skills />
              <Projects />
              <Contact />
            </main>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}



export default App;
