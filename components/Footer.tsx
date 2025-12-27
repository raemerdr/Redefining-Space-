import React from 'react';

interface FooterProps {
  onOpenAbout: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenAbout }) => {
  return (
    <footer className="bg-apple-gray pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
             <a href="#" className="text-xl font-semibold tracking-tight text-apple-dark mb-6 block">Lumina</a>
             <p className="text-xs text-gray-500 leading-relaxed">
               Redefining interior design through the lens of artificial intelligence and human creativity.
             </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3 text-xs text-gray-500 font-medium">
              <li><a href="#" className="hover:text-apple-dark hover:underline">Residential</a></li>
              <li><a href="#" className="hover:text-apple-dark hover:underline">Commercial</a></li>
              <li><a href="#" className="hover:text-apple-dark hover:underline">Virtual Staging</a></li>
              <li><a href="#" className="hover:text-apple-dark hover:underline">Consultation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3 text-xs text-gray-500 font-medium">
              <li>
                <button onClick={onOpenAbout} className="hover:text-apple-dark hover:underline">About Us</button>
              </li>
              <li><a href="#" className="hover:text-apple-dark hover:underline">Careers</a></li>
              <li><a href="#" className="hover:text-apple-dark hover:underline">Press</a></li>
              <li><a href="#" className="hover:text-apple-dark hover:underline">Contact</a></li>
            </ul>
          </div>
           <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3 text-xs text-gray-500 font-medium">
              <li><a href="#" className="hover:text-apple-dark hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-apple-dark hover:underline">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">Copyright © {new Date().getFullYear()} Lumina Interiors Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
             <span>United States</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
