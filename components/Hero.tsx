import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTerminal, FiCpu } from 'react-icons/fi';
import TypingEffect from './TypingEffect';
import AnimatedSphere from './AnimatedSphere';

const Hero: React.FC = () => {
  const roles = [
    "Computer Engineering Student",
    "Research & Data Analyst",
    "Web Developer",
    "AI Enthusiast"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="space-y-6">
              <div className="mb-4">
                <div className="text-xs font-mono text-primary mb-2">SYSTEM_IDENTIFICATION: HK_005</div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="name-container"
                >
                  <h1 className="text-8xl md:text-9xl font-extrabold tracking-tighter uppercase text-white leading-none font-mono">
                    HET
                  </h1>
                  <h1 className="text-8xl md:text-9xl font-extrabold tracking-tighter uppercase text-white leading-none font-mono">
                    KOTHARI
                  </h1>
                </motion.div>
                <div className="text-xs font-mono text-primary mt-4 uppercase">DIGITAL_ENTITY // VERSION 2.5.1</div>
              </div>
              
              <motion.div 
                className="font-mono text-sm text-slate-400 mb-6 border border-primary border-opacity-20 p-4 rounded-md bg-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center mb-2 text-primary">
                  <FiTerminal className="mr-2" />
                  <span>ARRAKIS_TERMINAL</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="flex">
                    <span className="text-primary w-8">01.</span>
                    <span>HOVER OVER PLANET TO SIMULATE SPICE EXTRACTION</span>
                  </div>
                  <div className="flex">
                    <span className="text-primary w-8">02.</span>
                    <span>INVESTIGATE RECENT ACTIVITY ON SURFACE OF THE PLANET</span>
                  </div>
                  <div className="flex">
                    <span className="text-primary w-8">03.</span>
                    <span>EXPLORE PERSONNEL FILES BELOW</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex space-x-4 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a 
                  href="https://github.com/hetkothari09" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-primary transition-all duration-300 border border-slate-700 hover:border-primary p-2 rounded-md"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/het-kothari" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-primary transition-all duration-300 border border-slate-700 hover:border-primary p-2 rounded-md"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
                <a 
                  href="mailto:hetkothari.work@gmail.com" 
                  className="text-slate-300 hover:text-primary transition-all duration-300 border border-slate-700 hover:border-primary p-2 rounded-md"
                  aria-label="Email"
                >
                  <FiMail size={20} />
                </a>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <a 
                  href="#about" 
                  className="py-3 px-6 bg-black text-primary border border-primary rounded-md font-mono text-sm hover:bg-primary hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center"
                >
                  <FiCpu className="mr-2" />
                  ACCESS_PROFILE
                </a>
                <a 
                  href="#contact" 
                  className="py-3 px-6 bg-black text-primary border border-primary border-opacity-50 rounded-md font-mono text-sm hover:border-opacity-100 transition-all duration-300 flex items-center justify-center"
                >
                  <FiTerminal className="mr-2" />
                  OPEN_COMM_CHANNEL
                </a>
              </motion.div>
            </div>
          </motion.div>
          
          {/* 3D Animated Sphere */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center items-center"
          >
            <AnimatedSphere />
          </motion.div>
        </div>
      </div>
      
      {/* Terminal-like decorative element */}
      <div className="absolute bottom-4 left-4 text-xs font-mono text-primary opacity-50">
        &gt; SYSTEM_INITIALIZED // WELCOME_VISITOR
      </div>
    </section>
  );
};

export default Hero; 