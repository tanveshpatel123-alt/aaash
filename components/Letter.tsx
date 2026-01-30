
import React from 'react';

const Letter: React.FC = () => {
  return (
    <section id="letter" className="py-24 bg-white px-4">
      <div className="max-w-2xl mx-auto shadow-2xl p-8 md:p-16 border-t-8 border-rose-200 rounded-lg transform -rotate-1 relative bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]">
        <div className="font-serif leading-relaxed text-gray-800 space-y-6">
          <p className="text-2xl font-bold text-rose-900 font-serif">Aashi,</p>
          
          <p>
            I have asked for you in every possible way. To be with you is the only thing that matters. 
            Even after so many paragraphs I still find myself writing to you. I regret all of it, every moment where I hurt you.
          </p>
          
          <p>
            I do want you to be happy. Your smile is so precious to ever be lost, and your eyes should never lose their glow. 
            I have seen you cry, I have seen you in joy, I have seen you under pressure, and I have seen your luster. 
            I want to be there for you in every single moment.
          </p>
          
          <p>
            I know I am all words and haven't shown up in the past sometimes, but trust me for this time. 
            I won't let you down ever. I'll make sure you never shed even a tear because of me. 
            I'll keep the smile alive. 
          </p>
          
          <p>
            I know I am not the best person, nor the most talented you've ever met, but I'll make sure 
            to never let you doubt your decision.
          </p>

          <div className="pt-12 text-right">
            <p className="text-rose-900 font-medium italic">With LOVE,</p>
            <p className="font-script text-5xl text-rose-600 mt-2">
              Tanvesh
            </p>
          </div>
        </div>
        
        {/* Subtle decorative element */}
        <div className="absolute -bottom-4 -right-4 text-rose-200 opacity-40 transform rotate-12">
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Letter;
