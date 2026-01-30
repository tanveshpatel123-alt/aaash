
import React from 'react';
import { LoveReason } from '../types';

const reasons: LoveReason[] = [
  { id: 1, text: "You believed me when none did," },
  { id: 2, text: "How you melt my heart in seconds" },
  { id: 3, text: "The way you smile with those deep eyes" },
  { id: 4, text: "Your silliness" },
  { id: 5, text: "The way you stand tall even after your past" },
  { id: 6, text: "Some reason should be kept for future ig?" },
];

const ReasonsWhy: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden relative">
      {/* Decorative hearts */}
      <div className="absolute top-10 left-10 text-rose-100 opacity-50">
        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/></svg>
      </div>
      <div className="absolute bottom-10 right-10 text-rose-100 opacity-50">
        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/></svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-serif text-center text-rose-900 mb-12">Reasons I Love You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <div key={reason.id} className="flex items-start space-x-4 p-6 bg-rose-50 rounded-lg border border-rose-100 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-rose-400 font-serif text-2xl font-bold">{reason.id}.</span>
              <p className="text-gray-700 text-lg italic">"{reason.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsWhy;
