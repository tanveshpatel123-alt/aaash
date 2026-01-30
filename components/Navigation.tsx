
import React from 'react';
import { PageSection } from '../types';

interface NavigationProps {
  currentSection: PageSection;
  onNavigate: (section: PageSection) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate }) => {
  const links = [
    { id: PageSection.HOME, label: 'Home' },
    { id: PageSection.LETTER, label: 'My Letter' },
    { id: PageSection.MEMORIES, label: 'Memories' },
    { id: PageSection.REASONS, label: 'Why I Love You' },
    { id: PageSection.AI_POETRY, label: 'A Special Message' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl font-script text-rose-500 cursor-pointer" onClick={() => onNavigate(PageSection.HOME)}>
          Always You
        </div>
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-sm font-medium transition-colors hover:text-rose-500 ${
                currentSection === link.id ? 'text-rose-600 border-b-2 border-rose-600' : 'text-gray-600'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
        {/* Mobile Menu Icon Placeholder */}
        <div className="md:hidden text-rose-500">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
