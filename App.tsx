
import React, { useState, useEffect } from 'react';
import { PageSection } from './types';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Letter from './components/Letter';
import MemoryLane from './components/MemoryLane';
import ReasonsWhy from './components/ReasonsWhy';
import AIPoetry from './components/AIPoetry';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<PageSection>(PageSection.HOME);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.15,
      rootMargin: '0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealedElements = document.querySelectorAll('.reveal');
    revealedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (section: PageSection) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentSection={currentSection} onNavigate={handleNavigate} />
      
      <main>
        <div id={PageSection.HOME}>
          <Hero />
        </div>
        
        <div id={PageSection.LETTER} className="reveal">
          <Letter />
        </div>

        <div id={PageSection.MEMORIES} className="reveal">
          <MemoryLane />
        </div>

        <div id={PageSection.REASONS} className="reveal">
          <ReasonsWhy />
        </div>

        <div id={PageSection.AI_POETRY} className="reveal">
          <AIPoetry />
        </div>
      </main>

      <footer className="bg-rose-50 py-12 text-center">
        <div className="text-rose-400 mb-4 flex justify-center space-x-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
        </div>
        <p className="text-rose-900 font-serif italic text-lg">For Aashi, my amor, today and every day.</p>
      </footer>
    </div>
  );
};

export default App;
