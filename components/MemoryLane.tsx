
import React, { useState } from 'react';
import { Memory } from '../types';

const memories: Memory[] = [
  {
    id: '1',
    date: 'A Sweet Beginning',
    title: 'The first flowers',
    description: 'I still remember the look on your face. I wish I could have captured that moment forever.',
    imageUrl: '' // Intentional empty for text placeholder
  },
  {
    id: '2',
    date: 'Summer Afternoon',
    title: 'Our little cycling date',
    description: 'Racing you down the path, the wind in our hair... it felt like time stopped.',
    imageUrl: '' // Intentional empty for text placeholder
  },
  {
    id: '3',
    date: 'The Best Moment',
    title: 'The day you held my hand',
    description: 'The world finally made sense in that moment. I never wanted to let go.',
    imageUrl: '' // Intentional empty for text placeholder
  }
];

const MemoryLane: React.FC = () => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  const openModal = (memory: Memory) => {
    setSelectedMemory(memory);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setSelectedMemory(null);
    document.body.style.overflow = 'unset';
  };

  const ImagePlaceholder = ({ className }: { className?: string }) => (
    <div className={`bg-rose-100 flex items-center justify-center p-8 text-center border-2 border-dashed border-rose-300 ${className}`}>
      <p className="font-script text-2xl text-rose-400 select-none">
        "We never took a photo together"
      </p>
    </div>
  );

  return (
    <section className="py-24 px-4 bg-rose-50 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-serif text-center text-rose-900 mb-16">Our Memory Lane</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memories.map((memory) => (
            <div 
              key={memory.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
              onClick={() => openModal(memory)}
            >
              <div className="relative overflow-hidden aspect-[3/2]">
                {memory.imageUrl ? (
                  <img 
                    src={memory.imageUrl} 
                    alt={memory.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                ) : (
                  <ImagePlaceholder className="w-full h-full group-hover:bg-rose-200 transition-colors duration-500" />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-rose-300 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">{memory.date}</span>
                <h3 className="text-xl font-serif text-rose-900 mt-2">{memory.title}</h3>
                <p className="text-gray-600 mt-3 italic">"{memory.description}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMemory && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-rose-400 transition-colors"
            onClick={closeModal}
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="relative max-w-4xl w-full flex flex-col items-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMemory.imageUrl ? (
               <img 
                src={selectedMemory.imageUrl} 
                alt={selectedMemory.title} 
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
            ) : (
              <div className="w-full aspect-[16/9] bg-rose-100 rounded-lg flex flex-col items-center justify-center p-12 text-center shadow-2xl">
                 <p className="font-script text-5xl md:text-7xl text-rose-400 mb-8 animate-pulse">
                  "We never took a photo together"
                </p>
                <div className="max-w-xl">
                  <h3 className="text-3xl font-serif text-rose-900 mb-4">{selectedMemory.title}</h3>
                  <p className="text-xl text-rose-700 italic">{selectedMemory.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default MemoryLane;
