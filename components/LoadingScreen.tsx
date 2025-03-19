import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCpu } from 'react-icons/fi';

interface LoadingScreenProps {
  finishLoading: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(finishLoading, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    
    return () => {
      clearInterval(timer);
    };
  }, [finishLoading]);
  
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background grid pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        </div>
        
        {/* Circuit pattern background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-md w-full px-8">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
              HET KOTHARI
            </h1>
            <p className="text-slate-400 font-mono">Full Stack Developer</p>
          </motion.div>

          <div className="flex items-center justify-center mb-8">
            <div className="relative w-24 h-24 rounded-full border border-primary/30 flex items-center justify-center">
              <motion.div 
                className="absolute inset-0 rounded-full border border-primary/30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{ 
                  borderTop: '2px solid #1adbbc',
                  borderRight: '2px solid transparent',
                  borderBottom: '2px solid transparent',
                  borderLeft: '2px solid transparent',
                }}
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full"
                style={{ 
                  borderBottom: '1px solid #1adbbc',
                  borderLeft: '1px solid #1adbbc',
                  borderTop: '1px solid transparent',
                  borderRight: '1px solid transparent',
                }}
              />
              
              <FiCpu size={28} className="text-primary" />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="h-1 w-full bg-primary/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            
            <div className="flex justify-between items-center font-mono text-sm">
              <div className="text-primary/80">INITIALIZING</div>
              <div className="text-primary">{progress}%</div>
            </div>
            
            <div className="text-center font-mono text-xs text-slate-500">
              LOADING_PORTFOLIO
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen; 