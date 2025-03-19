import React, { ReactNode, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StarBackground from './StarBackground';
import CustomCursor from './CustomCursor';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    // Set viewport height for mobile browsers (fixes iOS height issues)
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Initial setup
    setVh();

    // Set up resize event listener
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col relative" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
      <StarBackground />
      <CustomCursor />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 