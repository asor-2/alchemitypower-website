import React, { useEffect, useState } from 'react';
import marketsVideo from './images/markets_video.mov';

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
    justifyContent: 'flex-end',
    textAlign: 'left',
    backgroundColor: '#000000',
    overflow: 'hidden'
  },
  title: {
    position: 'absolute',
    left: '8%',
    top: '50%',
    transform: 'translateY(-50%)',
    textAlign: 'left',
    color: 'white',
    fontSize: '3rem',
    fontWeight: '300',
    zIndex: 3,
    width: 'auto',
    maxWidth: '25%',
    margin: 0,
    padding: 0,
    textShadow: '0 0 20px rgba(37, 171, 224, 0.8)'
  },
  video: {
    width: '65%',
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    left: 'auto',
    objectFit: 'cover',
    objectPosition: 'left center',
    clipPath: 'none',
    marginLeft: 'auto',
    maxWidth: '65%',
    transform: 'none',
    zIndex: 1
  }
};

function MarketsHero() {
  const [titleStyle, setTitleStyle] = useState(styles.title);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 2800) {
        setTitleStyle({
          ...styles.title,
          left: '14%'
        });
      } else if (window.innerWidth >= 1500) {
        setTitleStyle({
          ...styles.title,
          left: '12%'
        });
      } else {
        setTitleStyle(styles.title);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles.container}>
      <section style={styles.heroSection}>
        <h1 style={titleStyle}>Markets</h1>
        <video 
          autoPlay
          muted 
          loop
          playsInline
          style={styles.video}
        >
          <source src={marketsVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
}

export default MarketsHero; 