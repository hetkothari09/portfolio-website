import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SketchfabModelProps {
  modelId?: string;
  className?: string;
}

const SketchfabModel: React.FC<SketchfabModelProps> = ({ 
  modelId = "3ddbd44c88044d1c89f0e4f8b2356d53", 
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  // Update mouse position for 3D effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      className={`relative w-full h-full min-h-[400px] ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
      style={{ 
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 z-20">
          <div className="flex flex-col items-center">
            <motion.div 
              className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-sm font-mono text-primary">LOADING 3D MODEL...</p>
          </div>
        </div>
      )}

      {/* 3D model container with perspective effect */}
      <motion.div 
        className="w-full h-full rounded-lg overflow-hidden border-2 border-primary border-opacity-30"
        animate={{ 
          rotateX: -mousePosition.y * 10, 
          rotateY: mousePosition.x * 10
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="sketchfab-embed-wrapper h-full">
          <iframe 
            title="TOON HACKING PAINTED toon shader rigged" 
            frameBorder="0" 
            allowFullScreen={true}
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src={`https://sketchfab.com/models/${modelId}/embed?ui_theme=dark&autostart=1&transparent=1&ui_infos=0&ui_title=0&ui_inspector=0&ui_help=0&ui_settings=0&ui_annotations=0&ui_watermark_link=0&ui_watermark=0`}
            className="w-full h-full"
            // Custom attributes added using data-* prefix for compatibility
            data-xr-spatial-tracking="true"
            data-execution-while-out-of-viewport="true"
            data-execution-while-not-rendered="true"
            data-web-share="true"
          />
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary pointer-events-none"></div>
      </motion.div>

      {/* Interactive instruction indicator */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black bg-opacity-70 border border-primary border-opacity-40 rounded-full flex items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div 
          className="w-2 h-2 rounded-full bg-primary mr-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span className="text-xs font-mono text-slate-300">DRAG TO ROTATE MODEL</span>
      </motion.div>
    </motion.div>
  );
};

export default SketchfabModel; 