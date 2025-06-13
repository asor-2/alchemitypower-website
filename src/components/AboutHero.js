import React from 'react';
import aboutVideo from './images/about_video.mov';

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

function AboutHero() {
  return (
    <div style={styles.container}>
      <section style={styles.heroSection}>
        <h1 style={styles.title}>About Us</h1>
        <video 
          autoPlay
          muted 
          loop
          playsInline
          style={styles.video}
        >
          <source src={aboutVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
}

export default AboutHero; 