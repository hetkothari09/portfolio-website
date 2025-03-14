import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCalendar, FiTag, FiTerminal, FiCode, FiDatabase } from 'react-icons/fi';
import SectionWrapper from './SectionWrapper';

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const projects = [
    {
      title: 'AI-Powered Strategy Form Generator',
      subtitle: 'Simplifying Strategy Creation with AI',
      period: 'Jun 2024 - Jul 2024',
      description: 'Designed an AI-powered chatbot by fine-tuning OpenAI\'s GPT-3.5 Turbo model, that dynamically interprets and generates user-friendly stock-market strategy forms based on user inputs.',
      tags: ['OpenAI API', 'GPT-3.5', 'Fine-tuning', 'Python', 'React'],
      image: '/project1.jpg',
      icon: <FiCode size={24} />,
      status: 'COMPLETED'
    },
    {
      title: 'Automated Financial Data Processing System',
      subtitle: 'Streamlining Trading Strategy Workflows with Scalable Automation',
      period: '2023 - 2024',
      description: 'Developed a robust automation system for a finance company specializing in algorithmic trading, replacing manual workflows for generating complex and detailed multi-period financial reports.',
      tags: ['Python', 'Pandas', 'Automation', 'Financial Analysis', 'Data Processing'],
      image: '/project2.jpg',
      icon: <FiDatabase size={24} />,
      status: 'DEPLOYED'
    },
    {
      title: 'AI-driven Predictive Analysis for Business Intelligence',
      subtitle: 'Empowering Data-Driven Decisions with Advanced Analytics',
      period: 'Present',
      description: 'Developed a business intelligence application that adapts to diverse use cases and integrates data seamlessly, delivering dynamic reports, AI-driven insights, customizable dashboards and enhances decision-making.',
      tags: ['AI', 'Predictive Analytics', 'Business Intelligence', 'Data Visualization', 'Python'],
      image: '/project3.jpg',
      icon: <FiTerminal size={24} />,
      status: 'IN_PROGRESS'
    },
    {
      title: 'SmallBizMart: E-Commerce Platform',
      subtitle: 'Empowering Local Businesses in the Digital Era',
      period: '2021 - 2022',
      description: 'Created a user-friendly e-commerce platform, sponsored by two companies, tailored for small businesses for seamless shopping experiences and with the tools to thrive in the digital marketplace.',
      tags: ['E-commerce', 'Web Development', 'React', 'Node.js', 'MongoDB'],
      image: '/project4.jpg',
      icon: <FiCode size={24} />,
      status: 'ARCHIVED'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Generate random data points for the project cards
  const generateDataPoints = (count: number) => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1
    }));
  };

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="PROJECT_DATABASE // SUBJECT: HET KOTHARI // CLEARANCE: LEVEL 2"
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="card overflow-hidden flex flex-col h-full border border-primary border-opacity-20 relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 40px rgba(2, 6, 23, 0.8)",
              borderColor: "rgba(26, 219, 188, 0.5)"
            }}
          >
            {/* Animated border effect */}
            <motion.div 
              className="absolute inset-0 border border-primary opacity-0 rounded-md pointer-events-none"
              animate={hoveredIndex === index ? {
                opacity: [0, 0.5, 0],
                scale: [1, 1.05, 1]
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            
            <div className="h-48 relative overflow-hidden bg-black border-b border-primary border-opacity-20">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              
              {/* Data points */}
              {hoveredIndex === index && (
                <>
                  {generateDataPoints(15).map((point, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full"
                      style={{
                        left: `${point.x}%`,
                        top: `${point.y}%`,
                        width: point.size,
                        height: point.size
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.7, 0] }}
                      transition={{ 
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 1
                      }}
                    />
                  ))}
                </>
              )}
              
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-4 left-4 bg-black p-2 rounded-md border border-primary border-opacity-30">
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-1.5 h-1.5 bg-primary rounded-full mr-1"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-xs font-mono text-primary">PROJECT_{index + 1}</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-black p-2 rounded-md border border-primary border-opacity-30">
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-1.5 h-1.5 bg-primary rounded-full mr-1"
                      animate={{ 
                        opacity: [0.3, 1, 0.3],
                        backgroundColor: project.status === 'IN_PROGRESS' ? ['#1adbbc', '#f59e0b', '#1adbbc'] : undefined
                      }}
                      transition={{ duration: project.status === 'IN_PROGRESS' ? 1 : 1.5, repeat: Infinity }}
                    />
                    <span className="text-xs font-mono text-primary">{project.status}</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="text-primary font-mono flex flex-col items-center"
                  animate={hoveredIndex === index ? { scale: 1.1 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={hoveredIndex === index ? { 
                      rotateY: 360,
                      color: ['#1adbbc', '#ffffff', '#1adbbc']
                    } : {}}
                    transition={{ 
                      rotateY: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                      color: { duration: 3, repeat: Infinity }
                    }}
                  >
                    {project.icon}
                  </motion.div>
                  <span className="mt-2 text-lg font-bold">{project.title.split(' ')[0]}</span>
                </motion.div>
              </div>
              
              {/* Animated scan line */}
              {hoveredIndex === index && (
                <motion.div 
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div 
                    className="absolute left-0 w-full h-1 bg-primary opacity-20"
                    initial={{ top: 0 }}
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              )}
              
              {/* Circular radar effect */}
              {hoveredIndex === index && (
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div 
                    className="w-32 h-32 rounded-full border border-primary opacity-20"
                    animate={{ scale: [1, 2, 1], opacity: [0.2, 0, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              )}
            </div>
            
            <div className="p-6 flex-grow font-mono relative">
              {/* Animated background pulse */}
              {hoveredIndex === index && (
                <motion.div 
                  className="absolute inset-0 bg-primary opacity-0"
                  animate={{ opacity: [0, 0.03, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">{project.title}</h3>
                  <motion.div 
                    className="h-1 w-16 bg-primary opacity-20 rounded-full"
                    animate={hoveredIndex === index ? { width: ['4rem', '6rem', '4rem'] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>
              
              <p className="text-white text-sm mb-3">{project.subtitle}</p>
              
              <div className="flex items-center text-slate-400 mb-4 text-xs">
                <FiCalendar className="mr-2 text-primary" />
                <span>{project.period}</span>
              </div>
              
              <div className="h-px w-full bg-primary opacity-20 my-4"></div>
              
              <p className="text-slate-300 mb-6 text-sm">
                <motion.span 
                  className="text-primary inline-block mr-1"
                  animate={hoveredIndex === index ? { opacity: [1, 0.5, 1] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  &gt;
                </motion.span>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <FiTag className="text-primary mt-1" />
                {project.tags.map((tag, tagIndex) => (
                  <motion.span 
                    key={tagIndex} 
                    className="bg-black text-primary text-xs px-3 py-1 rounded-md border border-primary border-opacity-30 hover:border-opacity-70 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(26, 219, 188, 0.1)",
                      borderColor: "rgba(26, 219, 188, 0.5)"
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * tagIndex }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex space-x-4 mt-auto">
                <motion.a 
                  href="#" 
                  className="text-slate-300 hover:text-primary transition-all duration-300 border border-slate-700 hover:border-primary p-2 rounded-md relative overflow-hidden"
                  aria-label="View Project"
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Animated highlight effect */}
                  <motion.div 
                    className="absolute inset-0 bg-primary opacity-0"
                    whileHover={{ 
                      opacity: 0.1,
                      x: ['-100%', '100%'],
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                  <FiExternalLink size={18} />
                </motion.a>
                <motion.a 
                  href="https://github.com/hetkothari09" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-primary transition-all duration-300 border border-slate-700 hover:border-primary p-2 rounded-md relative overflow-hidden"
                  aria-label="GitHub Repository"
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Animated highlight effect */}
                  <motion.div 
                    className="absolute inset-0 bg-primary opacity-0"
                    whileHover={{ 
                      opacity: 0.1,
                      x: ['-100%', '100%'],
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                  <FiGithub size={18} />
                </motion.a>
              </div>
              
              {/* Terminal-like status indicator */}
              {hoveredIndex === index && (
                <motion.div 
                  className="absolute bottom-2 right-2 text-xs font-mono text-primary opacity-50 flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-1.5 h-1.5 bg-primary rounded-full mr-1.5"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  ANALYZING_DATA
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects; 