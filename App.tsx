import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DesignStudio from './components/DesignStudio';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import AboutModal from './components/AboutModal';

const App: React.FC = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenAbout={() => setIsAboutOpen(true)} />
      <main>
        <Hero />
        <DesignStudio />
        <Gallery />
      </main>
      <Footer onOpenAbout={() => setIsAboutOpen(true)} />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  );
};

export default App;
