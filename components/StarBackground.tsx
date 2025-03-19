import React, { useEffect, useState } from 'react';

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<{ id: number; style: React.CSSProperties }[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile for performance optimization
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Run initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Create stars based on device capability
    const starCount = isMobile ? 30 : 50;
    const newStars = [];
    
    for (let i = 0; i < starCount; i++) {
      const randomSize = Math.random() * 2 + 1;
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      const randomDelay = Math.random() * 3;
      const randomDuration = Math.random() * 2 + 2;
      
      newStars.push({
        id: i,
        style: {
          width: `${randomSize}px`,
          height: `${randomSize}px`,
          left: `${randomX}%`,
          top: `${randomY}%`,
          animationDelay: `${randomDelay}s`,
          animationDuration: `${randomDuration}s`
        }
      });
    }
    
    setStars(newStars);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);
  
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={star.style}
        />
      ))}
    </div>
  );
};

export default StarBackground; 