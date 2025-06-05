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
  backgroundColor: '#000000',
  textAlign: 'left',
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

function Technology() {
  const [showModal, setShowModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const heroVideoRef = useRef(null);
  const animationVideoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
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
      <PageHero 
        backgroundVideoUrl={herotech}
        title="Technology"
        videoRef={heroVideoRef}
      />
      <div style={sectionStyle}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '1.5rem',
          padding: '0.5rem',
          margin: '-2rem auto 0',
          maxWidth: '1400px',
          justifyContent: 'center',
          '@media (max-width: 1024px)': {
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0.5rem',
          }
        }}>
          {[
            {
              title: "35 Years R&D + $20M",
              image: rd,
              text: "Alchemity holds exlusive license to 32 patents."
            },
            {
              title: "Extensively Validated",
              image: validated,
              text: "In labs & via industrial investment committees."
            },
            {
              title: "Scalable",
              image: scalable,
              text: "Demo system design completed & ready for fabrication."
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              style={{
                background: '#141414',
                padding: '2rem',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                transition: 'transform 0.3s ease',
                width: 'calc(33.333% - 1rem)',
                minWidth: '280px',
                maxWidth: '350px',
                '&:hover': {
                  transform: 'translateY(-5px)'
                },
                '@media (max-width: 1024px)': {
                  width: '100%',
                  maxWidth: '500px'
                }
              }}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 style={{
                color: '#25abe0',
                fontSize: '1.7rem',
                fontWeight: '600',
                textAlign: 'center',
                margin: 0
              }}>{card.title}</h3>
              <div style={{
                width: '100%',
                height: '250px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={card.image} 
                  alt={card.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    backgroundColor: 'transparent'
                  }} 
                />
              </div>
              <p style={{
                color: '#ffffff',
                fontSize: '1.4rem',
                lineHeight: '1.6',
                textAlign: 'center',
                margin: 0,
                fontWeight: '500'
              }}>{card.text}</p>
            </motion.div>
          ))}
        </div>

        <h1 style={{...titleStyle, marginTop: '2rem'}}>Example: From Biomass to SAF without CO₂ emissions</h1>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          margin: '2rem 0'
        }}>
          <video 
            ref={animationVideoRef}
            src={animationTech} 
            style={{
              ...videoStyle,
              maxWidth: '80%',
              height: 'auto'
            }} 
            muted 
            playsInline
            autoPlay
          />
        </div>

        <h1 style={{...titleStyle, marginTop: '5rem'}}>Multifunctional <span style={{ fontStyle: 'italic' }}>Gas to Chemicals</span> Platform</h1>
        <p style={{
          fontSize: '1.6rem',
          color: '#ffffff',
          textAlign: 'center',
          marginBottom: '1rem',
          marginTop: '-2.5rem'
        }}>
          Leverages mixed-conducting ceramic membrane and low-cost catalyst. 
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          margin: '2rem 0'
        }}>
          <video 
            ref={animationVideoRef}
            src={reactionanima} 
            style={{
              ...videoStyle,
              maxWidth: '80%',
              height: 'auto'
            }} 
            muted 
            playsInline
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
            className={styles.detailsButton}
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
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              maxWidth: '1400px',
              margin: '0 auto',
              width: '100%'
            }}>
              <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <img 
                  src={platform} 
                  alt="Platform" 
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '8px'
                  }} 
                />
              </div>
              <div style={{
                textAlign: 'center',
                maxWidth: '1400px',
                width: '100%'
              }}>
                <div style={{
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  lineHeight: '1.5',
                  marginBottom: '0.25rem',
                  textAlign: 'center'
                }}>
                  Non-oxidative single-step conversion of biomethane, CO₂, and water from waste feedstocks to clean chemicals/fuels without CO₂ emissions. Schematics shows a ceramic membrane reactor (strontium cerate) filled with low-cost iron-silica catalyst inside a reactor vessel.
                </div>
                <div style={{
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  lineHeight: '1.5',
                  marginBottom: '0.25rem',
                  textAlign: 'center'
                }}>
                  In this example biomethane flows through the core and sweep gas (air) circulates outside. Hydrogen is extracted in the catalyst bed and transported through the membrane to the sweep side via Le Chatelier's Principle, where it reacts with oxygen to form water and heat—enabling autothermal, energy-efficient operation.
                </div>
                <div style={{
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  lineHeight: '1.5',
                  marginBottom: '0.25rem',
                  textAlign: 'center'
                }}>
                  Oxygen ions from air sweep diffuse inward to react with carbon, forming trace CO, which prevents coking and extends catalyst life and reactor durability.
                </div>
                <div style={{
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  lineHeight: '1.5',
                  marginBottom: '0.25rem',
                  textAlign: 'center'
                }}>
                  Products include olefins and aromatics. System is tunable via temperature, pressure, recycles, and sweep gas to meet specific product demands.
                </div>
              </div>
            </div>
          </div>
        </Modal>
        </div>
      </div>
    </>
  );
}

export default Technology;
