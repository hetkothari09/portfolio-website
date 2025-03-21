import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Section3DCardProps {
  children: React.ReactNode;
  className?: string;
}

const Section3DCard: React.FC<Section3DCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    }
  };

  return (
    <motion.div 
      ref={cardRef}
      className={`relative w-full h-full ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div 
        className="w-full h-full rounded-lg overflow-hidden border border-primary/20 bg-black/30 backdrop-blur-sm p-6 shadow-lg"
        animate={{ 
          rotateX: isHovered ? -mousePosition.y * 10 : 0, 
          rotateY: isHovered ? mousePosition.x * 10 : 0,
          scale: isHovered ? 1.02 : 1,
          z: isHovered ? 20 : 0,
          boxShadow: isHovered 
            ? '0 20px 40px rgba(26, 219, 188, 0.15), 0 0 20px rgba(26, 219, 188, 0.1) inset' 
            : '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
      >
        {/* Glowing border effect */}
        <motion.div 
          className="absolute inset-0 rounded-lg pointer-events-none"
          animate={{
            boxShadow: isHovered 
              ? '0 0 0 1px rgba(26, 219, 188, 0.3)' 
              : '0 0 0 0px rgba(26, 219, 188, 0)'
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-primary/30 rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-primary/30 rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-primary/30 rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-primary/30 rounded-br-lg"></div>

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Section3DCard; 