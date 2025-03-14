import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StarBackground from './StarBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <StarBackground />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 