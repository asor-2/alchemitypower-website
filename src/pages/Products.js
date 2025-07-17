import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import productsBg from "../components/images/plant3.png";
import styled from "styled-components";
import single1 from "../components/images/single1.png";
import single2 from "../components/images/single2.png";
import bundle1 from "../components/images/bundle1.png";
import bundle2 from "../components/images/bundle2.png";   
import benchtop1 from "../components/images/benchtop1_new.png";
import benchtop2 from "../components/images/benchtop2.png";
import skid1 from "../components/images/skid1_new.png";
import skid2 from "../components/images/skid2_new.png";
import plant1 from "../components/images/plant1_new.png";
import plant22 from "../components/images/plant22.jpg";
import alchemityLogo from "../components/images/alchemity_logo_w_text.png";
import extEval from "../components/images/ExtEval.png";
import productVideo from "../components/images/producthero.mov";
import placeholder from "../components/images/AI.png";
import plantImage from "../components/images/plantimage_new_new.png";
import styles from "./Products.module.css";
import competitiveStyles from "./CompetitiveAnalysis.module.css";
import herotech from "../components/images/headeranim.mov";

import gtchem11Video from "../components/images/gtchem11_static.png";
import gtchem12Video from "../components/images/gtchem12_static.png";
import gtchem21Image from "../components/images/gtchem21.png";
import gtchem22Image from "../components/images/gtchem22.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import companim from "../components/images/companim.mov";
import {
  FaArrowRight,
  FaShieldAlt,
  FaChartLine,
  FaIndustry,
  FaDollarSign,
} from "react-icons/fa";
import Modal from "../components/Modal";
import skiddo from "../components/images/skiddo.png";
import companal from "../components/images/grid_transparent_bg_new.png";

import SEO from "../components/SEO/SEO";
import { seoData } from "../config/seoConfig";

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

const SectionWrapper = styled.section`
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  background-color: ${(props) =>
    props.bgColor || "transparent"}; /* Changed from '#000000' */
  padding: 3rem 0; /* Changed from '4rem 0' */
  overflow: hidden; /* Add this */
  position: relative; /* Add this */
  box-sizing: border-box; /* Add this */
`;

// Content container to maintain your original margins
const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Card = styled.div`
  background-color: rgba(31, 42, 48, 0.7);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border: 5px double rgba(116, 186, 198, 0.6);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 20px rgba(37, 171, 224, 0.7);
  }

  // .icon {
  //   font-size: 2.5rem;
  //   color: '#3F5F6B';
  //   margin-bottom: 1rem;
  // }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: left;
    background: linear-gradient(90deg, #6fcffb, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    text-align: center;
  }

  p {
    line-height: 1.6;
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  // @media (max-width: 890px) {
  //   padding: 3rem 2.5rem 2rem 2.5rem;
  //   width: 100%;
  //   max-width: 600px;
  //   border-radius: 12px;

  //   .icon {
  //     font-size: 4rem;
  //     margin-bottom: 2rem;
  //   }

  //   h3 {
  //     font-size: 2.4rem;
  //     margin-bottom: 1.5rem;
  //   }

  //   p {
  //     font-size: 1.8rem;
  //     line-height: 1.8;
  //     margin-bottom: 2rem;
  //   }
  // }
`;

const RoadmapContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const RoadmapTitle = styled.h2`
  font-size: 2.5rem;
  color: #6fcffb;
  margin-bottom: 1.2rem;
  text-align: center;
  font-weight: 400;
`;

const RoadmapDescription = styled.p`
  color: #d1ecf7;
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;
`;

const ClickToLearnMore = styled.p`
  color: #d1ecf7;
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
    align-items: center;
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
  margin-left: ${({ index }) => (index > 0 ? "-40px" : "0")};

  @media (max-width: 890px) {
    width: 100%;
    min-width: auto;
    margin-top: 0;
    padding: 0;
    margin-left: 0;
    align-items: center;
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
  width: 160px;
  height: 160px;
  background: ${({ bg }) => bg || "#10171A"};
  border-radius: 16px 0 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    box-shadow 0.3s,
    transform 0.3s,
    border 0.3s;
  position: relative;
  cursor: pointer;
  margin: 0 auto;
  box-shadow: ${({ highlight }) =>
    highlight
      ? "0 0 8px 2px #dbcea4, 0 0 0 2px #25abe0"
      : "0 2px 2px rgba(37, 171, 224, 0.10)"};
  transform: ${({ highlight }) => (highlight ? "scale(1.06)" : "none")};
  z-index: ${({ highlight }) => (highlight ? 10 : 1)};
  border: ${({ highlight }) =>
    highlight ? "2px solid #dbcea4" : "1px solid rgba(255,255,255,0.10)"};
  opacity: ${({ highlight }) => (highlight ? 1 : 0.9)};
  clip-path: polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%);

  &:hover {
    // box-shadow: 0 0 24px 4px #25abe0, 0 8px 32px rgba(37, 171, 224, 0.18);
    transform: translateY(-5px) scale(1.015);
    opacity: 1;
  }

  span {
    color: #fff;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
    @media (max-width: 890px) {
      transform: rotate(-90deg);
    }
  }

  @media (max-width: 890px) {
    transform: rotate(90deg);
    &:hover {
      transform: rotate(90deg) translateY(-5px) scale(1.015);
    }
  }
`;

const trlGradients = [
  "linear-gradient(135deg,rgb(32, 101, 147),rgb(26, 93, 144))", // TRL3
  "linear-gradient(135deg,rgb(74, 183, 242),rgb(13, 172, 186))", // TRL4
  "linear-gradient(135deg,rgb(74, 183, 242),rgb(13, 172, 186))", // TRL5 (highlight)
  "linear-gradient(135deg,rgb(32, 101, 147),rgb(26, 93, 144))", // TRL6/7
  "linear-gradient(135deg,rgb(32, 101, 147),rgb(26, 93, 144))", // TRL8/9
];

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  // transform: translate(-50%, -50%);
  background: rgba(20, 20, 20, 0.95);
  padding: 2rem;
  border-radius: 8px;
  width: 80%;
  max-width: 800px;
  z-index: 1000;
  display: ${(props) => (props.show ? "block" : "none")};
  color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  .image-container {
    display: flex;
    flex-direction: ${(props) =>
      props.show && props.selectedItem?.title === "Plant" ? "column" : "row"};
    gap: 1rem;
    justify-content: center;
    margin-bottom: 0.5rem;
    align-items: center;
  }

  img {
    width: ${(props) =>
      props.show &&
      props.selectedItem?.images &&
      props.selectedItem?.title !== "Plant"
        ? "45%"
        : "60%"};
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
  display: ${(props) => (props.show ? "block" : "none")};
`;

const TimelineTitle = styled.h3`
  color: #c0dbed;
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
  fontsize: "3rem";
  fontweight: "400";
  color: #6fcffb;
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
  border: 2px solid #ffff00;
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
  font-family: "Aptos", sans-serif;
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
    if (orientation === "horizontal") {
      return "top: 50%; left: 10%; right: 10%; height: 2px;";
    } else if (orientation === "vertical") {
      return "left: 50%; top: 0; bottom: 0; width: 2px;";
    } else if (orientation === "vertical-negative") {
      return "left: 50%; top: 50%; bottom: 0; width: 2px;";
    } else if (orientation === "horizontal-positive") {
      return "top: 50%; left: 50%; right: 10%; height: 2px;";
    }
    return "";
  }}
`;

const AxisLabel = styled.div`
  position: absolute;
  color: ${(props) => props.color || "#ffffff"};
  font-weight: 600;
  text-align: center;
  font-size: 1.6rem;
  line-height: 1.4;
  white-space: nowrap;
  z-index: 2;
  ${(props) => {
    switch (props.position) {
      case "left-center":
        return `
          left: ${props.offsetX || 0}rem;
          top: 50%;
          transform: translateY(-50%);
        `;
      case "right-center":
        return `
          right: ${props.offsetX || 0}rem;
          top: 50%;
          transform: translateY(-50%);
        `;
      case "top-center":
        return `
          top: ${props.offsetY || 0}rem;
          left: 50%;
          transform: translateX(-50%);
        `;
      case "bottom-center":
        return `
          bottom: ${props.offsetY || 0}rem;
          left: 50%;
          transform: translateX(-50%);
        `;
      default:
        return "";
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
  box-shadow: 0 12px 48px rgba(37, 171, 224, 0.25);
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
    content: "";
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
  color: #d1ecf7;
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

const PageWrapper = styled.div`
  background: linear-gradient(120deg, #000000, #1a3a4a, #000000 70%);
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`;

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const timelineItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function Products() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredBox, setHoveredBox] = useState(null);
  const [popupPos, setPopupPos] = useState({ x: null, y: null, label: null });
  const [selectedHotspot, setSelectedHotspot] = useState(null);
  const [gtchem1Popup, setGtchem1Popup] = useState(false);
  const [gtchem2Popup, setGtchem2Popup] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const heroVideoRef = useRef(null);
  const gtchem11VideoRef = useRef(null);
  const gtchem12VideoRef = useRef(null);
  // Animation refs for sections
  const [valueRef, valueInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [gtchemRef, gtchemInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [facilityRef, facilityInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [aiRef, aiInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [roadmapRef, roadmapInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [competitiveRef, competitiveInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // useEffect(() => {
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach(entry => {
  //     const video = entry.target;
  //     // Only play if it's a video element
  //     if (entry.isIntersecting && video.tagName === 'VIDEO') {
  //       video.currentTime = 0;
  //       video.play();
  //       video.addEventListener('timeupdate', () => {
  //         if (video.currentTime >= video.duration - 0.1) {
  //           video.pause();
  //         }
  //       });
  //     }
  //   });
  // }, { threshold: 0.5 });

  // // Only observe refs that are actually video elements
  // if (heroVideoRef.current && heroVideoRef.current.tagName === 'VIDEO') observer.observe(heroVideoRef.current);
  // // gtchem11VideoRef is now an image, so do NOT observe it
  // if (gtchem12VideoRef.current && gtchem12VideoRef.current.tagName === 'VIDEO') observer.observe(gtchem12VideoRef.current);

  // return () => {
  //   if (heroVideoRef.current && heroVideoRef.current.tagName === 'VIDEO') observer.unobserve(heroVideoRef.current);
  //   if (gtchem12VideoRef.current && gtchem12VideoRef.current.tagName === 'VIDEO') observer.unobserve(gtchem12VideoRef.current);
  // };
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1024);
      setIsTablet(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
      description: "",
    },
    1: {
      title: "Modular Skid",
      description: "",
    },
    2: {
      title: "Offtake",
      description: "",
    },
    3: {
      title: "Control Center",
      description: "",
    },
    4: {
      title: "Feedstock delivery",
      description: "",
    },
  };

  // Quadrant box data
  const boxes = [
    // Top left (lower cost, high CO2)
    { label: "Alchemity", x: 82, y: 2, type: "logo" },
    { label: "Smaller GTL Facilities", x: 30, y: 32 },
    // Top right (lower cost, low CO2)
    { label: "Biomass Gasification", x: 52, y: 54 },
    { label: "Photo-catalytic Reactors", x: 80, y: 57, tabletX: 75 },
    { label: "Pyrolysis", x: 84, y: 70, tabletX: 80 },
    { label: "Electrolyzers with renewables", x: 72, y: 81, tabletX: 70 },
    { label: "Plasma assisted reactions", x: 55, y: 65 },
    // Bottom left (higher cost, high CO2)
    { label: "Electrolyzers on grid", x: 2, y: 90, tabletX: 5 },
    { label: "Ethylene Steam Crackers", x: 15, y: 74 },
    { label: "Steam Methane Reforming (SMRs)", x: 28, y: 84 },
  ];

  // Add your hover text here
  const hoverTextData = {
    "Electrolyzers on grid":
      "Electrolyzers on grid produce ~22 kg CO₂/kg H₂ due to the energy intensive process to split water and operate balance of plant (60-65 kWh/kg at a system level).",
    "Ethylene Steam Crackers": "Add text here",
    "Steam Methane Reforming (SMRs)": "Add text here",
    "Smaller GTL Facilities": "Add text here",
    "Biomass Gasification": "Add text here",
    "Photo-catalytic Reactors": "Add text here",
    Pyrolysis: "Add text here",
    "Electrolyzers with renewables": "Add text here",
    "Plasma assisted reactions": "Add text here",
  };

  // Helper to get box by index
  const getBoxByIdx = (idx) => boxes[idx];

  const handleHotspotClick = (index) => {
    setSelectedHotspot(selectedHotspot === index ? null : index);
  };

  const GTChem1Popup = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 1024);
        setIsTablet(window.innerWidth <= 1024);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <Modal
        show={gtchem1Popup}
        onClose={() => setGtchem1Popup(false)}
        title="GTChem Products"
        showCloseButton={true}
        size="xxlarge"
      >
        <div
          style={{
            padding: "0.5rem 1.5rem 0.5rem 1.5rem",
            color: "#ffffff",
            maxHeight: "80vh",
            overflowY: "auto",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "stretch",
              gap: isMobile ? "2rem" : "3rem",
              width: "100%",
              maxWidth: "1100px",
              margin: "0 auto",
              padding: isMobile ? "1rem 0.5rem" : "2rem 1.5rem",
              boxSizing: "border-box",
            }}
          >
            {/* Image Section */}
            <div
              style={{
                flex: isMobile ? "0 0 auto" : "1 1 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: isMobile ? "100%" : "50%",
                minWidth: 0,
              }}
            >
              <img
                src={gtchem12Video}
                alt="GTChem Skid"
                style={{
                  width: "100%",
                  height: isMobile ? "auto" : "100%",
                  maxWidth: isMobile ? "450px" : "100%",
                  maxHeight: isMobile ? "300px" : "500px",
                  objectFit: "contain",
                  margin: 0,
                  display: "block",
                  scale: "1.4",
                }}
              />
            </div>

            {/* Text Section */}
            <div
              style={{
                flex: isMobile ? "0 0 auto" : "1 1 0",
                width: isMobile ? "100%" : "0%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minWidth: 0,
                marginRight: isMobile || isTablet ? "auto" : "-1.1rem",
              }}
            >
              <h3
                style={{
                  color: "#25abe0",
                  fontSize: "1.6rem",
                  marginBottom: "0rem",
                  marginTop: isMobile || isTablet ? "1.5rem" : "-1rem",
                  fontWeight: "600",
                  textAlign: isMobile || isTablet ? "center" : "left",
                }}
              >
                GTChem-1
              </h3>

              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.6",
                  marginBottom: "0rem",
                  color: "#ffffff",
                  textAlign: isMobile || isTablet ? "center" : "left",
                }}
              >
                GTChem-1 is Alchemity's first flagship product—a modular,
                turnkey skid-mounted platform designed to produce clean, drop-in
                chemicals and fuels with zero CO₂ emissions. GTChem-1 enables
                flexible deployment through a series of integrated modular
                skids, making it ideal for both greenfield and brownfield
                installations producing chemicals at quantities between 1 to 40
                tons per day (TPD).
              </p>

              <p
                style={{
                  fontSize: "1.3rem",
                  lineHeight: "1.6",
                  // marginBottom: '2rem',
                  color: "#ffffff",
                  textAlign: isMobile || isTablet ? "center" : "left",
                }}
              >
                The platform delivers high operational efficiency with up to 95%
                system availability and is engineered with multiple layers of
                safety and redundancy. GTChem-1 offers product flexibility, low
                maintenance requirements, and streamlined module augmentation to
                meet evolving production needs. Alchemity is looking for
                investment and accepting pre-orders.
              </p>

              {/* Button */}
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    isMobile || isTablet ? "center" : "flex-start",
                  width: "100%",
                }}
              >
                <Link
                  to="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.8rem",
                    padding: "1rem 2rem",
                    backgroundColor: "#25abe0",
                    color: "white",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    textDecoration: "none",
                    borderRadius: "50px",
                    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                    border: "2px solid transparent",
                    cursor: "pointer",
                    width: "fit-content",
                    minWidth: "180px",
                  }}
                  className={styles.preOrderButton}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#0077b5";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#25abe0";
                    e.target.style.transform = "translateY(0)";
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <PageWrapper>
        <div className={styles.responsiveContainer}>
          <SEO
            title={seoData.products.title}
            description={seoData.products.description}
            keywords={seoData.products.keywords}
            image={seoData.products.image}
            url="/products"
          />

          <div
            style={{
              background: "transparent",
              width: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Centered header without video */}
            <div
              style={{
                padding: "3.5rem 2rem 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
              <h1
                style={{
                  fontSize: "4rem",
                  fontWeight: "600",
                  color: "#ffffff",
                  marginBottom: "1rem",
                  letterSpacing: "-0.03em",
                  maxWidth: "1200px",
                  margin: "0 auto 1rem",
                  textAlign: "center",
                }}
              >
                <span>Learn about our </span>
                <span
                  style={{
                    background: "linear-gradient(120deg, #25abe0, #dbcea4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Products
                </span>
              </h1>

              <p
                style={{
                  fontSize: "1.5rem",
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: "700px",
                  margin: "0 auto 1rem",
                  lineHeight: "1.6",
                  textAlign: "center",
                }}
              >
                Single modular skid for production of various fuels & chemicals
              </p>
            </div>

            {/* LINE DIVIDER */}
            <div
              style={{
                width: "100%",
                maxWidth: "1200px",
                margin: "2.5rem auto",
                height: "1.5px",
                background:
                  "linear-gradient(to right, transparent, rgba(37, 171, 224, 0.3), transparent)",
              }}
            ></div>
          </div>

          <div
            style={{
              padding: "var(--section-padding)",
              backgroundColor: "transparent",
              overflow: "hidden",
              width: "100%",
              position: "relative",
              boxSizing: "border-box",
            }}
          >
            <motion.div
              ref={valueRef}
              variants={sectionVariants}
              initial="hidden"
              animate={valueInView ? "visible" : "hidden"}
            >
              <div className={styles.sectionContainer}>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "400",
                    color: "#6FCFFB",
                    marginBottom: "2.5rem",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  Larger Product Output, Lower Emissions, Higher Efficiency{" "}
                </h2>
                <div className={styles.valuePropositionContainer}>
                  {[
                    {
                      icon: <FaShieldAlt className="icon" />,
                      title: "Energy Security",
                      description:
                        "Platform technology only requiring electric power for balance of plant.",
                    },
                    {
                      icon: <FaDollarSign className="icon" />,
                      title: "No Clean Premium",
                      description:
                        "Simplified design, modularity, higher efficiency and reduced capital risk.",
                    },
                    {
                      icon: <FaChartLine className="icon" />,
                      title: "Domestic Growth",
                      description:
                        "Transforming GHGs from wasted resources to valuable products.",
                    },
                  ].map((card, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      animate={valueInView ? "visible" : "hidden"}
                      style={{ width: "100%" }}
                    >
                      <Card style={{ height: "270px" }}>
                        <div
                          style={{
                            fontSize: "1.9rem",
                            marginBottom: "1.25rem",
                            width: "60px",
                            height: "60px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "auto",
                            marginRight: "auto",
                            background: "rgba(214, 200, 163, 0.1)",
                            borderRadius: "50%",
                            // boxShadow: '0 0 15px rgba(37, 171, 224, 0.4)',
                            // border: '1px solid rgba(37, 171, 224, 0.3)'
                          }}
                        >
                          {card.icon}
                        </div>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={gtchemRef}
              variants={sectionVariants}
              initial="hidden"
              animate={gtchemInView ? "visible" : "hidden"}
            >
              <div className={styles.sectionContainer}>
                <h2 className={styles.PlantInfoTitle}>
                  {" "}
                  Modular System Offering
                </h2>

                <p className={styles.PlantInfoDescription}>
                  Turn-key skid-mounted platform designed for co-located
                  production.
                </p>

                <div className={styles.gtchemContainer}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: window.innerWidth <= 890 ? 0 : "20px",
                      marginBottom: window.innerWidth <= 890 ? 0 : "20px",
                    }}
                  >
                    {/* Toggle Buttons */}
                    <div
                      style={{
                        display: "flex",
                        gap: "1.5rem",
                        marginBottom: "1.5rem",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        onClick={() => setActiveVideo(0)}
                        style={{
                          padding: "0.8rem 1.5rem",
                          backgroundColor:
                            activeVideo === 0
                              ? "rgba(37, 171, 224, 0.5)"
                              : "rgba(31, 42, 48, 0.7)",
                          color: "white",
                          fontWeight: "600",
                          border: "2px solid rgba(37, 171, 224, 0.5)",
                          borderRadius: "20px",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) => {
                          if (activeVideo !== 0) {
                            e.target.style.backgroundColor =
                              "rgba(37, 171, 224, 0.2)";
                          }
                        }}
                        onMouseOut={(e) => {
                          if (activeVideo !== 0) {
                            e.target.style.backgroundColor =
                              "rgba(31, 42, 48, 0.7)";
                          }
                        }}
                      >
                        View Exterior
                      </button>
                      <button
                        onClick={() => setActiveVideo(1)}
                        style={{
                          padding: "0.8rem 1.5rem",
                          backgroundColor:
                            activeVideo === 0
                              ? "rgba(31, 42, 48, 0.7)"
                              : "rgba(37, 171, 224, 0.5)",
                          color: "white",
                          fontWeight: "600",
                          border: "2px solid rgba(37, 171, 224, 0.5)",
                          borderRadius: "20px",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) => {
                          if (activeVideo !== 1) {
                            e.target.style.backgroundColor =
                              "rgba(37, 171, 224, 0.2)";
                          }
                        }}
                        onMouseOut={(e) => {
                          if (activeVideo !== 1) {
                            e.target.style.backgroundColor =
                              "rgba(31, 42, 48, 0.7)";
                          }
                        }}
                      >
                        View Interior
                      </button>
                    </div>

                    {/* Video Container */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: "1000px",
                        height: "450px",
                        margin: "0 auto",
                        borderRadius: "20px",
                        overflow: "hidden",
                        backgroundColor: "transparent",
                        marginTop: isTablet ? "5rem" : "auto",
                      }}
                    >
                      {/* First Video - Outside View */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          opacity: activeVideo === 0 ? 1 : 0,
                          transition: "opacity 0.5s ease-in-out",
                          pointerEvents: activeVideo === 0 ? "auto" : "none",
                        }}
                      >
                        <img
                          ref={gtchem11VideoRef}
                          src={gtchem11Video}
                          alt="GTChem Exterior"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            borderRadius: "20px",
                          }}
                          className={styles.gtchemVideo}
                        />
                      </div>

                      {/* Second Video - Inside View */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          opacity: activeVideo === 1 ? 1 : 0,
                          transition: "opacity 0.5s ease-in-out",
                        }}
                      >
                        <img
                          ref={gtchem12VideoRef}
                          src={gtchem12Video}
                          alt="GTChem Interior"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            borderRadius: "20px",
                          }}
                          className={styles.gtchemVideo}
                        />
                      </div>
                    </div>
                    <div className={styles.gtchemButtonContainer}>
                      <div
                        style={{
                          display: "flex",
                          // gap: '2rem',
                          justifyContent: "center",
                          width: "100%",
                          marginTop:
                            window.innerWidth < 500 ? "-20rem" : "auto",
                          marginBottom:
                            window.innerWidth < 500 ? "-10rem" : "auto",
                        }}
                      >
                        <button
                          onClick={() => setGtchem1Popup(true)}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.8rem",
                            padding: "1rem 2rem",
                            backgroundColor: "#25abe0",
                            color: "white",
                            fontSize: "1.1rem",
                            fontWeight: "600",
                            textDecoration: "none",
                            borderRadius: "50px",
                            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
                            transition: "all 0.3s ease",
                            position: "relative",
                            overflow: "hidden",
                            border: "2px solid transparent",
                            cursor: "pointer",
                            width: "fit-content",
                            minWidth: "130px",
                          }}
                          className={styles.preOrderButton}
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = "#0077b5";
                            e.target.style.boxShadow =
                              "0 15px 25px rgba(0, 0, 0, 0.4)";
                            e.target.style.transform = "translateY(-2px)";
                            e.target.style.backgroundImage =
                              "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)";
                            e.target.style.backgroundPosition = "200% center";
                            e.target.style.backgroundSize = "200% 100%";
                            e.target.style.animation =
                              "gradientMove 1.5s ease infinite";
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = "#25abe0";
                            e.target.style.boxShadow =
                              "0 8px 15px rgba(0, 0, 0, 0.3)";
                            e.target.style.transform = "translateY(0)";
                            e.target.style.backgroundImage = "none";
                            e.target.style.animation = "none";
                          }}
                        >
                          Pre-Order Now
                        </button>
                        <Link
                          to="/contact"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.8rem",
                            padding: "1rem 2rem",
                            backgroundColor: "#25abe0",
                            color: "white",
                            fontSize: "1.1rem",
                            fontWeight: "600",
                            textDecoration: "none",
                            borderRadius: "50px",
                            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
                            transition: "all 0.3s ease",
                            position: "relative",
                            overflow: "hidden",
                            border: "2px solid transparent",
                            cursor: "pointer",
                            width: "fit-content",
                            minWidth: "130px",
                          }}
                          className={styles.preOrderButton}
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = "#0077b5";
                            e.target.style.boxShadow =
                              "0 15px 25px rgba(0, 0, 0, 0.4)";
                            e.target.style.transform = "translateY(-2px)";
                            e.target.style.backgroundImage =
                              "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)";
                            e.target.style.backgroundPosition = "200% center";
                            e.target.style.backgroundSize = "200% 100%";
                            e.target.style.animation =
                              "gradientMove 1.5s ease infinite";
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = "#25abe0";
                            e.target.style.boxShadow =
                              "0 8px 15px rgba(0, 0, 0, 0.3)";
                            e.target.style.transform = "translateY(0)";
                            e.target.style.backgroundImage = "none";
                            e.target.style.animation = "none";
                          }}
                        >
                          Invest Now
                        </Link>
                      </div>
                    </div>
                    {/* Caption */}
                    <div
                      style={{
                        marginTop: "1rem",
                        fontSize: "1.1rem",
                        color: "rgba(255, 255, 255, 0.8)",
                        textAlign: "center",
                        minHeight: "50px",
                      }}
                    >
                      {/* {activeVideo === 0 
                    ? "Exterior view of the modular reactor system" 
                    : "Interior view showing the reactor core and components"} */}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={facilityRef}
              variants={sectionVariants}
              initial="hidden"
              animate={facilityInView ? "visible" : "hidden"}
            >
              <div className={styles.sectionContainer}>
                <h2 className={styles.PlantInfoTitle}>Facility at Scale</h2>
                <p className={styles.PlantInfoDescription}>
                  Modular interconnection for simple augmentation and easy
                  maintenance.
                </p>
                <p className={styles.PlantInfoDescription}></p>
                <motion.div
                  ref={imageRef}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={
                    imageInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.95 }
                  }
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ImageContainer className={styles.plantImageContainer}>
                    <PlantImage
                      src={plantImage}
                      alt="3D Design of our Chemical Plant"
                      className={styles.plantImage}
                      style={{
                        width: "100%",
                        maxWidth: "1000px",
                        margin: "0 auto",
                        display: "block",
                      }}
                    />
                    <ImageOverlay>
                      <Hotspot
                        style={{ bottom: "35%", left: "30%" }}
                        whileHover={{ scale: 1.2 }}
                        className={styles.hotspot}
                      >
                        <HotspotDot />
                        <HotspotTooltip>
                          <h4>{hotspotDetails[0].title}</h4>
                        </HotspotTooltip>
                      </Hotspot>
                      <Hotspot
                        style={{ bottom: "27%", left: "16%" }}
                        whileHover={{ scale: 1.2 }}
                        className={styles.hotspot}
                      >
                        <HotspotDot />
                        <HotspotTooltip>
                          <h4>{hotspotDetails[3].title}</h4>
                        </HotspotTooltip>
                      </Hotspot>
                      <Hotspot
                        style={{ bottom: "32%", left: "23%" }}
                        whileHover={{ scale: 1.2 }}
                        className={styles.hotspot}
                      >
                        <HotspotDot />
                        <HotspotTooltip>
                          <h4>{hotspotDetails[4].title}</h4>
                        </HotspotTooltip>
                      </Hotspot>
                      <Hotspot
                        style={{ top: "55%", left: "85%" }}
                        whileHover={{ scale: 1.2 }}
                        className={styles.hotspot}
                      >
                        <HotspotDot />
                        <HotspotTooltip style={{ left: "-100px" }}>
                          <h4>{hotspotDetails[1].title}</h4>
                        </HotspotTooltip>
                      </Hotspot>
                      <Hotspot
                        style={{ top: "75%", left: "55%" }}
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

            <motion.div
              ref={roadmapRef}
              variants={sectionVariants}
              initial="hidden"
              animate={roadmapInView ? "visible" : "hidden"}
            >
              <RoadmapContainer>
                <RoadmapTitle>Product Development Roadmap</RoadmapTitle>
                <RoadmapDescription>
                  Deploying modular turnkey systems followed by large integrated
                  facilities.
                </RoadmapDescription>
                <ClickToLearnMore>
                  Click on each TRL card to learn more.
                </ClickToLearnMore>

                <TimelineContainer>
                  <TimelineSections>
                    {[
                      {
                        trl: "TRL 3",
                        title: "Single Tube",
                        year: "2024",
                        image: single2,
                        description: "Batches of reactor membranes.",
                      },
                      {
                        trl: "TRL 4",
                        title: "Tube Bundle",
                        year: "2025",
                        image: extEval,
                        description:
                          "First working bundle prototype to optimize reactor core conditions.",
                      },
                      {
                        trl: "TRL 5",
                        title: "Benchtop System",
                        year: "2025-2026",
                        image: benchtop1,
                        description:
                          "Second working prototype to optimize reactor bundle integration with BOP.",
                      },
                      {
                        trl: "TRL 6/7",
                        title: "Modular Skids",
                        year: "2027+",
                        images: [skid1, skid2],
                        description:
                          "Modular turn-key skid system enabling 1-40 tons per day facilities.",
                      },
                      {
                        trl: "TRL 8/9",
                        title: "Plant",
                        year: "2030+",
                        images: [plant1, plant22],
                        description:
                          "Large-scale plant building block to enable 100+ ton per day facilities.",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        custom={index}
                        variants={timelineItemVariants}
                        initial="hidden"
                        animate={roadmapInView ? "visible" : "hidden"}
                      >
                        <TimelineSection index={index}>
                          <TimelineImage
                            bg={trlGradients[index]}
                            // highlight={item.trl === "TRL 5" || item.trl === "TRL 4"}
                            onClick={() =>
                              handleImageClick({
                                image: item.image,
                                images: item.images,
                                title: item.title,
                                year: item.year,
                                description: item.description,
                              })
                            }
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

            <motion.div
              ref={competitiveRef}
              variants={sectionVariants}
              initial="hidden"
              animate={competitiveInView ? "visible" : "hidden"}
            >
              <div
                className={competitiveStyles.competitiveSection}
                style={{ marginTop: "2rem" }}
              >
                <CompetitiveTitle>
                  Unmatched Modularity & Flexibility
                </CompetitiveTitle>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "2rem",
                    width: "100%",
                  }}
                >
                  <img
                    src={companal}
                    alt="Competitive Analysis"
                    style={{
                      width: "100%",
                      maxWidth: "1200px",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
            </motion.div>

            <Overlay show={selectedItem !== null} onClick={handleClosePopup} />
            <Modal
              show={selectedItem !== null}
              onClose={handleClosePopup}
              title={
                selectedItem
                  ? `${selectedItem.title} (${selectedItem.year})`
                  : ""
              }
              size={selectedItem?.title === "Plant" ? "xlarge" : "xlarge"}
              showCloseButton={true}
            >
              <div
                style={{
                  marginBottom: "0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
                className={styles.itemModal}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                    justifyContent: "center",
                    marginBottom: "0rem",
                    alignItems: "center",
                    width: "100%",
                  }}
                  className={styles.modalImageContainer}
                >
                  {selectedItem?.images ? (
                    selectedItem.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${selectedItem.title} ${index + 1}`}
                        style={{
                          width:
                            selectedItem?.title === "Plant" ? "50%" : "45%",
                          maxHeight: "350px",
                          objectFit: "contain",
                          borderRadius:
                            selectedItem?.title === "Plant" ||
                            selectedItem?.title === "Modular Skids"
                              ? "0"
                              : "8px",
                          margin: "0 auto",
                        }}
                        className={styles.modalImage}
                      />
                    ))
                  ) : (
                    <img
                      src={selectedItem?.image}
                      alt={selectedItem?.title}
                      style={{
                        width: "60%",
                        maxHeight: "350px",
                        objectFit: "contain",
                        borderRadius:
                          selectedItem?.title === "Plant" ||
                          selectedItem?.title === "Modular Skids"
                            ? "0"
                            : "8px",
                        margin: "0 auto",
                      }}
                      className={styles.modalImage}
                    />
                  )}
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  className={styles.modalTextContainer}
                >
                  <p
                    style={{
                      color: "#ffffff",
                      fontSize: "1.4rem",
                      lineHeight: "1.6",
                      marginBottom: "0",
                      textAlign: "center",
                      maxWidth: "800px",
                      width: "100%",
                    }}
                    className={styles.modalDescription}
                  >
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
                <div
                  style={{
                    color: "#ffffff",
                    fontSize: "18px",
                    lineHeight: "1.8",
                    marginBottom: "0",
                    paddingLeft: "0",
                    listStyle: "none",
                  }}
                  className={styles.hotspotModalContent}
                >
                  {hotspotDetails[selectedHotspot].description}
                </div>
              </Modal>
            )}

            <GTChem1Popup />
          </div>
        </div>
      </PageWrapper>
    </>
  );
}

export default Products;
