import React, { useState } from "react";
import { Zap, Layers, Server, ChevronLeft, ChevronRight } from "react-feather";
import SEO from "../components/SEO/SEO";
import teamPhoto from "../components/images/interns_1.png";
import buildingPhoto from "../components/images/about1.png";
import recapPhoto from "../components/images/about3.png";
import styles from "./Careers.module.css";

// Replace this with AlchemityPower's recruiting form when it is ready.
const applicationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScIRsEjt7P_Fa6v64amzFEPN4rcG34y9GgH3KMXkKOFVHEOuw/viewform?usp=dialog";

const photos = [
  {
    src: teamPhoto,
    alt: "Six members of Alchemity’s team and intern group standing together in the lab.",
    caption: "Alchemity team & interns, in the lab",
  },
  {
    src: buildingPhoto,
    alt: "The exterior of the building where Alchemity is located.",
    caption: "Where the work happens",
  },
  {
    src: recapPhoto,
    alt: "A 2025 collage of Alchemity’s team, lab equipment, and research activities.",
    caption: "A look back at 2025",
    contain: true,
  },
];

const principles = [
  {
    icon: Zap,
    title: "Blank",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: Layers,
    title: "Take the next step in scale.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: Server,
    title: "Power what can’t wait.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function Careers() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const photo = photos[photoIndex];

  function changePhoto(direction) {
    setPhotoIndex((current) => (current + direction + photos.length) % photos.length);
  }

  function handlePhotoKeyDown(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      changePhoto(event.key === "ArrowLeft" ? -1 : 1);
    }
  }

  return (
    <>
      <SEO
        title="Careers at AlchemityPower"
        description="Help AlchemityPower develop modular solid oxide fuel cell systems for reliable on-site power. Bring your experience in science, engineering, manufacturing, or operations."
        url="/careers"
      />
      <div className={styles.page}>
        <div className={styles.container}>
          <section className={styles.hero} aria-labelledby="careers-title">
            <div>
              <p className={styles.eyebrow}>Careers / AlchemityPower</p>
              <h1 id="careers-title" className={styles.headline}>
                The future<br />
                needs power.<br />
                <span>And you.</span>
              </h1>
            </div>
            <div className={styles.introduction}>
              <p>
                We’re developing systems to bring reliable
                power closer to where it’s needed. There’s plenty to figure
                out. That’s where you come in.
              </p>
              <a className={styles.primaryLink} href="#career-opportunities">
                Explore opportunities <span aria-hidden="true">↘</span>
              </a>
            </div>
          </section>

          <figure
            className={styles.teamFigure}
            aria-label="Team and workplace photos"
            aria-roledescription="carousel"
            onKeyDown={handlePhotoKeyDown}
          >
            <div className={styles.photoFrame}>
              <img
                className={`${styles.teamPhoto} ${photo.contain ? styles.photoContain : ""}`}
                src={photo.src}
                alt={photo.alt}
                decoding="async"
              />
              <button
                className={`${styles.photoArrow} ${styles.previousPhoto}`}
                type="button"
                aria-label="Previous photo"
                onClick={() => changePhoto(-1)}
              >
                <ChevronLeft size={24} aria-hidden="true" focusable="false" />
              </button>
              <button
                className={`${styles.photoArrow} ${styles.nextPhoto}`}
                type="button"
                aria-label="Next photo"
                onClick={() => changePhoto(1)}
              >
                <ChevronRight size={24} aria-hidden="true" focusable="false" />
              </button>
            </div>
            <figcaption className={styles.caption}>
              <span>The team behind the work.</span>
              <span aria-live="polite" aria-atomic="true">
                {photo.caption} · {photoIndex + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>

          <section className={styles.culture} aria-labelledby="culture-title">
            <div className={styles.sectionIntroduction}>
              <p className={styles.eyebrow}>The work ahead</p>
              <h2 id="culture-title">Help fuel society<br />with us.</h2>
              <p>
                Reliable energy takes people with different skills and ways of thinking. At AlchemityPower, we’re looking for curious minds across science, engineering, software, and operations to help turn ambitious ideas into practical solutions.
              </p>
            </div>
            <ul className={styles.principles}>
              {principles.map(({ title, text, icon: Icon }) => (
                <li className={styles.principle} key={title}>
                  <span className={styles.principleIcon}>
                    <Icon size={26} strokeWidth={1.5} aria-hidden="true" focusable="false" />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section
          className={styles.opportunities}
          id="career-opportunities"
          aria-labelledby="opportunities-title"
        >
          <div className={`${styles.container} ${styles.opportunitiesLayout}`}>
            <div>
              <p className={styles.eyebrow}>Find your place</p>
              <h2 id="opportunities-title">What could you<br />help us build?</h2>
            </div>
            <div className={styles.application}>
              <p className={styles.applicationIntro}>
                BLANK: Job names e.g. Software. Materials Operator. Engineer. 
              </p>
              <p className={styles.applicationText}>
                If you believe your experience or passion could help Alchemity Power tackle our problems, then we’d like to hear from you. Tell us what you’ve worked on and what you’d like to work on next.
              </p>
              <a
                className={styles.applicationLink}
                href={applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Introduce yourself <span aria-hidden="true">↗</span>
                <span className={styles.srOnly}> (opens a new tab)</span>
              </a>
              <p className={styles.formNote}>Opens our application form in a new tab.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
