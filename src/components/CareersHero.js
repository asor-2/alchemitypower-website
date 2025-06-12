import React, { useRef } from 'react';
import PageHero from './PageHero';
import careersVideo from './images/careers.mov';

// Styles
const styles = {
  container: {
    position: 'relative'
  },
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
    marginLeft: '2rem'
  }
};

function CareersHero() {
  const videoRef = useRef(null);

  return (
    <div style={styles.container}>
      <PageHero 
        backgroundVideoUrl={careersVideo}
        title="Careers"
        videoStyle={styles.videoStyle}
        videoRef={videoRef}
        titleStyle={styles.titleStyle}
      />
    </div>
  );
}

export default CareersHero; 