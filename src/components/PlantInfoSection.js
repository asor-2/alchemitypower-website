import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import styles from './PlantInfoSection.module.css';
import { FaRecycle, FaLeaf, FaIndustry, FaFlask, FaArrowRight, FaCloud, FaDollarSign, FaShieldAlt, FaSeedling } from 'react-icons/fa';

const PlantInfoSection = () => {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: 0.8, 
        ease: "easeOut" 
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const stats = [
    {
      icon: <FaCloud />,
      value: "> 400%",
      label: "Lower CO₂ Emission",
      description: "Reduces emissions by at least 400% on today's grid. The process is carbon-negative with renewables."
    },
    {
      icon: <FaDollarSign />,
      value: "300%",
      label: "Lower Lifetime Cost",
      description: "Scales down cost effectively even to remote sites and consumes less energy to operate the entire system."
    },
    {
      icon: <FaShieldAlt />,
      value: "Security",
      label: "Energy and Domestic",
      description: "Protects domestic workforce by extending the lifetime of plants undergoing repower or decomissioning."
    },
    {
      icon: <FaSeedling />,
      value: "All Sites",
      label: "Brownfield/Greenfield",
      description: "Clean chemical and drop-in fuels production, leveraging existing downstream processes."
    }
  ];

  return (
    <section className={styles.plantSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.headerContainer}
          variants={containerVariants}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
        >
          <h2 className={styles.statsTitle} style={{ color: '#25abe0' }}>Serving the Community</h2>
          <p className={styles.statsSubtitle}>
            Transforming waste into value to strengthen domestic energy security.
          </p>
        </motion.div>

        <motion.div 
          className={styles.statsContainer}
          ref={statsRef}
          variants={containerVariants}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
        >
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className={styles.statCard}
                variants={itemVariants}
              >
                <div className={styles.statIconContainer}>
                  {stat.icon}
                </div>
                <h3 className={styles.statValue}>{stat.value}</h3>
                <h4 className={styles.statLabel}>{stat.label}</h4>
                <p className={styles.statDescription}>{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.learnMoreContainer}
          variants={buttonVariants}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          whileHover="hover"
        >
          <Link 
            to="/technology" 
            className={styles.learnMoreButton}
            onClick={scrollToTop}
          >
            <span>Learn More About Our Patented Technology</span>
            <FaArrowRight className={styles.arrowIcon} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PlantInfoSection; 