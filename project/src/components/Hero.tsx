import React, { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../data/social';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;
    
    textElement.classList.add('animate-text-reveal');
    
    return () => {
      textElement.classList.remove('animate-text-reveal');
    };
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Filter for primary social links to show in the hero section
  const primarySocials = socialLinks.filter(social => 
    ['GitHub', 'LinkedIn', 'Email'].includes(social.name)
  );

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Himanshu_Choudhary_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-20 -z-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 dark:bg-blue-600 mix-blend-multiply dark:mix-blend-color-dodge blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-400 dark:bg-purple-600 mix-blend-multiply dark:mix-blend-color-dodge blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-indigo-400 dark:bg-indigo-600 mix-blend-multiply dark:mix-blend-color-dodge blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 flex flex-col items-center text-center z-10">
        <h1 ref={textRef} className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 opacity-0">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Himanshu Choudhary</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
          Full Stack Developer & Creative Problem Solver
        </h2>
        
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
          I craft exceptional digital experiences with elegant code and thoughtful design.
          Specializing in building modern web applications that marry form and function.
        </p>
        
        <div className="flex gap-4 mb-12">
          <button 
            onClick={handleDownloadResume}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl dark:shadow-blue-800/20"
          >
            Download Resume
          </button>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Me
          </a>
        </div>
        
        <div className="flex gap-4">
          {primarySocials.map((social) => {
            let Icon;
            switch(social.icon) {
              case 'github':
                Icon = Github;
                break;
              case 'linkedin':
                Icon = Linkedin;
                break;
              case 'mail':
                Icon = Mail;
                break;
              default:
                Icon = Github;
            }
            
            return (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all shadow-md hover:shadow-lg"
                aria-label={social.name}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-md hover:shadow-lg animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
};

export default Hero;