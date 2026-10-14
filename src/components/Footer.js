import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const popupContent = {
  terms: {
    title: "Terms & Conditions",
    content: `1. Use of Site

You may use this Site only for lawful purposes and in accordance with these Terms. You agree not to:

· Use the Site in any way that violates applicable laws or regulations.

· Interfere with or disrupt the Site or servers.

· Attempt unauthorized access to the Site or its systems.

2. Intellectual Property

All content on the Site, including text, images, graphics, logos, and code, is owned by or licensed to us and protected under intellectual property laws. You may not reproduce, distribute, or use content without written permission.

3. User Submissions

If you submit content to the Site (e.g., forms, feedback), you grant us a non-exclusive, royalty-free, worldwide license to use, reproduce, and display such content in connection with our business.

4. Third-Party Links

This Site may contain links to third-party websites. We do not endorse or control these sites and are not responsible for their content or practices.

5. Disclaimers

The Site is provided on an "as-is" and "as-available" basis. We make no warranties, express or implied, regarding the Site's availability, accuracy, or fitness for a particular purpose.

6. Limitation of Liability

To the fullest extent permitted by law, we will not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Site.

7. Indemnification

You agree to indemnify and hold Alchemity harmless and its affiliates from any claims, damages, or expenses arising from your use of the Site or violation of these Terms.

8. Governing Law

These Terms are governed by the laws of the State of Maryland, without regard to conflict of law principles. Any disputes shall be resolved exclusively in the courts of the State of Maryland.

9. Changes to Terms

We reserve the right to update these Terms at any time. Changes will be posted on this page with a new "Last Updated" date. Continued use of the Site after changes constitutes your acceptance.

10. Contact Us

If you have any questions about these Terms, please contact us at: resources@alchemity.tech`,
  },
  privacy: {
    title: "Privacy Policy",
    content: `At Alchemity ("Company") we value your privacy. This Privacy Policy explains how we collect, use, share, and protect your personal information when you visit or interact with our website www.Alchemity.com ("Site").

1. Information We Collect

We may collect the following information when you visit or interact with our Site:

· Personal Information: Name, email address, phone number, and any other details you submit via contact forms or account creation.

· Usage Data: IP address, browser type, pages visited, time on site, and other analytics through cookies or similar technologies.

2. How We Use Your Information

We may use your information to:

· Provide, operate, and improve our Site and services

· Respond to inquiries or provide customer support

· Send newsletters or updates (if you opt in)

· Analyze user behavior to improve the Site experience

· Comply with legal obligations

3. Sharing Your Information

We do not sell or rent your personal information. We may share information with:

· Service providers who help us operate the Site (e.g., web hosting, analytics)

· Legal authorities if required by law or to protect our rights

· Affiliates or successors in the event of a company merger, sale, or reorganization

4. Cookies and Tracking Technologies

Our Site uses cookies and similar tools to enhance your experience. You can manage or disable cookies through your browser settings. Please note that disabling cookies may affect site functionality.

5. Data Security

We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is completely secure.

6. Your Rights and Choices

You may:

· Opt out of marketing emails at any time by following the unsubscribe link

· Request access, correction, or deletion of your personal information by contacting us

· For California residents, you may have additional rights under the California Consumer Privacy Act (CCPA)

7. Third-Party Links

Our Site may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their privacy policies separately.

8. Changes to This Policy

We may update this Privacy Policy periodically. Changes will be posted here with a new "Last Updated" date. Your continued use of the Site constitutes acceptance of the updated policy.

9. Contact Us

For questions about this Privacy Policy or your personal data, please contact us at: resources@alchemity.tech`,
  },
};


function LegalDialog({ content, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    const previousFocus = document.activeElement;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
    };
  }, []);
  return <dialog ref={ref} className={styles.dialog} aria-labelledby="footer-legal-title" onCancel={event => { event.preventDefault(); onClose(); }}>
    <div className={styles.dialogHeader}><h2 id="footer-legal-title">{content.title}</h2><button type="button" onClick={onClose} autoFocus>Close <span aria-hidden="true">×</span></button></div>
    <div className={styles.legalBody}>{content.content.split("\n\n").map((paragraph, index) => /^\d+\./.test(paragraph) ? <h3 key={index}>{paragraph}</h3> : <p key={index}>{paragraph}</p>)}</div>
  </dialog>;
}
function Arrow() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" /></svg>; }
function PhysicsGrid({ footerRef }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current, footer = footerRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;
    const motion = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let width = 0, height = 0, columns = 0, rows = 0, nodes = [];
    let frame = 0, previousTime = 0, visible = true;
    const pointer = { x: -1000, y: -1000, active: false };
    // Project a curved floor-to-wall surface with a rounded bend behind the content.
    const columnCount = 29;
    const rowCount = 15;
    function draw() {
      context.clearRect(0, 0, width, height);
      const line = (from, to) => {
        context.beginPath(); context.moveTo(from.x + from.dx, from.y + from.dy);
        context.lineTo(to.x + to.dx, to.y + to.dy); context.stroke();
      };
      // White is the underlying mesh. Only a sparse set of edges has a blue halo.
      context.lineWidth = 0.8; context.strokeStyle = "rgba(233,244,249,0.25)";
      for (let row = 0; row < rows; row++) for (let col = 0; col < columns; col++) {
        const i = row * columns + col;
        if (col + 1 < columns) line(nodes[i], nodes[i + 1]);
        if (row + 1 < rows) line(nodes[i], nodes[i + columns]);
      }
      context.save(); context.lineWidth = 1.2;
      context.strokeStyle = "rgba(84,191,236,0.65)"; context.shadowColor = "#42b9ee"; context.shadowBlur = 8;
      for (let row = 0; row < rows - 1; row++) for (let col = 0; col < columns - 1; col++) {
        const i = row * columns + col;
        if ((row * 17 + col * 11) % 29 === 4) { line(nodes[i], nodes[i + 1]); line(nodes[i + 1], nodes[i + columns + 1]); }
      }
      context.restore();
    }
    function tick(time) {
      frame = 0;
      if (!visible) return;
      const dt = Math.min((time - (previousTime || time - 16)) / 1000, 0.033);
      previousTime = time;
      let moving = false;
      nodes.forEach(node => {
        const distance = Math.hypot(node.x - pointer.x, node.y - pointer.y);
        const falloff = pointer.active ? Math.max(0, 1 - distance / 200) : 0;
        const strength = falloff * falloff;
        const targetX = (node.x - pointer.x) * strength * 0.12;
        const targetY = -32 * strength;
        node.vx += ((targetX - node.dx) * 90 - node.vx * 12) * dt;
        node.vy += ((targetY - node.dy) * 90 - node.vy * 12) * dt;
        node.dx += node.vx * dt; node.dy += node.vy * dt;
        if (Math.abs(node.vx) + Math.abs(node.vy) + Math.abs(targetX - node.dx) + Math.abs(targetY - node.dy) > 0.08) moving = true;
      });
      draw();
      if (moving && motion.matches) frame = window.requestAnimationFrame(tick);
      else previousTime = 0;
    }
    function wake() { if (!frame && visible && motion.matches) frame = window.requestAnimationFrame(tick); }
    function resize() {
      const rect = footer.getBoundingClientRect(); width = rect.width; height = rect.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      columns = columnCount; rows = rowCount;
      nodes = Array.from({ length: columns * rows }, (_, i) => {
        const row = Math.floor(i / columns);
        const depth = row / (rows - 1);
        // Wall above the bend, widening floor below it; smooth at the join.
        const bend = 0.48;
        const floor = Math.max(0, (depth - bend) / (1 - bend));
        const wall = Math.min(1, depth / bend);
        const spread = 1.05 + 1.65 * floor * floor;
        const projectedY = depth <= bend
          ? -0.12 + 0.70 * (1 - Math.pow(1 - wall, 1.65))
          : 0.58 + 0.58 * Math.pow(floor, 1.65);
        return {
          x: width / 2 + (i % columns / (columns - 1) - 0.5) * width * spread,
          y: height * projectedY,
          dx: 0, dy: 0, vx: 0, vy: 0,
        };
      });
      draw(); wake();
    }
    function move(event) {
      if (!motion.matches || event.pointerType === "touch") return;
      const rect = footer.getBoundingClientRect();
      pointer.x = event.clientX - rect.left; pointer.y = event.clientY - rect.top; pointer.active = true; wake();
    }
    function leave() { pointer.active = false; wake(); }
    function preferenceChanged() {
      pointer.active = false;
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0; previousTime = 0;
      nodes.forEach(node => { node.dx = node.dy = node.vx = node.vy = 0; }); draw();
    }
    const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(footer);
    const visibilityObserver = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      if (visible) wake(); else { if (frame) window.cancelAnimationFrame(frame); frame = 0; previousTime = 0; pointer.active = false; }
    }); visibilityObserver.observe(footer);
    footer.addEventListener("pointermove", move, { passive: true }); footer.addEventListener("pointerleave", leave);
    motion.addEventListener("change", preferenceChanged); resize();
    return () => { if (frame) window.cancelAnimationFrame(frame); resizeObserver.disconnect(); visibilityObserver.disconnect(); footer.removeEventListener("pointermove", move); footer.removeEventListener("pointerleave", leave); motion.removeEventListener("change", preferenceChanged); };
  }, [footerRef]);
  return <canvas ref={canvasRef} className={styles.physicsGrid} aria-hidden="true" />;
}

export default function Footer() {
  const [selectedPopup, setSelectedPopup] = useState(null);
  const footerRef = useRef(null);
  return <footer ref={footerRef} className={styles.footer}>
    <div className={styles.atmosphere} aria-hidden="true"><PhysicsGrid footerRef={footerRef} /></div>
    <div className={styles.container}>
      <div className={styles.opening}><div><p className={styles.eyebrow}>Start a conversation</p><h2>Let’s talk power.</h2></div></div>
      <div className={styles.columns}>
        <div className={styles.brand}><Link to="/" className={styles.wordmark} aria-label="AlchemityPower home">Alchemity<span>Power</span></Link><p>College Park, Maryland</p><a className={styles.socialLink} href="https://www.linkedin.com/company/alchemity/" target="_blank" rel="noopener noreferrer">Alchemity on LinkedIn <Arrow /><span className={styles.srOnly}>(opens in a new tab)</span></a></div>
        <nav aria-label="Footer explore"><h3>Explore</h3><Link to="/technology">Technology</Link><Link to="/products">Products</Link><Link to="/markets">Markets</Link></nav>
        <nav aria-label="Footer company"><h3>Company</h3><Link to="/about">About us</Link><Link to="/careers">Careers</Link><Link to="/news">News</Link><Link to="/contact">Contact</Link></nav>
      </div>
      <div className={styles.bottom}><p>© {new Date().getFullYear()} Alchemity LLC.</p><div className={styles.legalLinks}><button type="button" aria-haspopup="dialog" onClick={() => setSelectedPopup("terms")}>Terms &amp; Conditions</button><button type="button" aria-haspopup="dialog" onClick={() => setSelectedPopup("privacy")}>Privacy Policy</button></div></div>
      <p className={styles.trademark}>Alchemity and the Alchemity logo are trademarks of Alchemity LLC.</p>
    </div>
    {selectedPopup && <LegalDialog content={popupContent[selectedPopup]} onClose={() => setSelectedPopup(null)} />}
  </footer>;
}
