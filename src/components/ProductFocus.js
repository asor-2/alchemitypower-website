import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import styles from "./ProductFocus.module.css";
import { FaIndustry, FaLeaf, FaShieldAlt, FaArrowRight } from "react-icons/fa";

function ProductFocus() {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Product features data with icons
  const features = [
    {
      icon: <FaIndustry />,
      title: "Placeholder text",
      description:
        "Simplified design reduces capital risk and extends life expectancy of plants due for decommissioning or repower.",
      benefits: [
        "Reduced capital investment",
        "Extended plant lifespan",
        "Lower operational risk",
      ],
    },
    {
      icon: <FaLeaf />,
      title: "Eco-Friendly Solutions",
      description:
        "Modular skid systems deliver 400% lower CO₂ emissions and 300% lower lifetime cost through optimized design and efficient operation.",
      benefits: [
        "Modular construction",
        "Significant CO₂ reduction",
        "Lower total cost of ownership",
      ],
    },
    {
      icon: <FaShieldAlt />,
      title: "Domestic Energy Security",
      description:
        "Alchemity's provides domestic jobs and energy security leveraging existing downstream processes.",
      benefits: [
        "Local job creation",
        "Enhanced energy independence",
        "Optimized existing infrastructure",
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
    },
  };

  return (
    <section className={styles.section} ref={ref}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 className={styles.title} variants={itemVariants}>
          Value Proposition
        </motion.h2>
        <motion.p className={styles.subTitle} variants={itemVariants}>
          Transforming industrial operations with solutions that reduce costs,
          lower emissions, and strengthen domestic energy security.
        </motion.p>

        {/* Tabs Navigation */}
        <motion.div className={styles.tabsContainer} variants={itemVariants}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${styles.tab} ${activeTab === index ? styles.activeTab : ""}`}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={styles.tabIcon}>{feature.icon}</div>
              <span>{feature.title}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div className={styles.contentWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className={styles.tabContent}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className={styles.featureContent}>
                <div className={styles.featureIconLarge}>
                  {features[activeTab].icon}
                </div>
                <h3>{features[activeTab].title}</h3>
                <p>{features[activeTab].description}</p>
                <div className={styles.benefitsList}>
                  {features[activeTab].benefits.map((benefit, index) => (
                    <div key={index} className={styles.benefitItem}>
                      <div className={styles.benefitDot}></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Learn More About Product Button */}
        <motion.div
          className={styles.learnMoreContainer}
          variants={buttonVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          whileHover="hover"
        >
          <Link
            to="/products"
            className={styles.learnMoreButton}
            onClick={() => window.scrollTo(0, 0)}
          >
            <span>Learn More About Our Product</span>
            <FaArrowRight className={styles.arrowIcon} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ProductFocus;
