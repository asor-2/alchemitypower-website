import React from 'react';
import PageHero from './PageHero';
import careersVideo from './images/careers.mov';

// Styles
const styles = {
  container: {
    position: 'relative'
  },
  videoStyle: {
    width: '65%',
    clipPath: 'none',
    top: '-20%',
    height: '140%',
    objectFit: 'cover',
    right: 0
  }
};

function CareersHero() {
  return (
    <div style={styles.container}>
      <PageHero 
        backgroundVideoUrl={careersVideo}
        title="Careers"
        videoStyle={styles.videoStyle}
      />
    </div>
  );
}

export default CareersHero; 