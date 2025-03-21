import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiDownload, FiFolder, FiMessageSquare } from 'react-icons/fi';

interface KeyboardContactFallbackProps {
  isAvailable: boolean;
}

const KeyboardContactFallback: React.FC<KeyboardContactFallbackProps> = ({ isAvailable }) => {
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  const handleKeyPress = (label: string) => {
    setPressedKey(label);
    setTimeout(() => setPressedKey(null), 400);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches && e.touches.length > 0) {
      const touch = e.touches[0];
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (touch.clientX - rect.left) / rect.width;
      const y = (touch.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    }
  };

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Subtle floating animation for the keyboard
    controls.start({
      y: [0, -8, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [controls]);

  const getIconSize = () => {
    return isMobile ? 22 : 28;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full h-[400px] sm:h-[450px] md:h-[550px] lg:h-[600px] relative rounded-lg overflow-hidden border border-primary border-opacity-20 bg-gradient-to-b from-black to-gray-900 flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Keyboard base with perspective effect */}
      <motion.div 
        className="relative w-[95%] max-w-xl sm:max-w-2xl perspective-1000"
        animate={controls}
        style={{
          transform: `rotateX(${isMobile ? 20 : 15}deg) rotateY(${(mousePosition.x - 0.5) * (isMobile ? 5 : 8)}deg)`
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Keyboard body - dark gray base with shadow */}
        <div className="relative keyboard-base bg-gray-900 rounded-xl p-3 sm:p-4 md:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] sm:shadow-[0_30px_70px_rgba(0,0,0,0.9)] border-2 border-gray-800">
          {/* Keyboard base shadow */}
          <div className="absolute -bottom-10 sm:-bottom-16 left-4 right-4 h-10 sm:h-16 bg-black opacity-60 blur-md rounded-full"></div>
          
          {/* Status indicator at top */}
          <div className="absolute -top-10 sm:-top-14 left-0 right-0 flex justify-center">
            <div className="bg-black bg-opacity-70 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-gray-800 flex items-center">
              <motion.div 
                className="w-3 h-3 sm:w-4 sm:h-4 rounded-full mr-2 sm:mr-3"
                style={{ backgroundColor: '#00ff00' }}
                animate={{ opacity: [0.5, 1, 0.5], boxShadow: ['0 0 5px #00ff00', '0 0 15px #00ff00', '0 0 5px #00ff00'] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-white font-mono text-xs sm:text-sm md:text-base">
                Available For Freelance
              </span>
            </div>
          </div>
          
          {/* Keyboard ambient lighting */}
          <div className="keyboard-ambient"></div>
          
          {/* Keys container with 3D-like appearance - grid with only 4 keys */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 transform-style-preserve-3d">
            {/* Row 1 */}
            <KeyButton 
              label="@" 
              icon={<FiMail size={getIconSize()} />} 
              color="#55ff55" 
              link="mailto:hetkothari.work@gmail.com"
              isPressed={pressedKey === "@"}
              isHovered={hoveredKey === "@"}
              onPress={() => handleKeyPress("@")}
              onHover={(hovered) => setHoveredKey(hovered ? "@" : null)}
              isMobile={isMobile}
            />
            <KeyButton 
              label="GITHUB" 
              icon={<FiGithub size={getIconSize()} />} 
              color="#ffaa00" 
              link="https://github.com/hetkothari09"
              isPressed={pressedKey === "GITHUB"}
              isHovered={hoveredKey === "GITHUB"}
              onPress={() => handleKeyPress("GITHUB")}
              onHover={(hovered) => setHoveredKey(hovered ? "GITHUB" : null)}
              isMobile={isMobile}
            />
            
            {/* Row 2 */}
            <KeyButton 
              label="LINKEDIN" 
              icon={<FiLinkedin size={getIconSize()} />} 
              color="#aa55ff" 
              link="https://www.linkedin.com/in/het-kothari/"
              isPressed={pressedKey === "LINKEDIN"}
              isHovered={hoveredKey === "LINKEDIN"}
              onPress={() => handleKeyPress("LINKEDIN")}
              onHover={(hovered) => setHoveredKey(hovered ? "LINKEDIN" : null)}
              isMobile={isMobile}
            />
            <KeyButton 
              label="RESUME" 
              icon={<FiDownload size={getIconSize()} />} 
              color="#ff55aa" 
              link="https://drive.google.com/file/d/1MLnjrSKeieNwKAIqgpdW1jf4gEqH00_v/view?usp=drive_link"
              isPressed={pressedKey === "RESUME"}
              isHovered={hoveredKey === "RESUME"}
              onPress={() => handleKeyPress("RESUME")}
              onHover={(hovered) => setHoveredKey(hovered ? "RESUME" : null)}
              isMobile={isMobile}
            />
          </div>
          
          {/* Keyboard reflection */}
          <div className="absolute left-0 right-0 bottom-0 h-10 sm:h-16 bg-gradient-to-b from-transparent to-black opacity-30"></div>
        </div>
      </motion.div>
      
      {/* Ambient light effect */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-primary to-transparent opacity-5"></div>
      
      {/* Overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scan line effect */}
        <motion.div 
          className="absolute left-0 w-full h-0.5 bg-primary opacity-10"
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-4 h-4 sm:w-6 sm:h-6 border-t border-l sm:border-t-2 sm:border-l-2 border-primary border-opacity-50"></div>
        <div className="absolute top-0 right-0 w-4 h-4 sm:w-6 sm:h-6 border-t border-r sm:border-t-2 sm:border-r-2 border-primary border-opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-6 sm:h-6 border-b border-l sm:border-b-2 sm:border-l-2 border-primary border-opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-6 sm:h-6 border-b border-r sm:border-b-2 sm:border-r-2 border-primary border-opacity-50"></div>
      </div>
      
      {/* Screen glare effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-[0.03] pointer-events-none"
        style={{
          backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`
        }}
      ></div>
      
      {/* Keyboard instructions */}
      <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 text-center text-xs sm:text-sm text-gray-400 font-mono">
        {isMobile ? "Tap keys to press them" : "Hover over keys to press them"}
      </div>
    </motion.div>
  );
};

interface KeyButtonProps {
  label: string;
  icon: React.ReactNode;
  color: string;
  link: string;
  isPressed: boolean;
  isHovered: boolean;
  onPress: () => void;
  onHover: (hovered: boolean) => void;
  isMobile: boolean;
}

const KeyButton: React.FC<KeyButtonProps> = ({ 
  label, 
  icon, 
  color, 
  link, 
  isPressed, 
  isHovered,
  onPress, 
  onHover,
  isMobile
}) => {
  return (
    <motion.a
      href={link}
      target={link.startsWith('http') ? '_blank' : undefined}
      rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`relative flex flex-col items-center justify-center h-16 sm:h-20 md:h-24 rounded-lg bg-black cursor-pointer overflow-hidden group key-3d keyboard-key bloated-key ${isPressed ? 'key-press key-press-depth' : ''} ${isHovered ? 'key-hover-pressed' : ''}`}
      style={{ 
        boxShadow: isHovered || isPressed 
          ? `0 2px 0 rgba(0,0,0,0.7), 0 -1px 0 rgba(255,255,255,0.1) inset, 0 0 15px ${color}40 inset` 
          : `0 ${isMobile ? 6 : 10}px 0 rgba(0,0,0,0.7), 0 -1px 0 rgba(255,255,255,0.1) inset, 0 0 10px ${color}30 inset`,
        border: `${isMobile ? 1 : 2}px solid ${color}60`,
        transform: isHovered || isPressed 
          ? `translateY(${isMobile ? 5 : 8}px) scale(1)` 
          : 'translateY(0) scale(1)',
        zIndex: isHovered ? 10 : 1,
        transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={onPress}
      onTouchStart={() => onHover(true)}
      onTouchEnd={() => {
        onHover(false);
        onPress();
      }}
    >
      {/* Key top highlight */}
      <div className="key-highlight" style={{ opacity: isHovered ? 0.3 : 1 }}></div>
      
      {/* Key sides for 3D effect - hidden on hover */}
      <div className="key-side-left" 
        style={{ 
          height: isHovered ? '100%' : '100%',
          opacity: isHovered ? 0 : 1
        }}
      ></div>
      <div className="key-side-right" 
        style={{ 
          height: isHovered ? '100%' : '100%',
          opacity: isHovered ? 0 : 1
        }}
      ></div>
      <div className="key-side-bottom" 
        style={{ 
          bottom: isHovered ? '-10px' : '-10px',
          opacity: isHovered ? 0 : 1
        }}
      ></div>
      
      {/* Key lighting effect */}
      <div className="key-lighting"></div>
      
      {/* Key content */}
      <motion.div 
        className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 relative z-10"
        style={{ color }}
        animate={{ 
          scale: isHovered ? 1.1 : 1,
          y: isHovered ? 2 : 0
        }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      <span className="font-mono text-xs sm:text-sm text-white relative z-10 font-bold">{label}</span>
      
      {/* Glow effect on hover/press - reduced */}
      <motion.div 
        className="absolute inset-0 key-glow"
        style={{ boxShadow: `0 0 ${isMobile ? 15 : 25}px ${color}` }}
        animate={{ 
          opacity: isHovered || isPressed ? [0.2, 0.4, 0.2] : 0
        }}
        transition={{ 
          duration: 1.2, 
          repeat: isHovered || isPressed ? Infinity : 0
        }}
      />
    </motion.a>
  );
};

export default KeyboardContactFallback; 