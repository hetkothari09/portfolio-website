import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiTerminal, FiCpu } from 'react-icons/fi';
import SectionWrapper from './SectionWrapper';

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  return (
    <SectionWrapper
      id="experience"
      title="Professional Experience"
      subtitle="CAREER_LOG // SUBJECT: HET KOTHARI // ACCESS: GRANTED"
    >
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative pl-10 pb-16 last:pb-0"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Timeline line */}
            {index < experiences.length - 1 && (
              <motion.div 
                className="absolute left-4 top-0 bottom-0 w-1 bg-primary opacity-30 rounded-full"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            )}
            
            {/* Timeline dot */}
            <motion.div 
              className="absolute left-0 top-2 w-8 h-8 rounded-md bg-primary bg-opacity-10 border border-primary border-opacity-30 flex items-center justify-center text-primary"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              <FiBriefcase size={16} />
              
              {/* Pulse effect */}
              {hoveredIndex === index && (
                <motion.div 
                  className="absolute inset-0 border border-primary rounded-md"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </motion.div>
            
            <motion.div 
              className="card p-6 border border-primary border-opacity-20 hover:border-primary transition-all duration-300 relative overflow-hidden"
              whileHover={{ 
                y: -5,
                boxShadow: "0 15px 30px rgba(2, 6, 23, 0.8)",
                borderColor: "rgba(26, 219, 188, 0.5)"
              }}
            >
              {/* Animated background effect */}
              {hoveredIndex === index && (
                <motion.div 
                  className="absolute inset-0 bg-primary opacity-0 z-0"
                  animate={{ opacity: [0, 0.02, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
              
              {/* Animated scan line */}
              {hoveredIndex === index && (
                <motion.div 
                  className="absolute left-0 w-full h-0.5 bg-primary opacity-10 z-0"
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              )}
              
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                  <h3 className="text-xl font-bold text-primary font-mono mb-1">{exp.title}</h3>
                  <motion.div 
                    className="h-1 w-16 bg-primary opacity-20 rounded-full"
                    animate={hoveredIndex === index ? { width: ['4rem', '6rem', '4rem'] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div className="bg-black p-2 rounded-md border border-primary border-opacity-30 relative">
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      animate={hoveredIndex === index ? { 
                        rotate: [0, 360],
                        color: ['#1adbbc', '#ffffff', '#1adbbc']
                      } : {}}
                      transition={{ 
                        rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                        color: { duration: 3, repeat: Infinity }
                      }}
                    >
                      <FiTerminal className="text-primary" size={14} />
                    </motion.div>
                    <span className="text-xs font-mono text-primary">VERIFIED</span>
                  </div>
                  
                  {/* Pulse effect */}
                  {hoveredIndex === index && (
                    <motion.div 
                      className="absolute inset-0 border border-primary rounded-md"
                      animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </div>
              </div>
              
              <div className="flex flex-wrap items-center text-slate-300 mb-4 relative z-10">
                <span className="font-medium text-white font-mono">{exp.company}</span>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-4 font-mono text-xs relative z-10">
                <div className="flex items-center text-slate-400">
                  <FiCalendar className="mr-2 text-primary" />
                  <span>{exp.period}</span>
                </div>
                
                <div className="flex items-center text-slate-400">
                  <FiMapPin className="mr-2 text-primary" />
                  <span>{exp.location}</span>
                </div>
              </div>
              
              <div className="h-px w-full bg-primary opacity-20 my-4 relative z-10"></div>
              
              <p className="text-slate-300 font-mono text-sm relative z-10">
                <motion.span 
                  className="text-primary inline-block mr-1"
                  animate={hoveredIndex === index ? { opacity: [1, 0.5, 1] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  &gt;
                </motion.span>
                {exp.description}
              </p>
              
              {/* Decorative elements */}
              <div className="mt-4 pt-4 border-t border-primary border-opacity-10 relative z-10">
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
              
              {/* Data visualization elements */}
              {hoveredIndex === index && (
                <div className="absolute bottom-2 left-2 text-xs font-mono text-primary opacity-50 flex items-center">
                  <motion.div 
                    className="w-1.5 h-1.5 bg-primary rounded-full mr-1.5"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <FiCpu size={10} className="mr-1" />
                  DATA_LOADED
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Experience; 