import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO/SEO";
import EnergyBackground from "../components/EnergyBackground";
import labPhoto from "../components/images/interns_1.png";
import campusPhoto from "../components/images/about1.png";
import styles from "./Home.module.css";
import { markets } from "../data/markets";
import czeroIMAGE from '../components/images/Czero transparent logo black-white.png';
import breakthroughIMAGE from '../components/images/BEF logo.png';
import shell from '../components/images/shell.png';
import arpa from '../components/images/arpa.png';
import cdl from '../components/images/pink-black.png';
import mdCommerce from '../components/images/maryland department of commerce 1.png';
import blackbird from '../components/images/UdjB0gJC7Sq6SzCNtP5aVs2Hjaj1699957670569_200x200.png';
import rec from '../components/images/REC logo- higher quality.png';
import districtAngels from '../components/images/da-logo-mark.png';
import tedco from '../components/images/tedco.png';
import mmf from '../components/images/thumbnail-1-1024x332.png';
import discoveryFund from '../components/images/Discovery Fund logo.png';
import homePageImage from '../components/images/image (9).png';
import AnimatedMetric from "../components/AnimationMetric";
// Edit these five words when your final copy is ready.
const heroWords = ["Blank", "Blank", "Blank", "Blank", "Blank"];

const sponsors = [
  { name: "Breakthrough Energy", logo: breakthroughIMAGE, id: 1 },
  { name: "Shell Game Changer", logo: shell, id: 2 },
  { name: "ARPA-E", logo: arpa, id: 3 },
  { name: "Creative Destruction Lab", logo: cdl, id: 4, lighten: true },
  { name: "MD Department of Commerce", logo: mdCommerce, id: 5, lighten: true, height: "155px" },
  { name: "Blackbird Laboratories", logo: blackbird, id: 6, lighten: true, big: true },
  { name: "Resilient Earth Capital", logo: rec, id: 7 },
  { name: "District Angels", logo: districtAngels, id: 8 },
  { name: "TEDCO", logo: tedco, id: 9 },
  { name: "MMF", logo: mmf, id: 10, lighten: true },
  { name: "Discovery Fund", logo: discoveryFund, id: 11, lighten: true },
  { name: "Czero", logo: czeroIMAGE, id: 12, lighten: true },
];

// Replace this with approved hero photography when it is available.
const heroImage = homePageImage;
// Add imported images here, or use paths to files in public/images.
// Example: product: { src: "/images/power-system.jpg", alt: "AlchemityPower system" }
const pageImages = {
  product: { src: "", alt: "" },
  "Industry 1": { src: "", alt: "" },
  "Industry 2": { src: "", alt: "" },
  "Industry 3": { src: "", alt: "" },
};

function ImageSpace({ image, label, product = false }) {
  return <div className={`${styles.imageSpace} ${product ? styles.productImage : ""}`}>
    {image.src ? <img src={image.src} alt={image.alt} loading="lazy" /> : <div className={styles.emptyImage} role="img" aria-label={`${label} image placeholder`}><span aria-hidden="true">+</span></div>}
  </div>;
}
const sellingPoints = [
  {
    id: "metric-one",
    value: 12,
    prefix: "$",
    suffix: "B / GW",
    label: "of economic value lost when power is not received on time (Cleanview).",
  },
  {
    id: "metric-two",
    value: 5,
    prefix: ">",
    suffix: "GW",
    label: "of data center projects face multi-year interconnection delays",
  },
  {
    id: "metric-three",
    value: 75,
    prefix: "~",
    suffix: "%",
    label: "of new data center capacity is turning to self- generation, primarily natural gas turbines and diesel gensets(sold out for next 2-3 years).",
  },
];
const productPoints = Array.from({ length: 5 }, (_, index) => ({
  title: `Product point ${index + 1}`, text: `blank ${index + 1}.`,
}));
const industries = markets;

function Arrow({ left = false }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={left ? { transform: "rotate(180deg)" } : undefined}><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" /></svg>;
}
function Icon({ type }) {
  return <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">{type === "power" ? <><path d="m18 3-10 15h7l-1 11 10-16h-7z" /></> : type === "modules" ? <><rect x="4" y="4" width="9" height="9" /><rect x="19" y="4" width="9" height="9" /><rect x="4" y="19" width="9" height="9" /><rect x="19" y="19" width="9" height="9" /></> : <><circle cx="16" cy="10" r="4" /><path d="M8 27v-5a8 8 0 0 1 16 0v5M5 9a3 3 0 0 0 0 6M27 9a3 3 0 0 1 0 6M3 27v-6a5 5 0 0 1 3-4M29 27v-6a5 5 0 0 0-3-4" /></>}</svg>;
}

// Tune these camera positions after adding the real product image.
const productCameras = [
  { x: 0, y: 0, scale: 1 },
  { x: 0, y: 0, scale: 1.12 },
  { x: 0, y: 0, scale: 1.2 },
  { x: 0, y: 0, scale: 1.14 },
  { x: 0, y: 0, scale: 1 },
];
const clamp = value => Math.max(0, Math.min(1, value));
const ease = value => value * value * (3 - 2 * value);
function productFrame(progress) {
  const journey = clamp((progress - 0.14) / 0.72) * 4;
  const index = Math.min(4, Math.floor(journey));
  const next = Math.min(index + 1, 4);
  const blend = ease(journey - index);
  const from = productCameras[index], to = productCameras[next];
  return {
    active: Math.min(4, Math.round(journey)),
    x: from.x + (to.x - from.x) * blend,
    y: from.y + (to.y - from.y) * blend,
    scale: from.scale + (to.scale - from.scale) * blend,
    entrance: ease(clamp(progress / 0.14)),
    exit: ease(clamp((progress - 0.88) / 0.12)),
  };
}

function ProductExplorer() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [cinematic, setCinematic] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 901px) and (min-height: 701px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    const update = () => {
      frame = 0;
      setCinematic(media.matches);
      if (!media.matches || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const stage = sectionRef.current.firstElementChild;
      const travel = rect.height - stage.getBoundingClientRect().height;
      setProgress(clamp((100 - rect.top) / Math.max(1, travel)));
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    media.addEventListener("change", schedule);
    const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(schedule) : null;
    if (sectionRef.current) observer?.observe(sectionRef.current);
    update();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      media.removeEventListener("change", schedule);
      observer?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
  const scene = productFrame(progress);
  const tone = scene.entrance * (1 - scene.exit * 0.25);
  const channel = (light, dark) => Math.round(light + (dark - light) * tone);
  return <section ref={sectionRef} id="home-platform" className={styles.productJourney} aria-labelledby="product-heading">
    <div className={styles.productStage} style={cinematic ? {
      backgroundColor: `rgb(${channel(206, 23)} ${channel(218, 45)} ${channel(222, 54)})`,
      '--scene-ink': tone > 0.45 ? '#e5eff3' : '#172d36',
      '--scene-muted': tone > 0.45 ? '#bcd1dc' : '#405963',
    } : undefined}>
      <div className={styles.stageHeading}><p className={styles.eyebrow}>02 / Products</p><h2 id="product-heading">Product heading.</h2><p>Product section introduction goes here.</p></div>
      <div className={styles.stageBody}>
        <div className={styles.productCameraFrame} style={cinematic ? { transform: `scale(${0.8 + scene.entrance * 0.2 - scene.exit * 0.06})`, borderRadius: `${24 * (1 - scene.entrance)}px` } : undefined}>
          <div className={styles.productCamera} style={cinematic ? { transform: `translate(${scene.x}%, ${scene.y}%) scale(${scene.scale})` } : undefined}>
            <ImageSpace image={pageImages.product} label="Product" product />
          </div>
          {cinematic && <svg className={styles.callout} viewBox="0 0 500 400" aria-hidden="true"><path d="M270 205h70l65-60h75" pathLength="1" style={{ strokeDashoffset: 1 - clamp(scene.entrance * 2) }} /><circle cx="270" cy="205" r="5" /></svg>}
          <span className={styles.stageCaption}>Caption</span>
        </div>
        <div className={styles.sceneCopy}>
          {productPoints.map((point, index) => {
            const distance = Math.abs(clamp((progress - 0.14) / 0.72) * 4 - index);
            const opacity = clamp(1 - distance * 1.5);
            return <article key={point.title} className={styles.scenePoint} aria-hidden={cinematic && scene.active !== index ? true : undefined} style={cinematic ? { opacity, transform: `translateY(${(index - clamp((progress - 0.14) / 0.72) * 4) * 32}px)`, visibility: opacity === 0 ? 'hidden' : 'visible' } : undefined}>
              <span className={styles.index}>0{index + 1} / 05</span><h3>{point.title}</h3><p>{point.text}</p>
            </article>;
          })}
        </div>
      </div>
      <div className={styles.stageFooter}><div className={styles.journeyMeter} aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div><Link className={styles.textLink} to="/products">Explore our products <Arrow /></Link></div>
    </div>
  </section>;
}

function SponsorSlideshow() {
  const [paused, setPaused] = useState(false);
  return <section className={`${styles.container} ${styles.sponsors}`} aria-labelledby="sponsor-heading">
    <div className={styles.sectionHeader}><div><p className={styles.eyebrow}>Sponsors</p><h2 id="sponsor-heading">Sponsor heading.</h2></div><p>Sponsor section description goes here.</p></div>
    <div className={styles.sponsorWindow} tabIndex={0} role="region" aria-label="Sponsor logos. Focus here to pause the moving strip." data-paused={paused}>
      <div className={styles.sponsorTrack}>
        {[0, 1].map(copy => <div className={styles.sponsorGroup} key={copy} aria-hidden={copy === 1 ? true : undefined}>
          {sponsors.map(sponsor => <div className={styles.sponsorTile} key={sponsor.id}><img src={sponsor.logo} alt={copy === 0 ? sponsor.name : ""} /><span>{sponsor.name}</span></div>)}
        </div>)}
      </div>
    </div>
    <div className={styles.carouselFooter}><p>Sponsor supporting statement.</p><button className={styles.motionControl} type="button" aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? "Resume logo motion" : "Pause logo motion"}</button></div>
  </section>;
}

// Replay entrances after content fully leaves the viewport. Content remains readable without animation support.
function useScrollEntrances(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || !("IntersectionObserver" in window)) return;
    const animations = new Map();
    const entered = new WeakSet();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        if (entered.has(entry.target)) return;
        entered.add(entry.target);
        if (preference.matches || !entry.target.animate) return;
        const kind = entry.target.dataset.reveal;
        const frames = kind === "image"
          ? [{ clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)" }]
          : kind === "line"
            ? [{ opacity: 0, transform: "translateX(-30px)" }, { opacity: 1, transform: "translateX(0)" }]
            : [{ opacity: 0, transform: "translateY(45px)" }, { opacity: 1, transform: "translateY(0)" }];
        animations.get(entry.target)?.cancel();
        // Clip the image inside its stable frame, never the observed frame itself.
        const animatedElement = kind === "image" ? entry.target.firstElementChild : entry.target;
        const animation = animatedElement.animate(frames, { duration: kind === "image" ? 1200 : 900, fill: "backwards", delay: Number(entry.target.dataset.delay || 0), easing: "cubic-bezier(.22,.75,.25,1)" });
        animations.set(entry.target, animation);
        animation.onfinish = () => animations.delete(entry.target);
      });
    }, { threshold: 0 });
    // Re-arm only after the frame is comfortably outside the viewport.
    // This prevents a reveal from cancelling/restarting at the screen edge.
    const resetObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) return;
        entered.delete(entry.target);
        animations.get(entry.target)?.cancel();
        animations.delete(entry.target);
      });
    }, { rootMargin: "160px 0px", threshold: 0 });
    root.querySelectorAll("[data-reveal]").forEach(element => { observer.observe(element); resetObserver.observe(element); });
    const stop = () => { if (preference.matches) { animations.forEach(animation => animation.cancel()); animations.clear(); } };
    preference.addEventListener("change", stop);
    return () => { observer.disconnect(); resetObserver.disconnect(); animations.forEach(animation => animation.cancel()); preference.removeEventListener("change", stop); };
  }, [rootRef]);
}

export default function Home() {
  const storyRef = useRef(null);
  useScrollEntrances(storyRef);
  const communityRef = useRef(null);
  useScrollEntrances(communityRef);
  return <EnergyBackground className={styles.page}>
    <SEO title="Alchemity Power | A new generation of on-site power" description="Developing modular on-site power for data centers and critical applications. Meet Alchemity Power." url="/" />
    <div ref={storyRef}>
      <section className={styles.hero} aria-labelledby="home-title">
        <img className={styles.heroBackdrop} src={heroImage} alt="" fetchpriority="high" />
        <div className={`${styles.container} ${styles.heroOverlay}`}>
          <p className={styles.eyebrow}></p>
          <h1 id="home-title" data-reveal>Blank.<br /><span>supporting blank.</span></h1>
          <div className={styles.heroAside} data-reveal><p>intro.</p></div>
          <a className={styles.scrollCue} href="#home-about">Scroll to explore <span aria-hidden="true">↓</span></a>
        </div>
        <div className={styles.wordBand}>
          <ul className={`${styles.container} ${styles.wordList}`} aria-label="Alchemity Power in five words">
            {heroWords.map((word, index) => (
              <li className={styles.wordItem} key={index}>
                <span>{word}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={`${styles.container} ${styles.about}`} aria-labelledby="home-about"><div className={styles.aboutGrid}><p className={styles.eyebrow}>01 / Problem</p><div data-reveal><h2 id="home-about">Data centers lose billions on power<br /><span>because it's not being received...</span></h2><p>Grid delays are forcing data center to self-generate power, often with NG turbines.</p></div></div>
        <div className={styles.sellingGrid}>
          {sellingPoints.map(point => (
            <AnimatedMetric key={point.id} {...point} />
          ))}
        </div>
      </section>
      <ProductExplorer />
      <section className={`${styles.container} ${styles.industries}`} aria-labelledby="industries-heading"><div data-reveal className={styles.sectionHeader}><div><p className={styles.eyebrow}>03 / Industries</p><h2 id="industries-heading">One platform.<br /><span>Three power markets.</span></h2></div><p>Starting with UPS for grid-tied AI data centers, then scaling the same core platform into microgrids, long-duration energy storage, and grid generation.</p></div><div className={styles.industryStories} tabIndex={0} role="region" aria-label="Industries">{industries.map((item, index) => <article className={styles.industryStory} key={item.title}><div data-reveal="image"><ImageSpace image={{ src: item.image, alt: item.alt }} label={item.title} /></div><div className={styles.industryCopy} data-reveal><p className={styles.industryTag}>{item.category}</p><h3>{item.title}</h3><div className={styles.applicationFocus}><span>Application focus</span><p>{item.summary}</p></div><Link className={styles.textLink} to={`/markets?market=${encodeURIComponent(item.id)}`} aria-label={`Learn more about ${item.title}`}>Learn more <Arrow /></Link></div></article>)}</div></section>
    </div>
    <SponsorSlideshow />
    <section ref={communityRef} className={styles.communityImpact} aria-labelledby="community-heading">
      <div className={styles.container}>
        <div className={styles.impactIntro}>
          <div data-reveal>
            <p className={styles.eyebrow}>Community · Our priorities</p>
            <h2 id="community-heading">More consideration for the people around it.</h2>
            <p className={styles.impactLead}>Power infrastructure becomes part of a community. As we develop our platform, we’re thinking beyond the electricity it produces—to how it fits into a neighborhood, supports local activity, and creates opportunities for people. (CHATGPT statement)</p>
          </div>
        </div>
        <div className={styles.communityStory}>
          <div className={styles.communityText}>
            <div className={styles.impactPriorities}>
              <article className={styles.impactRow} data-community-step="0">
                <h3>A more considerate neighbor</h3>
                <p>Statement about reduction of noise</p>
              </article>

              <article className={`${styles.impactRow} ${styles.impactBlank}`} data-community-step="1" aria-hidden="true" />
              <article className={`${styles.impactRow} ${styles.impactBlank}`} data-community-step="2" aria-hidden="true" />
            </div>
            <div className={styles.impactClosing}>
              <Link className={styles.textLink} to="/about">Meet the people behind the work <Arrow /></Link>
            </div>
          </div>
          <div className={styles.albumColumn}>
            <figure className={styles.communitySinglePhoto}>
              <img src={labPhoto} alt="Alchemity team members together in the lab" loading="lazy" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </EnergyBackground>;
}
