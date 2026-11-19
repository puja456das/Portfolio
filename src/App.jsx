import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-[#070b14] text-gray-100' : 'bg-gray-50 text-gray-800'} min-h-screen transition-colors duration-300 relative selection:bg-indigo-500 selection:text-white`}>
      <Navbar 
        toggleTheme={toggleTheme} 
        theme={theme} 
        onOpenResume={handleOpenResume} 
      />

      <main>
        <Hero theme={theme} onOpenResume={handleOpenResume} />
        <About theme={theme} onOpenResume={handleOpenResume} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Experience theme={theme} />
        <Services theme={theme} />
        <Contact theme={theme} onOpenResume={handleOpenResume} />
      </main>

      <Footer theme={theme} onOpenResume={handleOpenResume} />

      {/* Interactive Resume & CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={handleCloseResume}
        theme={theme}
      />
    </div>
  );
}

export default App;
