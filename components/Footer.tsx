import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiCode, FiTerminal } from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-effect py-8 border-t border-primary border-opacity-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 font-mono">
            <div className="flex items-center space-x-2 mb-1">
              <FiTerminal className="text-primary" size={16} />
              <p className="text-sm uppercase text-primary">SYSTEM_STATUS</p>
            </div>
            <p className="text-xs text-slate-400">OPERATIONAL // <span className="text-primary">ARRAKIS_VIEWPORT</span></p>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="https://github.com/hetkothari09" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors border border-slate-700 hover:border-primary p-2 rounded-md"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/het-kothari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors border border-slate-700 hover:border-primary p-2 rounded-md"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a 
              href="mailto:hetkothari.work@gmail.com" 
              className="text-slate-400 hover:text-primary transition-colors border border-slate-700 hover:border-primary p-2 rounded-md"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
          </div>
          
          <div className="text-xs font-mono text-slate-400 flex items-center">
            <span className="text-primary">TRANSMISSION_</span>
            <span>{currentYear}</span>
            <FiCode className="mx-1 text-primary" size={14} />
            <span>HET_KOTHARI</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-800 flex justify-center">
          <div className="text-xs font-mono text-slate-500 flex flex-col items-center">
            <div className="flex items-center mb-1">
              <span className="text-primary mr-2">SPICE</span>
              <div className="w-16 h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-primary animate-pulse"></div>
              </div>
              <span className="text-primary ml-2">75%</span>
            </div>
            <p>"The spice must flow."</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 