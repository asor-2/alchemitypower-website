import React from 'react';
import PageHero from './PageHero';
import productVideo from './images/product.mov';

// Styles
const styles = {
  container: {
    position: 'relative'
  },
  videoStyle: {
    position: 'absolute',
    top: '-33%',
    right: 0,
    width: '65%',
    height: '160%',
    objectFit: 'contain',
    zIndex: 0
  }
};

function NewsHero() {
  return (
    <div style={styles.container}>
      <PageHero 
        backgroundVideoUrl={productVideo}
        title="News"
        videoStyle={styles.videoStyle}
      />
    </div>
  );
}

export default NewsHero; 