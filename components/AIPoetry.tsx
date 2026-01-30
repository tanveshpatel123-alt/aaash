
import React, { useState } from 'react';
import { generateRomanticPoem } from '../services/geminiService';

const AIPoetry: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState<'romantic' | 'apologetic' | 'nostalgic'>('romantic');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    const poem = await generateRomanticPoem(topic, tone);
    setResult(poem);
    setLoading(false);
  };

  return (
    <section className="py-24 px-4 bg-rose-50 text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-6 text-rose-900">Ask My Heart</h2>
        <p className="text-rose-700 mb-10 italic">
          "Aashi, if you have a question or a thought you want me to speak on, type it here. 
          I've poured my soul into this space so you can always hear what I'm feeling."
        </p>
        
        <div className="bg-white p-8 rounded-2xl border border-rose-100 shadow-xl">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input 
              type="text" 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., Why should I love you? or Our future..." 
              className="flex-1 bg-rose-50 border border-rose-200 rounded-lg px-4 py-2 text-gray-800 placeholder-rose-300 outline-none focus:ring-2 focus:ring-rose-400"
            />
            <select 
              value={tone}
              onChange={(e) => setTone(e.target.value as any)}
              className="bg-rose-50 border border-rose-200 rounded-lg px-4 py-2 text-rose-900 outline-none focus:ring-2 focus:ring-rose-400"
            >
              <option value="romantic">Romantic</option>
              <option value="apologetic">Apologetic</option>
              <option value="nostalgic">Nostalgic</option>
            </select>
          </div>
          
          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="bg-rose-500 hover:bg-rose-600 disabled:bg-rose-300 text-white px-8 py-3 rounded-full transition-all font-medium shadow-lg"
          >
            {loading ? 'Searching my soul...' : 'Listen to My Heart'}
          </button>

          {result && (
            <div className="mt-12 p-8 bg-white text-gray-800 rounded-xl shadow-2xl border border-rose-100 animate-in fade-in slide-in-from-bottom-4 duration-700 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
              <div className="whitespace-pre-wrap font-serif italic text-lg leading-relaxed text-left">
                {result}
              </div>
              <div className="mt-6 text-right font-script text-3xl text-rose-500">
                — Tanvesh
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIPoetry;
