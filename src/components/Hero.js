import React, { useEffect, useState, useRef } from "react";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroVideo from "./images/homepage-hero.mp4";

function Hero({ backgroundImageUrl }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const [activePhrase, setActivePhrase] = useState(null);
     
  useEffect(() => {
    if (!backgroundImageUrl) {
      const video = videoRef.current;
      if (video) {
        console.log("🔄 Setting up video element");

        const handleLoadedData = () => {
          console.log("✅ Video data loaded successfully");
          setVideoLoaded(true);
        };

        const handleError = (error) => {
          console.error("Video error:", error);
        };

        video.addEventListener("loadeddata", handleLoadedData);
        video.addEventListener("error", handleError);

        // Check if video is already loaded
        if (video.readyState >= 3) {
          console.log(
            "Video is ready to play (readyState:",
            video.readyState,
            ")",
          );
          setVideoLoaded(true);
        } else {
          console.log("Video readyState:", video.readyState);
        }

        return () => {
          video.removeEventListener("loadeddata", handleLoadedData);
          video.removeEventListener("error", handleError);
        };
      }
    } else {
      console.log("📷 Using background image instead of video");
      setVideoLoaded(true);
    }
  }, [backgroundImageUrl]);

  const headlineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const subHeadlineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.2 + 0.5,
        ease: "easeOut",
      },
    }),
  };

  const pulseVariants = {
    pulse: {
      boxShadow: [
        "0 8px 32px rgba(0, 0, 0, 0.3)",
        "0 8px 32px rgba(37, 171, 224, 0.3)",
        "0 8px 32px rgba(0, 0, 0, 0.3)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const keyMessages = [
    "One Platform",
    "Clean Chemicals",
    "Zero CO<sub>2</sub>",
    "Lower Capital Risk",
    "Higher Efficiency",
  ];

  useEffect(() => {
    if (inView) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        setActivePhrase(currentIndex);

        setTimeout(() => {
          setActivePhrase(null);
        }, 1000);

        currentIndex++;
        if (currentIndex >= keyMessages.length) {
          clearInterval(interval);
        }
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [inView, keyMessages.length]);

  const emphasizeText = (text) => {
    if (!text) return null;
    return text;
  };

  return (
    <section className={styles.heroSection} ref={ref}>
      {backgroundImageUrl ? (
        <>
          <div
            className={styles.backgroundImage}
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          ></div>
          <img
            src={backgroundImageUrl}
            alt="Background test"
            style={{ display: "none" }}
            onLoad={() => console.log("✅ Background image loaded")}
            onError={() => console.log("❌ Background image failed to load")}
          />
        </>
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.backgroundVideo}
          ref={videoRef}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div
        className={`${styles.heroOverlay} ${videoLoaded ? styles.videoLoaded : ""}`}
      ></div>

      <div className={styles.heroContent}>
        <motion.h1
          className={styles.headline}
          variants={headlineVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Revolutionizing Production of Clean Chemicals
        </motion.h1>

        <motion.p
          className={styles.subHeadline}
          variants={subHeadlineVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Scaling carbon-negative, cost-competitive chemical production with
          modular reactor systems.
        </motion.p>

        <motion.div
          className={styles.keyMessagesContainer}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.keyMessagesLine}>
            {keyMessages.map((message, index) => (
              <React.Fragment key={index}>
                <motion.span
                  className={`${styles.keyMessagePhrase} ${activePhrase === index ? styles.activeBold : ""}`}
                  whileHover={{ fontWeight: 700 }}
                >
                  {message}
                </motion.span>
                {index < keyMessages.length - 1 && (
                  <span className={styles.messageDot}>.</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        <div className={styles.missionVisionContainer}>
          <motion.div
            className={styles.mission}
            variants={{
              ...cardVariants,
              ...pulseVariants,
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{ scale: 1.03 }}
            custom={1}
            whileInView="pulse"
          >
            <h2 className={styles.cardTitle}>Our Mission</h2>
            <p className={styles.cardText}>
              {emphasizeText(
                "To offer lower cost and zero CO<sub>2</sub> emissions chemicals via modular reactors.",
              )}
            </p>
          </motion.div>

          <motion.div
            className={styles.vision}
            variants={{
              ...cardVariants,
              ...pulseVariants,
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{ scale: 1.03 }}
            custom={2}
            whileInView="pulse"
          >
            <h2 className={styles.cardTitle}>Our Vision</h2>
            <p className={styles.cardText}>
              {emphasizeText(
                "To transform current chemicals production with less capital-intensive process.",
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
