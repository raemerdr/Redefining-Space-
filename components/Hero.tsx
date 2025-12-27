import React from 'react';
import { ChevronRight } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex flex-col items-center pt-32 pb-12 overflow-hidden bg-white">
      <div className="z-10 flex flex-col items-center text-center max-w-4xl px-6 animate-fade-in">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-500 mb-4 tracking-wide">Interior Intelligence</h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-apple-dark mb-6 leading-[1.05]">
          Redefining <br /> your space.
        </h1>
        <p className="text-lg md:text-2xl font-medium text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          The power of generative design. <br className="hidden md:block"/>
          Transforming imagination into photorealistic interiors instantly.
        </p>
        
        <div className="flex items-center gap-6 mb-16">
          <a href="#studio" className="flex items-center gap-1 text-apple-blue hover:text-apple-blue-hover text-lg md:text-xl font-medium group transition-colors">
            Try the Studio <span className="group-hover:translate-x-0.5 transition-transform"><ChevronRight /></span>
          </a>
          <a href="#gallery" className="flex items-center gap-1 text-apple-blue hover:text-apple-blue-hover text-lg md:text-xl font-medium group transition-colors">
            View Gallery <span className="group-hover:translate-x-0.5 transition-transform"><ChevronRight /></span>
          </a>
        </div>
      </div>

      {/* Abstract sleek background visuals */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 opacity-30 pointer-events-none">
         <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-white to-white blur-3xl"></div>
      </div>
      
      {/* Hero Image / Placeholder for high aesthetic */}
      <div className="w-full max-w-[1400px] px-6 mt-auto animate-slide-up">
        <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
           <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop" 
            alt="Modern minimalist interior" 
            className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
           />
           <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
