import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Sponsors.module.css';
import czeroIMAGE from './images/Czero transparent logo black-white.png';
import breakthroughIMAGE from './images/BEF logo.png';
import shell from './images/shell.png';
import arpa from './images/arpa.png';
import cdl from './images/pink-black.png';
import mdCommerce from './images/maryland department of commerce 1.png';
import blackbird from './images/UdjB0gJC7Sq6SzCNtP5aVs2Hjaj1699957670569_200x200.png';
import rec from './images/REC logo- higher quality.png';
import districtAngels from './images/da-logo-mark.png';
import tedco from './images/tedco.png';
import mmf from './images/thumbnail-1-1024x332.png';
import discoveryFund from './images/Discovery Fund logo.png';

function Sponsors() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollerRef = useRef(null);
  const [scrollerWidth, setScrollerWidth] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Define sponsors only once
  //maryland energy innovation accelerator, Shell Game Changer, Tedco, ARPAE, MII, MEII
  const sponsors = [
    { name: "Breakthrough Energy", logo: breakthroughIMAGE, id: 1 },
    { name: "Shell Game Changer", logo: shell, id: 2 },
    { name: "ARPA-E", logo: arpa, id: 3 },
    { name: "Creative Destruction Lab", logo: cdl, id: 4, lighten: true },
    { name: "MD Department of Commerce", logo: mdCommerce, id: 5, lighten: true, height: "155px" },
    { name: "Blackbird Laboratories", logo: blackbird, id: 6, lighten: true, big: true },
    { name: "Resilient Earth Capital", logo: rec, id: 7 },
    { name: "District Angels", logo: districtAngels, id: 8 },
    { name: "TEDCO", logo: tedco, id: 9 },
    { name: "MMF", logo: mmf, id: 10, lighten: true },
    { name: "Discovery Fund", logo: discoveryFund, id: 11, lighten: true },
    { name: "Czero", logo: czeroIMAGE, id: 12, lighten: true },
  ];
  
  // Create doubled array for seamless scrolling
  const allSponsors = [...sponsors, ...sponsors, ...sponsors];
  
  // Manage scroller initialization after images load
  useEffect(() => {
    let loadedImages = 0;
    const totalImages = sponsors.length;
    
    const handleImageLoad = () => {
      loadedImages += 1;
      if (loadedImages === totalImages && scrollerRef.current) {
        setIsLoaded(true);
        const width = scrollerRef.current.scrollWidth / 3;
        setScrollerWidth(width);
      }
    };
    
    // Preload images to get accurate dimensions
    sponsors.forEach(sponsor => {
      const img = new Image();
      img.src = sponsor.logo;
      img.onload = handleImageLoad;
    });
    
    return () => {
      // Clean up any event listeners if needed
    };
  }, [sponsors]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.sponsorsSection} ref={ref}>
      <div className={styles.backgroundPattern}></div>
      
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 
          className={styles.sponsorsTitle}
          variants={itemVariants}
        >
          Our Sponsors
        </motion.h2>
        
        <motion.p 
          className={styles.description}
          variants={itemVariants}
        >
          Revolutionizing beyond-net-zero chemicals & fuels production requires a strong ecosystem.
        </motion.p>
        
        <motion.div 
          className={styles.sponsorsCarousel}
          variants={itemVariants}
        >
          <div className={styles.carouselContainer}>
            <div 
              ref={scrollerRef}
              className={styles.carouselScroller}
              style={{
                '--sponsor-width': `${scrollerWidth}px`,
                '--animation-status': isLoaded ? 'running' : 'paused'
              }}
            >
              {allSponsors.map((sponsor, index) => (
                <div 
                  key={`${sponsor.id}-${index}`}
                  className={styles.sponsorCard}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className={`${styles.sponsorLogo} ${sponsor.lighten ? styles.lighten : ''} ${sponsor.big ? styles.bigger : ''}`}
                    style={sponsor.height ? { height: sponsor.height } : undefined}
                    loading={index < 5 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Sponsors;