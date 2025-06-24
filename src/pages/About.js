import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import ProfileCard from '../components/ProfileCard';
import PageHero from '../components/PageHero';
import AboutHero from '../components/AboutHero';
import about1 from '../components/images/about1.png';
import about2 from '../components/images/about2.png';
import about3 from '../components/images/about3.png';

import aboutVideo from '../components/images/about_video.mov';

import founder1 from '../components/images/founder1.jpg';
import founder2 from '../components/images/founder2.jpg';
import founder3 from '../components/images/founder3.jpg';
import advisor1 from '../components/images/advisor1.png';
import advisor2 from '../components/images/advisor2.jpg';
import advisor3 from '../components/images/advisor3.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../components/PageHero.module.css';
import styles1 from '../components/ProfileCard.module.css';
import { PiAndroidLogoDuotone } from 'react-icons/pi';

import SEO from '../components/SEO/SEO';
import { seoData } from '../config/seoConfig';


const founders = [
  {
    id: 2,
    name: 'Rodger McKain, Ph.D.',
    title: 'CEO',
    blurb: '30 years as Fortune 500 Executive',
    bio: [
      'Rodger brings expertise in building large businesses and succesful exit strategies. He successfully led the growth of multi-billion dollar S&P 500 companies.',
      'Previous Roles:',
      'VP and Head at British Petroleum (Global Exploration, Gas to Chemicals/Liquids).',
      'Interim CEO, LG Fuel Cell Systems, Inc.',
      'VP Govt. Programs Rolls-Royce Fuel Cell Systems.',
      'President SOFCO-EFS Holdings, LLC (Acquired by Rolls-Royce/LG).',
      'Education: Case Western Reserve University - Physical Chemistry.',
    ],
    imageUrl: founder2,
    linkedInUrl: 'https://www.linkedin.com/in/rodger-mckain-5223168/',
  },
  {
    id: 3,
    name: 'Emir Dogdibegovic, Ph.D.',
    title: 'CTO and CCO',
    blurb: '15 years of Scaleup and Deployment of Clean Energy Technologies',
    bio: [
      'Emir brings the technical and product scaleup know-how and strategic business expertise in customer acquisition, project development and deployment, and revenue generation.',
      'Previous Roles:',
      'Director Strategy and Execution, Origis Energy.',
      'Senior Engineer & Senior Program Manager, Nexceris.',
      'Affiliate, Lawrence Berkeley National Laboratory.',
      '70+ journal articles, patents, and presentations.',
      'Education: USC - Chemical Engineering; UC Berkeley - Berkeley Lab; Harvard University - Entrepreneurship.',
    ],
    imageUrl: founder3,
    linkedInUrl: 'https://www.linkedin.com/in/emir-dogdibegovic-ph-d-ba976b192/',
  },
  {
    id: 1,
    name: 'Eric Wachsman, Ph.D.',
    title: 'Executive Chair',
    blurb: '30 years of Energy Research and Product Development/Innovation',
    bio: [
      'Eric brings the innovation (developed IP licensed to Alchemity) and startup scaleup expertise through multiple ventures.',
      'Current Roles',
      'Founder of VC-backed Battery Company (Ion Storage Systems).',
      'Director of Maryland Energy Innovation Institute.',
      'Published >300 papers, >40 patents.',
      'Education: UC Berkeley - Chemical Engineering; Stanford University - Materials Science & Engineering.',
    ],
    imageUrl: founder1,
    linkedInUrl: 'https://www.linkedin.com/in/ericdwachsman/',
  },
];

const advisors = [
  {
    id: 4,
    name: 'Nitin Parekh',
    title: 'Advisor',
    blurb: 'Proven entrepreneur, fundraiser, corporate venture investor',
    bio: [
      'Director Stanford High Impact Fund',
      "Board member of multiple ventures, creating JV's and leading the acquisition of companies.",
      'Education: UCLA - MBA; Stanford University - Engineering ',
    ],
    imageUrl: advisor1,
    linkedInUrl: 'https://www.linkedin.com/in/nitin-parekh-454578/',
  },
  {
    id: 5,
    name: 'Matt Zoller',
    title: 'Advisor',
    blurb: '30 years of Proven Leadership in Energy and System Operations',
    bio: [
      '23 years at Chevron, leading refinery operations.',
      'At Hawaiian Electric, Par Holdings, and Island Energy Services.',
      'Education: University of Hawaii',
    ],
    imageUrl: advisor2,
    linkedInUrl: 'https://www.linkedin.com/in/matt-zoller-8557465a/',
  },
  {
    id: 6,
    name: 'Glenn Fuller',
    title: 'Advisor',
    blurb: '32 years of Expertise in Process, Operations, Lean Six Sigma',
    bio: [
      '24 years at Chevron, leading Process, Operations, and Lean Six Sigma.',
      'Sr. Process Engineer/Business Planner (Renewables), Kern Energy. ',
      'Education: UC Santa Barbara- Chemical Engineering',
    ],
    imageUrl: advisor3,
    linkedInUrl: 'https://www.linkedin.com/in/glenn-fuller-a990b56/',
  },
];

const gridStyle = {
  display: 'grid',
  gap: '3rem',
  maxWidth: '1200px',
  margin: '1rem auto',
  width: '100%',
  justifyContent: 'center'
};

const founderGridStyle = {
  ...gridStyle,
  // gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  maxWidth: '1200px',
  gap: '3rem',
};

const advisorGridStyle = {
  ...gridStyle,
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  maxWidth: '1200px',
  gap: '3rem'
};

const buttonStyle = {
  backgroundColor: '#0077b5',
  color: '#fff',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '1rem auto',
  fontWeight: '500',
};

const titleStyle = {
  fontSize: '2.5rem',
  color: '#ffffff',
  marginBottom: '3rem',
  marginTop: '3rem',
  textAlign: 'center',
  fontWeight: '400',
  letterSpacing: '0.05em',
};

const linkedinButtonStyle = {
  backgroundColor: '#25abe0',
  color: 'f',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginTop: '1rem',
  transition: 'background-color 0.3s ease',
};

const videoStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 0
}

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

function About() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1023);
  const [manifestoExpanded, setManifestoExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1023);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [about3, about1, about2];

  const handleOpenModal = (person) => {
    setSelectedPerson(person);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPerson(null);
  };

  const toggleManifesto = () => {
    setManifestoExpanded(!manifestoExpanded);
  };

  const videoStyle = {
    objectFit: 'cover',
    width: '100%',
    height: '100%'
  };
  // Update the card styling for founders/team members
const profileCardStyle = {
  backgroundColor: 'rgba(31, 42, 48, 0.8)', // Darker card background 
  borderRadius: '12px',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  transition: 'all 0.3s ease',
  height: '100%',
  position: 'relative',
  overflow: 'hidden'
};

// Add a subtle blue accent to the top of each card
const cardAccentStyle = {
  position: 'absolute',
  top: 0,
  left: '15%',
  right: '15%',
  height: '3px',
  background: 'linear-gradient(to right, transparent, rgba(0, 119, 181, 0.5), transparent)',
};

  return (
    <>

      <SEO
        title={seoData.about.title}
        description={seoData.about.description}
        keywords={seoData.about.keywords}
        image={seoData.about.image}
        url="/about"
      />

      {/* <style>
        {
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
      </style> */}
      {/* <div style={{ position: 'relative' }}>
      {isLargeScreen ? (
        <AboutHero />
      ) : (
        <PageHero 
          title="About Us"
          style={{ marginTop: '-300px', position: 'relative', zIndex: 2 }}
          videoStyle={videoStyle}
          backgroundVideoUrl={aboutVideo}
          titleStyle={{
            color: '#0177B5 !important',
            fontWeight: '400',
            lineHeight: '1.2'
          }}
        />
      )}
      </div> */}

  <div style={{background: 'linear-gradient(135deg, #000000, #1A3A4A, #000000)',
      padding: '0 2rem', // Add horizontal padding on the outside
      maxWidth: '100%',
      boxSizing: 'border-box'
    }}>

      <div style={{
          padding: '3.5rem 2rem 2rem',
          textAlign: 'center',
          position: 'relative',
          
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '600',
            marginBottom: '1rem',
            letterSpacing: '-0.03em',
            maxWidth: '1200px',
            margin: '0 auto 1rem',
            textAlign: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ color: '#ffffff' }}>The </span>
            <span style={{ 
              background: 'linear-gradient(90deg, #25abe0, rgba(37, 171, 224, 0.7))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}>Founding Team</span>
          </h1>
          <p style={{
            fontSize: '1.5rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '700px',
            margin: '0 auto 0.5rem',
            lineHeight: '1.6'
          }}>
            A team of innovators driven by science, impact, and a shared vision for clean chemistry
          </p>
          
         {/* LINE DIVIDER */}
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '1rem auto',
            marginTop: '3rem',
            // marginBottom: '0',
            height: '1.5px',
            background: 'linear-gradient(to right, transparent, rgba(37, 171, 224, 0.3), transparent)',
          }}></div>
        </div>

        {/* Collapsible Manifesto Section */}
        <div style={{
          backgroundColor: 'rgba(31, 42, 48, 0.7)',
          borderRadius: '12px',
          padding: '3rem',
          margin: '3rem auto',
          maxWidth: '900px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          position: 'relative',
        }}>
          {/* Blue accent border at top */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '3px',
            background: 'linear-gradient(to right, transparent, #0077b5, transparent)',
          }}></div>
          
          <h2 style={{
            fontSize: '28px',
            color: '#0077b5',
            textAlign: 'center',
            marginBottom: '1.5rem',
            fontWeight: '400',
            letterSpacing: '0.05em',
          }}>THE ALCHEMITY MANIFESTO</h2>
          
          {/* Preview quote - always visible */}
          <p style={{
            fontSize: '1.3rem',
            color: '#ffffff',
            lineHeight: '1.8',
            marginBottom: '1.5rem',
            fontStyle: 'italic',
            textAlign: 'center',
          }}>
            For over a century, industry has relied on systems built for scale—not for sustainability. We believe clean fuels and high-performance chemicals should not come at the cost of the climate.
          </p>
          
          {/* Preview paragraph - always visible */}
          <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.1rem',
            lineHeight: '1.7',
            marginBottom: manifestoExpanded ? '1.5rem' : '2rem',
          }}>
            Our Purpose: The future of fuels and chemicals is circular, efficient, and emissions-free. And we believe that scientific and engineering breakthroughs—when paired with purpose—can unlock global transformation.
          </p>
          
          {/* Expandable content */}
          {manifestoExpanded && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              animation: 'fadeIn 0.5s ease',
            }}>
              <h3 style={{ 
                color: '#0077b5', 
                fontSize: '1.3rem', 
                marginBottom: '0.5rem',
                fontWeight: '500' 
              }}>Our Core Beliefs and Values:</h3>
              
              <ul style={{
                listStyleType: 'disc',
                paddingLeft: '2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1.1rem',
                lineHeight: '1.7',
                // marginBottom: '1.5rem'
              }}>
                <li>Wasted resources and greenhouse gases are assets—not liabilities.</li>
                <li>Clean fuel & chemicals must be economically accessible, not aspirational.</li>
                <li>Industrial decarbonization requires local deployment, not centralized infrastructure.</li>
              </ul>
              
              <p>
                Alchemity exists to transform underutilized wasted resources and greenhouse gases into carbon-neutral fuels and high-value chemicals—using modular, turnkey reactor systems deployable today, not in the distant future. Our game-changing reactor core does not require complex manufacturing, nor precious metals and leverages existing scaled manufacturing and supply chain.
              </p>
              
              <p>
              But technology alone is not enough.
              </p>
              
              <h3 style={{ 
                color: '#0077b5', 
                fontSize: '1.3rem', 
                marginBottom: '0.5rem',
                fontWeight: '500' 
              }}>We are here to build a new industrial foundation. One that is:</h3>

              <ul style={{
                listStyleType: 'disc',
                paddingLeft: '2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1.1rem',
                lineHeight: '1.7',
              }}>
                <li>Modular, not monolithic.</li>
                <li>Transparent, not extractive.</li>
                <li>Resilient, not reliant.</li>
              </ul>
              
              <h3 style={{ 
                color: '#0077b5', 
                fontSize: '1.3rem', 
                marginBottom: '0.5rem',
                fontWeight: '500' 
              }}>We believe:</h3>
              <ul style={{
                listStyleType: 'disc',
                paddingLeft: '2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1.1rem',
                lineHeight: '1.7',
                // marginBottom: '1.5rem'
              }}>
                <li>Underutilized wasted resources should power transformation, not languish unused.</li>
                <li>Clean solutions must be scalable and cost-effective—real world impact is the benchmark.</li>
                <li>Modular systems unlock rapid deployment: compact skids, installed on-site, anywhere.</li>
                <li>Elegant integration over complex builds: our reactor unites catalysis and membrane separation in one step.</li>
                <li>Mission-led culture matters: we operate transparently, respectfully, and relentlessly—as engineers, scientists, entrepreneurs, and team members with purpose.</li>
              </ul>
              
              <div style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1.1rem',
                lineHeight: '1.7',
                marginBottom: '2rem'
              }}>
                <h3 style={{ 
                  color: '#0077b5', 
                  fontSize: '1.3rem', 
                  marginBottom: '1rem',
                  fontWeight: '500' 
                }}>Our Vision of the Future:</h3>
                
                <p style={{ marginBottom: '2rem' }}>
                  We envision a world where distributed fuels and chemical hubs emerge across local communities—clean, carbon-neutral, and economically viable. Industrial and agricultural sites become sources of clean energy and chemicals, powering regional sustainability with local impact.
                </p>

                <h3 style={{ 
                  color: '#0077b5', 
                  fontSize: '1.3rem', 
                  marginBottom: '1rem',
                  fontWeight: '500' 
                }}>Our Principles:</h3>
                
                <ul style={{
                  listStyleType: 'disc',
                  paddingLeft: '2rem',
                  marginBottom: '2rem'
                }}>
                  <li>Deliver functioning systems, not just prototypes: our modular reactors must perform at scale in real environments.</li>
                  <li>Iterate and scale with urgency: rapid skid deployment means faster results, faster impact.</li>
                  <li>Partner with alignment: we collaborate with customers, early adopters, system integrators, engineering (EPC) firms, and universities who share our urgency and vision.</li>
                  <li>Maintain ethical rigor: we prioritize sustainability, team welfare, and transparency in everything we build and deliver.</li>
                  <li>Post-sale service: once we deliver, we serve our customers long-term.</li>
                </ul>

                <h3 style={{ 
                  color: '#0077b5', 
                  fontSize: '1.3rem', 
                  marginBottom: '1rem',
                  fontWeight: '500' 
                }}>Call to Action:</h3>
                
                <p style={{ marginBottom: '2rem' }}>
                  Let's deploy carbon neutral reactor systems today—creating impact where it matters. Together, we can build a cleaner fuel and chemical infrastructure—modular, circular, and net zero.
                </p>

                <div style={{ 
                  textAlign: 'center', 
                  marginTop: '3rem', 
                  fontStyle: 'italic',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingTop: '2rem'
                }}>
                  <p style={{ marginBottom: '0.5rem' }}>This is not just a company. It is a commitment.</p>
                  <p style={{ marginBottom: '0.5rem' }}>To decarbonize industry. To create value from waste.</p>
                  <p style={{ marginBottom: '1.5rem' }}>To create stronger communities, and a legacy worth defending.</p>
                  
                  <p style={{ fontSize: '1.2rem' }}>
                    If you believe a better chemical future is possible, join us. Build it with us.
                  </p>
                </div>
                
                <div style={{
                  textAlign: 'center',
                  margin: '1rem 0 1rem',
                  padding: '1rem 0',
                  // borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  // borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#25abe0',
                  fontStyle: 'italic'
                }}>
                  Turning waste into value. Turning vision into reality.
                </div>
              </div>
            </div>
          )}
          
          {/* Learn More / Show Less button */}
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <button 
              onClick={() => setManifestoExpanded(!manifestoExpanded)}
              style={{
                background: 'transparent',
                border: '1px solid #0077b5',
                color: '#0077b5',
                padding: '0.5rem 1.5rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'rgba(0, 119, 181, 0.1)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
              }}
            >
              {manifestoExpanded ? 'Show Less' : 'Learn More'}
            </button>
          </div>
        </div>

      <div style={{ padding: 'var(--section-padding)', backgroundColor: 'transparent', 
          background: 'transparent',
        }}>
        <h2 style={{...titleStyle, marginTop: '-2rem', }}>FOUNDERS</h2>
        <div style={founderGridStyle} className={styles1.foundersWrapper}>
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              style={{ 
                paddingLeft: '1rem', 
                paddingRight: '1rem', 
                paddingTop: '2rem',
                paddingBottom: '2rem',
                backgroundColor: 'rgba(31, 42, 48, 0.65)', // More transparent
                backdropFilter: 'blur(10px)', // Glass effect
                WebkitBackdropFilter: 'blur(10px)', // For Safari
                borderRadius: '12px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, transparent, #25abe0, transparent)',
              }}></div>
              <ProfileCard
                key={founder.name}
                {...founder}
                id={`founder-${index + 1}`}
                onClick={() => handleOpenModal(founder)}
              />
            </motion.div>
          ))}
        </div>

        <h2 style={{...titleStyle, marginTop: '4rem'}}>ADVISORS</h2>
        <div style={advisorGridStyle}  className={styles1.foundersWrapper}>
          {advisors.map((advisor, index) => (
            <motion.div
              key={advisor.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"

              style={{ 
                paddingLeft: '1rem', 
                paddingRight: '1rem', 
                paddingTop: '2rem',
                paddingBottom: '2rem',
                backgroundColor: 'rgba(31, 42, 48, 0.65)', // More transparent
                backdropFilter: 'blur(10px)', // Glass effect
                WebkitBackdropFilter: 'blur(10px)', // For Safari
                borderRadius: '12px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >

              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, transparent, #25abe0, transparent)',
              }}></div>

              <ProfileCard
                name={advisor.name}
                title={advisor.title}
                imageUrl={advisor.imageUrl}
                blurb={advisor.blurb}
                onClick={() => handleOpenModal(advisor)}
                isAdvisor={true}
                linkedInUrl={advisor.linkedInUrl}
                id={`advisor-${index + 1}`}
              />
            </motion.div>
          ))}
        </div>

        {selectedPerson && (
          <Modal
            show={showModal}
            onClose={handleCloseModal}
            title={`${selectedPerson.name} - ${
              selectedPerson.name.includes('Rodger') ? 'CEO' :
              selectedPerson.name.includes('Emir') ? 'CTO & CCO' :
              selectedPerson.title
            }`}
            linkedInUrl={selectedPerson.linkedInUrl}
            size={
              selectedPerson.name.includes('Emir') ? 'xlarge' :
              selectedPerson.name.includes('Matt') || selectedPerson.name.includes('Glenn') ? 'default' :
              'large'
            }
            showCloseButton={true}
          >
            <ul style={{ 
              textAlign: 'left', 
              paddingLeft: '0',
              listStyle: 'none',
              margin: '0',
              fontSize: '1.2rem'
            }}>
              {selectedPerson.bio && selectedPerson.bio.map((point, index) => {
                if (index === 0) {
                  return <li key={index} style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{point}</li>;
                } else if (index === 1 && selectedPerson.title === 'Advisor') {
                  return (
                    <>
                      <h4 key="current-role" style={{ textAlign: 'left', marginBottom: '0.5rem', fontSize: '1.4rem', color: '#25abe0' }}>
                        {selectedPerson.name.includes('Matt') ? 'Previous Roles' : 'Current Role'}
                      </h4>
                      <li key={index} style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{point}</li>
                    </>
                  );
                } else if (point === 'Previous Roles:' || point === 'Current Roles') {
                  return <h4 key={index} style={{ 
                    textAlign: 'left', 
                    marginBottom: selectedPerson.name.includes('Eric') || selectedPerson.name.includes('Rodger') || selectedPerson.name.includes('Emir') ? '1rem' : '0.5rem', 
                    fontSize: '1.4rem', 
                    color: '#25abe0' 
                  }}>{point}</h4>;
                } else if (point.includes('Education:')) {
                  return (
                    <>
                      <h4 key={`edu-${index}`} style={{ textAlign: 'left', marginBottom: '0.5rem', fontSize: '1.4rem', color: '#25abe0' }}>Education</h4>
                      <li key={index} style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{point.replace('Education:', '').trim()}</li>
                    </>
                  );
                } else if (selectedPerson.name.includes('Eric')) {
                  return <li key={index} style={{ marginBottom: '0.5rem', lineHeight: '1', fontSize: '1.2rem' }}>{point}</li>;
                } else if ((selectedPerson.bio[index - 1] === 'Previous Roles:' || 
                          selectedPerson.bio[index - 2] === 'Previous Roles:' ||
                          selectedPerson.bio[index - 3] === 'Previous Roles:' ||
                          selectedPerson.bio[index - 4] === 'Previous Roles:') &&
                          (selectedPerson.name.includes('Emir') || selectedPerson.name.includes('Rodger'))) {
                  return <li key={index} style={{ marginBottom: '0.5rem', lineHeight: '1', fontSize: '1.2rem' }}>{point}</li>;
                } else if (selectedPerson.bio[index - 1] === 'Previous Roles:' || 
                          selectedPerson.bio[index - 2] === 'Previous Roles:' ||
                          selectedPerson.bio[index - 3] === 'Previous Roles:') {
                  return <li key={index} style={{ marginBottom: '0.5rem', lineHeight: '1', fontSize: '1.2rem' }}>{point}</li>;
                } else {
                  return <li key={index} style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{point}</li>;
                }
              })}
            </ul>
          </Modal>
        )}
      </div>
      </div>
    </>
  );
}

export default About;