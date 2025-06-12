import React from 'react';
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
};

// Keyframes animation
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

function MarketsHero() {
  const images = [
    { src: ethane, title: 'Ethane' },
    { src: benzene, title: 'Benzene' },
    { src: saf, title: 'SAF' },
    { src: hydrogen, title: 'Hydrogen' },
    { src: syngas, title: 'Syngas' },
    { src: biogas, title: 'RNG, Biogas' },
    { src: ethylene, title: 'Ethylene' },
    
  ];

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.container}>
        <section style={styles.heroSection}>
          <h1 style={styles.title}>Markets</h1>
          <div style={styles.overlay}></div>
        </section>
        <div style={styles.imageContainer}>
          <div style={styles.slidingContainer}>
            {images.map((image, index) => (
              <div key={index} style={styles.imageWrapper}>
                <img
                  src={image.src}
                  alt={image.title}
                  style={styles.image}
                />
              </div>
            ))}
            {images.map((image, index) => (
              <div key={`duplicate-${index}`} style={styles.imageWrapper}>
                <img
                  src={image.src}
                  alt={image.title}
                  style={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketsHero; 