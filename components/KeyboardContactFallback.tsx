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

  useEffect(() => {
    // Subtle floating animation for the keyboard
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full h-[550px] md:h-[600px] relative rounded-lg overflow-hidden border border-primary border-opacity-20 bg-gradient-to-b from-black to-gray-900 flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Keyboard base with perspective effect */}
      <motion.div 
        className="relative w-[90%] max-w-2xl perspective-1000"
        animate={controls}
        style={{
          transform: `rotateX(15deg) rotateY(${(mousePosition.x - 0.5) * 8}deg)`
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Keyboard body - dark gray base with shadow */}
        <div className="relative keyboard-base bg-gray-900 rounded-xl p-5 shadow-[0_30px_70px_rgba(0,0,0,0.9)] border-2 border-gray-800">
          {/* Keyboard base shadow */}
          <div className="absolute -bottom-16 left-4 right-4 h-16 bg-black opacity-60 blur-md rounded-full"></div>
          
          {/* Status indicator at top */}
          <div className="absolute -top-14 left-0 right-0 flex justify-center">
            <div className="bg-black bg-opacity-70 px-5 py-2 rounded-full border border-gray-800 flex items-center">
              <motion.div 
                className="w-4 h-4 rounded-full mr-3"
                style={{ backgroundColor: '#00ff00' }}
                animate={{ opacity: [0.5, 1, 0.5], boxShadow: ['0 0 5px #00ff00', '0 0 15px #00ff00', '0 0 5px #00ff00'] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-white font-mono text-base">
                Available For Freelance
              </span>
            </div>
          </div>
          
          {/* Keyboard ambient lighting */}
          <div className="keyboard-ambient"></div>
          
          {/* Keys container with 3D-like appearance - grid with only 4 keys */}
          <div className="grid grid-cols-2 gap-4 p-4 transform-style-preserve-3d">
            {/* Row 1 */}
            <KeyButton 
              label="@" 
              icon={<FiMail size={28} />} 
              color="#55ff55" 
              link="mailto:hetkothari.work@gmail.com"
              isPressed={pressedKey === "@"}
              isHovered={hoveredKey === "@"}
              onPress={() => handleKeyPress("@")}
              onHover={(hovered) => setHoveredKey(hovered ? "@" : null)}
            />
            <KeyButton 
              label="GITHUB" 
              icon={<FiGithub size={28} />} 
              color="#ffaa00" 
              link="https://github.com/hetkothari09"
              isPressed={pressedKey === "GITHUB"}
              isHovered={hoveredKey === "GITHUB"}
              onPress={() => handleKeyPress("GITHUB")}
              onHover={(hovered) => setHoveredKey(hovered ? "GITHUB" : null)}
            />
            
            {/* Row 2 */}
            <KeyButton 
              label="LINKEDIN" 
              icon={<FiLinkedin size={28} />} 
              color="#aa55ff" 
              link="https://www.linkedin.com/in/het-kothari/"
              isPressed={pressedKey === "LINKEDIN"}
              isHovered={hoveredKey === "LINKEDIN"}
              onPress={() => handleKeyPress("LINKEDIN")}
              onHover={(hovered) => setHoveredKey(hovered ? "LINKEDIN" : null)}
            />
            <KeyButton 
              label="RESUME" 
              icon={<FiDownload size={28} />} 
              color="#ff55aa" 
              link="https://drive.google.com/file/d/1o2ydhIYeOwZr9E0TwUcrSvdV3F96uQ4U/view?usp=drive_link"
              isPressed={pressedKey === "RESUME"}
              isHovered={hoveredKey === "RESUME"}
              onPress={() => handleKeyPress("RESUME")}
              onHover={(hovered) => setHoveredKey(hovered ? "RESUME" : null)}
            />
          </div>
          
          {/* Keyboard reflection */}
          <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-black opacity-30"></div>
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
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary border-opacity-50"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary border-opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary border-opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary border-opacity-50"></div>
      </div>
      
      {/* Screen glare effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-[0.03] pointer-events-none"
        style={{
          backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`
        }}
      ></div>
      
      {/* Keyboard instructions */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-400 font-mono">
        Hover over keys to press them
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
}

const KeyButton: React.FC<KeyButtonProps> = ({ 
  label, 
  icon, 
  color, 
  link, 
  isPressed, 
  isHovered,
  onPress, 
  onHover 
}) => {
  return (
    <motion.a
      href={link}
      target={link.startsWith('http') ? '_blank' : undefined}
      rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`relative flex flex-col items-center justify-center h-24 rounded-lg bg-black cursor-pointer overflow-hidden group key-3d keyboard-key bloated-key ${isPressed ? 'key-press key-press-depth' : ''} ${isHovered ? 'key-hover-pressed' : ''}`}
      style={{ 
        boxShadow: isHovered || isPressed 
          ? `0 2px 0 rgba(0,0,0,0.7), 0 -1px 0 rgba(255,255,255,0.1) inset, 0 0 15px ${color}40 inset` 
          : `0 10px 0 rgba(0,0,0,0.7), 0 -1px 0 rgba(255,255,255,0.1) inset, 0 0 10px ${color}30 inset`,
        border: `2px solid ${color}60`,
        transform: isHovered || isPressed 
          ? 'translateY(8px) scale(1)' 
          : 'translateY(0) scale(1)',
        zIndex: isHovered ? 10 : 1,
        transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={onPress}
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
        className="text-3xl mb-2 relative z-10"
        style={{ color }}
        animate={{ 
          scale: isHovered ? 1.1 : 1,
          y: isHovered ? 2 : 0
        }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      <span className="font-mono text-sm text-white relative z-10 font-bold">{label}</span>
      
      {/* Glow effect on hover/press - reduced */}
      <motion.div 
        className="absolute inset-0 opacity-0 z-0"
        style={{ backgroundColor: color }}
        animate={{ 
          opacity: isPressed ? 0.5 : isHovered ? 0.3 : 0
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Enhanced glow effect - reduced */}
      <div 
        className="key-enhanced-glow-reduced" 
        style={{ 
          backgroundColor: color,
          opacity: isHovered ? 0.3 : 0
        }}
      ></div>
      
      {/* Bloated key effect */}
      <div className="bloated-key-top"></div>
    </motion.a>
  );
};

export default KeyboardContactFallback; 