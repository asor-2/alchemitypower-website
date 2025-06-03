import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import NewsArticle from '../components/NewsArticle';
import productVideo from '../components/images/product.mov';
import newsImage1 from '../components/images/1.jpeg';
import newsImage2 from '../components/images/2.png';
import newsImage3 from '../components/images/3.png';
import newsImage4 from '../components/images/4.png';
import newsImage5 from '../components/images/5.webp';
import newsImage6 from '../components/images/6.webp';
import newsImage7 from '../components/images/7.jpg';
import tedco from '../components/images/tedco.png';
import mbia from '../components/images/mbia.png';
import styles from './News.module.css';

const sectionStyle = {
  padding: '0 0 calc(var(--section-padding) + 4rem) 0',
  margin: '0 auto',
  backgroundColor: '#000000',
  textAlign: 'left',
  maxWidth: '100%',
};

const titleStyle = {
  fontSize: '40px',
  color: '#0077b5',
  marginBottom: '3rem',
  textAlign: 'center',
  fontWeight: '400',
};

const videoStyle = {
  position: 'absolute',
  top: '-33%',
  right: 0,
  width: '65%',
  height: '160%',
  objectFit: 'contain',
  zIndex: 0
};

const articlesGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',
  padding: '0 2rem',
  maxWidth: '1800px',
  margin: '-1rem auto 4rem',
  '@media (max-width: 1200px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
  },
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
    padding: '0 1rem',
  }
};

const articleVariants = {
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

const newsArticles = [
  {
    title: "Reactor Turns Methane to Hydrocarbons Without CO₂",
    image: newsImage1,
    link: "https://cen.acs.org/environment/climate-change/Reactor-converts-methane-heavier-hydrocarbons/99/web/2021/11",
    source: "Chemical & Engineering News"
  },
  {
    title: "Alchemity Receives Shell GameChanger Funding",
    image: newsImage2,
    link: "https://mage.umd.edu/news/story/alchemity-receives-shell-gamechanger-funding",
    source: "UMD MAGE"
  },
  {
    title: "MTech Ventures Company Spotlight: Alchemity",
    image: newsImage3,
    link: "https://energy.umd.edu/news/story/mtech-ventures-company-spotlight-alchemity",
    source: "Maryland Energy Innovation Institute"
  },
  {
    title: "UMD Scientists Convert Methane Without Greenhouse Gas Emissions",
    image: newsImage4,
    link: "https://energy.umd.edu/news/story/umd-scientists-convert-methane-without-greenhouse-gas-emissions",
    source: "Maryland Energy Innovation Institute"
  },
  {
    title: "Direct Nonoxidative Methane Conversion in an Autothermal Hydrogen-Permeable Membrane Reactor",
    image: newsImage7,
    link: "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/aenm.202102782",
    source: "Wiley Advanced"
  },
  {
    title: "Alchemity Selected as MCIG'25 Awardee",
    image: mbia,
    link: "https://mdinnovate.org/mcig/mcig25-awardees/",
    source: "Maryland Business Innovation Association"
  },
  {
    title: "Alchemity Contributes to USM's Rise in Nation's Top 10 Patent-Producing Universities",
    image: newsImage6,
    link: "https://www.mdcleanenergy.org/news/usm-climbs-in-list-of-nations-top-10-patent-producing-universities/",
    source: "Maryland Clean Energy Center"
  }
];

function News() {
  return (
    <>
      <PageHero 
        backgroundVideoUrl={productVideo}
        title="News"
        videoStyle={videoStyle}
      />
      <div style={sectionStyle}>
        <motion.h2 
          style={titleStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        </motion.h2>
        <div className={styles.articlesGrid}>
          {newsArticles.map((article, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={articleVariants}
              initial="hidden"
              animate="visible"
            >
              <NewsArticle
                index={index}
                {...article}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default News; 