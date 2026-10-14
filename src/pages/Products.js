import React, { useState } from "react";
import { Link } from "react-router-dom";
import EnergyBackground from "../components/EnergyBackground";
import SEO from "../components/SEO/SEO";
import styles from "./Products.module.css";

// ==================== EDIT PAGE CONTENT HERE ====================
// Edit words inside quotes. Keep commas, brackets, and field names intact.
// Sections below hold headings, descriptions, metrics, and image paths.
// Empty image paths keep the image placeholders.
const pageCopy = {
  "productsAlchemitypower": "Products | AlchemityPower",
  "exploreAlchemitypowerProductConfigurationsAndSpecifications": "Explore AlchemityPower product configurations and specifications.",
  "products": "Products",
  "changingTheWayWeUseEnergy": "Changing the way we use energy through",
  "moduleSofcEnergyFarms": "Module SOFC Energy Farms",
  "productIntroductionGoesHereAddA": "Product introduction goes here. Add a short description of the platform and its purpose.",
  "performance": "Performance",
  "productMetrics": "Product metrics.",
  "performanceOverviewGoesHere": "Performance overview goes here.",
  "productsvariations": "Products/Variations",
  "heading": "Heading",
  "overview": "Overview",
  "productDetailsHeading": "Product details heading.",
  "supportingProductInformationGoesHere": "Supporting product information goes here.",
  "theNextStep": "The next step",
  "closingStatement": "Closing statement.",
  "exploreTheTechnology": "Explore the technology"
};

const heroImage = { src: "", alt: "" };

// Insert approved images, metric values, units, and measurement conditions here.
const configurations = [
  {
    "id": "1",
    "name": "Product 1",
    "title": "Product configuration heading.",
    "description": "Description goes here.",
    "image": "",
    "alt": "",
    "specs": [
      {
        "label": "Blank",
        "value": "Blank statement"
      },
      {
        "label": "Blank",
        "value": "Blank statement"
      },
      {
        "label": "Blank",
        "value": "Blank statement"
      },
      {
        "label": "Blank",
        "value": "Blank statement"
      }
    ]
  },
  {
    "id": "2",
    "name": "Product 2",
    "title": "Product configuration heading.",
    "description": "Description goes here.",
    "image": "",
    "alt": "",
    "specs": [
      {
        "label": "Blank",
        "value": "Blank statement"
      },
      {
        "label": "Blank",
        "value": "Blank statement"
      },
      {
        "label": "Blank",
        "value": "Blank statement"
      },
      {
        "label": "Blank",
        "value": "Blank statement"
      }
    ]
  },
  {
    "id": "3",
    "name": "Product 3",
    "title": "Product configuration heading.",
    "description": "Description goes here.",
    "image": "",
    "alt": "",
    "specs": [
      {
        "label": "Blank",
        "value": "Blank statement"
      },
      {
        "label": "Blank",
        "value": "Blank statement"
      },
      {
        "label": "Blank",
        "value": "Blank statement"
      },
      {
        "label": "Blank",
        "value": "Blank statement"
      }
    ]
  }
];
const metrics = [
  {
    id: "Net Power",
    label: "Net Power Output",
    value: "2,000 kW",
    description: "continuously",
  },
  {
    id: "Power Density",
    label: "Power Density",
    value: "600MW",
    description: "per acre",
  },
  {
    id: "Electrical Efficiency",
    label: "Electrical Efficiency",
    value: "60%",
    description: "with power only",
  },
  {
    id: "Availability",
    label: "Availability",
    value: ">=99.95%",
    description: "with (N + 1) redundancy",
  },
];
const features = [
  {
    "id": 0,
    "title": "Product feature",
    "description": "Product feature description goes here."
  },
  {
    "id": 1,
    "title": "Product feature",
    "description": "Product feature description goes here."
  },
  {
    "id": 2,
    "title": "Product feature",
    "description": "Product feature description goes here."
  }
];
// ==================== PAGE LAYOUT: NO CONTENT EDITS BELOW ====================
export default function Products() {
  const [active, setActive] = useState(0);
  const product = configurations[active];
  return <EnergyBackground className={styles.page}>
    <SEO title={pageCopy.productsAlchemitypower} description={pageCopy.exploreAlchemitypowerProductConfigurationsAndSpecifications} url="/products" />
    <header className={`${styles.container} ${styles.hero}`}><p className={styles.eyebrow}>{pageCopy.products}</p><div className={styles.heroGrid}><h1>{pageCopy.changingTheWayWeUseEnergy}<br /><span>{pageCopy.moduleSofcEnergyFarms}</span></h1><p>{pageCopy.productIntroductionGoesHereAddA}</p></div><div className={styles.heroImage}>{heroImage.src ? <img src={heroImage.src} alt={heroImage.alt} style={{ width: "100%", height: "100%", objectFit: "contain" }} /> : <span role="img" aria-label="Product hero image placeholder">+</span>}</div></header>
    <section className={styles.band} aria-labelledby="metrics-heading"><div className={styles.container}><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>{pageCopy.performance}</p><h2 id="metrics-heading">{pageCopy.productMetrics}</h2></div><p>{pageCopy.performanceOverviewGoesHere}</p></div><dl className={styles.metrics}>{metrics.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd><dd className={styles.metricNote}>{metric.description}</dd></div>)}</dl></div></section>
    <section className={`${styles.container} ${styles.configurationSection}`} aria-labelledby="configuration-heading"><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>{pageCopy.productsvariations}</p><h2 id="configuration-heading">{pageCopy.heading}</h2></div><p>{pageCopy.overview}</p></div><div className={styles.selectors} aria-label="Product configurations">{configurations.map((item, index) => <button key={item.id} type="button" aria-pressed={index === active} aria-controls="configuration-detail" onClick={() => setActive(index)}>{item.name}<span aria-hidden="true">↗</span></button>)}</div>
      <div id="configuration-detail" className={styles.configurationGrid}><div className={styles.configurationImage}>{product.image ? <img key={product.id} src={product.image} alt={product.alt} loading="lazy" /> : <span className={styles.blank} role="img" aria-label={`${product.name} image placeholder`}>+</span>}<span className={styles.imageCaption}>{product.name}</span></div><div className={styles.specification} aria-live="polite" aria-atomic="true"><div key={product.id}><p className={styles.eyebrow}>{product.name}</p><h3>{product.title}</h3><p>{product.description}</p><dl className={styles.specs}>{product.specs.map((spec, index) => <div key={index}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl></div></div></div>
    </section>
    <section className={`${styles.container} ${styles.featureSection}`} aria-labelledby="features-heading"><div className={styles.sectionHeading}><h2 id="features-heading">{pageCopy.productDetailsHeading}</h2><p>{pageCopy.supportingProductInformationGoesHere}</p></div><div className={styles.featureGrid}>{features.map(item => <article key={item.id}><svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" aria-hidden="true"><rect x="4" y="4" width="12" height="12" /><rect x="20" y="20" width="12" height="12" /><path d="M22 10h10M27 5v10M4 26h12" /></svg><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></section>
    <div className={`${styles.container} ${styles.closing}`}><div><p className={styles.eyebrow}>{pageCopy.theNextStep}</p><h2>{pageCopy.closingStatement}</h2></div><div className={styles.closingLinks}><Link className={styles.primaryLink} to="/technology">{pageCopy.exploreTheTechnology}<span aria-hidden="true">↗</span></Link></div></div>
  </EnergyBackground>;
}
