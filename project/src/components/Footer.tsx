import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Himanshu Choudhary</h3>
            <p className="text-gray-400 max-w-md">
              Building digital experiences that make a difference through innovative solutions and creative design.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end space-x-4 mb-4">
              <a 
                href="#home" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Skills
              </a>
              <a 
                href="#contact" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
            
            <p className="text-gray-500 text-sm flex items-center justify-center md:justify-end">
              &copy; {currentYear} Himanshu Choudhary. All rights reserved. Made with
              <Heart size={14} className="text-red-500 mx-1 inline-block" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;