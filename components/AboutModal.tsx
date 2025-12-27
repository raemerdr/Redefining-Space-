import React, { useEffect, useState } from 'react';
import { X } from './Icons';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setVisible(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center px-6 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-white/60 backdrop-blur-xl" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className={`relative bg-white w-full max-w-3xl rounded-[2rem] shadow-2xl p-8 md:p-12 border border-white/20 ring-1 ring-black/5 transform transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
          aria-label="Close"
        >
          <X />
        </button>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold text-apple-blue uppercase tracking-wider mb-3">Our Philosophy</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-apple-dark tracking-tight leading-tight">
              Design is not just what it looks like and feels like. <span className="text-gray-400">Design is how it works.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 leading-relaxed font-light">
            <p>
              At Lumina, we believe that your environment shapes your consciousness. Our mission is to democratize high-end interior design by merging the precision of artificial intelligence with the warmth of human creativity.
            </p>
            <p>
              Whether you are looking to refresh a single room or reimagine an entire property, our generative engine understands the nuance of light, texture, and space to propose concepts that are uniquely yours.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex -space-x-3">
               <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="Team member" />
               <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="Team member" />
               <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64" alt="Team member" />
               <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-500">+12</div>
            </div>
            <div className="text-sm font-medium text-apple-dark">
              Crafted in San Francisco.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
