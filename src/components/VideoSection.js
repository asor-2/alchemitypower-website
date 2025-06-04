import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './VideoSection.module.css';
import videoFile from './images/homepage-hero.mp4';
import { FaCloud, FaDollarSign, FaShieldAlt, FaSeedling } from 'react-icons/fa';

function VideoSection() {
  const videoRef = useRef(null);
  const [videoPoster, setVideoPoster] = useState('');
  const [activePhrase, setActivePhrase] = useState(null);
  
  const keyPhrases = [
    "One Platform", 
    "Beyond Zero CO₂",
    "Clean Chemicals", 
    "Lower Cost", 
    "Higher Efficiency"
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          
          const ctx = canvas.getContext('2d');
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          
          const dataURL = canvas.toDataURL('image/jpeg');
          setVideoPoster(dataURL);
        } catch (err) {
          console.error('Error generating video poster:', err);
        }
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setActivePhrase(currentIndex);
      
      setTimeout(() => {
        setActivePhrase(null);
      }, 1000);
      
      currentIndex = (currentIndex + 1) % keyPhrases.length;
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('✅ Video playback started successfully');
          })
          .catch(error => {
            console.error('❌ Video playback was prevented:', error);
          });
      }
    }
  }, []);

  const emphasizeText = (text) => {
    if (!text) return null;
    
    const isMission = text.toLowerCase().includes("empower") || text.toLowerCase().includes("planet");
    
    const missionKeywords = ["empower", "innovative", "sustainable", "growth"];
    const visionKeywords = ["lead", "clean", "sustainability", "profitability"];
    
    let keywords = isMission ? missionKeywords : visionKeywords;
    
    return text.split(' ').map((word, index) => {
      const lowerWord = word.toLowerCase().replace(/[.,!]/g, '');
      const isKeyword = keywords.some(keyword => 
        lowerWord.includes(keyword.toLowerCase())
      );
      
      return isKeyword ? 
        <span key={index}>{word} </span> : 
        <span key={index}>{word} </span>;
    });
  };

  const stats = [
    {
      icon: <FaCloud />,
      value: "400%",
      label: "Lower CO₂ Emission",
      description: ""
    },
    {
      icon: <FaDollarSign />,
      value: "300%",
      label: "Lower Lifetime Cost",
      description: "Scales down cost effectively even to remote sites"
    },
    {
      icon: <FaShieldAlt />,
      value: "100%",
      label: "Energy Security",
      description: "Provides domestic job and energy security"
    },
    {
      icon: <FaSeedling />,
      value: "All",
      label: "Site Types",
      description: "Clean energy production in brown and green fields"
    }
  ];

  return (
    <section className={styles.videoSection}>
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className={styles.styledVideo}
        ref={videoRef}
        poster={videoPoster}
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className={styles.videoOverlay}></div>
      
      <div className={styles.contentOverlay}>
        <h2 className={styles.sectionHeading}>Revolutionizing Clean Chemical Production</h2>
        
        <p className={styles.videoDescription}>
      Transforming Greenhouse Gases and Waste Resources into Valuable Chemicals and Fuels with Modular Turn-Key Reactor System
        </p>

        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          width: '100%',
          marginBottom: '2rem'
        }}>
          <Link 
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.8rem',
              padding: '0.8rem 1rem',
              backgroundColor: '#25abe0',
              color: 'white',
              fontSize: '1.4rem',
              fontWeight: '600',
              textDecoration: 'none',
              borderRadius: '50px',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5), 0 0 25px rgba(37, 171, 224, 0.5)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              border: '2px solid transparent',
              cursor: 'pointer',
              width: '250px',
              height: '50px'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#0077b5';
              e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 35px rgba(37, 171, 224, 0.6)';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.backgroundImage = 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)';
              e.target.style.backgroundPosition = '200% center';
              e.target.style.backgroundSize = '200% 100%';
              e.target.style.animation = 'gradientMove 1.5s ease infinite';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#25abe0';
              e.target.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5), 0 0 25px rgba(37, 171, 224, 0.5)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.backgroundImage = 'none';
              e.target.style.animation = 'none';
            }}
          >
            Pre-Order Now
          </Link>
          <Link 
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.8rem',
              padding: '0.8rem 1rem',
              backgroundColor: '#25abe0',
              color: 'white',
              fontSize: '1.4rem',
              fontWeight: '600',
              textDecoration: 'none',
              borderRadius: '50px',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5), 0 0 25px rgba(37, 171, 224, 0.5)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              border: '2px solid transparent',
              cursor: 'pointer',
              width: '250px',
              height: '50px'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#0077b5';
              e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 35px rgba(37, 171, 224, 0.6)';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.backgroundImage = 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)';
              e.target.style.backgroundPosition = '200% center';
              e.target.style.backgroundSize = '200% 100%';
              e.target.style.animation = 'gradientMove 1.5s ease infinite';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#25abe0';
              e.target.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5), 0 0 25px rgba(37, 171, 224, 0.5)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.backgroundImage = 'none';
              e.target.style.animation = 'none';
            }}
          >
            Invest Now
          </Link>
        </div>

        <div className={styles.keyPhrasesContainer}>
          <div className={styles.keyPhrasesLine}>
            {keyPhrases.map((phrase, index) => (
              <React.Fragment key={index}>
                <span 
                  className={`${styles.keyPhrase} ${activePhrase === index ? styles.active : ''}`}
                >
                  {phrase}
                </span>
                {index < keyPhrases.length - 1 && <span className={styles.phraseDot}>.</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <div className={styles.missionVisionContainer}>
          <div className={styles.mission}>
            <h2 className={styles.cardTitle}>Our Mission</h2>
            <p className={styles.cardText}>
              {emphasizeText("Supply customers with carbon-neutral chemicals & fuels.")}
            </p>
          </div>
          
          <div className={styles.vision}>
            <h2 className={styles.cardTitle}>Our Vision</h2>
            <p className={styles.cardText}>
              {emphasizeText("Accelerate global transition to low-cost clean chemicals & fuels.")}
            
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection; 