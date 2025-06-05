import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css'; 
import { IoClose } from 'react-icons/io5';

function Footer() {
  const [selectedPopup, setSelectedPopup] = useState(null);

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

If you have any questions about these Terms, please contact us at: resources@alchemity.tech`
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

For questions about this Privacy Policy or your personal data, please contact us at: resources@alchemity.tech`
    }
  };

  const handleLinkClick = (e, type) => {
    e.preventDefault();
    setSelectedPopup(type);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.companyName}>
        Alchemity
      </div>
      <div className={styles.copyright}>
      Alchemity and the Alchemity logo are trademarks of Alchemity LLC. 
      </div>
      <div className={styles.links}>
        <a href="#terms" onClick={(e) => handleLinkClick(e, 'terms')}>Terms & Conditions</a>
        <a href="#privacy" onClick={(e) => handleLinkClick(e, 'privacy')}>Privacy Policy</a>
        <div className={styles.mobileLinkedin}>
          <a href="https://www.linkedin.com/company/alchemity/" target="_blank" rel="noopener noreferrer">
            Follow us on LinkedIn
          </a>
      </div>
      </div>

      {selectedPopup && (
        <motion.div 
          className={styles.popupOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPopup(null)}
        >
          <motion.div 
            className={styles.popupContent}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.popupHeader}>
              <h3 style={{ color: '#25abe0', fontSize: '28px', marginBottom: '1.5rem', fontWeight: '600' }}>
                {popupContent[selectedPopup].title}
              </h3>
              <button 
                className={styles.closeButton}
                onClick={() => setSelectedPopup(null)}
                aria-label="Close popup"
              >
                <IoClose size={24} />
              </button>
            </div>
            <div style={{ 
              maxHeight: '70vh', 
              overflowY: 'auto',
              paddingRight: '1rem',
              color: '#ffffff',
              fontSize: '16px',
              lineHeight: '1.8',
              textAlign: 'left'
            }}>
              {popupContent[selectedPopup].content.split('\n\n').map((paragraph, index) => {
                const isNumberedSection = /^\d+\./.test(paragraph);
                return (
                  <p key={index} style={{ 
                    marginBottom: '1.5rem',
                    fontWeight: isNumberedSection ? '800' : 'normal',
                    color: isNumberedSection ? '#25abe0' : '#ffffff'
                  }}>
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </footer>
  );
}

export default Footer; 