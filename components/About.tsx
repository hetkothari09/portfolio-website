import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiUser, FiBook, FiAward, FiTerminal, FiCpu } from 'react-icons/fi';
import SectionWrapper from './SectionWrapper';
import SketchfabModel from './SketchfabModel';
import Section3DCard from './Section3DCard';

const About: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: false, amount: 0.5 });
  const [displayedText, setDisplayedText] = useState<string[]>(["", ""]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  
  // The two summarized lines
  const textLines = [
    "Computer Engineering student with passion for data analysis and AI.",
    "Enhancing technical expertise while developing leadership skills for collaborative environments."
  ];
  
  // Words to highlight with the "hacking" effect (in green)
  const highlightWords = [
    "Computer Engineering", "data analysis", "AI",
    "technical expertise", "leadership", "collaborative"
  ];
  
  // Apply highlighting to words
  const getHighlightedText = (text: string) => {
    let result = text;
    highlightWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      result = result.replace(regex, '<span class="text-primary">$1</span>');
    });
    return result;
  };
  
  useEffect(() => {
    if (isInView && !isTyping) {
      setIsTyping(true);
      setDisplayedText(["", ""]);
      setCurrentLine(0);
      setCurrentChar(0);
    }
  }, [isInView]);
  
  useEffect(() => {
    if (!isTyping) return;
    
    const typingInterval = setInterval(() => {
      if (currentLine < textLines.length) {
        if (currentChar < textLines[currentLine].length) {
          setDisplayedText(prev => {
            const newText = [...prev];
            newText[currentLine] = textLines[currentLine].substring(0, currentChar + 1);
            return newText;
          });
          setCurrentChar(prev => prev + 1);
        } else {
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);
        }
      } else {
        clearInterval(typingInterval);
      }
    }, 30); // Typing speed
    
    return () => clearInterval(typingInterval);
  }, [isTyping, currentLine, currentChar, textLines]);
  
  return (
    <SectionWrapper 
      id="about" 
      title="About Me" 
      subtitle="PERSONAL DATA // SUBJECT: HET KOTHARI // CLEARANCE LEVEL: AUTHORIZED"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Section3DCard className="mb-8">
            <div className="space-y-6 relative overflow-hidden">
              {/* Animated scan line */}
              <motion.div 
                className="absolute left-0 w-full h-0.5 bg-primary opacity-10 z-0"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-md bg-primary bg-opacity-10 flex items-center justify-center text-primary border border-primary border-opacity-30">
                  <FiUser size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary font-mono">PROFILE_DATA</h3>
                  <div className="h-1 w-16 bg-primary opacity-20 rounded-full mt-1"></div>
                </div>
              </div>
              
              <div ref={textRef} className="font-mono text-sm text-slate-300 space-y-4 min-h-[120px]">
                {displayedText.map((line, index) => (
                  <div key={index} className="flex">
                    <span className="text-primary mr-2">&gt;</span>
                    {line && (
                      <p dangerouslySetInnerHTML={{ __html: getHighlightedText(line) }} />
                    )}
                    {currentLine === index && line !== textLines[index] && (
                      <motion.span 
                        className="inline-block w-2 h-4 bg-primary ml-1"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                    )}
                  </div>
                ))}
                
                {/* Random characters appearing and disappearing for hacking effect */}
                <div className="absolute bottom-4 right-4 text-xs font-mono text-primary opacity-50 flex items-center">
                  <motion.div 
                    className="w-1.5 h-1.5 bg-primary rounded-full mr-1.5"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {isTyping ? "DECRYPTING_DATA..." : "DATA_LOADED"}
                  </motion.span>
                </div>
              </div>
            </div>
          </Section3DCard>
          
          <Section3DCard>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary bg-opacity-10 flex items-center justify-center text-primary border border-primary border-opacity-30">
                  <FiBook size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary font-mono">EDUCATION_LOG</h3>
                  <div className="h-1 w-16 bg-primary opacity-20 rounded-full mt-1"></div>
                </div>
              </div>
              
              <div className="space-y-6 font-mono">
                <motion.div 
                  className="relative pl-8 border-l-2 border-primary border-opacity-30"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary opacity-30 glow-effect"></div>
                  <div className="mb-1">
                    <p className="font-bold text-white text-sm">SVKM'S DWARKADAS J. SANGHVI COLLEGE OF ENGINEERING</p>
                    <p className="text-primary text-xs">COMPUTER ENGINEERING - 8.45 GPA</p>
                    <p className="text-slate-400 text-xs">2023 – 2026 | MUMBAI, INDIA</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative pl-8 border-l-2 border-primary border-opacity-30"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary opacity-30 glow-effect"></div>
                  <div>
                    <p className="font-bold text-white text-sm">SHRI BHAGUBHAI MAFATLAL POLYTECHNIC</p>
                    <p className="text-primary text-xs">COMPUTER ENGINEERING - 92.33%</p>
                    <p className="text-slate-400 text-xs">2020 – 2023 | MUMBAI, INDIA</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </Section3DCard>
        </motion.div>
        
        <motion.div 
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full h-96 md:h-[450px]">
            {/* Animated rings around the 3D model */}
            <div className="absolute inset-0 -m-6 rounded-full border-2 border-primary border-opacity-20 animate-spin-slow"></div>
            <div className="absolute inset-0 -m-12 rounded-full border-2 border-primary border-opacity-10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }}></div>
            
            {/* 3D Model */}
            <SketchfabModel className="relative z-10" />
            
            {/* Status indicators */}
            <div className="absolute -top-4 -left-4 bg-black p-2 rounded-md border border-primary border-opacity-30 z-20">
              <div className="flex items-center space-x-2">
                <FiTerminal className="text-primary" size={14} />
                <span className="text-xs font-mono text-primary">ACTIVE</span>
              </div>
            </div>
            
            {/* Achievement badge */}
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-black p-3 rounded-md border border-primary border-opacity-30 z-20"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiAward size={20} className="text-primary" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About; 