import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-blue-600 dark:text-blue-400">Me</span>
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate Full Stack Developer with a deep love for creating elegant, 
              high-performance web applications. My approach combines clean code, intuitive user 
              experiences, and scalable architectures to build solutions that not only meet but exceed
              expectations.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With expertise in modern JavaScript frameworks, server-side technologies, and cloud 
              infrastructure, I bring a comprehensive skill set to every project. I believe that 
              the best digital products emerge from a perfect balance of technical excellence and 
              thoughtful design.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge through technical articles and mentorship.
            </p>
            
            <div className="flex gap-4 mt-8">
              <a 
                href="/resume.pdf" 
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              <a 
                href="#skills" 
                className="px-5 py-2.5 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-700 transition-colors shadow-md hover:shadow-lg"
              >
                View My Skills
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Experience & Education
              </h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Briefcase size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Senior Software Engineer
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400">TechCorp Inc.</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2021 - Present</p>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      Lead development of cloud-based SaaS products, mentoring junior developers
                      and architecting scalable solutions used by thousands of customers.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Briefcase size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Frontend Developer
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400">WebSolutions Co.</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2018 - 2021</p>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      Built responsive web applications using modern JavaScript frameworks,
                      optimized performance and collaborated with UX teams to enhance user experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <GraduationCap size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      B.Tech in Computer Science
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400">Technical University</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2014 - 2018</p>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      Graduated with honors, specialized in software engineering and artificial intelligence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;