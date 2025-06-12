import React from 'react';
import PageHero from './PageHero';
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
  heroCarouselStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '80%',
    height: '120%',
    overflow: 'hidden',
    clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 20% 100%)',
    zIndex: 0,
    marginTop: '-29px',
    display: 'flex',
    alignItems: 'center'
  },
  heroCarouselTrackStyle: {
    display: 'flex',
    gap: '0',
    animation: 'slide 40s linear infinite',
    alignItems: 'center',
    margin: 0,
    padding: '0 2rem',
    width: 'max-content',
    height: '100%'
  },
  heroImageContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: '0',
    marginTop: '40px',
    paddingBottom: '40px'
  },
  heroCarouselImageStyle: {
    width: '300px',
    height: '300px',
    objectFit: 'contain',
    flexShrink: 0,
    marginBottom: '0.5rem',
    opacity: 1
  },
  heroImageTitleStyle: {
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '0',
    whiteSpace: 'nowrap'
  }
};

// Keyframes animation
const keyframes = `
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

function MarketsHero() {
  const heroImages = [
    { src: benzene, title: 'Benzene' },
    { src: saf, title: 'SAF' },
    { src: hydrogen, title: 'Hydrogen' },
    { src: syngas, title: 'Syngas' },
    { src: biogas, title: 'RNG, Biogas' },
    { src: ethylene, title: 'Ethylene' },
    { src: ethane, title: 'Ethane' }
  ];

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.container}>
        <PageHero 
          title="Markets"
          style={{ marginTop: '-300px' }}
        />
        <div style={styles.heroCarouselStyle}>
          <div style={styles.heroCarouselTrackStyle}>
            {heroImages.map((item, index) => (
              <div key={index} style={styles.heroImageContainerStyle}>
                <img
                  src={item.src}
                  alt={item.title}
                  style={styles.heroCarouselImageStyle}
                />
                <p style={styles.heroImageTitleStyle}>{item.title}</p>
              </div>
            ))}
            {heroImages.map((item, index) => (
              <div key={`duplicate-${index}`} style={styles.heroImageContainerStyle}>
                <img
                  src={item.src}
                  alt={item.title}
                  style={styles.heroCarouselImageStyle}
                />
                <p style={styles.heroImageTitleStyle}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketsHero; 