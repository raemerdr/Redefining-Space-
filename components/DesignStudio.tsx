import React, { useState } from 'react';
import { generateDesignAdvice, generateDesignImage } from '../services/gemini';
import { DesignRequest, GenerationStatus } from '../types';
import { Sparkles, LoadingSpinner } from './Icons';

const DesignStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [roomType, setRoomType] = useState('Living Room');
  const [style, setStyle] = useState('Minimalist');
  const [status, setStatus] = useState<GenerationStatus>(GenerationStatus.IDLE);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [designAdvice, setDesignAdvice] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setStatus(GenerationStatus.LOADING);
    setGeneratedImage(null);
    setDesignAdvice(null);

    const request: DesignRequest = {
      prompt,
      roomType,
      style
    };

    try {
      // Execute both concurrently for better UX
      const [advice, image] = await Promise.all([
        generateDesignAdvice(request),
        generateDesignImage(request)
      ]);

      setDesignAdvice(advice);
      setGeneratedImage(image);
      setStatus(GenerationStatus.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(GenerationStatus.ERROR);
    }
  };

  const styles = ['Minimalist', 'Scandinavian', 'Industrial', 'Mid-Century Modern', 'Bohemian', 'Japandi', 'Luxury Contemporary'];
  const rooms = ['Living Room', 'Bedroom', 'Kitchen', 'Home Office', 'Dining Room', 'Bathroom', 'Studio'];

  return (
    <section id="studio" className="py-24 bg-apple-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-apple-dark mb-4">Your Personal Design Studio.</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Describe your vision. Choose your style. <br/> Let our intelligence visualize your future home.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Controls */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl shadow-sm border border-gray-100/50 sticky top-24">
            <div className="space-y-8">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Room Type</label>
                <div className="relative">
                  <select 
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-apple-blue focus:border-apple-blue block p-4 pr-8 outline-none transition-shadow"
                  >
                    {rooms.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Aesthetic</label>
                <div className="flex flex-wrap gap-2">
                  {styles.map((s) => (
                    <button
                      key={s}
                      onClick={() => setStyle(s)}
                      className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${style === s ? 'bg-apple-dark text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Your Vision</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="E.g., A cozy space with natural light, large windows, oak wood furniture, and plenty of indoor plants."
                  className="w-full h-32 p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-apple-blue/20 focus:border-apple-blue outline-none resize-none transition-all placeholder-gray-400"
                />
              </div>

              <button
                onClick={handleGenerate}
                disabled={status === GenerationStatus.LOADING || !prompt}
                className={`w-full py-4 rounded-2xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${status === GenerationStatus.LOADING || !prompt ? 'bg-gray-400 cursor-not-allowed' : 'bg-apple-blue hover:bg-apple-blue-hover hover:shadow-xl hover:-translate-y-0.5'}`}
              >
                {status === GenerationStatus.LOADING ? (
                  <>
                    <LoadingSpinner />
                    <span>Designing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles />
                    <span>Generate Concept</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Canvas/Result */}
          <div className="lg:col-span-8">
            <div className={`relative w-full aspect-[16/10] bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transition-all duration-700 ${generatedImage ? 'ring-1 ring-black/5' : 'bg-gray-100 flex items-center justify-center'}`}>
              
              {status === GenerationStatus.IDLE && (
                 <div className="text-center p-8 opacity-40">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Sparkles />
                    </div>
                    <p className="text-lg font-medium text-gray-500">Ready to visualize your dream space.</p>
                 </div>
              )}

              {generatedImage && (
                <img 
                  src={generatedImage} 
                  alt="Generated Interior Design" 
                  className="w-full h-full object-cover animate-fade-in"
                />
              )}
            </div>

            {designAdvice && (
              <div className="mt-8 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 animate-slide-up">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-apple-dark text-white flex items-center justify-center">
                    <Sparkles />
                  </div>
                  <h3 className="font-semibold text-lg text-apple-dark">Designer's Note</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg font-light italic">
                  "{designAdvice}"
                </p>
              </div>
            )}
            
            {status === GenerationStatus.ERROR && (
               <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-xl text-center border border-red-100">
                 Unable to generate design. Please try again or check your API key configuration.
               </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignStudio;
