import React, { useRef } from 'react';
import PageHero from './PageHero';

// Import videos
import marketsVideo from './images/markets_video.mov';
import productVideo from './images/product.mov';
import technologyVideo from './images/technology.mov';
import aboutVideo from './images/about.mov';
import careersVideo from './images/careers.mov';
import newsVideo from './images/news.mov';
import contactVideo from './images/contact.mov';

// Import images for Markets hero
import benzene from './images/benzene.png';
import saf from './images/saf.png';
import hydrogen from './images/hydrogen.png';
import syngas from './images/syngas.png';
import biogas from './images/biogas.png';
import ethylene from './images/ethylene.png';
import ethane from './images/ethane.png';

// Styles
const styles = {
  container: {
    position: 'relative'
  },
  // Markets Hero Styles
  marketsHero: {
    heroSection: {
      position: 'relative',
      height: '45vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      textAlign: 'left',
      backgroundColor: '#000000',
      paddingLeft: '5rem',
      overflow: 'hidden'
    },
    title: {
      maxWidth: '35%',
      marginRight: 0,
      paddingRight: '2rem',
      marginLeft: '2rem',
      position: 'absolute',
      left: '15%',
      transform: 'translateX(-50%)',
      textAlign: 'center',
      color: 'white',
      fontSize: '3.5rem',
      fontWeight: 200,
      zIndex: 2
    },
    imageContainer: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '80%',
      height: '120%',
      overflow: 'hidden',
      clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 20% 100%)',
      zIndex: 1,
      marginTop: '-29px',
      display: 'flex',
      alignItems: 'center'
    },
    slidingContainer: {
      display: 'flex',
      gap: 0,
      animation: 'slide 55s linear infinite',
      alignItems: 'center',
      margin: 0,
      padding: '0 2rem',
      width: 'max-content',
      height: '100%',
      transform: 'translateX(0)'
    },
    imageWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: 0,
      marginTop: '40px',
      paddingBottom: '40px',
      flexShrink: 0
    },
    image: {
      width: '360px',
      height: '360px',
      objectFit: 'contain',
      flexShrink: 0,
      marginBottom: '0.5rem',
      opacity: 1
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1
    }
  },
  // Products Hero Styles
  productsHero: {
    videoStyle: {
      width: '55%',
      clipPath: 'none',
      top: 0,
      height: '100%',
      objectFit: 'contain',
      right: '5%',
      left: 'auto'
    }
  },
  // Technology Hero Styles
  technologyHero: {
    videoStyle: {
      width: '55%',
      clipPath: 'none',
      top: 0,
      height: '100%',
      objectFit: 'contain',
      right: '5%',
      left: 'auto'
    }
  },
  // About Hero Styles
  aboutHero: {
    videoStyle: {
      width: '100%',
      clipPath: 'none',
      top: 0,
      height: '100%',
      objectFit: 'cover',
      right: 0,
      left: 0
    }
  },
  // Careers Hero Styles
  careersHero: {
    videoStyle: {
      width: '55%',
      clipPath: 'none',
      top: 0,
      height: '100%',
      objectFit: 'contain',
      right: '5%',
      left: 'auto'
    },
    titleStyle: {
      position: 'absolute',
      left: '15%',
      top: '50%',
      transform: 'translateY(-50%)',
      textAlign: 'left',
      color: 'white',
      fontSize: '3.5rem',
      fontWeight: 200,
      zIndex: 2,
      margin: 0,
      padding: 0,
      maxWidth: '35%',
      marginRight: 0,
      paddingRight: '2rem',
      marginLeft: '2rem',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    }
  },
  // News Hero Styles
  newsHero: {
    videoStyle: {
      position: 'absolute',
      top: '-33%',
      right: 0,
      width: '65%',
      height: '160%',
      objectFit: 'contain',
      zIndex: 0
    }
  },
  // Contact Hero Styles
  contactHero: {
    videoStyle: {
      width: '65%',
      clipPath: 'none',
      top: '-20%',
      height: '140%',
      objectFit: 'cover',
      right: 0
    }
  }
};

// Keyframes animation for Markets hero
const keyframes = `
  @keyframes slide {
    0% {
      transform: translateX(-11.33%);
    }
    100% {
      transform: translateX(-83.33%);
    }
  }
`;

// Markets Hero Component
function MarketsHero() {
  const images = [
    { src: ethane, title: 'Ethane' },
    { src: benzene, title: 'Benzene' },
    { src: saf, title: 'SAF' },
    { src: hydrogen, title: 'Hydrogen' },
    { src: syngas, title: 'Syngas' },
    { src: biogas, title: 'RNG, Biogas' },
    { src: ethylene, title: 'Ethylene' }
  ];

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.container}>
        <section style={styles.marketsHero.heroSection}>
          <h1 style={styles.marketsHero.title}>Markets</h1>
          <div style={styles.marketsHero.overlay}></div>
        </section>
        <div style={styles.marketsHero.imageContainer}>
          <div style={styles.marketsHero.slidingContainer}>
            {images.map((image, index) => (
              <div key={index} style={styles.marketsHero.imageWrapper}>
                <img
                  src={image.src}
                  alt={image.title}
                  style={styles.marketsHero.image}
                />
              </div>
            ))}
            {images.map((image, index) => (
              <div key={`duplicate-${index}`} style={styles.marketsHero.imageWrapper}>
                <img
                  src={image.src}
                  alt={image.title}
                  style={styles.marketsHero.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Products Hero Component
function ProductsHero() {
  const videoRef = useRef(null);
  return (
    <div style={styles.container}>
      <PageHero 
        backgroundVideoUrl={productVideo}
        title="Products"
        videoStyle={styles.productsHero.videoStyle}
        videoRef={videoRef}
      />
    </div>
  );
}

// Technology Hero Component
function TechnologyHero() {
  const videoRef = useRef(null);
  return (
    <div style={styles.container}>
      <PageHero 
        backgroundVideoUrl={technologyVideo}
        title="Technology"
        videoStyle={styles.technologyHero.videoStyle}
        videoRef={videoRef}
      />
    </div>
  );
}

// About Hero Component
function AboutHero() {
  return (
    <div style={styles.container}>
      <PageHero 
        backgroundVideoUrl={aboutVideo}
        title="About Us"
        videoStyle={styles.aboutHero.videoStyle}
      />
    </div>
  );
}

// Careers Hero Component
function CareersHero() {
  const videoRef = useRef(null);
  return (
    <div style={styles.container}>
      <PageHero 
        backgroundVideoUrl={careersVideo}
        title=""
        videoStyle={styles.careersHero.videoStyle}
        videoRef={videoRef}
      />
    </div>
  );
}

// News Hero Component
function NewsHero() {
  return (
    <div style={styles.container}>
      <PageHero 
        backgroundVideoUrl={newsVideo}
        title="News"
        videoStyle={styles.newsHero.videoStyle}
      />
    </div>
  );
}

// Contact Hero Component
function ContactHero() {
  return (
    <div style={styles.container}>
      <PageHero 
        backgroundVideoUrl={contactVideo}
        title="Contact Us"
        videoStyle={styles.contactHero.videoStyle}
      />
    </div>
  );
}

export {
  MarketsHero,
  ProductsHero,
  TechnologyHero,
  AboutHero,
  CareersHero,
  NewsHero,
  ContactHero
}; 