import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiTerminal, FiCpu } from 'react-icons/fi';
import SectionWrapper from './SectionWrapper';
import Section3DCard from './Section3DCard';

const Experience: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const experiences = [
    {
      title: 'Research and Data Analyst',
      company: 'Finzome Technologies',
      period: 'Jul 2023 - Present',
      location: 'Mumbai, India',
      description: 'As a Research and Data Analyst at Finzome Technologies, I dive deep into data, extracting insights crucial for informed decisions. My role involves employing analytical techniques to uncover trends and opportunities, driving the company forward with data-driven strategies.'
    },
    {
      title: 'Web Developer',
      company: 'Vistrut Technologies',
      period: 'Jul 2022 - Sep 2022',
      location: 'Mumbai, India',
      description: 'As a Web Developer at Vistrut Technologies, I used to create user-friendly websites and applications. My job involved designing and coding to make sure everything works smoothly online. I played a key role in bringing the company\'s digital ideas to reality.'
    }
  ];

  return (
    <SectionWrapper
      id="experience"
      title="Professional Experience"
      subtitle="CAREER_LOG // SUBJECT: HET KOTHARI // ACCESS: GRANTED"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Timeline dot */}
            <div className="absolute left-0 top-8 z-20 w-8 h-8 rounded-md bg-primary bg-opacity-10 border border-primary border-opacity-30 flex items-center justify-center text-primary">
              <FiBriefcase size={16} />
            </div>
            
            {/* Timeline line */}
            {index < experiences.length - 1 && (
              <div className="absolute left-4 top-16 bottom-0 w-1 bg-primary opacity-30 rounded-full" />
            )}
            
            <div className="pl-12">
              <Section3DCard>
                <div className="space-y-4">
                  <div className="flex justify-between items-start relative">
                    <div>
                      <h3 className="text-xl font-bold text-primary font-mono">{exp.title}</h3>
                      <div className="h-1 w-16 bg-primary opacity-20 rounded-full mt-1"></div>
                    </div>
                    <div className="bg-black p-2 rounded-md border border-primary border-opacity-30">
                      <div className="flex items-center space-x-2">
                        <FiTerminal className="text-primary" size={14} />
                        <span className="text-xs font-mono text-primary">VERIFIED</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center text-slate-300">
                    <span className="font-medium text-white font-mono">{exp.company}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 font-mono text-xs">
                    <div className="flex items-center text-slate-400">
                      <FiCalendar className="mr-2 text-primary" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <div className="flex items-center text-slate-400">
                      <FiMapPin className="mr-2 text-primary" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="h-px w-full bg-primary opacity-20 my-4"></div>
                  
                  <p className="text-slate-300 font-mono text-sm">
                    <span className="text-primary inline-block mr-1">&gt;</span>
                    {exp.description}
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="mt-4 pt-4 border-t border-primary border-opacity-10">
                    <div className="flex justify-between items-center">
                      <div className="text-xs font-mono text-slate-500">ID: EXP_{index + 1}</div>
                      <div className="text-xs font-mono text-primary flex items-center">
                        <motion.div 
                          className="w-1.5 h-1.5 bg-primary rounded-full mr-1.5"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        STATUS: ACTIVE
                      </div>
                    </div>
                  </div>
                </div>
              </Section3DCard>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience; 