
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="animate-float mb-8">
        <svg className="w-24 h-24 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      </div>
      <h1 className="text-5xl md:text-7xl font-serif font-bold text-rose-900 mb-4">
        I'm Sorry, Aashi, my amor
      </h1>
      <p className="text-xl md:text-2xl text-rose-700 font-script italic max-w-2xl mx-auto">
        "I never meant to let you down. This is for the girl who holds my whole world in her hands."
      </p>
      <div className="mt-12">
        <button 
          onClick={() => document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          Read My Heart
        </button>
      </div>
    </section>
  );
};

export default Hero;
