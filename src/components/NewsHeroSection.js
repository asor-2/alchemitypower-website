import React from "react";
import { motion } from "framer-motion";
import styles from "./NewsHeroSection.module.css";
import productVideo from "./images/product.mov";

const NewsHeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.videoContainer}>
        <video
          src={productVideo}
          autoPlay
          loop
          muted
          playsInline
          className={styles.heroVideo}
        />
      </div>
    </section>
  );
};

export default NewsHeroSection;
