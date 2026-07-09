import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './SeedFinancing.module.css';

import SEO from '../components/SEO/SEO';

// Inline external link used throughout the press release body.
const A = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.inlineLink}
  >
    {children}
  </a>
);

function SeedFinancing() {
  return (
    <>
      <SEO
        title="Alchemity Announces Seed Financing"
        description="Alchemity announces successful closing of a Seed Financing round to advance its single-step, thermo-catalytic reactor for producing liquid fuel from waste and stranded gas."
        url="/news/seed-financing"
      />

      <div className={styles.pageWrapper}>
        <motion.article
          className={styles.article}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.date}>July 2026</p>

          <h1 className={styles.headline}>
            Alchemity Announces Seed Financing to Advance its Single-Step,
            Thermo-Catalytic Reactor, for Producing Liquid Fuel from Waste and
            Stranded Gas
          </h1>

          <p className={styles.paragraph}>
            College Park, MD — <A href="https://alchemity.com/">Alchemity</A>{" "}
            announces successful closing of a Seed Financing round backed by{" "}
            <A href="https://blackbirdlab.org/">Blackbird Laboratories</A>,{" "}
            <A href="https://cbscf.umd.edu/">Chesapeake Bay Seed Capital Fund</A>,{" "}
            <A href="https://innovate.umd.edu/resources/discoveryfund">Discovery Fund</A>,{" "}
            <A href="https://districtangels.com/">District Angels</A>,{" "}
            <A href="https://momentum.usmd.edu/">Maryland Momentum Fund</A>,{" "}
            <A href="https://mdeia.org/">Maryland Energy Innovation Accelerator</A>{" "}
            through the{" "}
            <A href="https://mdeia.org/phase-3">Climate Technology Founders Fund</A>,{" "}
            <A href="https://resilient-earth-capital.com/">Resilient Earth Capital</A>,
            and{" "}
            <A href="https://www.tedcomd.com/funding/seed-funds">TEDCO Seed Fund</A>.
          </p>

          <p className={styles.paragraph}>
            The investment will support demonstration of a single step, liquid fuel
            production reactor system with zero CO2 emissions. The core technology, a{" "}
            <A href="https://www.shell.com/what-we-do/technology-and-innovation/innovate-with-shell/shell-gamechanger.html">
              Shell Game Changer
            </A>{" "}
            Awardee was developed by{" "}
            <A href="https://www.linkedin.com/in/ericdwachsman">Eric Wachsman</A>, and
            exclusively
            transferred from the University of Maryland and University of Florida to
            Alchemity, has already been validated. Alchemity is working towards a
            pilot-scale sustainable aviation fuel (SAF) reactor demonstration
            representing a pivotal milestone in the commercialization of its modular
            technology designed to convert waste or stranded gas (such as methane and
            CO2) into high-value liquid fuels and chemicals. Alchemity intends to offer
            distributed fuel security at price parity to conventional fuels.
          </p>

          <p className={styles.paragraph}>
            Bio-methane emissions and the underutilization of renewable gas resources
            pose significant environmental and economic challenges. Traditional methods
            used to capture and process biogas and landfill gas are frequently
            cost-prohibitive, inefficient, and carbon-intensive. Alchemity addresses
            these barriers using a proprietary thermos-catalytic membrane reactor that
            enables a modular, single-step conversion process. Deployed directly at the
            point of gas production, this technology transforms waste or stranded
            bio-methane and CO2 into low-carbon fuels including sustainable aviation fuel
            (SAF), renewable diesel, and other valuable products, significantly reducing
            greenhouse gas emissions while optimizing local resource utilization.
          </p>

          <p className={styles.paragraph}>
            "This investment allows Alchemity to validate technical performance at a
            meaningful scale and reduce commercialization risk by increasing the
            technology readiness and gathering crucial system operational data," said{" "}
            <A href="https://www.linkedin.com/in/emir-dogdibegovic-ph-d-ba976b192">
              Emir Dogdibegovic
            </A>
            , Co-Founder and CEO. "We thank the investors for their
            support and looking forward to putting our heads down and executing on the
            proposed efforts", he added. Alchemity recently graduated from the{" "}
            <A href="https://creativedestructionlab.com/">Creative Destruction Lab</A>{" "}
            and received a Build Our Future Grant Award from Maryland
            Department of Commerce. Alchemity is poised to deliver measurable
            environmental, economic, and financial impacts for the state of Maryland and
            beyond:
          </p>

          <ul className={styles.bulletList}>
            <li>
              <strong>Environmental Benefits:</strong> By converting waste biogas into
              low-carbon fuels, the technology directly mitigates localized methane
              emissions. Each subsequent commercial-scale system is projected to avoid
              tens of thousands of tons of CO2 annually through active methane mitigation
              and the displacement of traditional fossil fuels.
            </li>
            <li>
              <strong>Economic &amp; Job Growth:</strong> The expansion supports
              Maryland-based job creation across high-skilled sectors, including
              engineering, manufacturing, skid assembly, field operations, and project
              development. Early commercial growth is expected to create dozens of
              skilled jobs within the state.
            </li>
            <li>
              <strong>Financial Value Creation:</strong> The single-step waste gas to
              liquid fuel conversion process turns an environmental liability into a
              marketplace asset. By converting waste methane and CO2 streams into
              marketable fuels and chemicals, the technology introduces lucrative new
              revenue opportunities for Maryland farms, wastewater treatment facilities,
              and landfill operators.
            </li>
          </ul>

          <h2 className={styles.subheading}>About Alchemity:</h2>
          <p className={styles.paragraph}>
            Alchemity is Seed-stage climate-tech company located in College Park
            Maryland. Backed by a strong intellectual property portfolio, and existing
            state-of-the-art facility, the company pursues a path to deploy a single
            step, distributed, liquid fuel synthesis reactors from waste or stranded gas
            with zero CO2 emissions. With a mission to offer fuel security at price
            parity through distributed fuel production facilities, Alchemity is scaling a
            breakthrough technology allowing for lower overall Capex and Opex and
            eliminating the green premium allowing faster scaling and deployment of
            low-carbon fuels.
          </p>

          <Link to="/news" className={styles.backLink}>
            ← Back to News
          </Link>
        </motion.article>
      </div>
    </>
  );
}

export default SeedFinancing;
