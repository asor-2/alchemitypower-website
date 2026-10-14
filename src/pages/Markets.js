import React, { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import EnergyBackground from "../components/EnergyBackground";
import SEO from "../components/SEO/SEO";
import styles from "./Markets.module.css";

import { markets } from "../data/markets";

function MarketImage({ item }) {
  return <span className={styles.image}>{item.image ? <img src={item.image} alt={item.alt} loading="lazy" /> : <span className={styles.blank} aria-hidden="true">+</span>}</span>;
}
function MarketDialog({ item, close }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current, focus = document.activeElement, overflow = document.body.style.overflow;
    dialog.showModal(); document.body.style.overflow = "hidden";
    return () => { dialog.close(); document.body.style.overflow = overflow; if (focus instanceof HTMLElement && focus.isConnected) focus.focus(); };
  }, []);
  return <dialog ref={ref} className={styles.dialog} aria-labelledby="market-title" onCancel={e => { e.preventDefault(); close(); }}>
    <div className={styles.dialogBar}><button type="button" onClick={close} autoFocus>Close <span aria-hidden="true">×</span></button></div>
    <div className={styles.dialogBody}><MarketImage item={item} /><p className={styles.eyebrow}>{item.category}</p><h2 id="market-title">{item.title}</h2><p>{item.description}</p><div className={styles.detailGrid}><div><h3>The need</h3><p>{item.need}</p></div><div><h3>The application</h3><p>{item.approach}</p></div></div><dl className={styles.marketNumbers}><div><dt>Target deployment scale</dt><dd>{item.scale}</dd></div><div><dt>Projected 2030 market size*</dt><dd>{item.projectedSize}</dd></div></dl><p>*2030 market projections from Alchemity Power’s market opportunity presentation, based on market reports.</p><Link className={styles.textLink} to="/contact">Discuss this application <span aria-hidden="true">↗</span></Link></div>
  </dialog>;
}
export default function Markets() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = markets.find(item => item.id === searchParams.get("market")) || null;
  const setSelected = item => {
    const next = new URLSearchParams(searchParams);
    if (item) next.set("market", item.id);
    else next.delete("market");
    setSearchParams(next, { replace: !item, preventScrollReset: true });
  };
  return <EnergyBackground className={styles.page}>
    <SEO title="Markets | AlchemityPower" description="Explore AlchemityPower markets and applications." url="/markets" />
    <header className={`${styles.container} ${styles.hero}`}><p className={styles.eyebrow}>Markets</p><div className={styles.heroGrid}><h1>One platform.<br /><span>Multiple power markets.</span></h1><p>Starting with grid-tied AI data center UPS, with a roadmap to larger infrastructure applications.</p></div></header>
    <section className={styles.band} aria-labelledby="market-context"><div className={`${styles.container} ${styles.contextGrid}`}><div><p className={styles.eyebrow}>The opportunity</p><h2 id="market-context">Start modular. Scale with purpose.</h2></div><div><p>Our roadmap connects a near-term data center market with two larger-scale expansion markets, using the same core platform.</p><div className={styles.detailGrid}><div><h3>Near-term focus</h3><p>Modular UPS for grid-tied AI data centers, targeting 200 kW–2 MW deployments.</p></div><div><h3>Planned expansion</h3><p>Microgrids, LDES, and grid generation at 10+ MW.</p></div></div></div></div></section>
    <section className={`${styles.container} ${styles.marketSection}`} aria-labelledby="market-heading"><div className={styles.sectionHeading}><h2 id="market-heading">Market opportunities.</h2><p>Explore the application, deployment pathway, and projected market opportunity for each sector.</p></div><div className={styles.marketGrid}>{markets.map(item => <article className={styles.marketCard} key={item.id}><button className={styles.cardButton} type="button" aria-haspopup="dialog" onClick={() => setSelected(item)}><MarketImage item={item} /><span className={styles.cardContent}><span className={styles.eyebrow}>{item.category}</span><span className={styles.cardTitle}>{item.title}</span><span className={styles.cardSummary}>{item.summary}</span><span className={styles.cardAction}>Explore market <span aria-hidden="true">↗</span></span></span></button></article>)}</div></section>

    {selected && <MarketDialog key={selected.id} item={selected} close={() => setSelected(null)} />}
  </EnergyBackground>;
}
