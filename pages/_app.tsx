import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';

function MyApp({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate minimum loading time to ensure the loading screen is visible
    const minLoadingTime = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds minimum loading time
    
    return () => clearTimeout(minLoadingTime);
  }, []);
  
  return (
    <React.Fragment>
      <Head>
        <title>Het Kothari - Portfolio</title>
        <meta name="description" content="Het Kothari's personal portfolio website showcasing skills, projects, and experience in software development, data analysis, and AI." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      {loading ? (
        <LoadingScreen finishLoading={() => setLoading(false)} />
      ) : (
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0
            },
            pageAnimate: {
              opacity: 1
            }
          }}
          transition={{ duration: 0.3 }}
        >
          <Component {...pageProps} />
        </motion.div>
      )}
    </React.Fragment>
  );
}

export default MyApp; 