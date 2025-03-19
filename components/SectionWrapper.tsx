import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, subtitle, children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id={id} className="relative py-24 md:py-32 overflow-hidden bg-black">
      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
      </div>
      
      {/* Static decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      
      {/* Section border */}
      <div className="absolute inset-4 border border-primary/5 rounded-md pointer-events-none"></div>
      
      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary/20"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-primary/20"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-primary/20"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <div className="flex items-center justify-center mb-2">
            <div className="h-px w-8 bg-primary/50"></div>
            <div className="text-xs font-mono text-slate-500 mx-3 uppercase">{id}</div>
            <div className="h-px w-8 bg-primary/50"></div>
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
            <div className="h-1 w-16 bg-gradient-to-r from-primary/50 to-primary/50 rounded-full"></div>
          </div>
        </div>
        
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper; 