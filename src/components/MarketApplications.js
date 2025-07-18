import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import styles from "./MarketApplications.module.css";
// import waste from "./images/waste.png";
import saf from "./images/saf_new.png";
import hydrogen from "./images/hydrogen_new.png";
import biogas from "./images/biogas_new.png";
import ethylene from "./images/ethylene_new.png";
import ethane from "./images/ethane_new.png";
import syngas from "./images/syngas_new.png";
import benzene from "./images/benzene_new.png";
import renewDiesel from "./images/renewdiesel_new.png";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

const MarketTitle = styled.h2`
  font-size: 40px;
  color: #25abe0;
  margin-bottom: 1.2rem;
  text-align: center;
  font-weight: 900;
`;

const MarketDescription = styled.p`
  color: #ffffff;
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
`;

function MarketApplications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const images = [
    { src: saf, title: "SAF" },
     { src: renewDiesel, title: "Renewable Diesel" },
    { src: hydrogen, title: "Hydrogen" },
    { src: syngas, title: "Syngas" },
    { src: biogas, title: "RNG, Biogas" },
    { src: ethylene, title: "Ethylene" },
    { src: ethane, title: "Ethane" },
    { src: benzene, title: "Benzene" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className={styles.marketApplicationsSection} ref={ref}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className={styles.textContainer} variants={itemVariants}>
          <MarketTitle>Enabled Markets</MarketTitle>
          <MarketDescription>
            The Platform System enables multiple markets due to patented
            production flexibility.
          </MarketDescription>
        </motion.div>

        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack}>
            {images.map((item, index) => (
              <div key={index} className={styles.imageContainer}>
                <img
                  src={item.src}
                  alt={item.title}
                  className={styles.carouselImage}
                />
                <p className={styles.imageTitle}>{item.title}</p>
              </div>
            ))}
            {images.map((item, index) => (
              <div key={`duplicate-${index}`} className={styles.imageContainer}>
                <img
                  src={item.src}
                  alt={item.title}
                  className={styles.carouselImage}
                />
                <p className={styles.imageTitle}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className={styles.learnMoreContainer}
          variants={buttonVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          whileHover="hover"
        >
          <Link to="/markets" className={styles.learnMoreButton}>
            <span>Learn More About Markets</span>
            <FaArrowRight className={styles.arrowIcon} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default MarketApplications;
