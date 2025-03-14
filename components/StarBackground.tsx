import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const StarBackground: React.FC = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!starsRef.current) return;
    
    const container = starsRef.current;
    const stars: Star[] = [];
    const starCount = 150;
    
    // Clear any existing stars
    container.innerHTML = '';
    
    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star: Star = {
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5
      };
      
      stars.push(star);
      
      const starElement = document.createElement('div');
      starElement.className = 'star';
      starElement.style.left = `${star.x}%`;
      starElement.style.top = `${star.y}%`;
      starElement.style.width = `${star.size}px`;
      starElement.style.height = `${star.size}px`;
      starElement.style.setProperty('--duration', `${star.duration}s`);
      starElement.style.setProperty('--delay', `${star.delay}s`);
      
      container.appendChild(starElement);
    }
    
    return () => {
      container.innerHTML = '';
    };
  }, []);
  
  return <div ref={starsRef} className="stars" />;
};

export default StarBackground; 