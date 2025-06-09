import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import productsBg from '../components/images/plant3.png';
import styled from 'styled-components';
import single1 from '../components/images/single1.png';
import single2 from '../components/images/single2.png';
import bundle1 from '../components/images/bundle1.png';
import bundle2 from '../components/images/bundle2.png';
import benchtop1 from '../components/images/benchtop1.png';
import benchtop2 from '../components/images/benchtop2.png';
import skid1 from '../components/images/skid1.png';
import skid2 from '../components/images/skid2.png';
import plant1 from '../components/images/plant1.png';
import plant22 from '../components/images/plant22.jpg';
import alchemityLogo from '../components/images/alchemity_logo_w_text.png';
import extEval from '../components/images/ExtEval.png';
import productVideo from '../components/images/producthero.mov';
import placeholder from '../components/images/AI.png';
import plantImage from '../components/images/30tpd.jpg';
import styles from './Products.module.css';
import competitiveStyles from './CompetitiveAnalysis.module.css';
import herotech from '../components/images/headeranim.mov';

import gtchem11Video from '../components/images/gtchem11.mov';
import gtchem12Video from '../components/images/gtchem12.mov';
import gtchem21Image from '../components/images/gtchem21.png';
import gtchem22Image from '../components/images/gtchem22.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import companim from '../components/images/companim.mov';
import { FaArrowRight, FaShieldAlt, FaChartLine, FaIndustry, FaDollarSign } from 'react-icons/fa';
import Modal from '../components/Modal';
import skiddo from '../components/images/skiddo.png';
import companal from '../components/images/companal.png';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 2rem 0.5rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    max-width: 800px;
    margin: 0 auto 4rem auto;
  }
  
  @media (max-width: 890px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 0;
    max-width: 650px;
    margin: 0 auto 4rem auto;
    width: 95%;
    justify-items: center;
  }
  
  @media (min-width: 2560px) {
    max-width: 2000px;
    gap: 3rem;
  }
`;

const Card = styled.div`
  background: #141414;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  border-radius: 8px;
  color: #ffffff;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(37, 171, 224, 0.6);
  }

  .icon {
    font-size: 2.5rem;
    color: #25abe0;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 1rem;
    color: #25abe0;
    font-weight: 600;
    font-size: 1.7rem;
    text-align: center;
  }

  p {
    line-height: 1.6;
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  @media (max-width: 890px) {
    padding: 3rem 2.5rem 2rem 2.5rem;
    width: 100%;
    max-width: 600px;
    border-radius: 12px;

    .icon {
      font-size: 4rem;
      margin-bottom: 2rem;
    }

    h3 {
      font-size: 2.4rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.8rem;
      line-height: 1.8;
      margin-bottom: 2rem;
    }
  }
`;

const RoadmapContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const RoadmapTitle = styled.h2`
  font-size: 40px;
  color: #25abe0;
  margin-bottom: 1.2rem;
  text-align: center;
  font-weight: 500;
`;

const RoadmapDescription = styled.p`
  color: #ffffff;
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;
`;

const ClickToLearnMore = styled.p`
  color: #25abe0;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 800;
  margin-top: 0.5rem;
  margin-bottom: -1.5rem;
`;

const HoverDescription = styled.p`
  color: #ffffff;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const TimelineContainer = styled.div`
  position: relative;
  padding: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  
  @media (max-width: 890px) {
    overflow-x: visible;
    overflow-y: visible;
    padding: 1rem 0;
  }
  
  @media (min-width: 891px) and (max-width: 1024px) {
    padding: 1rem 0;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const TimelineSections = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2rem auto 0 auto;
  
  @media (max-width: 890px) {
    flex-direction: column;
    gap: 3rem;
    width: 90%;
    max-width: 400px;
  }
  
  @media (min-width: 891px) and (max-width: 1024px) {
    justify-content: space-between;
    width: 95%;
    max-width: 1000px;
  }
`;

const TimelineSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  padding: 0 1rem;
  z-index: 2;
  min-width: 200px;
  margin-top: 2rem;
  
  @media (max-width: 890px) {
    width: 100%;
    min-width: auto;
    margin-top: 0;
    padding: 0;
  }
  
  @media (min-width: 891px) and (max-width: 1024px) {
    min-width: 150px;
    width: 18%;
    padding: 0 0.5rem;
    margin-top: 1.5rem;
  }
  
  @media (min-width: 1025px) and (max-width: 1440px) {
    min-width: 180px;
    width: 18%;
    padding: 0 0.5rem;
    margin-top: 2rem;
  }
  
  @media (min-width: 1441px) and (max-width: 1920px) {
    min-width: 220px;
    width: 20%;
    padding: 0 0.5rem;
    margin-top: 2.5rem;
  }
  
  @media (min-width: 1921px) {
    min-width: 250px;
    width: 20%;
    padding: 0 0.5rem;
    margin-top: 3rem;
  }
`;

const TimelineImage = styled.div`
  width: 200px;
  height: 200px;
  background: #1a1a1a;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(37, 171, 224, 0);
  margin: 0 auto;

  &:hover {
    box-shadow: 0 0 20px rgba(37, 171, 224, 0.6);
    transform: translateY(-5px);
  }
  
  @media (max-width: 890px) {
    width: 280px;
    height: 280px;
    margin: 0 auto;
    border-radius: 12px;
  }
  
  @media (min-width: 891px) and (max-width: 1024px) {
    width: 150px;
    height: 150px;
  }
  
  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 180px;
    height: 180px;
  }
  
  @media (min-width: 1441px) and (max-width: 1920px) {
    width: 200px;
    height: 200px;
  }
  
  @media (min-width: 1921px) {
    width: 220px;
    height: 220px;
  }

  span {
    color: #25abe0;
    font-size: 2rem;
    font-weight: 600;
    
    @media (max-width: 890px) {
      font-size: 3rem;
    }
    
    @media (min-width: 891px) and (max-width: 1024px) {
      font-size: 1.4rem;
    }
    
    @media (min-width: 1025px) and (max-width: 1440px) {
      font-size: 1.8rem;
    }
    
    @media (min-width: 1441px) and (max-width: 1920px) {
      font-size: 2rem;
    }
    
    @media (min-width: 1921px) {
      font-size: 2.2rem;
    }
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(20, 20, 20, 0.95);
  padding: 2rem;
  border-radius: 8px;
  width: 80%;
  max-width: 800px;
  z-index: 1000;
  display: ${props => props.show ? 'block' : 'none'};
  color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  .image-container {
    display: flex;
    flex-direction: ${props => props.show && props.selectedItem?.title === 'Plant' ? 'column' : 'row'};
    gap: 1rem;
    justify-content: center;
    margin-bottom: 0.5rem;
    align-items: center;
  }

  img {
    width: ${props => props.show && props.selectedItem?.images && props.selectedItem?.title !== 'Plant' ? '45%' : '60%'};
    height: auto;
    max-height: 350px;
    object-fit: contain;
  }

  h3 {
    color: #25abe0;
    text-align: center;
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 0;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: ${props => props.show ? 'block' : 'none'};
`;

const TimelineTitle = styled.h3`
  color: #25abe0;
  font-size: 1.2rem;
  margin: 2rem 0 0.2rem 0;
  text-align: center;
  font-weight: 600;
  
  @media (max-width: 890px) {
    font-size: 1.6rem;
    margin: 1.6rem 0 0.3rem 0;
  }
  
  @media (min-width: 891px) and (max-width: 1024px) {
    font-size: 1rem;
    margin: 1.5rem 0 0.2rem 0;
  }
`;

const TimelineYear = styled.p`
  color: #ffffff;
  font-size: 1rem;
  margin: 0.2rem 0 0 0;
  text-align: center;
  
  @media (max-width: 890px) {
    font-size: 1.3rem;
  }
  
  @media (min-width: 891px) and (max-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const CompetitiveSection = styled.section`
  max-width: 1000px;
  margin: 0 auto 1rem auto;
  padding: 2rem;
  background: #000;
  
  @media (min-width: 901px) and (max-width: 1024px) {
    max-width: 95%;
  }
  
  @media (min-width: 1025px) and (max-width: 1440px) {
    max-width: 95%;
  }
  
  @media (min-width: 2560px) {
    max-width: 1800px;
  }
`;

const CompetitiveTitle = styled.h2`
  font-size: 40px;
  color: #25abe0;
  margin-bottom: 1.2rem;
  text-align: center;
  font-weight: 500;
`;

const CompetitiveDescription = styled.p`
  color: #ffffff;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CompetitiveHoverText = styled.p`
  color: #25abe0;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: -3.5rem;
  
  @media (min-width: 901px) and (max-width: 1024px) {
    margin-bottom: -2rem;
  }
`;

const QuadrantContainer = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
  background: #000;
  border-radius: 16px;
  margin-top: 10rem;
  overflow: visible;


  @media (min-width: 901px) and (max-width: 1024px) {
    height: 800px;
  }
  
  
  @media (min-width: 2560px) {
    height: 800px;
  }
`;

const Box = styled.div`
  position: absolute;
  min-width: 120px;
  max-width: 180px;
  padding: 0.6rem 0.7rem;
  background: #000;
  color: #fff;
  border: 2px solid #FFFF00;
  border-radius: 10px;
  font-size: 0.95rem;
  text-align: center;
  z-index: 3;
  cursor: pointer;
  transition: none;
  box-shadow: none;
  
  @media (min-width: 901px) and (max-width: 1024px) {
    min-width: 150px;
    max-width: 220px;
    padding: 0.8rem 1rem;
    font-size: 1.2rem;
  }
  
  @media (min-width: 2560px) {
    min-width: 150px;
    max-width: 220px;
    padding: 0.8rem 1rem;
    font-size: 1.2rem;
  }
`;

const AlchemityText = styled.div`
  position: absolute;
  left: 54%;
  top: 18%;
  min-width: 300px;
  max-width: 1800px;
  padding: 1rem 1.2rem;
  background: transparent;
  color: #25abe0;
  font-size: 1.4rem;
  font-family: 'Aptos', sans-serif;
  text-align: center;
  z-index: 3;
  white-space: nowrap;
  
  @media (min-width: 901px) and (max-width: 1024px) {
    min-width: 400px;
    max-width: 2000px;
    padding: 1.5rem 1.8rem;
    font-size: 1.8rem;
  }
  
  @media (min-width: 2560px) {
    min-width: 400px;
    max-width: 2000px;
    padding: 1.5rem 1.8rem;
    font-size: 1.8rem;
  }
`;

const Axis = styled.div`
  position: absolute;
  background: ${({ color }) => color};
  z-index: 1;
  ${({ orientation }) => {
    if (orientation === 'horizontal') {
      return 'top: 50%; left: 10%; right: 10%; height: 2px;';
    } else if (orientation === 'vertical') {
      return 'left: 50%; top: 0; bottom: 0; width: 2px;';
    } else if (orientation === 'vertical-negative') {
      return 'left: 50%; top: 50%; bottom: 0; width: 2px;';
    } else if (orientation === 'horizontal-positive') {
      return 'top: 50%; left: 50%; right: 10%; height: 2px;';
    }
    return '';
  }}
`;

const AxisLabel = styled.div`
  position: absolute;
  color: ${props => props.color || '#ffffff'};
  font-weight: 600;
  text-align: center;
  font-size: 1.6rem;
  line-height: 1.4;
  white-space: nowrap;
  z-index: 2;
  ${props => {
    switch(props.position) {
      case 'left-center':
        return `
          left: ${props.offsetX || 0}rem;
          top: 50%;
          transform: translateY(-50%);
        `;
      case 'right-center':
        return `
          right: ${props.offsetX || 0}rem;
          top: 50%;
          transform: translateY(-50%);
        `;
      case 'top-center':
        return `
          top: ${props.offsetY || 0}rem;
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'bottom-center':
        return `
          bottom: ${props.offsetY || 0}rem;
          left: 50%;
          transform: translateX(-50%);
        `;
      default:
        return '';
    }
  }}
`;

const CompetitivePopup = styled.div`
  position: absolute;
  left: 50%;
  top: 110%;
  transform: translateX(-50%);
  background: #181818;
  color: #fff;
  padding: 1.2rem 1.8rem;
  border-radius: 12px;
  font-size: 1rem;
  min-width: 230px;
  max-width: 340px;
  box-shadow: 0 12px 48px rgba(37,171,224,0.25);
  border: none;
  z-index: 100;
  pointer-events: none;
  text-align: center;
`;

const PlantInfoSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 0 auto;
  padding: 1rem;
  background: #000;
`;

const PlantInfoTitle = styled.h2`
  font-size: 40px;
  color: #25abe0;
  margin-bottom: 1.2rem;
  text-align: center;
  font-weight: 500;
`;

const PlantInfoDescription = styled.p`
  color: #ffffff;
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 4rem;
`;

const PlantImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Hotspot = styled(motion.div)`
  position: absolute;
  width: 24px;
  height: 24px;
  cursor: pointer;
  pointer-events: auto;
`;

const HotspotDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #25abe0;
  position: relative;
  box-shadow: 0 0 0 3px rgba(37, 171, 224, 0.3);
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(37, 171, 224, 0.6);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(37, 171, 224, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(37, 171, 224, 0);
    }
  }
`;

const HotspotTooltip = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  border: 1px solid #25abe0;
  min-width: 120px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 10;
  pointer-events: none;
  text-align: center;

  h4 {
    color: #25abe0;
    margin: 0;
    font-size: 0.9rem;
    font-weight: 600;
  }

  ${Hotspot}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const AISection = styled.section`
  max-width: 1200px;
  margin: 0 auto 6rem auto;
  padding: 1rem;
  background: #000;
`;

const AITitle = styled.h2`
  font-size: 40px;
  color: #25abe0;
  margin-bottom: 1.2rem;
  text-align: center;
  font-weight: 500;
`;

const AIDescription = styled.p`
  color: #ffffff;
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 900px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  
  @media (min-width: 2560px) {
    font-size: 2rem;
  }
`;

const AIImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  display: block;
  margin: 2rem auto;
  border-radius: 8px;
  
  @media (max-width: 900px) {
    max-width: 90%;
    margin: 1rem auto;
  }
`;

const ContactButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  grid-column: 1 / -1;
`;

const DescriptionText = styled.p`
  color: #ffffff;
  font-size: 1.6rem;
  text-align: center;
  margin: -2rem auto 3rem auto;
  line-height: 1.6;
  
  @media (max-width: 900px) {
    font-size: 1.3rem;
    margin: -1rem auto 2rem auto;
  }
  
  @media (min-width: 2560px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h3`
  color: #25abe0;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const SectionSpacing = styled.div`
  margin: 4rem auto;
  max-width: 1200px;
  padding: 0 2rem;
  
  @media (max-width: 900px) {
    margin: 3rem auto;
    padding: 0 1.5rem;
  }
  
  @media (min-width: 2560px) {
    max-width: 2000px;
    margin: 6rem auto;
  }
`;

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

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

const timelineItemVariants = {
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

function Products() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredBox, setHoveredBox] = useState(null);
  const [popupPos, setPopupPos] = useState({ x: null, y: null, label: null });
  const [selectedHotspot, setSelectedHotspot] = useState(null);
  const [gtchem1Popup, setGtchem1Popup] = useState(false);
  const [gtchem2Popup, setGtchem2Popup] = useState(false);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const heroVideoRef = useRef(null);
  const gtchem11VideoRef = useRef(null);
  const gtchem12VideoRef = useRef(null);
  // Animation refs for sections
  const [valueRef, valueInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [gtchemRef, gtchemInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [facilityRef, facilityInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aiRef, aiInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [roadmapRef, roadmapInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [competitiveRef, competitiveInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
        }
      });
    }, { threshold: 0.5 });

    if (heroVideoRef.current) observer.observe(heroVideoRef.current);
    if (gtchem11VideoRef.current) observer.observe(gtchem11VideoRef.current);
    if (gtchem12VideoRef.current) observer.observe(gtchem12VideoRef.current);

    return () => {
      if (heroVideoRef.current) observer.unobserve(heroVideoRef.current);
      if (gtchem11VideoRef.current) observer.unobserve(gtchem11VideoRef.current);
      if (gtchem12VideoRef.current) observer.unobserve(gtchem12VideoRef.current);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageClick = (item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  const hotspotDetails = {
    0: {
      title: "Liquid Storage Tanks",
      description: ""
    },
    1: {
      title: "Modular Skid",
      description: ""
    },
    2: {
      title: "Offtake",
      description: ""
    },
    3: {
      title: "Control Center",
      description: ""
    },
    4: {
      title: "Feedstock delivery",
      description: ""
    }
  };

  // Quadrant box data
  const boxes = [
    // Top left (lower cost, high CO2)
    { label: 'Alchemity', x: 82, y: 2, type: 'logo' },
    { label: 'Smaller GTL Facilities', x: 30, y: 32 },
    // Top right (lower cost, low CO2)
    { label: 'Biomass Gasification', x: 52, y: 54 },
    { label: 'Photo-catalytic Reactors', x: 80, y: 57, tabletX: 75 },
    { label: 'Pyrolysis', x: 84, y: 70, tabletX: 80 },
    { label: 'Electrolyzers with renewables', x: 72, y: 81, tabletX: 70 },
    { label: 'Plasma assisted reactions', x: 55, y: 65 },
    // Bottom left (higher cost, high CO2)
    { label: 'Electrolyzers on grid', x: 2, y: 90, tabletX: 5 },
    { label: 'Ethylene Steam Crackers', x: 15, y: 74 },
    { label: 'Steam Methane Reforming (SMRs)', x: 28, y: 84 },
  ];

  // Add your hover text here
  const hoverTextData = {
    'Electrolyzers on grid': 'Electrolyzers on grid produce ~22 kg CO₂/kg H₂ due to the energy intensive process to split water and operate balance of plant (60-65 kWh/kg at a system level).',
    'Ethylene Steam Crackers': 'Add text here',
    'Steam Methane Reforming (SMRs)': 'Add text here',
    'Smaller GTL Facilities': 'Add text here',
    'Biomass Gasification': 'Add text here',
    'Photo-catalytic Reactors': 'Add text here',
    'Pyrolysis': 'Add text here',
    'Electrolyzers with renewables': 'Add text here',
    'Plasma assisted reactions': 'Add text here'
  };

  // Helper to get box by index
  const getBoxByIdx = idx => boxes[idx];

  const handleHotspotClick = (index) => {
    setSelectedHotspot(selectedHotspot === index ? null : index);
  };

  const GTChem1Popup = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 1024);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
      <Modal 
        show={gtchem1Popup} 
        onClose={() => setGtchem1Popup(false)}
        title="GTChem Products"
        showCloseButton={true}
        size="xxlarge"
      >
        <div style={{ 
          padding: '0.5rem 1.5rem 0.5rem 1.5rem', 
          color: '#ffffff',
          maxHeight: '80vh',
          overflowY: 'auto',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row', // Row for desktop/tablet, column for mobile
            alignItems: 'flex-start',
            gap: isMobile ? '1.5rem' : '3rem',
            maxWidth: '1400px',
            margin: '0 auto',
            width: '100%'
          }}>
            {/* Image Section */}
            <div style={{
              width: isMobile ? '100%' : '55%', // Full width on mobile, 40% on desktop
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0
            }}>
              <img 
                src={skiddo} 
                alt="GTChem Skid" 
                style={{
                  width: '100%',
                  maxWidth: isMobile ? '450px' : '600px',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '8px'
                }} 
              />
            </div>
            
            {/* Text Section */}
            <div style={{
              width: isMobile ? '100%' : '55%', // Full width on mobile, 55% on desktop
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <h3 style={{ 
                color: '#25abe0', 
                fontSize: '1.6rem', 
                marginBottom: '1.5rem',
                fontWeight: '600',
                textAlign: isMobile ? 'center' : 'left'
              }}>GTChem-1</h3>
              
              <p style={{ 
                fontSize: '1.3rem', 
                lineHeight: '1.6', 
                marginBottom: '1rem',
                color: '#ffffff',
                textAlign: 'left'
              }}>
                GTChem-1 is Alchemity's first flagship product—a modular, turnkey skid-mounted platform designed to produce clean, drop-in chemicals and fuels with zero CO₂ emissions. GTChem-1 enables flexible deployment through a series of integrated modular skids, making it ideal for both greenfield and brownfield installations producing chemicals at quantities between 1 to 40 tons per day (TPD).
              </p>
              
              <p style={{ 
                fontSize: '1.3rem', 
                lineHeight: '1.6', 
                marginBottom: '2rem',
                color: '#ffffff',
                textAlign: 'left'
              }}>
                The platform delivers high operational efficiency with up to 95% system availability and is engineered with multiple layers of safety and redundancy. GTChem-1 offers product flexibility, low maintenance requirements, and streamlined module augmentation to meet evolving production needs. Alchemity is looking for investment and accepting pre-orders.
              </p>
              
              {/* Button */}
              <div style={{
                display: 'flex',
                justifyContent: isMobile ? 'center' : 'flex-start',
                width: '100%'
              }}>
                <Link 
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.8rem',
                    padding: '1rem 2rem',
                    backgroundColor: '#25abe0',
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
                    width: 'fit-content',
                    minWidth: '180px'
                  }}
                  className={styles.preOrderButton}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#0077b5';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#25abe0';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Pre-Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

  // Responsive UI for GTChem videos
  const videoContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className={styles.responsiveContainer}>
      <div className={styles.heroSection}>
        <PageHero 
          backgroundVideoUrl={productVideo}
          title="Products"
          videoRef={heroVideoRef}
        />
      </div>
      <div style={{ 
        padding: 'var(--section-padding)', 
        backgroundColor: '#000000', 
        overflow: 'hidden',
        width: '100%',
        position: 'relative',
        boxSizing: 'border-box'
      }}>
        {isTablet ? (
          <>
            <h1 style={{
              fontSize: '60px',
              color: '#ffffff',
              marginTop: '-1rem',
              textAlign: 'center',
              fontWeight: '200',
              textShadow: '0 0 20px rgba(37, 171, 224, 0.8)'
            }}>Product</h1>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              margin: '2rem 0 5rem 0',
              marginLeft: '0.3rem'
            }}>
              <video 
                ref={heroVideoRef}
                src={productVideo} 
                style={{
                  width: '100%',
                  maxWidth: '95%',
                  height: 'auto'
                }} 
                muted 
                playsInline
                autoPlay
              />
            </div>
          </>
        ) : (
          <>
            {/* New Product Title and Video Section */}
            <div className={styles.productHeroSection}>
              <h1 className={styles.productTitle} style={{ 
                fontWeight: '200', 
                fontSize: '60px',
                textShadow: '0 0 20px rgba(37, 171, 224, 0.8)'
              }}>
                Product
              </h1>
              <div className={styles.productVideoContainer}>
                <video 
                  ref={heroVideoRef}
                  src={productVideo}
                  className={styles.productVideo}
                  muted
                  playsInline
                />
              </div>
            </div>
          </>
        )}

        <motion.div ref={valueRef} variants={sectionVariants} initial="hidden" animate={valueInView ? "visible" : "hidden"}>
          <div className={styles.sectionContainer}>
            <h2 style={{
              fontSize: '40px',
              color: '#25abe0',
              marginBottom: '2.5rem',
              textAlign: 'center',
              fontWeight: '500',
              width: '100%'
            }}>Larger Product Output, Lower Emissions, Higher Efficiency </h2>
            <div className={styles.valuePropositionContainer}>
              {[
                { icon: <FaShieldAlt className="icon" />, title:  "Energy Security", description: "Platform technology only requiring electric power for balance of plant." },
                { icon: <FaDollarSign className="icon" />, title: "No Clean Premium", description: "Simplified design, modularity, higher efficiency and reduced capital risk." },
                { icon: <FaChartLine className="icon" />, title:  "Domestic Growth", description: "Transforming GHGs from wasted resources to valuable products." }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={valueInView ? "visible" : "hidden"}
                  style={{ width: '100%' }}
                >
                  <Card>
                    {card.icon}
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div ref={gtchemRef} variants={sectionVariants} initial="hidden" animate={gtchemInView ? "visible" : "hidden"}>
          <div className={styles.sectionContainer}>
            <h2 style={{
              fontSize: '40px',
              color: '#25abe0',
              marginBottom: '2.5rem',
              textAlign: 'center',
              fontWeight: '500'
            }} className={styles.sectionTitle}> Modular System Offering</h2>
            
            <DescriptionText style={{ marginBottom: '0rem' }}>
            Turn-key skid-mounted platform designed for co-located production.
            </DescriptionText>

            <div className={styles.gtchemContainer}>
              {/* Left Side */}
              <div className={styles.gtchemLeftSide} style={videoContainerStyle}>
                <div className={styles.videoContainer} style={{ 
                  marginBottom: '1rem',
                  marginTop: '50px',
                  height: '400px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  backgroundColor: '#000000'
                }}>
                  <video 
                    ref={gtchem11VideoRef}
                    src={gtchem11Video}
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '20px'
                    }}
                    muted
                    playsInline
                    className={styles.gtchemVideo}
                  />
                </div>
              </div>

              {/* Right Side */}
              <div className={styles.gtchemRightSide} style={videoContainerStyle}>
                <div className={styles.videoContainer} style={{ 
                  marginBottom: '1rem',
                  marginTop: '11px',
                  height: '450px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  backgroundColor: '#000000'
                }}>
                  <video 
                    ref={gtchem12VideoRef}
                    src={gtchem12Video}
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '20px'
                    }}
                    muted
                    playsInline
                    className={styles.gtchemVideo}
                  />
                </div>
              </div>
            </div>

            <div className={styles.gtchemButtonContainer}>
              <div style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'center',
                width: '100%'
              }}>
                <button 
                  onClick={() => setGtchem1Popup(true)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.8rem',
                    padding: '1rem 2rem',
                    backgroundColor: '#25abe0',
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
                    width: 'fit-content',
                    minWidth: '130px'
                  }}
                  className={styles.preOrderButton}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#0077b5';
                    e.target.style.boxShadow = '0 15px 25px rgba(0, 0, 0, 0.4)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.backgroundImage = 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)';
                    e.target.style.backgroundPosition = '200% center';
                    e.target.style.backgroundSize = '200% 100%';
                    e.target.style.animation = 'gradientMove 1.5s ease infinite';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#25abe0';
                    e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.backgroundImage = 'none';
                    e.target.style.animation = 'none';
                  }}
                >
                  Pre-Order Now
                </button>
                <Link 
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.8rem',
                    padding: '1rem 2rem',
                    backgroundColor: '#25abe0',
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
                    width: 'fit-content',
                    minWidth: '130px'
                  }}
                  className={styles.preOrderButton}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#0077b5';
                    e.target.style.boxShadow = '0 15px 25px rgba(0, 0, 0, 0.4)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.backgroundImage = 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)';
                    e.target.style.backgroundPosition = '200% center';
                    e.target.style.backgroundSize = '200% 100%';
                    e.target.style.animation = 'gradientMove 1.5s ease infinite';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#25abe0';
                    e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.backgroundImage = 'none';
                    e.target.style.animation = 'none';
                  }}
                >
                  Invest Now
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div ref={facilityRef} variants={sectionVariants} initial="hidden" animate={facilityInView ? "visible" : "hidden"}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.PlantInfoTitle}>Facility at Scale</h2>
            <p className={styles.PlantInfoDescription}>
              Modular interconnection for simple augmentation and easy maintenance.
            </p>
            <p className={styles.PlantInfoDescription}>
            </p>
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <ImageContainer className={styles.plantImageContainer}>
                <PlantImage 
                  src={plantImage} 
                  alt="3D Design of our Chemical Plant" 
                  className={styles.plantImage}
                  style={{
                    width: '100%',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    display: 'block'
                  }}
                />
                <ImageOverlay>
                  <Hotspot
                    style={{ bottom: '45%', left: '32%' }}
                    whileHover={{ scale: 1.2 }}
                    className={styles.hotspot}
                  >
                    <HotspotDot />
                    <HotspotTooltip>
                      <h4>{hotspotDetails[0].title}</h4>
                    </HotspotTooltip>
                  </Hotspot>
                  <Hotspot
                    style={{ bottom: '38%', left: '18%' }}
                    whileHover={{ scale: 1.2 }}
                    className={styles.hotspot}
                  >
                    <HotspotDot />
                    <HotspotTooltip>
                      <h4>{hotspotDetails[3].title}</h4>
                    </HotspotTooltip>
                  </Hotspot>
                  <Hotspot
                    style={{ bottom: '52%', left: '20%' }}
                    whileHover={{ scale: 1.2 }}
                    className={styles.hotspot}
                  >
                    <HotspotDot />
                    <HotspotTooltip>
                      <h4>{hotspotDetails[4].title}</h4>
                    </HotspotTooltip>
                  </Hotspot>
                  <Hotspot
                    style={{ top: '40%', left: '75%' }}
                    whileHover={{ scale: 1.2 }}
                    className={styles.hotspot}
                  >
                    <HotspotDot />
                    <HotspotTooltip style={{ left: '-100px' }}>
                      <h4>{hotspotDetails[1].title}</h4>
                    </HotspotTooltip>
                  </Hotspot>
                  <Hotspot
                    style={{ top: '70%', left: '40%' }}
                    whileHover={{ scale: 1.2 }}
                    className={styles.hotspot}
                  >
                    <HotspotDot />
                    <HotspotTooltip>
                      <h4>{hotspotDetails[2].title}</h4>
                    </HotspotTooltip>
                  </Hotspot>
                </ImageOverlay>
              </ImageContainer>
            </motion.div>
          </div>
        </motion.div>

        <motion.div ref={roadmapRef} variants={sectionVariants} initial="hidden" animate={roadmapInView ? "visible" : "hidden"}>
          <RoadmapContainer>
            <RoadmapTitle>Product Development Roadmap</RoadmapTitle>
            <RoadmapDescription>
              Deploying modular turnkey systems followed by large integrated facilities.
            </RoadmapDescription>
            <ClickToLearnMore>Click on each TRL card to learn more.</ClickToLearnMore>
            
            <TimelineContainer>
              <TimelineSections>
                {[
                  { trl: "TRL 3", title: "Single Tube", year: "2024", image: single2, description: "Batches of reactor membranes." },
                  { trl: "TRL 4", title: "Tube Bundle", year: "2025", image: extEval, description: "First working bundle prototype to optimize reactor core conditions." },
                  { trl: "TRL 5", title: "Benchtop System", year: "2025-2026", image: benchtop1, description: "Second working prototype to optimize reactor bundle integration with BOP." },
                  { trl: "TRL 6/7", title: "Modular Skids", year: "2027+", images: [skid1, skid2], description: "Modular turn-key skid system enabling 1-40 tons per day facilities." },
                  { trl: "TRL 8/9", title: "Plant", year: "2030+", images: [plant1, plant22], description: "Large-scale plant building block to enable 100+ ton per day facilities." }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={timelineItemVariants}
                    initial="hidden"
                    animate={roadmapInView ? "visible" : "hidden"}
                  >
                    <TimelineSection>
                      <TimelineImage 
                        onClick={() => handleImageClick({
                          image: item.image,
                          images: item.images,
                          title: item.title,
                          year: item.year,
                          description: item.description
                        })}
                      >
                        <span>{item.trl}</span>
                      </TimelineImage>
                      <TimelineTitle>{item.title}</TimelineTitle>
                      <TimelineYear>{item.year}</TimelineYear>
                    </TimelineSection>
                  </motion.div>
                ))}
              </TimelineSections>
            </TimelineContainer>
          </RoadmapContainer>
        </motion.div>

        <motion.div ref={competitiveRef} variants={sectionVariants} initial="hidden" animate={competitiveInView ? "visible" : "hidden"}>
          <div className={competitiveStyles.competitiveSection} style={{ marginTop: '2rem' }}>
            <CompetitiveTitle>Unmatched Modularity & Flexibility</CompetitiveTitle>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              marginTop: '2rem',
              width: '100%'
            }}>
              <img 
                src={companal} 
                alt="Competitive Analysis" 
                style={{
                  width: '100%',
                  maxWidth: '1200px',
                  height: 'auto',
                  borderRadius: '8px'
                }}
              />
            </div>
          </div>
        </motion.div>

        <Overlay show={selectedItem !== null} onClick={handleClosePopup} />
        <Modal
          show={selectedItem !== null}
          onClose={handleClosePopup}
          title={selectedItem ? `${selectedItem.title} (${selectedItem.year})` : ''}
          size={selectedItem?.title === 'Plant' ? "xlarge" : "xlarge"}
          showCloseButton={true}
        >
          <div style={{ 
            marginBottom: '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
          }} className={styles.itemModal}>
            <div style={{ 
              display: 'flex',
              flexDirection: 'row',
              gap: '1rem',
              justifyContent: 'center',
              marginBottom: '0rem',
              alignItems: 'center',
              width: '100%'
            }} className={styles.modalImageContainer}>
              {selectedItem?.images ? (
                selectedItem.images.map((image, index) => (
                  <img 
                    key={index} 
                    src={image} 
                    alt={`${selectedItem.title} ${index + 1}`}
                    style={{
                      width: selectedItem?.title === 'Plant' ? '50%' : '45%',
                      maxHeight: '350px',
                      objectFit: 'contain',
                      borderRadius: selectedItem?.title === 'Plant' || selectedItem?.title === 'Modular Skids' ? '0' : '8px',
                      margin: '0 auto'
                    }}
                    className={styles.modalImage}
                  />
                ))
              ) : (
                <img 
                  src={selectedItem?.image} 
                  alt={selectedItem?.title}
                  style={{
                    width: '60%',
                    maxHeight: '350px',
                    objectFit: 'contain',
                    borderRadius: selectedItem?.title === 'Plant' || selectedItem?.title === 'Modular Skids' ? '0' : '8px',
                    margin: '0 auto'
                  }}
                  className={styles.modalImage}
                />
              )}
            </div>
            <div style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }} className={styles.modalTextContainer}>
              <p style={{ 
                color: '#ffffff', 
                fontSize: '1.4rem',
                lineHeight: '1.6',
                marginBottom: '0',
                textAlign: 'center',
                maxWidth: '800px',
                width: '100%'
              }} className={styles.modalDescription}>
                {selectedItem?.description}
              </p>
            </div>
          </div>
        </Modal>

        {selectedHotspot !== null && (
          <Modal
            show={selectedHotspot !== null}
            onClose={() => setSelectedHotspot(null)}
            title={hotspotDetails[selectedHotspot].title}
            size="medium"
            showCloseButton={true}
          >
            <div style={{
              color: '#ffffff',
              fontSize: '18px',
              lineHeight: '1.8',
              marginBottom: '0',
              paddingLeft: '0',
              listStyle: 'none',
            }} className={styles.hotspotModalContent}>
              {hotspotDetails[selectedHotspot].description}
            </div>
          </Modal>
        )}

        <GTChem1Popup />
      </div>
    </div>
  );
}

export default Products;