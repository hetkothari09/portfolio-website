import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCpu, FiTerminal, FiUser } from 'react-icons/fi';

interface LoadingScreenProps {
  finishLoading: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING_SYSTEM');
  
  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            finishLoading();
          }, 500);
          return 100;
        }
        
        // Update status text based on progress
        if (prev === 0) {
          setStatusText('INITIALIZING_SYSTEM');
        } else if (prev === 20) {
          setStatusText('LOADING_ASSETS');
        } else if (prev === 40) {
          setStatusText('ESTABLISHING_CONNECTION');
        } else if (prev === 60) {
          setStatusText('RENDERING_INTERFACE');
        } else if (prev === 80) {
          setStatusText('FINALIZING_SETUP');
        } else if (prev >= 95) {
          setStatusText('SYSTEM_READY');
        }
        
        return prev + Math.random() * 5;
      });
    }, 150);
    
    return () => clearInterval(interval);
  }, [finishLoading]);
  
  // Generate random data points for the background
  const dataPoints = Array.from({ length: 30 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3
  }));
  
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background grid pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        </div>
        
        {/* Data points */}
        {dataPoints.map((point, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full pointer-events-none"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              width: point.size,
              height: point.size
            }}
            animate={{ 
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              delay: point.delay
            }}
          />
        ))}
        
        {/* Animated scan line */}
        <motion.div 
          className="absolute left-0 w-full h-0.5 bg-primary opacity-10 z-0"
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Het Kothari name display */}
        <div className="absolute top-10 w-full text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-xs font-mono text-primary mb-2">SYSTEM_IDENTIFICATION: HK_005</div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase text-white font-mono">
              <span className="text-primary">HET</span> KOTHARI
            </h1>
            <div className="flex justify-center mt-2">
              <motion.div 
                className="h-1 w-24 bg-gradient-to-r from-primary to-primary opacity-50 rounded-full"
                animate={{ width: ["6rem", "10rem", "6rem"] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            <div className="text-xs font-mono text-primary mt-2 uppercase">PORTFOLIO_INTERFACE // LOADING</div>
          </motion.div>
        </div>
        
        <div className="relative z-10 max-w-md w-full px-8">
          <div className="flex items-center justify-center mb-8">
            <div className="relative w-24 h-24 rounded-full border border-primary border-opacity-30 flex items-center justify-center">
              <motion.div 
                className="absolute inset-0 rounded-full border border-primary opacity-30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <motion.div
                animate={{ 
                  rotate: 360,
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute inset-0 rounded-full"
                style={{ 
                  borderTop: '2px solid #1adbbc',
                  borderRight: '2px solid transparent',
                  borderBottom: '2px solid transparent',
                  borderLeft: '2px solid transparent',
                }}
              />
              
              <motion.div
                animate={{ 
                  rotate: -360,
                }}
                transition={{ 
                  duration: 12, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
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
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary font-mono mb-2">SYSTEM LOADING</h2>
            <div className="flex items-center justify-center">
              <motion.div 
                className="w-2 h-2 bg-primary rounded-full mr-2"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <p className="text-slate-300 font-mono text-sm">{statusText}</p>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="h-1.5 w-full bg-black border border-primary border-opacity-30 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                style={{ width: `${progress}%` }}
                initial={{ width: 0 }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs font-mono text-slate-500">
              <span>0%</span>
              <span>{Math.min(Math.round(progress), 100)}%</span>
            </div>
          </div>
          
          <div className="border border-primary border-opacity-20 rounded-md p-4 bg-black bg-opacity-50">
            <div className="flex items-center mb-2">
              <FiTerminal className="text-primary mr-2" />
              <span className="text-primary font-mono text-sm">SYSTEM_LOG</span>
            </div>
            <div className="font-mono text-xs text-slate-400 space-y-1">
              {progress >= 10 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span className="text-primary mr-1">&gt;</span> Initializing core systems...
                </motion.div>
              )}
              {progress >= 30 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-primary mr-1">&gt;</span> Loading Het Kothari's portfolio data...
                </motion.div>
              )}
              {progress >= 50 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-primary mr-1">&gt;</span> Establishing secure connection...
                </motion.div>
              )}
              {progress >= 70 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-primary mr-1">&gt;</span> Rendering interface components...
                </motion.div>
              )}
              {progress >= 90 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="text-primary mr-1">&gt;</span> System ready. Welcome to Het Kothari's portfolio.
                </motion.div>
              )}
            </div>
          </div>
          
          <div className="mt-8 text-center text-xs font-mono text-slate-500">
            <motion.span 
              className="text-primary inline-block mr-1"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              &gt;
            </motion.span>
            HET_KOTHARI // PORTFOLIO_VERSION 1.0.0
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen; 