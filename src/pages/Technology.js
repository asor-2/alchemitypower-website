import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import EnergyBackground from "../components/EnergyBackground";
import SEO from "../components/SEO/SEO";
import styles from "./Technology.module.css";

// ==================== EDIT PAGE CONTENT HERE ====================
// Edit words inside quotes. Keep commas, brackets, and field names intact.
// Sections below hold headings, descriptions, metrics, and image paths.
// Empty image paths keep the image placeholders.
const pageCopy = {
  "popupTarget": "Planned milestone",
  "popupCapacityLabel": "Target system capacity",
  "ourApproach": "Our approach",
  "progressStarts": "Progress starts",
  "atTheCell": "at the cell.",
  "ourTechnologyDevelopmentFocusesOnThree": "Our technology development focuses on three connected areas: how much power a cell produces, how it is built, and the temperature at which it operates.",
  "trl": "· TRL",
  "theDevelopmentRoadmap": "The development roadmap",
  "datesCapacitiesAndTrlLevelsShown": "Dates, capacities, and TRL levels shown are development targets.",
  "exploreThePlatform": "Explore the platform",
  "technologyAlchemitypower": "Technology | AlchemityPower",
  "exploreAlchemitypowersSolidOxideFuelCell": "Explore AlchemityPower’s solid oxide fuel cell development and approach to on-site power.",
  "alchemitypowerTechnology": "AlchemityPower / Technology",
  "statement": "Statement",
  "forDataCentersAndOtherCritical": "For data centers and other critical facilities, access to electricity shapes where, when, and how they can grow. Grid connections, site constraints, and operating requirements all influence that decision.",
  "theChallenge": "The challenge",
  "sixCriteria": "Six criteria",
  "roadmap": "Roadmap",
  "powerPlanningIs": "Power planning is",
  "businessPlanning": "business planning.",
  "securingEnoughElectricityIsOnlyPart": "Securing enough electricity is only part of the challenge. A facility also needs a workable timeline, an appropriate site design, and an energy supply suited to its operations.",
  "whenCanPowerArrive": "When can power arrive?",
  "gridConnectionsAndInfrastructureUpgradesCan": "Grid connections and infrastructure upgrades can affect project schedules. Power availability needs to be considered alongside construction and expansion plans.",
  "whatWillTheSiteAllow": "What will the site allow?",
  "spaceFuelSupplyPermittingAndLocal": "Space, fuel supply, permitting, and local environmental requirements influence which generation options are practical.",
  "whatMustKeepRunning": "What must keep running?",
  "criticalFacilitiesNeedAnEnergyStrategy": "Critical facilities need an energy strategy that accounts for demand, maintenance, and interruptions to supply.",
  "whyOnsitePower": "Why on-site power",
  "anotherWayToPlanForGrowth": "Another way to plan for growth.",
  "generatingElectricityAtTheSiteCan": "Generating electricity at the site can add an option alongside the grid. AlchemityPower is developing solid oxide fuel cell technology to support that approach, with a focus on modular power for data centers and other critical applications.",
  "criteria": "Criteria",
  "6CriteriaForChoosing": "6 criteria for choosing",
  "anOnsitePowerProvider": "an on-site power provider.",
  "criteriaIntroductionGoesHere": "Criteria introduction goes here."
};

// Add imported images or public-folder paths when ready.
const pageImages = {
  dataCenter: { src: "", alt: "" },
  onsiteProduct: { src: "", alt: "" },
};
// Keep these six slots until the final criteria and descriptions are approved.
const criteria = [
  {
    "id": 0,
    "title": "Criterion heading",
    "description": "Criterion description goes here."
  },
  {
    "id": 1,
    "title": "Criterion heading",
    "description": "Criterion description goes here."
  },
  {
    "id": 2,
    "title": "Criterion heading",
    "description": "Criterion description goes here."
  },
  {
    "id": 3,
    "title": "Criterion heading",
    "description": "Criterion description goes here."
  },
  {
    "id": 4,
    "title": "Criterion heading",
    "description": "Criterion description goes here."
  },
  {
    "id": 5,
    "title": "Criterion heading",
    "description": "Criterion description goes here."
  }
];
const innovations = [
  { title: "Blank", subtitle: "Subtitle", description: "statement", detail: "details?", layer: 0 },
  { title: "Blank", subtitle: "Subtitle", description: "statement", detail: "specific details?", layer: 1 },
  { title: "Blanke", subtitle: "Subtitle", description: "statement", detail: "details?", layer: 2 },
];
// Planned milestones from slide 10. Add approved photography to each image field.
const roadmap = [
  { year: "2027", trl: "5–6", capacity: "20", unit: "kW", title: "Stack validation", description: "Stack testing and module development.", image: { src: "", alt: "" } },
  { year: "2028", trl: "7", capacity: "20", unit: "kW", title: "System field testing", description: "In-field testing of the integrated 20 kW system.", image: { src: "", alt: "" } },
  { year: "2029", trl: "7+", capacity: "200", unit: "kW", title: "A repeatable building block", description: "First deployment at a customer site.", image: { src: "", alt: "" } },
  { year: "2030+", trl: "8+", capacity: "2", unit: "MW+", title: "Commercial scale", description: "Manufacturing of 200 kW building blocks for 2 MW+ systems.", image: { src: "", alt: "" } },
];
const milestoneDetails = {
  "2027": { label: "Validation testing on the stack", text: "The planned work centers on stack testing and module development." },
  "2028": { label: "Test the integrated system", text: "The roadmap moves to in-field testing of a 20 kW system. Capacity remains at 20 kW while the focus shifts from stack development to system-level operation." },
  "2029": { label: "Take the building block to our customers", text: "Deployment at a customer site is planned for the 200 kW building block. This is the next step toward repeatable larger systems." },
  "2030+": { label: "Scaling up through repeated modules", text: "The plan pairs manufacturing of the 200 kW building block with 2 MW+ systems. Thus, allowing the energy production to be scaled even further." },
};
// ==================== PAGE LAYOUT: NO CONTENT EDITS BELOW ====================
function ImageSlot({ image, label, subtle = false }) {
  return <div className={`${styles.imageSlot} ${subtle ? styles.subtleImage : ""}`}>
    {image.src ? <img src={image.src} alt={image.alt} loading="lazy" /> : <div className={styles.blankImage} role="img" aria-label={`${label} image placeholder`}><span aria-hidden="true">+</span></div>}
  </div>;
}

function Arrow() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" /></svg>; }
function InnovationSection() {
  return <section id="technology-approach" className={styles.innovation} aria-labelledby="innovation-heading"><div className={styles.container}>
    <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>{pageCopy.ourApproach}</p><h2 id="innovation-heading">{pageCopy.progressStarts}<br />{pageCopy.atTheCell}</h2></div><p>{pageCopy.ourTechnologyDevelopmentFocusesOnThree}</p></div>
    <div className={styles.knowledgeList}>{innovations.map((item) => <article className={styles.knowledgeRow} key={item.title}><div><h3>{item.title}</h3><p className={styles.knowledgeSubtitle}>{item.subtitle}</p></div><div><p>{item.description}</p><p className={styles.knowledgeNote}>{item.detail}</p></div></article>)}</div>
  </div></section>;
}

function RoadmapMetric({ value, unit }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    let frame = 0, armed = true;
    const stop = () => { cancelAnimationFrame(frame); frame = 0; };
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting || !armed) return;
      armed = false;
      if (media.matches) { setDisplay(value); return; }
      stop();
      const start = performance.now();
      setDisplay(0);
      const tick = now => {
        const progress = Math.min(1, (now - start) / 1600);
        setDisplay(value * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    const reset = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) { armed = true; stop(); setDisplay(value); }
    }, { rootMargin: "160px 0px" });
    observer.observe(ref.current); reset.observe(ref.current);
    const preference = () => { if (media.matches) { stop(); setDisplay(value); } };
    media.addEventListener("change", preference);
    return () => { stop(); observer.disconnect(); reset.disconnect(); media.removeEventListener("change", preference); };
  }, [value]);
  const format = number => value < 10 ? number.toFixed(1) : Math.round(number).toString();
  return <p ref={ref} className={styles.roadmapCapacity} aria-label={`${value} ${unit}`}>
    <span className={styles.capacityDigits} aria-hidden="true">{format(display)}</span><span aria-hidden="true">{unit}</span>
  </p>;
}

function MilestoneDialog({ step, close }) {
  const ref = useRef(null);
  const [closing, setClosing] = useState(false);
  const timer = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    const focus = document.activeElement;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(timer.current);
      dialog.close();
      document.body.style.overflow = overflow;
      if (focus instanceof HTMLElement && focus.isConnected) focus.focus({ preventScroll: true });
    };
  }, []);
  const dismiss = () => {
    if (closing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { close(); return; }
    setClosing(true);
    timer.current = setTimeout(close, 220);
  };
  return <dialog ref={ref} className={styles.milestoneDialog} data-closing={closing}
    aria-labelledby="milestone-dialog-title" onCancel={event => { event.preventDefault(); dismiss(); }}
    onClick={event => {
      if (event.target === event.currentTarget) {
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dismiss();
      }
    }}>
    <div className={styles.popupTop}>
      <div className={styles.popupChips}><span className={styles.popupYear}>{step.year}</span><span className={styles.popupTrl}>TRL {step.trl}</span></div>
      <button type="button" className={styles.popupClose} autoFocus onClick={dismiss} aria-label="Close milestone details">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
      </button>
    </div>
    <div className={styles.popupHeading}>
      <p className={styles.popupEyebrow}>{pageCopy.popupTarget}</p>
      <h3 id="milestone-dialog-title">{step.title}</h3>
    </div>
    <div className={styles.popupSpec}>
      <div><p className={styles.popupSpecLabel}>{pageCopy.popupCapacityLabel}</p><p className={styles.popupCapacity}>{step.capacity}<span>{step.unit}</span></p></div>
      <div className={styles.popupSymbol}><RoadmapIcon index={roadmap.findIndex(item => item.year === step.year)} /></div>
    </div>
    <p className={styles.popupSummary}>{step.description}</p>
    <div className={styles.popupDetail}><h4>{milestoneDetails[step.year].label}</h4><p>{milestoneDetails[step.year].text}</p></div>

  </dialog>;
}
function RoadmapIcon({ index }) {
  return <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {index === 0 ? <><path d="m8 16 16-8 16 8-16 8zM8 24l16 8 16-8M8 32l16 8 16-8" /></> :
      index === 1 ? <><rect x="10" y="10" width="28" height="28" rx="2" /></> :
        index === 2 ? <><rect x="7" y="7" width="14" height="14" rx="2" /><rect x="27" y="7" width="14" height="14" rx="2" /><rect x="7" y="27" width="14" height="14" rx="2" /><rect x="27" y="27" width="14" height="14" rx="2" /></> :
          <><rect x="3" y="15" width="10" height="20" rx="1" /><rect x="13" y="15" width="10" height="20" rx="1" /><rect x="23" y="15" width="10" height="20" rx="1" /><rect x="33" y="15" width="10" height="20" rx="1" /><path d="M3 15l3-4h39l-2 4M43 35l2-4V11M13 15l3-4M23 15l3-4M33 15l3-4" /></>}
  </svg>;
}
function RoadmapSection() {
  const [selected, setSelected] = useState(null);
  return <section id="technology-roadmap" className={styles.roadmapSection} aria-labelledby="roadmap-heading">
    <div className={styles.container}>
      <div className={styles.roadmapHeading}><h2 id="roadmap-heading">{pageCopy.theDevelopmentRoadmap}</h2></div>
      <ol className={styles.roadmapTrack}>
        {roadmap.map((step, index) => <li className={styles.roadmapStep} key={step.year} data-active={selected?.year === step.year}>
          <div className={styles.roadmapYear}>{step.year}</div>
          <div className={styles.roadmapConnector} aria-hidden="true"><span /></div>
          <div className={styles.compactMilestone}>
            <button type="button" className={styles.roadmapIconButton} aria-label={`Open ${step.year} milestone: ${step.title}`} aria-haspopup="dialog" onClick={() => setSelected(step)}>
              <RoadmapIcon index={index} /><span className={styles.iconPlus} aria-hidden="true">+</span>
            </button>
            <RoadmapMetric value={Number(step.capacity)} unit={step.unit} />
            <span className={styles.trlBadge}>TRL {step.trl}</span>
          </div>
        </li>)}
      </ol>
      <div className={styles.roadmapFootnote}><p>{pageCopy.datesCapacitiesAndTrlLevelsShown}</p><Link to="/products" className={styles.roadmapLink}>{pageCopy.exploreThePlatform}<Arrow /></Link></div>
    </div>
    {selected && <MilestoneDialog step={selected} close={() => setSelected(null)} />}
  </section>;
}
export default function Technology() {
  return <EnergyBackground className={styles.page}>
    <SEO title={pageCopy.technologyAlchemitypower} description={pageCopy.exploreAlchemitypowersSolidOxideFuelCell} url="/technology" />
    <div className={styles.container}>
      <header className={styles.hero}><div><p className={styles.eyebrow}>{pageCopy.alchemitypowerTechnology}</p><h1>{pageCopy.statement}</h1><div className={styles.heroIntro}><p>{pageCopy.forDataCentersAndOtherCritical}</p><nav aria-label="Technology sections"><a href="#technology-problem">{pageCopy.theChallenge}<Arrow /></a><a href="#technology-approach">{pageCopy.ourApproach}<Arrow /></a><a href="#technology-criteria">{pageCopy.sixCriteria}<Arrow /></a><a href="#technology-roadmap">{pageCopy.roadmap}<Arrow /></a></nav></div></div><ImageSlot image={pageImages.dataCenter} label="Data center" /></header>
      <section id="technology-problem" className={styles.problem} aria-labelledby="problem-heading"><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>{pageCopy.theChallenge}</p><h2 id="problem-heading">{pageCopy.powerPlanningIs}<br />{pageCopy.businessPlanning}</h2></div><p>{pageCopy.securingEnoughElectricityIsOnlyPart}</p></div>
        <div className={styles.problemGrid}>
          <article><h3>{pageCopy.whenCanPowerArrive}</h3><p>{pageCopy.gridConnectionsAndInfrastructureUpgradesCan}</p></article>
          <article><h3>{pageCopy.whatWillTheSiteAllow}</h3><p>{pageCopy.spaceFuelSupplyPermittingAndLocal}</p></article>
          <article><h3>{pageCopy.whatMustKeepRunning}</h3><p>{pageCopy.criticalFacilitiesNeedAnEnergyStrategy}</p></article>
        </div>
        <div className={styles.response}><div className={styles.responseCopy}><p className={styles.eyebrow}>{pageCopy.whyOnsitePower}</p><h3>{pageCopy.anotherWayToPlanForGrowth}</h3><p>{pageCopy.generatingElectricityAtTheSiteCan}</p></div><ImageSlot image={pageImages.onsiteProduct} label="On-site power product" subtle /></div>
      </section>
    </div>
    <InnovationSection />
    <section id="technology-criteria" className={styles.criteriaSection} aria-labelledby="criteria-heading"><div className={styles.container}><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>{pageCopy.criteria}</p><h2 id="criteria-heading">{pageCopy["6CriteriaForChoosing"]}<br />{pageCopy.anOnsitePowerProvider}</h2></div><p>{pageCopy.criteriaIntroductionGoesHere}</p></div><div className={styles.criteriaGrid}>{criteria.map((criterion) => <article key={criterion.id}><h3>{criterion.title}</h3><p>{criterion.description}</p></article>)}</div></div></section>
    <RoadmapSection />
  </EnergyBackground>;
}
