import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import NewsHero from "../components/NewsHero";
import NewsArticle from "../components/NewsArticle";
import productVideo from "../components/images/product.mov";
import cdlLogo from "../components/images/CDL logo.png";
import newsImage1 from "../components/images/1.jpeg";
import newsImage2 from "../components/images/2.png";
import newsImage3 from "../components/images/3.png";
import newsImage4 from "../components/images/4.png";
import newsImage5 from "../components/images/5.webp";
import newsImage6 from "../components/images/6.webp";
import newsImage7 from "../components/images/7.jpg";
import tedco from "../components/images/tedco.png";
import mbia from "../components/images/mbia.png";
import alchemityLogo from "../components/images/Alchemity logo - for dark background.png";
import buildOurFuture from "../components/images/build our future.jpg";
import breakthroughFellowImage from "../components/images/breakthrough-fellow-alchemity.jpeg";
import styles from "./News.module.css";

import SEO from "../components/SEO/SEO";
import { seoData } from "../config/seoConfig";

// Update PageWrapper with a cleaner gradient
const PageWrapper = {
  padding: "0 0 calc(var(--section-padding) + 4rem) 0",
  margin: "0 auto",
  background:
    "linear-gradient(160deg, #000000, #1A3A4A 40%,rgb(45, 82, 93) 90%)", // Maintain dark gradient
  width: "100vw",
  marginLeft: "calc(-50vw + 50%)",
  marginRight: "calc(-50vw + 50%)",
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
};

const sectionStyle = {
  padding: "0 0 calc(var(--section-padding) + 4rem) 0",
  margin: "4rem auto 0",
  backgroundColor: "transparent",
  textAlign: "left",
  maxWidth: "100%",
  maxWidth: "1200px",
};

// Clean title style
const titleStyle = {
  fontSize: "36px",
  color: "#0077b5", // Keep your blue
  marginBottom: "0.5rem", // Reduced margin
  textAlign: "center",
  fontWeight: "500",
};

// Add a subtitle style (like Miro has)
const subtitleStyle = {
  fontSize: "1.2rem",
  color: "#ffffff",
  opacity: 0.8,
  textAlign: "center",
  marginBottom: "3rem",
  fontWeight: "300",
};

const videoStyle = {
  position: "absolute",
  top: "-33%",
  right: 0,
  width: "65%",
  height: "160%",
  objectFit: "contain",
  zIndex: 0,
};

const articlesGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "2rem",
  padding: "0 2rem",
  maxWidth: "1800px",
  margin: "-1rem auto 4rem",
  "@media (max-width: 1200px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1.5rem",
  },
  "@media (max-width: 768px)": {
    gridTemplateColumns: "1fr",
    gap: "1.5rem",
    padding: "0 1rem",
  },
};

const articleVariants = {
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

// For the news cards
const cardStyle = {
  backgroundColor: "#0A2535", // Dark blue
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  height: "100%",
  transition: "all 0.3s ease",
  border: "1px solid rgba(37, 171, 224, 0.1)",
};

// For the "Read More" button
const buttonStyle = {
  display: "inline-block",
  padding: "0.5rem 1rem",
  fontSize: "0.9rem",
  backgroundColor: "#25abe0",
  color: "white",
  borderRadius: "4px",
  textDecoration: "none",
  marginTop: "1rem",
  transition: "all 0.2s ease",
};

// News filter tabs (like Miro)
const tabsContainerStyle = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "3rem",
  gap: "1rem",
};

const tabStyle = {
  background: "transparent",
  color: "#ffffff",
  border: "none",
  padding: "0.5rem 1rem",
  cursor: "pointer",
  position: "relative",
};

const activeTabStyle = {
  ...tabStyle,
  color: "#0077b5",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-5px",
    left: "0",
    width: "100%",
    height: "2px",
    backgroundColor: "#0077b5",
  },
};

const logoImageStyle = {
  objectFit: 'contain',
  backgroundColor: '#000000',
  padding: '1.5rem'
};

const newsArticles = [
  {
    title: "Alchemity Selected As A Breakthrough Energy Fellow",
    //fix the image
    image: breakthroughFellowImage,
    link: "/news/breakthrough-funding",
    source: "Alchemity",
    imageStyle: logoImageStyle
  },
  {
    title: "Alchemity Announces Seed Financing",
    image: alchemityLogo,
    link: "/news/seed-financing",
    source: "Alchemity",
    imageStyle: logoImageStyle
  },
  {
    title: "Alchemity Receives Build Our Future Award from Governor Moore",
    image: buildOurFuture,
    link: "https://eng.umd.edu/news/story/alchemity-receives-build-our-future-award-from-governor-moore",
    source: "University of Maryland",
    imageStyle: logoImageStyle
  },
  {
    title: "Alchemity Graduates from Creative Destruction Lab (CDL)",
    image: cdlLogo,
    link: "https://www.linkedin.com/posts/emir-dogdibegovic-ph-d-ba976b192_alchemity-is-one-of-the-9-ventures-graduating-ugcPost-7457563886024577024-yaef/",
    source: "Creative Destruction Lab",
    imageStyle: logoImageStyle
  },
  {
    title: "Reactor Turns Methane to Hydrocarbons Without CO₂",
    image: newsImage1,
    link: "https://cen.acs.org/environment/climate-change/Reactor-converts-methane-heavier-hydrocarbons/99/web/2021/11",
    source: "Chemical & Engineering News",
  },
  {
    title: "Alchemity Receives Shell GameChanger Funding",
    image: newsImage2,
    link: "https://mage.umd.edu/news/story/alchemity-receives-shell-gamechanger-funding",
    source: "UMD MAGE",
  },
  {
    title: "MTech Ventures Company Spotlight: Alchemity",
    image: newsImage3,
    link: "https://energy.umd.edu/news/story/mtech-ventures-company-spotlight-alchemity",
    source: "Maryland Energy Innovation Institute",
  },
  {
    title: "UMD Scientists Convert Methane Without Greenhouse Gas Emissions",
    image: newsImage4,
    link: "https://energy.umd.edu/news/story/umd-scientists-convert-methane-without-greenhouse-gas-emissions",
    source: "Maryland Energy Innovation Institute",
  },
  {
    title:
      "Direct Nonoxidative Methane Conversion in an Autothermal Hydrogen-Permeable Membrane Reactor",
    image: newsImage7,
    link: "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/aenm.202102782",
    source: "Wiley Advanced",
  },
  {
    title: "Alchemity Selected as MCIG'25 Awardee",
    image: mbia,
    link: "https://mdinnovate.org/mcig/mcig25-awardees/",
    source: "Maryland Business Innovation Association",
  },
  {
    title:
      "Alchemity Contributes to USM's Rise in Nation's Top 10 Patent-Producing Universities",
    image: newsImage6,
    link: "https://www.mdcleanenergy.org/news/usm-climbs-in-list-of-nations-top-10-patent-producing-universities/",
    source: "Maryland Clean Energy Center",
  },
];

function News() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  // Handle window resize for responsive hero section
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Combined resize handler for both states
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <SEO
        title={seoData.news.title}
        description={seoData.news.description}
        keywords={seoData.news.keywords}
        image={seoData.news.image}
        url="/news"
      />

      {/* {isLargeScreen ? (
        <NewsHero />
      ) : (
        <PageHero 
          backgroundVideoUrl={productVideo}
          title="News"
          videoStyle={videoStyle}
          titleStyle={{ textShadow: '0 0 20px rgba(37, 171, 224, 0.8)' }}
        />
      )} */}
      <div style={PageWrapper}>
        {/* UPDATED HEADER */}
        <div
          style={{
            padding: isMobile ? "2rem 1rem 1rem" : "5rem 2rem 1rem",
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "1rem" : "3rem",
            flexWrap: "wrap",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              width: isMobile ? "100%" : "auto", // Full width on mobile
              marginBottom: isMobile ? "2rem" : "0", // Add space when stacked
            }}
          >
            {/* For the title and subtitle - improved visual hierarchy */}
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "600",
                color: "#ffffff",
                marginBottom: "1rem",
                letterSpacing: "-0.03em",
                maxWidth: "1200px",
                margin: "0 auto 1rem",
                position: "relative",
              }}
            >
              {" "}
              <span style={{ color: "#ffffff" }}>Latest </span>
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #25abe0, rgba(37, 171, 224, 0.7))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                News & Updates
              </span>
            </h1>

            <p
              style={{
                fontSize: "1.5rem",
                color: "rgba(255, 255, 255, 0.8)",
                marginBottom: "2rem",
              }}
            >
              Discover the latest developments, press coverage, and
              announcements from Alchemity.
            </p>
          </div>

          {/* Featured News Card - darker with accent */}
          <div
            style={{
              flex: "1",
              minWidth: isMobile ? "100%" : "300px",
              maxWidth: isMobile ? "100%" : "400px",
              backgroundColor: "#1A232B", // Darker background instead of light blue
              borderRadius: "10px",
              padding: isMobile ? "1.5rem" : "2rem",
              boxSizing: "border-box",
              overflow: "hidden",
              borderLeft: "3px solid #0077b5", // Blue accent on the left
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <span style={{ color: "#27AADF", fontWeight: "500" }}>
              Featured News
            </span>
            <h3
              style={{
                color: "#ffffff", // White text for contrast
                fontSize: isMobile ? "1.2rem" : "1.4rem",
                lineHeight: "1.4",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {newsArticles[0].title}
            </h3>
            <a
              href={newsArticles[0].link}
              style={{ color: "#27AADF", fontWeight: "450" }}
            >
              Read Story →
            </a>
          </div>
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

        <div style={sectionStyle}>
          {/* <div style={tabsContainerStyle}>
          <button style={activeTabStyle}>All News</button>
          <button style={tabStyle}>Press Releases</button>
          <button style={tabStyle}>Media Coverage</button>
        </div> */}

          {/* News cards grid */}
          <div className={styles.articlesGrid}>
            {newsArticles.map((article, index) => {
              // Internal links (React Router) start with "/"; external links open in a new tab.
              const isInternalLink =
                typeof article.link === "string" &&
                article.link.startsWith("/");
              const Wrapper = isInternalLink ? Link : "a";
              const wrapperProps = isInternalLink
                ? { to: article.link }
                : {
                    href: article.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  };
              return (
              <motion.div
                key={index}
                custom={index}
                variants={articleVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  y: -5,
                  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3)",
                }}
                style={{
                  backgroundColor: "#1A232B",
                  borderRadius: "10px",
                  overflow: "hidden",
                  minHeight: "420px",
                  height: "420px",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Wrapper
                  {...wrapperProps}
                  style={{
                    textDecoration: "none",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      flex: "0 0 auto",
                      padding: "1.5rem",
                      paddingBottom: 0,
                      display: "flex",
                      flexDirection: "column",
                      height: "calc(1.5em * 6)",
                      justifyContent: "flex-start",
                    }}
                  >
                    {/* 4 lines for text: source + title (max 3 lines) */}
                    <div
                      style={{
                        color: "#27AADF",
                        fontSize: "1rem",
                        fontWeight: "500",
                        lineHeight: "1.5",
                        minHeight: "1.5em",
                        maxHeight: "1.5em",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {article.source}
                    </div>
                    <h3
                      style={{
                        color: "#ffffff",
                        fontSize: "1.3rem",
                        fontWeight: "300",
                        lineHeight: "1.3",
                        minHeight: "6.5em", // 5 lines
                        maxHeight: "6.5em",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        margin: 0,
                        marginTop: "0.2em",
                      }}
                    >
                      {article.title}
                    </h3>
                  </div>
                  {/* Read More */}
                  <div
                    style={{
                      color: "#27AADF",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      minHeight: "1.5em",
                      maxHeight: "1.5em",
                      lineHeight: "1.5",
                      margin: "0 1.5rem",
                      marginBottom: 0,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Read More →
                  </div>
                  {/* Image: 5 lines worth of height */}
                  <div
                    style={{
                      flex: "1 1 auto",
                      minHeight: "calc(1.5em * 8)",
                      maxHeight: "calc(1.5em * 8)",
                      margin: "0 0 1.5rem 0",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      paddingTop: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        borderRadius: "4px",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          ...(article.imageStyle || {}),
                        }}
                      />
                    </div>
                  </div>
                </Wrapper>
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
