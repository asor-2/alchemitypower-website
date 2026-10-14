import React from "react";
import ContactForm from "../components/ContactForm1";
import EnergyBackground from "../components/EnergyBackground";
import SEO from "../components/SEO/SEO";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <EnergyBackground className={styles.page}>
      <SEO title="Contact AlchemityPower" description="Get in touch about on-site power, investment, and partnership opportunities." url="/contact" />
      <div className={styles.container}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Contact AlchemityPower</p>
          <h1>Let’s talk.</h1>
          <p>Have a question about our work, an investment opportunity, or a potential partnership? We’d like to hear from you.</p>
        </header>
        <div className={styles.layout}>
          <aside className={styles.details} aria-label="Contact details">
            <div>
              <h2>Find us</h2>
              <address>4467 Technology Drive<br />Suite 2116<br />College Park, MD 20742</address>
              <a href="https://maps.app.goo.gl/Z6SbocEcZ1GCuCvF7" target="_blank" rel="noopener noreferrer">Get directions <span aria-hidden="true">↗</span><span className={styles.srOnly}> (opens in a new tab)</span></a>
            </div>
            <div>
              <h2>Stay connected</h2>
              <p>Follow updates from Alchemity.</p>
              <a href="https://www.linkedin.com/company/alchemity/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span><span className={styles.srOnly}> (opens in a new tab)</span></a>
            </div>
          </aside>
          <section className={styles.formPanel} aria-labelledby="contact-form-title">
            <h2 id="contact-form-title">Send us a message</h2>
            <p className={styles.note}>All fields are required. Please use your work email.</p>
            <ContactForm isCareers={false} appearance="minimal" />
          </section>
        </div>
      </div>
    </EnergyBackground>
  );
}
