import React, { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import styles from './Contact.module.css';
import careersStyles from './Careers.module.css';
import PageHero from '../components/PageHero';
import CareersHero from '../components/CareersHero';
import careersVideo from '../components/images/careers.mov';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import SEO from '../components/SEO/SEO';
import { seoData } from '../config/seoConfig';

const ContactButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: #25abe0;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  cursor: pointer;
  width: fit-content;
  min-width: 200px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.7s ease;
  }

  &:hover {
    background-color: #0077b5;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
  }

  &:hover::before {
    left: 100%;
  }
`;

function Careers() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const videoStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0
  };

  return (
    <>
      <SEO
        title={seoData.careers.title}
        description={seoData.careers.description}
        keywords={seoData.careers.keywords}
        image={seoData.careers.image}
        url="/careers"
      />
      <div style={{ position: 'relative' }}>
        {isLargeScreen ? (
          <CareersHero />
        ) : (
          <PageHero 
            title="Careers"
            style={{ marginTop: '-300px' }}
            videoStyle={videoStyle}
            backgroundVideoUrl={careersVideo}
          />
        )}
      </div>
      <div className={styles.contactPage}>
        <div className={styles.contentWrapper}>
          <div className={styles.contactInfo}>
            <h2 style={{ 
              fontSize: '40px',
              color: '#25abe0',
              fontWeight: '500'
            }}>
              We're Hiring!
            </h2>
            <p style={{ 
              color: '#ffffff',
              fontSize: '1.2rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              maxWidth: '800px'
            }}>
              If you're interested in one of our open positions, start by applying here and attaching your resume.
            </p>
          </div>
          <div className={styles.formWrapper}>
            <ContactForm isCareers={true} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers;