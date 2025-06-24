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

  const PageWrapper = styled.div`
    width: 100%;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    min-height: 100vh;
    overflow: hidden;
    position: relative;
  `;

  return (
    <>
      <SEO
        title={seoData.careers.title}
        description={seoData.careers.description}
        keywords={seoData.careers.keywords}
        image={seoData.careers.image}
        url="/careers"
      />
      <PageWrapper style={{
        background: 'linear-gradient(-125deg, #000000, #23403F)',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        paddingBottom: '4rem'
      }}>
        {/* Bold, branded hero section */}
        <div style={{
          padding: '3.5rem 2rem 2rem',
          textAlign: 'center',
          position: 'relative',
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '1rem',
            letterSpacing: '-0.03em',
            maxWidth: '1200px',
            margin: '0 auto 1rem'
          }}>
            <span>We're </span>
            <span style={{ 
              background: 'linear-gradient(130deg, #25abe0 15%, #50918d)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              Building the Future
            </span>
            <span> of Clean Energy</span>
          </h1>
          <p style={{
            fontSize: '1.5rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '700px',
            margin: '0 auto 1.5rem',
            lineHeight: '1.6'
          }}>
            And we're looking for curious, mission-driven people to help.
          </p>
          
          {/* LINE DIVIDER */}
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '2.5rem auto',
            height: '1.5px',
            background: 'linear-gradient(to right, transparent, rgba(37, 171, 224, 0.3), transparent)',
          }}></div>
        </div>
        
        {/* Why Work Here Section */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto 3rem',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '2.5rem',
            fontWeight: '400'
          }}>
            Why Work at Alchemity
          </h2>
          

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem'
          }}>
            {[
              { icon: '🚀', title: 'Small team, real impact', desc: 'Your work directly shapes our technology and future.' },
              { icon: '🌎', title: 'Tech that matters', desc: 'Build solutions for real climate and energy challenges.' },
              { icon: '💡', title: 'Backed by science', desc: 'Join a team with deep technical expertise and innovative vision.' },
              { icon: '🤝', title: 'Flexible culture', desc: 'Work with a collaborative team focused on outcomes, not hours.' }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(37, 171, 224, 0.3)'
                }}
                transition={{ duration: 0.3 }}
                style={{
                  flex: '1 1 250px',
                  maxWidth: '300px',
                  backgroundColor: 'rgba(31, 42, 48, 0.7)',
                  borderRadius: '12px',
                  padding: '2rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Accent line at top */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, #25abe0, transparent)',
                }}></div>
                
                {/* Glowing icon container */}
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1.25rem',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(37, 171, 224, 0.1)',
                  borderRadius: '50%',
                  boxShadow: '0 0 15px rgba(37, 171, 224, 0.4)',
                  border: '1px solid rgba(37, 171, 224, 0.3)'
                }}>
                  {item.icon}
                </div>
                
                {/* Gradient heading */}
                <h3 style={{ 
                  marginBottom: '0.75rem', 
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  background: 'linear-gradient(90deg, #25abe0, #ffffff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}>
                  {item.title}
                </h3>
                
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  fontSize: '1.1rem',
                  lineHeight: '1.6'
                }}>
                  {item.desc}
                </p>
                
                {/* Subtle bottom accent */}
                <div style={{
                  position: 'absolute',
                  bottom: '15px',
                  right: '15px',
                  fontSize: '14px',
                  opacity: 0.4,
                  color: '#25abe0'
                }}>
                  →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Team Image Carousel */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto 3rem',
          padding: '0 2rem'
        }}>
          <div style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '1rem',
            padding: '1rem 0',
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE/Edge
            '::-webkit-scrollbar': { display: 'none' } // Chrome/Safari
          }}>
            {/* Replace with actual team images */}
            {[1, 2, 3, 4].map(img => (
              <div key={img} style={{
                minWidth: '300px',
                height: '200px',
                backgroundColor: 'rgba(31, 42, 48, 0.7)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#25abe0',
                fontSize: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                flexShrink: 0
              }}>
                Team Photo {img}
                {/* Replace with: <img src={teamImage{img}} alt="Alchemity team" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} /> */}
              </div>
            ))}
          </div>
        </div>
        
        {/* LINE DIVIDER */}
        <div style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '2.5rem auto',
            height: '1.5px',
            background: 'linear-gradient(to right, transparent, rgba(37, 171, 224, 0.3), transparent)',
          }}></div>


        {/* Improved Open Positions Section */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto 3rem',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#25abe0',
            textAlign: 'center',
            marginBottom: '1.5rem',
            fontWeight: '400'
          }}>
            Open Positions
          </h2>
          
          <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.2rem',
            lineHeight: '1.6',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            We're always looking for exceptional people in engineering, product, and operations—even if no role is listed.
          </p>
          
          {/* Example position cards - you can make these real or remove them */}
          {/* <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem'
          }}>
            {[
              { title: 'Process Engineer', type: 'Full-time' },
              { title: 'Research Scientist', type: 'Full-time' }
            ].map((job, index) => (
              <div key={index} style={{
                flex: '1 1 250px',
                maxWidth: '350px',
                backgroundColor: 'rgba(31, 42, 48, 0.7)',
                borderRadius: '8px',
                padding: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
              }}>
                <div>
                  <h3 style={{ color: '#25abe0', marginBottom: '0.5rem', fontSize: '1.2rem' }}>{job.title}</h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>{job.type}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* LINE DIVIDER */}
        <div style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '2.5rem auto',
            height: '1.5px',
            background: 'linear-gradient(to right, transparent, rgba(37, 171, 224, 0.3), transparent)',
          }}></div>
        
        {/* Application Form Section - full width, no columns */}
        <div style={{ 
          backgroundColor: 'transparent', 
          background: 'transparent',
          padding: '0 2rem 2rem', // Added horizontal padding
          maxWidth: '1200px',
          margin: '0 auto',
          boxSizing: 'border-box' 
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '1.5rem',
            fontWeight: '400'
          }}>
            Apply Now
          </h2>
          
          <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.2rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <strong>Note:</strong> Please include a Google Drive link to your resume and make sure it's set to "Anyone with the link can view."
          </p>
          
          <div style={{
            backgroundColor: 'rgba(31, 42, 48, 0.7)',
            borderRadius: '12px',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            maxWidth: '1100px', // Control inner container width
            margin: '0 auto'
          }}>
            <ContactForm isCareers={true} />
          </div>
        </div>
      </PageWrapper>
    </>
  );
}

export default Careers;