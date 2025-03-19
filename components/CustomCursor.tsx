import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    const checkMobileDevice = () => {
      const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      return mobileRegex.test(userAgent) || window.innerWidth <= 768;
    };

    const handleResize = () => {
      setIsMobileDevice(checkMobileDevice());
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    // Only set up cursor effects for non-mobile devices
    if (!isMobileDevice) {
      document.documentElement.classList.add('custom-cursor-active');

      const moveCursor = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        
        if (!isVisible) {
          setIsVisible(true);
        }
      };

      const handleMouseDown = () => setIsClicking(true);
      const handleMouseUp = () => setIsClicking(false);

      const handleMouseEnter = () => setIsVisible(true);
      const handleMouseLeave = () => setIsVisible(false);

      // Handle hoverable elements
      const handleElementMouseEnter = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (
          target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.classList.contains('hoverable') ||
          target.closest('button') || 
          target.closest('a') || 
          target.closest('.hoverable')
        ) {
          setIsHovering(true);
        }
      };

      const handleElementMouseLeave = () => {
        setIsHovering(false);
      };

      document.addEventListener('mousemove', moveCursor);
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseover', handleElementMouseEnter);
      document.addEventListener('mouseout', handleElementMouseLeave);

      return () => {
        document.documentElement.classList.remove('custom-cursor-active');
        document.removeEventListener('mousemove', moveCursor);
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mouseenter', handleMouseEnter);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseover', handleElementMouseEnter);
        document.removeEventListener('mouseout', handleElementMouseLeave);
        window.removeEventListener('resize', handleResize);
      };
    } else {
      // Make sure to remove custom-cursor-active if device becomes mobile
      document.documentElement.classList.remove('custom-cursor-active');
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isVisible, isMobileDevice]);

  // Don't render the cursor on mobile devices
  if (isMobileDevice) return null;

  return (
    <>
      <div
        className={`custom-cursor-outer ${isClicking ? 'cursor-click' : ''} ${isHovering ? 'cursor-hover' : ''} ${!isVisible ? 'cursor-hidden' : ''}`}
        style={{
          transform: `translate(${position.x - 15}px, ${position.y - 15}px)`,
        }}
      />
      <div
        className={`custom-cursor-inner ${isClicking ? 'cursor-click' : ''} ${isHovering ? 'cursor-hover' : ''} ${!isVisible ? 'cursor-hidden' : ''}`}
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor; 