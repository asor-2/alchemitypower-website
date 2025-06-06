import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './ProblemOpportunitySection.module.css';
import problemVideo from './images/prob_and_opp.mov';

const ProblemOpportunitySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.contentWrapper}
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className={styles.textContent}>
            <motion.h2 className={styles.title} variants={itemVariants}>
              TODAY: 1 kg of CO<sub>2</sub> is emitted for every $1 in chemical transactions
            </motion.h2>
            <motion.p className={styles.highlightText} variants={itemVariants}>
              Massive production facilities & volumes are required to achieve economies of scale.
            </motion.p>
            <motion.p className={styles.text} variants={itemVariants}>
              Chemical industry is a $6 trillion market emitting 6 giga-tons of CO<sub>2</sub> annually.
            </motion.p>
            <motion.p className={styles.text} variants={itemVariants}>
            
            </motion.p>
            <motion.p className={styles.text} variants={itemVariants}>
              
            </motion.p>
          </motion.div>

          <motion.div 
            className={styles.imageContainer}
            variants={itemVariants}
          >
            <video 
              src={problemVideo} 
              autoPlay
              loop
              muted
              playsInline
              className={styles.video}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemOpportunitySection; 