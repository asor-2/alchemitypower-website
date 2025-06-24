import React, { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm1';
import styles from './Contact.module.css';
import SEO from '../components/SEO/SEO';
import { seoData } from '../config/seoConfig';

function Contact() {
  const linkedInUrl = 'https://www.linkedin.com/company/alchemity/';
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  // Handle window resize for responsive hero section
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <SEO
        title={seoData.contact.title}
        description={seoData.contact.description}
        keywords={seoData.contact.keywords}
        image={seoData.contact.image}
        url="/contact"
      />
      <div style={{
        background: 'linear-gradient(-135deg, #000000, #1A3A4A)',
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
          <span style={{ 
            background: 'linear-gradient(150deg, #25abe0, #C0DBED)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            Talk
          </span>
          <span> to Us</span>

          </h1>
          <p style={{
            fontSize: '1.5rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '700px',
            margin: '0 auto 1.5rem',
            lineHeight: '1.6'
          }}>
            Interested to invest? Have questions about pre-ordering our 
            system or a general inquiry about our technology, products or interested in learning more? 
            Fill out the form below.
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
        
        <div className={styles.contactPage} style={{ 
          backgroundColor: 'transparent', 
          background: 'transparent',
          padding: '3rem 0 2rem' 
        }}>
          <div className={styles.contentWrapper} style={{ gap: '3rem' }}>
            {/* Left column - completely redesigned */}
            <div className={styles.contactInfo} style={{
              // backgroundColor: 'rgba(31, 42, 48, 0.7)',
              borderRadius: '12px',
              padding: '2.5rem',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
            }}>
              {/* <h2 style={{ 
                fontSize: '2.5rem',
                color: '#ffffff',
                fontWeight: '300',
                marginBottom: '2rem',
                letterSpacing: '-0.02em'
              }}>
                Talk to Us
              </h2> */}
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                marginBottom: '2.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ color: '#25abe0', fontSize: '1.5rem', marginTop: '0.2rem' }}>📍</div>
                  <div>
                    <h3 style={{ color: '#25abe0', marginBottom: '0.5rem', fontSize: '1.5rem' }}>Address</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.7', fontSize: '1.2rem'}}>
                      4467 Technology Drive<br/>
                      Alchemity LLC, Suite 2116<br/>
                      College Park, MD 20742
                    </p>
                    <a href="https://maps.app.goo.gl/Z6SbocEcZ1GCuCvF7" target="_blank" rel="noopener noreferrer" style={{ 
                      color: '#25abe0', 
                      display: 'inline-block', 
                      marginTop: '0.5rem',
                      fontSize: '1rem',
                      fontWeight: '500'
                    }}>
                      Get Directions →
                    </a>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginTop: '0.8rem' }}>
                  <div style={{ color: '#25abe0', fontSize: '1.5rem', }}>🔗</div>
                  <div>
                    <h3 style={{ color: '#25abe0', marginBottom: '0.5rem', fontSize: '1.5rem' }}>Connect</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.7', marginBottom: '1rem', fontSize: '1.2rem' }}>
                      Follow our journey in clean chemical innovation
                    </p>
                  </div>
                </div>
              </div>
              
              <a 
                href={linkedInUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  backgroundColor: '#0077b5',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  width: '80%',
                  marginTop: '1rem',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span>Connect with us on LinkedIn</span>
              </a>
            </div>
            
            {/* Right column - redesigned form container */}
            <div className={styles.formWrapper} style={{
              backgroundColor: 'rgba(31, 42, 48, 0.7)',
              borderRadius: '12px',
              padding: '2.5rem',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem',
                color: '#ffffff',
                fontWeight: '400',
                marginBottom: '1.5rem',
                textAlign: 'left'
              }}>Send a Message</h3>
              
              <ContactForm isCareers={false} />
            </div>
          </div>
        </div>
        
        {/* Diagonal accent at bottom */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '5px',
          background: 'linear-gradient(to-bottom, transparent, rgba(37, 171, 224, 0.3), transparent)'
        }}></div>
      </div>
    </>
  );
}

export default Contact;