import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenAbout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenAbout }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-md border-b border-gray-200/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="text-xl font-semibold tracking-tight text-apple-dark">Lumina</a>
          <div className="hidden md:flex items-center gap-6 text-xs font-medium text-gray-600">
            <a href="#studio" className="hover:text-black transition-colors">Studio</a>
            <a href="#gallery" className="hover:text-black transition-colors">Gallery</a>
            <button onClick={onOpenAbout} className="hover:text-black transition-colors">About</button>
          </div>
        </div>
        <div>
          <button className="bg-apple-dark text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-black transition-colors opacity-90 hover:opacity-100">
            Start Project
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
