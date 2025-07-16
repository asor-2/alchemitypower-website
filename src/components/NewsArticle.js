import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import styles from "./NewsArticle.module.css";

const NewsArticle = ({ title, image, link, source, index }) => {
  const isReactorArticle =
    title === "Reactor Turns Methane to Hydrocarbons Without CO₂";
  const isMCIGArticle = title === "Alchemity Selected as MCIG'25 Awardee";

  return (
    <motion.div
      className={styles.articleCard}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={title}
          className={styles.articleImage}
          style={
            isReactorArticle
              ? {
                  objectFit: "contain",
                  backgroundColor: "#000000",
                  padding: "1rem",
                }
              : isMCIGArticle
                ? {
                    objectFit: "contain",
                    transform: "scale(0.7)",
                    backgroundColor: "#000000",
                  }
                : {}
          }
        />
      </div>
      <div className={styles.contentContainer}>
        <h3 className={styles.articleTitle}>{title}</h3>
        <div className={styles.buttonContainer}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.learnMoreButton}
          >
            Learn More <span className={styles.arrowIcon}>→</span>
          </a>
        </div>
        <p className={styles.articleSource}>{source}</p>
      </div>
    </motion.div>
  );
};

export default NewsArticle;
