import React, { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: ReactNode;
  subtitle?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, subtitle, children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Generate random positions for decorative elements
  const decorativeElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10
  }));
  
  return (
    <section id={id} className="relative py-24 md:py-32 overflow-hidden bg-black">
      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      
      {/* Animated glow effect that follows mouse */}
      <motion.div 
        className="absolute w-96 h-96 rounded-full bg-primary opacity-5 blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ type: "spring", damping: 15 }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary opacity-5 rounded-full blur-3xl"></div>
      
      {/* Animated particles */}
      {decorativeElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
          style={{
            top: element.top,
            left: element.left,
            width: element.size,
            height: element.size
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay
          }}
        />
      ))}
      
      {/* Section border */}
      <div className="absolute inset-4 border border-primary border-opacity-5 rounded-md pointer-events-none"></div>
      
      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary border-opacity-20 pointer-events-none"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-primary border-opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-primary border-opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary border-opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <div className="flex items-center justify-center mb-2">
            <div className="h-px w-8 bg-primary opacity-50"></div>
            <div className="text-xs font-mono text-slate-500 mx-3 uppercase">{id}</div>
            <div className="h-px w-8 bg-primary opacity-50"></div>
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center uppercase tracking-tighter"
          >
            {title}
          </motion.h2>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center text-slate-400 mt-4 max-w-2xl mx-auto font-mono text-sm"
            >
              {subtitle}
            </motion.p>
          )}
          
          <div className="flex justify-center mt-6">
            <motion.div 
              className="h-1 w-16 bg-gradient-to-r from-primary to-primary opacity-50 rounded-full"
              animate={{ width: ["4rem", "6rem", "4rem"] }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>
          </div>
        </div>
        
        {children}
      </div>
      
      {/* Terminal-like decorative elements */}
      <div className="absolute bottom-4 left-4 text-xs font-mono text-primary opacity-50">
        &gt; SECTION_{id.toUpperCase()}_LOADED
      </div>
      
      <div className="absolute top-4 right-4 text-xs font-mono text-primary opacity-50 flex items-center">
        <motion.div 
          className="w-2 h-2 bg-primary rounded-full mr-2"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        ></motion.div>
        SYSTEM_ACTIVE
      </div>
    </section>
  );
};

export default SectionWrapper; 