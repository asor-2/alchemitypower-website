import React, { useEffect, useRef, useState } from "react";
import EnergyBackground from "../components/EnergyBackground";
import SEO from "../components/SEO/SEO";
import styles from "./About.module.css";
import campusBuilding from "../components/images/about1.png";
import labTeam from "../components/images/interns_1.png";
import founder1 from "../components/images/founder1.jpg";
import founder2 from "../components/images/founder2.jpg";
import founder3 from "../components/images/founder3.jpg";
import advisor1 from "../components/images/advisor1.png";
import advisor2 from "../components/images/advisor2.jpg";
import advisor3 from "../components/images/advisor3.jpg";

const founders = [
  {
    id: 3,
    name: "Emir Dogdibegovic, Ph.D.",
    title: "CEO",
    blurb: "15 years of Scaleup & Deployment of Clean Energy Technologies",
    bio: [
      "Emir brings the technical and product scaleup know-how and strategic business expertise in customer acquisition, project development and deployment, and revenue generation.",
      "Previous Roles:",
      "CTO & CCO, Alchemity.",
      "Director Strategy and Execution, Origis Energy.",
      "Senior Engineer & Senior Program Manager, Nexceris.",
      "Affiliate, Lawrence Berkeley National Laboratory.",
      "70+ journal articles, patents, and presentations.",
      "Education: USC - Chemical Engineering; UC Berkeley - Berkeley Lab; Harvard University - Entrepreneurship.",
    ],
    imageUrl: founder3,
    linkedInUrl:
      "https://www.linkedin.com/in/emir-dogdibegovic-ph-d-ba976b192/",
  },
  {
    id: 2,
    name: "Rodger McKain, Ph.D.",
    title: "CFO",
    blurb: "30 years as Fortune 500\nExecutive",
    bio: [
      "Rodger brings expertise in building large businesses and succesful exit strategies. He successfully led the growth of multi-billion dollar S&P 500 companies.",
      "Previous Roles:",
      "CEO, Alchemity.",
      "VP and Head at British Petroleum (Global Exploration, Gas to Chemicals/Liquids).",
      "Interim CEO, LG Fuel Cell Systems, Inc.",
      "VP Govt. Programs Rolls-Royce Fuel Cell Systems.",
      "President SOFCO-EFS Holdings, LLC (Acquired by Rolls-Royce/LG).",
      "Education: Case Western Reserve University - Physical Chemistry.",
    ],
    imageUrl: founder2,
    linkedInUrl: "https://www.linkedin.com/in/rodger-mckain-5223168/",
  },
  {
    id: 1,
    name: "Eric Wachsman, Ph.D.",
    title: "Executive Chair",
    blurb: "30 years of Energy Research & Product Development/Innovation",
    bio: [
      "Eric brings the innovation (developed IP licensed to Alchemity) and startup scaleup expertise through multiple ventures.",
      "Current Roles",
      "Founder of VC-backed Battery Company (Ion Storage Systems).",
      "Director of Maryland Energy Innovation Institute.",
      "Published >300 papers, >40 patents.",
      "Education: UC Berkeley - Chemical Engineering; Stanford University - Materials Science & Engineering.",
    ],
    imageUrl: founder1,
    linkedInUrl: "https://www.linkedin.com/in/ericdwachsman/",
  },
];

const advisors = [
  {
    id: 4,
    name: "Nitin Parekh",
    title: "Advisor",
    blurb: "Proven entrepreneur, fundraiser, corporate venture investor",
    bio: [
      "Director Stanford High Impact Fund",
      "Board member of multiple ventures, creating JV's and leading the acquisition of companies.",
      "Education: UCLA - MBA; Stanford University - Engineering ",
    ],
    imageUrl: advisor1,
    linkedInUrl: "https://www.linkedin.com/in/nitin-parekh-454578/",
  },
  {
    id: 5,
    name: "Matt Zoller",
    title: "Advisor",
    blurb: "30 years of Proven Leadership in Energy and System Operations",
    bio: [
      "23 years at Chevron, leading refinery operations.",
      "At Hawaiian Electric, Par Holdings, and Island Energy Services.",
      "Education: University of Hawaii",
    ],
    imageUrl: advisor2,
    linkedInUrl: "https://www.linkedin.com/in/matt-zoller-8557465a/",
  },
  {
    id: 6,
    name: "Glenn Fuller",
    title: "Advisor",
    blurb: "32 years of Expertise in Process, Operations, Lean Six Sigma",
    bio: [
      "24 years at Chevron, leading Process, Operations, and Lean Six Sigma.",
      "Sr. Process Engineer/Business Planner (Renewables), Kern Energy. ",
      "Education: UC Santa Barbara- Chemical Engineering",
    ],
    imageUrl: advisor3,
    linkedInUrl: "https://www.linkedin.com/in/glenn-fuller-a990b56/",
  },
];

function Arrow() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" /></svg>;
}

function PeopleSection({ id, label, description, people, onSelect }) {
  return (
    <section id={id} className={styles.peopleSection} aria-labelledby={`${id}-title`}>
      <div className={styles.sectionHeading}>
        <h2 id={`${id}-title`}>{label}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.peopleGrid}>
        {people.map(person => (
          <article className={styles.person} key={person.id}>
            <button type="button" className={styles.profileButton} onClick={() => onSelect(person)} aria-label={`Read biography of ${person.name}`} aria-haspopup="dialog">
              <span className={styles.portrait}><img src={person.imageUrl} alt="" loading="lazy" /></span>
              <span className={styles.personName}>{person.name}</span>
              <span className={styles.personRole}>{person.title}</span>
              <span className={styles.personBlurb}>{person.blurb}</span>
              <span className={styles.profileLink}>View biography <Arrow /></span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function Biography({ person, onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
    };
  }, []);

  return (
    <dialog ref={dialogRef} className={styles.dialog} aria-labelledby="biography-title" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) { const box = event.currentTarget.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) onClose(); } }}>
      <div className={styles.dialogBar}><button type="button" className={styles.closeButton} onClick={onClose} autoFocus>Close <span aria-hidden="true">×</span></button></div>
      <div className={styles.dialogContent}>
        <img className={styles.dialogPortrait} src={person.imageUrl} alt={person.name} />
        <div className={styles.biography}>
          <p className={styles.eyebrow}>{person.title}</p>
          <h2 id="biography-title">{person.name}</h2>
          {person.bio.map((paragraph, index) => /^(Previous Roles:?|Current Roles:?)$/.test(paragraph)
            ? <h3 key={index}>{paragraph.replace(/:$/, "")}</h3>
            : <p key={index}>{paragraph}</p>)}
          <a className={styles.linkedin} href={person.linkedInUrl} target="_blank" rel="noopener noreferrer">Connect on LinkedIn <span className={styles.srOnly}>(opens in a new tab)</span><Arrow /></a>
        </div>
      </div>
    </dialog>
  );
}

const locationPhotos = [
  { src: campusBuilding, alt: "Brick building on the University of Maryland campus", caption: "Our home base · College Park, Maryland" },
  { src: labTeam, alt: "Six team members standing together in the lab", caption: "Inside the lab · The people behind the work" },
];

function LocationSection() {
  const [activePhoto, setActivePhoto] = useState(0);
  const touchStart = useRef(null);
  const move = (direction) => setActivePhoto(current => (current + direction + locationPhotos.length) % locationPhotos.length);

  return (
    <section className={styles.locationSection} aria-labelledby="location-title">
      <div className={styles.locationIntro}>
        <p className={styles.eyebrow}>Our home base</p>
        <h2 id="location-title">College Park,<br /><span>Maryland.</span></h2>
        <p className={styles.locationDescription}>Based on the University of Maryland campus, we’re working on what comes next in on-site power.</p>
        <div className={styles.locationMarker}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" /></svg>
          <span>University of Maryland<br />College Park, MD</span>
        </div>
      </div>
      <div className={styles.locationGallery} role="region" aria-roledescription="carousel" aria-label="Our campus and lab" onKeyDown={event => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1); }
      }}>
        <div className={styles.locationFrame} tabIndex={0} aria-label="Location photographs. Use the left and right arrow keys to change photos." onTouchStart={event => {
          touchStart.current = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
        }} onTouchCancel={() => { touchStart.current = null; }} onTouchEnd={event => {
          const start = touchStart.current;
          touchStart.current = null;
          if (!start || !event.changedTouches.length) return;
          const dx = event.changedTouches[0].clientX - start.x;
          const dy = event.changedTouches[0].clientY - start.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) move(dx < 0 ? 1 : -1);
        }}>
          {locationPhotos.map((photo, index) => <img key={photo.src} className={`${styles.locationPhoto} ${index === activePhoto ? styles.locationPhotoActive : ""}`} src={photo.src} alt={photo.alt} aria-hidden={index !== activePhoto} draggable={false} loading="lazy" />)}
        </div>
        <div className={styles.locationFooter}>
          <p className={styles.locationCaption} aria-live="polite" aria-atomic="true"><span className={styles.locationCount}>{String(activePhoto + 1).padStart(2, "0")} / {String(locationPhotos.length).padStart(2, "0")}</span>{locationPhotos[activePhoto].caption}</p>
          <div className={styles.locationControls}>
            <button type="button" onClick={() => move(-1)} aria-label="Previous location photo"><span className={styles.previousArrow}><Arrow /></span></button>
            <button type="button" onClick={() => move(1)} aria-label="Next location photo"><Arrow /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  return (
    <EnergyBackground className={styles.page}>
      <SEO title="About AlchemityPower" description="Meet the founders and advisors behind AlchemityPower and our work to develop a new generation of on-site power." />
      <div className={styles.container}>
        <header className={styles.hero}>
          <div><p className={styles.eyebrow}>About AlchemityPower</p><h1>New power.<br /><span>Built on experience.</span></h1></div>
          <div className={styles.introduction}><p>We’re developing a new generation of on-site power for data centers and other critical applications.</p><p>Our team brings together energy research, engineering, and business experience to move that work forward.</p><nav className={styles.sectionLinks} aria-label="About page sections"><a href="#founders">Meet the founders <Arrow /></a><a href="#advisors">Our advisors <Arrow /></a></nav></div>
        </header>
        <div className={styles.purpose}><p className={styles.eyebrow}>Our purpose</p><p>Give growing industries more options for the power they depend on.</p></div>
        <LocationSection />
        <PeopleSection id="founders" label="Our Leadership" description="75 years of combined experience" people={founders} onSelect={setSelectedPerson} />
        <PeopleSection id="advisors" label="Our advisors" description="Perspectives from energy operations, investment, and business growth." people={advisors} onSelect={setSelectedPerson} />
      </div>
      {selectedPerson && <Biography person={selectedPerson} onClose={() => setSelectedPerson(null)} />}
    </EnergyBackground>
  );
}
