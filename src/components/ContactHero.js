import React from 'react';
import PageHero from './PageHero';
import contactVideo from './images/contact.mov';

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

function ContactHero() {
  return (
    <div style={styles.container}>
      <PageHero 
        backgroundVideoUrl={contactVideo}
        title="Contact Us"
        videoStyle={styles.videoStyle}
      />
    </div>
  );
}

export default ContactHero; 