import React from 'react';
import styles from './PageHero.module.css';

function PageHero({ title, backgroundImageUrl, backgroundVideoUrl, videoRef, videoStyle, titleStyle }) {
  const sectionClass = (title === 'About Us' || title === 'Markets' || title === 'Technology' || title === 'Careers' || title === 'Contact Us' || title === 'Products' || title === 'News') ? styles.aboutHeroSection : styles.heroSection;
  const pageType = title === 'Markets' ? 'markets' : 
                  title === 'About Us' ? 'about' : 
                  title === 'Technology' ? 'technology' : 
                  title === 'Products' ? 'products' :
                  title === 'News' ? 'news' :
                  title === 'Careers' ? 'careers' :
                  title === 'Contact Us' ? 'contact' : '';

  // Only add ref and remove loop for Technology and Products pages
  const shouldUseRef = title === 'Technology' || title === 'Products';
  const shouldLoop = !shouldUseRef;

  return (
    <section className={sectionClass} data-page={pageType}>
      {backgroundVideoUrl ? (
        <video 
          ref={shouldUseRef ? videoRef : null}
          autoPlay
          muted 
          loop={shouldLoop}
          playsInline
          className={styles.backgroundVideo}
          style={videoStyle}
        >
          <source src={backgroundVideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : backgroundImageUrl ? (
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper} style={{ backgroundImage: `url(${backgroundImageUrl})` }} />
          <div className={styles.imageWrapper} style={{ backgroundImage: `url(${backgroundImageUrl})` }} />
        </div>
      ) : null}
      <div className={styles.overlay}></div>
      <h1 className={styles.title} style={titleStyle}>
        {title === 'Products' ? (
          <>
            Product<span style={{ color: '#000000' }}>s</span>
          </>
        ) : (
          title
        )}
      </h1>
    </section>
  );
}

export default PageHero;