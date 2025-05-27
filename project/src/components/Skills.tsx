import React, { useState } from 'react';
import { skills } from '../data/skills';
import { Code, Server, PenTool, GraduationCap } from 'lucide-react';

type SkillCategory = 'frontend' | 'backend' | 'design' | 'other' | 'all';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  const categories = [
    { id: 'all', name: 'All Skills', icon: GraduationCap },
    { id: 'frontend', name: 'Frontend', icon: Code },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'design', name: 'Design', icon: PenTool },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I specialize in full-stack development with expertise in modern frontend and backend technologies.
            Here's a comprehensive overview of my technical skills and proficiency levels.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => {
            const CategoryIcon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as SkillCategory)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <CategoryIcon size={18} />
                {category.name}
              </button>
            );
          })}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map(skill => {
            // Determine color based on proficiency
            let colorClass = '';
            if (skill.proficiency >= 90) {
              colorClass = 'from-emerald-500 to-green-500';
            } else if (skill.proficiency >= 75) {
              colorClass = 'from-blue-500 to-indigo-500';
            } else if (skill.proficiency >= 60) {
              colorClass = 'from-violet-500 to-purple-500';
            } else {
              colorClass = 'from-orange-500 to-amber-500';
            }
            
            return (
              <div 
                key={skill.name}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {skill.proficiency}%
                  </span>
                </div>
                
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${colorClass} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
                
                <div className="mt-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.category === 'frontend' && 'Frontend Development'}
                    {skill.category === 'backend' && 'Backend Development'}
                    {skill.category === 'design' && 'Design & Creative'}
                    {skill.category === 'other' && 'Tools & Technologies'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;