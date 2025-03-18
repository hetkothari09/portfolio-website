import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCalendar, FiTag, FiTerminal, FiCode, FiDatabase } from 'react-icons/fi';
import SectionWrapper from './SectionWrapper';
import Image from 'next/image';

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const projects = [
    {
      title: 'AI-Powered Strategy Form Generator',
      subtitle: 'Simplifying Strategy Creation with AI',
      period: 'Jun 2024 - Jul 2024',
      description: 'Designed an AI-powered chatbot by fine-tuning OpenAI\'s GPT-3.5 Turbo model, that dynamically interprets and generates user-friendly stock-market strategy forms based on user inputs.',
      tags: ['OpenAI API', 'GPT-3.5', 'Fine-tuning', 'Python', 'React'],
      image: '/images/project1.jpg',
      icon: <FiCode size={24} />,
      status: 'COMPLETED'
    },
    {
      title: 'Automated Financial Data Processing System',
      subtitle: 'Streamlining Trading Strategy Workflows with Scalable Automation',
      period: '2023 - 2024',
      description: 'Developed a robust automation system for a finance company specializing in algorithmic trading, replacing manual workflows for generating complex and detailed multi-period financial reports.',
      tags: ['Python', 'Pandas', 'Automation', 'Financial Analysis', 'Data Processing'],
      image: '/images/project2.jpg',
      icon: <FiDatabase size={24} />,
      status: 'DEPLOYED'
    },
    {
      title: 'AI-driven Predictive Analysis for Business Intelligence',
      subtitle: 'Empowering Data-Driven Decisions with Advanced Analytics',
      period: 'Present',
      description: 'Developed a business intelligence application that adapts to diverse use cases and integrates data seamlessly, delivering dynamic reports, AI-driven insights, customizable dashboards and enhances decision-making.',
      tags: ['AI', 'Predictive Analytics', 'Business Intelligence', 'Data Visualization', 'Python'],
      image: '/images/project3.jpg',
      icon: <FiTerminal size={24} />,
      status: 'IN_PROGRESS'
    },
    {
      title: 'SmallBizMart: E-Commerce Platform',
      subtitle: 'Empowering Local Businesses in the Digital Era',
      period: '2021 - 2022',
      description: 'Created a user-friendly e-commerce platform, sponsored by two companies, tailored for small businesses for seamless shopping experiences and with the tools to thrive in the digital marketplace.',
      tags: ['E-commerce', 'Web Development', 'React', 'Node.js', 'MongoDB'],
      image: '/images/smallbizmart.jpg',
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
            className="card overflow-hidden flex flex-col h-full bg-[#0a0a0a] border border-primary border-opacity-20 rounded-lg relative"
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
              className="absolute inset-0 border border-primary opacity-0 rounded-lg pointer-events-none z-10"
              animate={hoveredIndex === index ? {
                opacity: [0, 0.5, 0],
                scale: [1, 1.05, 1]
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            
            {/* Project image */}
            <div className="relative h-72 w-full">
              {project.image && (
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-all duration-500 filter blur-[2px]"
                  quality={90}
                />
              )}
              
              {/* Overlay gradient - made slightly darker for better readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[rgba(10,10,10,0.6)] to-[rgba(10,10,10,0.3)]"></div>
              
              {/* Status badge */}
              <div className="absolute top-6 right-6 bg-black bg-opacity-70 px-3 py-1 rounded-full border border-primary border-opacity-30 z-10">
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ 
                      backgroundColor: 
                        project.status === 'IN_PROGRESS' ? '#f59e0b' : 
                        project.status === 'COMPLETED' ? '#10b981' :
                        project.status === 'DEPLOYED' ? '#3b82f6' : '#ef4444'
                    }}
                    animate={{ 
                      opacity: project.status === 'IN_PROGRESS' ? [0.5, 1, 0.5] : [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-xs font-mono text-white">{project.status}</span>
                </div>
              </div>
              
              {/* Project number */}
              <div className="absolute top-6 left-6 z-10">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono text-primary px-2 py-1 bg-black bg-opacity-70 rounded-md border border-primary border-opacity-30">
                    PROJECT_{index + 1}
                  </span>
                </div>
              </div>
              
              {/* Project title overlay - visible only on hover */}
              {hoveredIndex === index && (
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-30 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center px-6">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      {project.icon && (
                        <div className="flex justify-center mb-3">
                          <div className="text-primary text-3xl">
                            {project.icon}
                          </div>
                        </div>
                      )}
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-primary text-sm">{project.subtitle}</p>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
            
            {/* Content */}
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary mb-1">{project.title}</h3>
                <div className="flex items-center text-slate-400 text-xs">
                  <FiCalendar className="mr-2 text-primary" />
                  <span>{project.period}</span>
                </div>
              </div>
              
              <p className="text-slate-300 text-sm mb-5 flex-grow">
                {project.description}
              </p>
              
              <div className="mb-5">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span 
                      key={tagIndex} 
                      className="bg-black text-primary text-xs px-2 py-1 rounded-md border border-primary border-opacity-30"
                      whileHover={{ 
                        backgroundColor: "rgba(26, 219, 188, 0.1)",
                        borderColor: "rgba(26, 219, 188, 0.5)"
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.05 * tagIndex }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end mt-auto">
                {project.title === 'SmallBizMart: E-Commerce Platform' && (
                  <motion.a 
                    href="https://smallbizmart.netlify.app/" 
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-black border border-primary border-opacity-30 text-primary mr-2"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(26, 219, 188, 0.1)",
                      borderColor: "rgba(26, 219, 188, 0.7)"
                    }}
                    transition={{ duration: 0.2 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size={18} />
                  </motion.a>
                )}
                <motion.a 
                  href="https://github.com/hetkothari09/Ecommerce-application-project" 
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-black border border-primary border-opacity-30 text-primary"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "rgba(26, 219, 188, 0.1)",
                    borderColor: "rgba(26, 219, 188, 0.7)"
                  }}
                  transition={{ duration: 0.2 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects;