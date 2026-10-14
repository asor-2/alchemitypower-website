import React, { useEffect, useRef, useState } from "react";
import styles from "./AnimationMetric.module.css";

export default function AnimatedMetric({ value, prefix = "", suffix = "", label, decimals = 0 }) {
    const ref = useRef(null);
    const [display, setDisplay] = useState(value);
    useEffect(() => {
        if (value == null) { setDisplay(null); return; }
        setDisplay(value);
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (!("IntersectionObserver" in window)) return;
        let frame = 0, armed = true;
        const stop = () => { if (frame) cancelAnimationFrame(frame); frame = 0; };
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
                else frame = 0;
            };
            frame = requestAnimationFrame(tick);
        }, { threshold: 0.25 });
        const resetObserver = new IntersectionObserver(entries => {
            if (!entries[0].isIntersecting) { armed = true; stop(); setDisplay(value); }
        }, { rootMargin: "160px 0px" });
        observer.observe(ref.current); resetObserver.observe(ref.current);
        const onPreference = () => { if (media.matches) { stop(); setDisplay(value); } };
        media.addEventListener("change", onPreference);
        return () => { stop(); observer.disconnect(); resetObserver.disconnect(); media.removeEventListener("change", onPreference); };
    }, [value]);
    const format = number => number.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    const finalText = value == null ? "Metric to be added" : `${prefix}${format(value)}${suffix}`;
    return <article ref={ref} className={styles.card}>
        <p className={styles.number} aria-label={finalText}><span aria-hidden="true">{value == null ? "—" : <>{prefix}{format(display ?? value)}<span className={styles.suffix}>{suffix}</span></>}</span></p>
        <p className={styles.caption}>{label}</p>
    </article>;
}
