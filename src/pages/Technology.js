import React, { useState, useRef, useEffect } from 'react';
import PageHero from '../components/PageHero';
import Modal from '../components/Modal';
import rd from '../components/images/rd.png';
import validated from '../components/images/ExtEval.png';
import scalable from '../components/images/scalable.png';
import graph1 from '../components/images/graph1.png';
import graph2 from '../components/images/graph2.png';
import animationTech from '../components/images/techanim.mov';
import herotech from '../components/images/headeranim.mov';
import platform from '../components/images/platform.png';
import styles from '../components/ProfileCard.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import reactionanima from '../components/images/reactionanima.mov';
import styles1 from './Technology.module.css';

import SEO from '../components/SEO/SEO';
import { seoData } from '../config/seoConfig';

import styled from 'styled-components';

// Main colors
const colors = {
  background: 'linear-gradient(135deg, #000000 0%, #223F3E 80%)', // Keep your required color
  primary: '#25abe0', // Signature blue
  secondary: '#CFDDD0', // Light mint
  accent: '#FFEBCA', // Beige accent
  text: '#ffffff',
  textDark: '#203238'
};

const responsiveModalContentStyle = {
  display: 'flex',
  gap: '2rem',
  alignItems: 'flex-start',
  width: '100%',
  maxWidth: '3000px',
  margin: '0 auto',
  padding: '0',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '1rem'
  }
};

const responsiveModalColumnStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  '@media (max-width: 768px)': {
    width: '100% !important'  // Override any inline width
  }
};

const responsiveTextStyle = {
  fontSize: '18px',
  lineHeight: '1.6',
  '@media (max-width: 768px)': {
    fontSize: '16px',
    lineHeight: '1.4',
    marginTop: '1rem'
  },
  '@media (max-width: 480px)': {
    fontSize: '14px',
    lineHeight: '1.3'
  }
};


const sectionStyle = {
  padding: 'var(--section-padding)',
  margin: '0 auto',
  // backgroundColor: 'linear-gradient(to bottom, #000000, #244141) !important',
  textAlign: 'left',
  '@media (max-width: 1024px)': {
    paddingTop: '0',
    marginTop: '-2rem'
  }
};

const titleStyle = {
  fontSize: '40px',
  color: '#25abe0',
  marginBottom: '3rem',
  textAlign: 'center',
  fontWeight: '500',
};

const cardStyle = {
  background: '#000000',
  padding: '1.5rem 1.5rem 1rem 1.5rem',
  borderRadius: '8px',
  color: '#ffffff',
  transition: 'all 0.3s ease',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',

  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 0 20px rgba(37, 171, 224, 0.6)',
  }
};

const cardTitleStyle = {
  fontSize: '1.7rem',
  fontWeight: '600',
  color: '#25abe0',
  marginBottom: '1rem',
  textAlign: 'center',
  minHeight: '4.4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
};

const imageContainerStyle = {
  width: '100%',
  height: '250px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1rem',
  backgroundColor: 'transparent',
  overflow: 'hidden',
  position: 'relative'
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  backgroundColor: 'transparent',
  position: 'absolute',
  top: 0,
  left: 0
};

const rdImageStyle = {
  ...imageStyle,
  objectPosition: 'center 30%',
  objectFit: 'cover',
};

const cardTextStyle = {
  color: '#ffffff',
  fontSize: '1.4rem',
  lineHeight: '1.6',
  textAlign: 'center',
  marginTop: '0',
  fontWeight: '500',
  flex: 1,
  display: 'flex',
  alignItems: 'flex-start',
};

const videoStyle = {
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'block',
};

const bulletPointsStyle = {
  color: '#ffffff',
  fontSize: '18px',
  lineHeight: '1.8',
  marginBottom: '0',
  paddingLeft: '0',
  listStyle: 'none',
};

const bulletPointStyle = {
  marginBottom: '1.5rem',
};

const learnMoreButtonStyle = {
  backgroundColor: '#25abe0',
  color: 'white',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: '500',
  transition: 'background-color 0.3s ease',
};

const platformContainerStyle = {
  display: 'flex',
  gap: '-5rem',
  alignItems: 'center',
  marginBottom: '2rem',
  justifyContent: 'center',
  maxWidth: '1400px',
  margin: '0 auto',
  paddingLeft: '4rem',
};

const membraneContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  marginTop: '0',
};

const contentStyle = {
  flex: 1,
  marginTop: '2rem',
  display: 'flex',
  justifyContent: 'center',
};

const graphStyle = {
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  marginBottom: '1rem',
  minHeight: '150px',
  maxHeight: '250px',
  
  '@media (max-width: 768px)': {
    minHeight: '120px',
    maxHeight: '200px',
  },
  
  '@media (min-width: 769px) and (max-width: 1024px)': {
    minHeight: '130px',
    maxHeight: '220px',
  },
  
  '@media (min-width: 1025px) and (max-width: 1440px)': {
    minHeight: '140px',
    maxHeight: '240px',
  },
  
  '@media (min-width: 2560px)': {
    minHeight: '200px',
    maxHeight: '350px',
  }
};

const responsiveGraphStyle = {
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  marginBottom: '1rem',
  marginTop: '0.625rem',
  minHeight: '150px',
  maxHeight: '250px',
};

const responsiveGraphContainerStyle = {
  width: '100%',
  height: '250px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1rem',
  marginTop: '0.625rem',
  '@media (max-width: 768px)': {
    height: '200px',
  },
  '@media (min-width: 769px) and (max-width: 1024px)': {
    height: '220px',
  },
  '@media (min-width: 1025px) and (max-width: 1440px)': {
    height: '240px',
  },
  '@media (min-width: 2560px)': {
    height: '350px',
  }
};

const modalContentStyle = {
  display: 'flex',
  gap: '3rem',
  alignItems: 'flex-start',
  width: '100%',
  maxWidth: '3000px',
  margin: '0 auto',
  padding: '0',
};

const modalColumnStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
};

const modalTextStyle = {
  color: '#ffffff',
  fontSize: '18px',
  lineHeight: '1.6',
  marginTop: '1rem',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
};

const modalSubtitleStyle = {
  color: '#25abe0',
  fontSize: '24px',
  fontWeight: '600',
  marginBottom: '0.5rem',
  textAlign: 'center',
};

const modalTextStyle2 = {
  ...modalTextStyle,
  marginTop: '-0.5rem',
};

const descriptionTextStyle = {
  color: '#ffffff',
  fontSize: '1.2rem',
  textAlign: 'center',
  margin: '-2rem auto 1rem auto',
  maxWidth: '800px',
  lineHeight: '1.6',
};

const gridStyle = {
  display: 'grid',
  gap: '0.5rem',
  maxWidth: '1400px',
  margin: '1rem auto',
};

const founderGridStyle = {
  ...gridStyle,
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
};

const advisorGridStyle = {
  ...gridStyle,
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
};

const membraneImageStyle = {
  width: '100%',
  maxWidth: '400px',
  height: 'auto',
  objectFit: 'contain',
  marginBottom: '2rem',
};

const reactorImageStyle = {
  width: '50%',
  height: 'auto',
  objectFit: 'contain',
  margin: '0 auto',
  marginRight: '-2rem',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginTop: '2rem',
};

const buttonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.8rem',
  padding: '1rem 2rem',
  backgroundColor: 'var(--primary-color)',
  color: 'white',
  fontSize: '1.1rem',
  fontWeight: '600',
  textDecoration: 'none',
  borderRadius: '50px',
  boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  border: '2px solid transparent',
  cursor: 'pointer',
  minWidth: '120px',
};

const buttonHoverStyle = {
  backgroundColor: 'var(--secondary-color)',
  boxShadow: '0 15px 25px rgba(0, 0, 0, 0.4)',
  transform: 'translateY(-2px)',
};

// Add animation variants after imports
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const responsiveTitleStyle = {
  ...titleStyle,
  color: '#ffffff', 
  fontWeight: '350', 
  fontSize: '2.8rem', 
  letterSpacing: '-0.02em', 
  lineHeight: '1.2',
  '@media (max-width: 768px)': {
    fontSize: '2.5rem',
  },
  '@media (max-width: 480px)': {
    fontSize: '2.2rem',
  }
};



const SplitSection = styled.div`
  display: flex;
  flex-direction: ${props => props.reversed ? 'row-reverse' : 'row'};
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  gap: 3rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ContentSide = styled.div`
  flex: 1;
`;

const VisualSide = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  color: #25abe0;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const SectionText = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: #ffffff;
  margin-bottom: 1.5rem;
`;


function Technology() {
  const [showModal, setShowModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);
  const heroVideoRef = useRef(null);
  const animationVideoRef = useRef(null);
  const [activeModal, setActiveModal] = useState(null);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play();
          video.addEventListener('timeupdate', () => {
            if (video.currentTime >= video.duration - 0.1) {
              video.pause();
            }
          });
        } else {
          video.pause();
          video.currentTime = 0;
        }
      });
    }, { threshold: 0.5 });

    if (heroVideoRef.current) observer.observe(heroVideoRef.current);
    if (animationVideoRef.current) observer.observe(animationVideoRef.current);

    return () => {
      if (heroVideoRef.current) observer.unobserve(heroVideoRef.current);
      if (animationVideoRef.current) observer.unobserve(animationVideoRef.current);
    };
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenDetailsModal = () => {
    setShowDetailsModal(true);
  };

  const handleCloseDetailsModal = () => {
    setShowDetailsModal(false);
  };

  return (
    <>
    <SEO
        title={seoData.products.title}
        description={seoData.products.description}
        keywords={seoData.products.keywords}
        image={seoData.products.image}
        url="/products"
    />
    <div className={styles1.technologyPage}>
      {/* Custom Technology Header */}
      <div style={{
        padding: '4rem 2rem 3rem',
        display: 'flex',
        flexDirection: isTablet || isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '3rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Left/Top: Title */}
        <div style={{
          flex: isTablet || isMobile ? 'auto' : '1',
          textAlign: 'center',
          order: 0,
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '1rem',
            letterSpacing: '-0.03em',
            maxWidth: isTablet || isMobile ? '100%' : '1200px',
            margin: '0 auto 1rem'
          }}> <span>Our </span>
          <span style={{ 
            background: 'linear-gradient(110deg, #dbcea4, #50918d)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            Core Technology
          </span>
          </h1>
        </div>
        
        {/* Right/Bottom: Video */}
        <div style={{
          flex: isTablet || isMobile ? 'auto' : '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          order: isTablet || isMobile ? 1 : 0,
          width: '100%'
        }}>
          <video 
            ref={heroVideoRef}
            src={herotech} 
            style={{
              width: '100%',
              maxWidth: '900px',
              height: 'auto',
              borderRadius: '8px'
            }} 
            muted 
            playsInline
            autoPlay
            loop
          />
        </div>
      </div>

      {/* Divider */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '1rem auto 3rem',
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(37, 171, 224, 0.3), transparent)',
      }}></div>
      
      {/* Cards Section - Standardized */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 4rem',
        padding: '0 2rem'
      }}>
        <p style={{
          color: '#ffffff',
          textAlign: 'center',
          marginBottom: '3rem',
          fontWeight: '600',
          fontSize: '2.5rem',
          fontWeight: '400',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          Proven Technology Platform
        </p>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem'
        }}>
  {[
    { title: "35 Years R&D", image: rd, text: "$20M+ investment in mixed-conducting ceramic membrane reactor." },
    { title: "Extensively Validated", image: validated, text: "In labs & via industrial investment committees." },
    { title: "Scalable", image: scalable, text: "Demo system design completed & ready for fabrication." }
  ].map((card, index) => (
    <motion.div
      key={index}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        y: -8,
        boxShadow: '0 0 20px rgba(37, 171, 224, 0.7)'
      }}
      transition={{ duration: 0.3 }}
      style={{
        flex: '1 1 300px',
        maxWidth: '350px',
        backgroundColor: 'rgba(31, 42, 48, 0.7)',
        borderRadius: '12px',
        padding: '2rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        marginTop: '2rem'
      }}
    >
      {/* Accent line at top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent, #6FCFFB, transparent)',
      }}></div>
      
      {/* Image integrated in card */}
      <div style={{
        width: '100%',
        height: '180px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1.5rem'
      }}>
        <img 
          src={card.image} 
          alt={card.title} 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
      
      {/* Gradient heading */}
      <h3 style={{ 
        marginBottom: '1rem',
        fontSize: '1.5rem',
        fontWeight: '600',
        background: 'linear-gradient(100deg, #50918d 50%, #ffffff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
        textAlign: 'center'
      }}>{card.title}</h3>
      
      <p style={{
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: '1.4rem',
        lineHeight: '1.6',
        marginBottom: '1.5rem',
        textAlign: 'center'
      }}>{card.text}</p>
    </motion.div>
  ))}
</div>
      </div>
      
      {/* Process Section - Standardized */}
      {/* <div style={{
        maxWidth: '1200px',
        margin: '0 auto 4rem',
        padding: '0 2rem'
      }}>
        <p style={{
          color: '#ffffff',
          textAlign: 'center',
          marginBottom: '3rem',
          fontWeight: '600',
          fontSize: '2.5rem',
          fontWeight: '400',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          Example: From Biomass to SAF without CO₂ emissions
        </p>
        
        <p style={{
          color: '#9cc9dd',
          fontSize: '1.5rem',
          lineHeight: '1.6',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 2rem'
        }}>
          Our revolutionary process enables clean fuel production with zero carbon emissions.
        </p>
        
        <div style={{
          backgroundColor: 'rgba(26, 35, 43, 0.7)',
          borderRadius: '16px',
          padding: '0.5rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
          marginBottom: '3rem'
        }}>
          <video 
            ref={animationVideoRef}
            src={animationTech} 
            style={{
              width: '100%',
              maxWidth: '1150px',
              height: 'auto',
              borderRadius: '8px',
              margin: '0 auto',
              display: 'block'
            }} 
            muted 
            playsInline
            autoPlay
          />
        </div>
      </div> */}
      
      {/* Platform Section */}
      {/* <div style={{
        maxWidth: '1200px',
        margin: '0 auto 4rem',
        padding: '0 2rem'
      }}>
        <p style={{
          color: '#ffffff',
          textAlign: 'center',
          marginBottom: '3rem',
          fontWeight: '600',
          fontSize: '2.5rem',
          fontWeight: '400',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          Multifunctional <span style={{ fontStyle: 'italic' }}>Gas to Chemicals</span> Platform
        </p>
        
        <p style={{
          color: '#9cc9dd',
          fontSize: '1.5rem',
          lineHeight: '1.6',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 2rem'
        }}>
          Leverages mixed-conducting ceramic membrane and low-cost catalyst. 
        </p>
        
        <div style={{
          backgroundColor: 'rgba(26, 35, 43, 0.7)',
          borderRadius: '16px',
          padding: '0.5rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
          marginBottom: '2rem'
        }}>
          <video 
            ref={animationVideoRef}
            src={reactionanima} 
            style={{
              width: '100%',
              maxWidth: '1150px',
              height: 'auto',
              borderRadius: '8px',
              margin: '0 auto',
              display: 'block'
            }} 
            muted 
            playsInline
            autoPlay
          />
        </div>
        
        <div style={{
          position: 'relative',
          height: isMobile ? '70px' : '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '80%',
          margin: isMobile ? '-2rem auto 0' : '-2.5rem auto 0'
        }}>
          <button 
            className={styles1.learnMoreButton}
            onClick={handleOpenDetailsModal}
            style={{
              padding: isMobile ? '0.6rem 1.2rem' : '1rem 2rem',
              fontSize: isMobile ? '0.9rem' : '1.1rem',
              minWidth: isMobile ? '100px' : '120px'
            }}
          >
            Learn More
          </button>
        </div>

        <div className={styles1.modalContainer}>
        <Modal
          show={showDetailsModal}
          onClose={handleCloseDetailsModal}
          title="Reactor Platform Basic Science"
          size="xxlarge"
          showCloseButton={true}
        >
          <div style={{ 
            padding: '0.25rem 1rem 0.25rem 1rem', 
            color: '#ffffff',
            maxHeight: '70vh',
            overflowY: 'auto',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: (isMobile || isTablet) ? 'column' : 'row',
              alignItems: 'center',
              gap: '1rem',
              maxWidth: '1400px',
              margin: '0 auto',
              width: '100%'
            }}>
              <div style={{
                width: (isMobile || isTablet) ? '100%' : '40%',
                display: 'flex',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <img 
                  src={platform} 
                  alt="Platform" 
                  style={{
                    width: '100%',
                    maxWidth: (isMobile || isTablet) ? '400px' : '500px',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '8px'
                  }} 
                /> 
              </div>
              <div style={{
                width: (isMobile || isTablet) ? '100%' : '60%',
                textAlign: (isMobile || isTablet) ? 'center' : 'left',
                // maxWidth: '1400px',
                // width: '100%'
              }}>
                <div style={{
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  lineHeight: '1.5',
                  marginBottom: '1rem',
                  textAlign: (isMobile || isTablet) ? 'center' : 'left',
                }}>
                  Non-oxidative single-step conversion of biomethane, CO₂, and water from waste feedstocks to clean chemicals/fuels without CO₂ emissions. Schematics shows a ceramic membrane reactor (strontium cerate) filled with low-cost iron-silica catalyst inside a reactor vessel.
                </div>
                <div style={{
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  lineHeight: '1.5',
                  marginBottom: '1rem',
                  textAlign: (isMobile || isTablet) ? 'center' : 'left',
                }}>
                  In this example biomethane flows through the core and sweep gas (air) circulates outside. Hydrogen is extracted in the catalyst bed and transported through the membrane to the sweep side via Le Chatelier's Principle, where it reacts with oxygen to form water and heat—enabling autothermal, energy-efficient operation.
                </div>
                <div style={{
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  lineHeight: '1.5',
                  marginBottom: '1rem',
                  textAlign: (isMobile || isTablet) ? 'center' : 'left',
                }}>
                  Oxygen ions from air sweep diffuse inward to react with carbon, forming trace CO, which prevents coking and extends catalyst life and reactor durability.
                </div>
                <div style={{
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  lineHeight: '1.5',
                  marginBottom: '0.25rem',
                  textAlign: (isMobile || isTablet) ? 'center' : 'left',
                }}>
                  Products include olefins and aromatics. System is tunable via temperature, pressure, recycles, and sweep gas to meet specific product demands.
                </div>
              </div>
            </div>
          </div>
        </Modal>
        </div>
      </div> */}

      <div style={{
        width: '100%',
        maxWidth: '900px',
        margin: '1rem auto',
        marginTop: '3rem',
        // marginBottom: '0',
        height: '1.5px',
        background: 'linear-gradient(to right, transparent, rgba(37, 171, 224, 0.3), transparent)',
      }}></div>

      {/* Real-World Applications Section */}
      <div style={{
       maxWidth: '1200px',
       margin: '4rem auto',
       padding: '0 2rem',
       boxSizing: 'border-box',
      }}>
        <p style={{
          color: '#ffffff',
          textAlign: 'center',
          marginBottom: '3rem',
          fontWeight: '600',
          fontSize: '2.5rem',
          fontWeight: '400',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>Real-World Applications</p>
        
        <div style={{
          display: 'block',  // Changed from 'flex' to 'block'
          width: '100%',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '2rem', 
          marginBottom: '2rem'
        }}>
          {/* Application Card 1 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ 
              boxShadow: '0 0 20px rgba(37, 171, 224, 0.7)'
            }}
            transition={{ duration: 0.3 }}
            style={{
              width: '100%',
              maxWidth: (isMobile||isTablet)?'850px': '1000px',
              backgroundColor: 'rgba(31, 42, 48, 0.7)',
              borderRadius: '12px',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              marginBottom: '2rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              boxSizing: 'border-box',
            }}
          >
            {/* Accent line at top */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, #25ABE0, #ffffff)'
            }} />
            
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '400', textAlign: 'center' }}>
              From Biomass to SAF without CO₂ emissions
            </h3>
            
            <p style={{ fontSize: '1.3rem', marginBottom: '1.75rem', opacity: 0.9, textAlign: 'center' }}>
              Our revolutionary process enables clean fuel production with zero carbon emissions.
            </p>
            
            <div 
              onClick={() => setActiveModal('biomass')}
              style={{ 
                cursor: 'pointer', 
                marginBottom: '1.5rem',
                borderRadius: '8px',
                overflow: 'hidden'
              }}
            >
              <video 
                ref={animationVideoRef}
                src={animationTech} 
                style={{
                  width: '100%',
                  maxWidth: '1150px',
                  height: 'auto',
                  borderRadius: '8px',
                  margin: '0 auto',
                  display: 'block'
                }} 
                muted 
                playsInline
                autoPlay
              />
            </div>
            
          <div style={{ 
            textAlign: 'center',
            width: '100%',
            marginTop: '1.5rem' 
          }}>
            <button 
              onClick={() => setActiveModal('biomass')}
              style={{
                background: 'linear-gradient(90deg, #25ABE0)',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                fontSize: '1rem',
                cursor: 'pointer',
                fontWeight: '500',
                boxShadow: '0 4px 12px rgba(5, 213, 170, 0.3)',
              }}
            >
               Enlarge Image
            </button>
          </div>
          </motion.div>
    
          {/* Application Card 2 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ 
              boxShadow: '0 0 20px rgba(37, 171, 224, 0.7)'
            }}
            transition={{ duration: 0.3 }}
            style={{
              width: '100%',            // Full width of container
              maxWidth: (isMobile||isTablet)?'850px': '1000px',
              backgroundColor: 'rgba(31, 42, 48, 0.7)',
              borderRadius: '12px',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              marginBottom: '2rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              boxSizing: 'border-box',
            }}
          >
            {/* Accent line at top */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, #25ABE0, #ffffff)'
            }} />
            
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '400', textAlign: 'center' }}>
              Multifunctional Gas to Chemicals Platform
            </h3>
            
            <p style={{ fontSize: '1.3rem', marginBottom: '1.7rem', opacity: 0.9,  textAlign: 'center'}}>
              Leverages mixed-conducting ceramic membrane and low-cost catalyst.
            </p>
            
            <div 
              onClick={() => setActiveModal('gasToChemicals')}
              style={{ 
                cursor: 'pointer', 
                marginBottom: '1.5rem',
                borderRadius: '8px',
                overflow: 'hidden'
              }}
            >
              
              <video 
            ref={animationVideoRef}
            src={reactionanima} 
            style={{
              width: '100%',
              maxWidth: '1150px',
              height: 'auto',
              borderRadius: '8px',
              margin: '0 auto',
              display: 'block'
            }} 
            muted 
            playsInline
            autoPlay
          />
            </div>
            <div style={{ 
              textAlign: 'center',
              width: '100%',
              marginTop: '1.5rem' 
            }}>
            <button 
              onClick={() => setActiveModal('gasToChemicals')}
              style={{
                background: 'linear-gradient(110deg, #25ABE0)',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                fontSize: '1rem',
                cursor: 'pointer',
                fontWeight: '500',
                boxShadow: '0 4px 12px rgba(5, 213, 170, 0.3)',
              }}
            >
              Enlarge Image
            </button>
            </div>
          </motion.div>
        </div>
      </div>
    
      {/* Modal Popups */}
      {activeModal && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem'
          }}
          onClick={() => setActiveModal(null)}
        >
          <div 
            style={{
              position: 'relative',
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '12px',
              overflow: 'hidden'
            }}
            onClick={e => e.stopPropagation()}
          >
            {activeModal === 'biomass' && (
               <video 
               ref={animationVideoRef}
               src={animationTech} 
               style={{
                 width: '100%',
                 maxWidth: '1150px',
                 height: 'auto',
                 borderRadius: '8px',
                 margin: '0 auto',
                 display: 'block'
               }} 
               muted 
               playsInline
               autoPlay
             />
            )}
            
            {activeModal === 'gasToChemicals' && (
              <video 
              ref={animationVideoRef}
              src={reactionanima} 
              style={{
                width: '100%',
                maxWidth: '1150px',
                height: 'auto',
                borderRadius: '8px',
                margin: '0 auto',
                display: 'block'
              }} 
              muted 
              playsInline
              autoPlay
            />
            )}
            
            <button
              onClick={() => setActiveModal(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.2rem'
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
      </div>
    </>
  );
}

export default Technology;