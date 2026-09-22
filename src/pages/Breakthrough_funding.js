import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Breakthrough_funding.module.css';

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

function BreakthroughFunding() {
    return (
        <>
            <SEO
                title="Alchemity Selected As A Breakthrough Energy Fellow"
                description="Alchemity Selected As A Breakthrough Energy Fellow"
                url="/news/breakthrough-funding"
            />

            <div className={styles.pageWrapper}>
                <motion.article
                    className={styles.article}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className={styles.date}>September 2026</p>

                    <h1 className={styles.headline}>
                        Alchemity Has Been Selected As A Breakthrough Energy Fellow
                    </h1>

                    <p className={styles.paragraph}>
                        COLLEGE PARK, Maryland. — [09/22/2026] — Alchemity has been chosen to participate in {" "} <A href="https://www.breakthroughenergy.org/fellows-projects/index.html">Breakthrough Energy's (BE) prestigious Fellows Program.</A>
                        This support will accelerate the development of Alchemity's modular skid-mounted systems that convert point-source waste and greenhouse gases into sustainable fuels at price parity and without CO₂ process emissions.
                    </p>

                    <p className={styles.paragraph}>
                        BE Fellows supports early-stage innovators who are developing technologies with the potential to significantly reduce greenhouse gas emissions at scale. BE Fellows receive funding, tailored technical guidance, and access to Breakthrough Energy's global network of mentors, experts and partners. The program helps founders bridge the gap from lab to market and advance their solutions toward commercial readiness. Alchemity joins 20 other companies in this year's Breakthrough Energy Fellows cohort, bringing together innovators from nine different countries. Fellows alumni have gone on to secure more than $750 million in follow-on funding and advance hundreds of patents, pilots and partnerships.
                    </p>

                    <p className={styles.paragraph}>
                        The BE Fellowship will support Alchemity as it advances its proprietary reactor technology toward pilot and commercial deployment, with an initial focus on producing sustainable aviation fuel (SAF) from waste gas. “Support from the BE Fellow program marks an important milestone for Alchemity as we advance our technology toward commercial deployment,” said{" "}
                        <A href="https://www.linkedin.com/in/emir-dogdibegovic-ph-d-ba976b192">
                            Dr. Emir Dogdibegovic
                        </A>, Co-Founder and CEO of Alchemity. “The combination of technical resources, business support and access to Breakthrough Energy's global network will help us accelerate our mission to make sustainable fuels economically competitive with conventional fuels.”
                    </p>

                    <p className={styles.paragraph}>
                        Aviation faces growing pressure to reduce emissions while maintaining access to affordable, energy-dense liquid fuels. SAF is one of the primary pathways available to decarbonize aviation, but current production remains limited and carries a significant price premium over conventional jet fuel.
                    </p>
                    <p className={styles.paragraph}>
                        Alchemity is developing a different approach: a modular, distributed reactor platform designed to convert methane-rich waste resources directly into liquid fuels without requiring an external hydrogen supply. The technology is based on decades of advanced ceramic membrane research and is designed to enable fuel production at or near waste gas sources.
                    </p>
                    <p className={styles.paragraph}>
                        By simplifying the conversion process and deploying standardized modular systems, Alchemity aims to reduce both the capital intensity and sustainable fuel production cost..
                    </p>
                    <p className={styles.paragraph}>
                        This support comes at an important time for both Alchemity and the sustainable fuels market. SAF demand is moving from voluntary commitments toward mandated adoption, while customers continue to face significant challenges around cost and supply. We believe Alchemity can help close that gap. This Fellowship follows the successful raising of Alchemity's {" "}<A href="/news/seed-financing">
                            latest financing round
                        </A>.
                    </p>

                    <h2 className={styles.subheading}>About Alchemity:</h2>
                    <p className={styles.paragraph}>
                        Alchemity is a seed-stage hard-tech company based in College Park, Maryland. Supported by a strong intellectual property portfolio and a state-of-the-art facility, Alchemity is scaling its breakthrough, single-step reactor technology to convert waste and stranded gases into sustainable liquid fuels without process CO₂ emissions. Through modular, distributed fuel production, the company aims to strengthen fuel security, reduce capital and operating costs, and achieve price parity with conventional fuels—eliminating the green premium and accelerating the deployment of sustainable fuels. 
                    </p>
                    <p className={styles.paragraph}>
                        <A href="mailto:resources@alchemity.tech">Contact us at: resources@alchemity.tech</A>
                    </p>

                    <Link to="/news" className={styles.backLink}>
                        ← Back to News
                    </Link>
                </motion.article>
            </div>
        </>
    );
}

export default BreakthroughFunding;
