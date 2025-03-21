import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCalendar, FiTag, FiTerminal, FiCode, FiDatabase } from 'react-icons/fi';
import SectionWrapper from './SectionWrapper';
import Image from 'next/image';
import Section3DCard from './Section3DCard';

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
      status: 'COMPLETED',
      github: 'https://github.com/hetkothari09/ai-strategy-form-generator',
      live: null
    },
    {
      title: 'Automated Financial Data Processing System',
      subtitle: 'Streamlining Trading Strategy Workflows with Scalable Automation',
      period: '2023 - 2024',
      description: 'Developed a robust automation system for a finance company specializing in algorithmic trading, replacing manual workflows for generating complex and detailed multi-period financial reports.',
      tags: ['Python', 'Pandas', 'Automation', 'Financial Analysis', 'Data Processing'],
      image: '/images/project2.jpg',
      icon: <FiDatabase size={24} />,
      status: 'DEPLOYED',
      github: 'https://github.com/hetkothari09/financial-automation-system',
      live: null
    },
    {
      title: 'AI-driven Predictive Analysis for Business Intelligence',
      subtitle: 'Empowering Data-Driven Decisions with Advanced Analytics',
      period: 'Present',
      description: 'Developed a business intelligence application that adapts to diverse use cases and integrates data seamlessly, delivering dynamic reports, AI-driven insights, customizable dashboards and enhances decision-making.',
      tags: ['AI', 'Predictive Analytics', 'Business Intelligence', 'Data Visualization', 'Python'],
      image: '/images/project3.jpg',
      icon: <FiTerminal size={24} />,
      status: 'IN_PROGRESS',
      github: 'https://github.com/hetkothari09/predictive-bi-analytics',
      live: null
    },
    {
      title: 'SmallBizMart: E-Commerce Platform',
      subtitle: 'Empowering Local Businesses in the Digital Era',
      period: '2021 - 2022',
      description: 'Created a user-friendly e-commerce platform, sponsored by two companies, tailored for small businesses for seamless shopping experiences and with the tools to thrive in the digital marketplace.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      image: '/images/project4.jpg',
      icon: <FiDatabase size={24} />,
      status: 'COMPLETED',
      github: 'https://github.com/hetkothari09/Ecommerce-application-project',
      live: 'https://smallbizmart.netlify.app/'
    }
  ];
  
  return (
    <SectionWrapper id="projects" title="My Projects" subtitle="SYSTEM DIRECTORY // CLEARANCE: CONFIDENTIAL // PROJECT RECORDS">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <Section3DCard key={index} className="h-full">
            <div className="h-full">
              {/* Project Image with Overlay */}
              <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-6">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full blur-[1px]"
                  width={640}
                  height={360}
                  priority={index < 2}
                  unoptimized={true}
                />

                {/* Status Badge */}
                <div className="absolute top-3 left-3 bg-black/70 px-2 py-1 rounded text-xs font-mono border border-primary/30 text-primary z-20">
                  {project.status}
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 text-primary z-20">
                  {project.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-primary text-sm">{project.subtitle}</p>
                </div>

                {/* Period */}
                <div className="flex items-center space-x-2 text-xs text-slate-400">
                  <FiCalendar size={14} />
                  <span>{project.period}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <div className="flex items-center space-x-1 text-xs text-slate-400 mr-2">
                    <FiTag size={14} />
                    <span>TECH STACK:</span>
                  </div>
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-white hover:text-primary transition duration-300"
                    >
                      <FiGithub size={16} />
                      <span className="text-sm">GitHub</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-white hover:text-primary transition duration-300"
                    >
                      <FiExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Section3DCard>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;