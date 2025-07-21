import React, { useState, useEffect, useRef } from "react";
import styles from "./ContactForm.module.css";
import { initializeCSRFToken, validateCSRFToken } from "../utils/csrfUtils";

function ContactForm({ isCareers = false }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    reason: "",
    affiliation: "",
    message: "",
    linkedinLink: "",
    resumeLink: "",
  });

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [csrfToken, setCsrfToken] = useState("");
  const MAX_WORDS = 250;
  const formRef = useRef(null);
  const turnstileRef = useRef(null);
  const turnstileSiteKey = "0x4AAAAAABhoCfpfrBXTYGtw";

  // Initialize CSRF token when component mounts
  useEffect(() => {
    const token = initializeCSRFToken();
    setCsrfToken(token);
  }, []);

  useEffect(() => {
    let rendered = false;
    function checkTurnstile() {
      if (window.turnstile && turnstileRef.current && !rendered) {
        // Defensive: clear container before rendering
        turnstileRef.current.innerHTML = "";
        window.turnstile.render(turnstileRef.current, {
          sitekey: turnstileSiteKey,
          theme: "dark",
        });
        rendered = true;
      } else if (!rendered) {
        setTimeout(checkTurnstile, 200);
      }
    }
    checkTurnstile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstName") {
      if (value.length > 0 && value.length <= 2) {
        setFirstNameError("First name must be more than 2 characters.");
      } else {
        setFirstNameError("");
      }
    }
    if (name === "lastName") {
      if (value.length > 0 && value.length <= 2) {
        setLastNameError("Last name must be more than 2 characters.");
      } else {
        setLastNameError("");
      }
    }
    if (name === "message") {
      const words = value
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0);
      const currentWordCount = words.length;

      if (currentWordCount <= MAX_WORDS) {
        setWordCount(currentWordCount);
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (wordCount > MAX_WORDS) {
      setSubmitStatus({
        type: "error",
        message:
          "Message exceeds the 250-word limit. Please shorten your message.",
      });
      return;
    }

    // Validate CSRF token
    const formToken = e.target.csrfToken.value;
    if (!validateCSRFToken(formToken)) {
      setSubmitStatus({
        type: "error",
        message:
          "Invalid form submission. Please refresh the page and try again.",
      });
      return;
    }

    // Get Turnstile token
    const turnstileToken = document.querySelector(
      'input[name="cf-turnstile-response"]',
    )?.value;
    if (!turnstileToken) {
      setSubmitStatus({
        type: "error",
        message: "Please complete the Turnstile challenge.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    // Verify Turnstile token with Netlify function
    try {
      const res = await fetch("/.netlify/functions/verify-turnstile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ turnstileToken }),
      });
      const data = await res.json();
      if (!data.success) {
        setIsSubmitting(false);
        setSubmitStatus({
          type: "error",
          message: "Turnstile verification failed. Please try again.",
        });
        return;
      }
    } catch (err) {
      setIsSubmitting(false);
      setSubmitStatus({
        type: "error",
        message: "Error verifying Turnstile. Please try again.",
      });
      return;
    }

    // Submit the form
    formRef.current.submit();
  };

  return (
    <section className={styles.section}>
      <form
        ref={formRef}
        name={isCareers ? "careers-form" : "contact-form"}
        method="POST"
        onSubmit={handleSubmit}
        className={styles.form}
        data-netlify="true"
        netlify-honeypot="bot-field"
        action={isCareers ? "/careers-success" : "/contact-success"}
      >
        {/* Hidden CSRF token field */}
        <input type="hidden" name="csrfToken" value={csrfToken} />

        {/* Required hidden input for Netlify form identification */}
        <input
          type="hidden"
          name="form-name"
          value={isCareers ? "careers-form" : "contact-form"}
        />

        {/* Honeypot field to prevent spam */}
        <p className={styles.hidden}>
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>

        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="firstName">
            Name*
          </label>
          <div className={styles.nameGroup}>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={{ color: "#000000" }}
            />
            {firstNameError && (
              <div
                style={{ color: "red", fontSize: "0.9em", marginTop: "0.2em" }}
              >
                {firstNameError}
              </div>
            )}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{ color: "#000000" }}
            />
            {lastNameError && (
              <div
                style={{ color: "red", fontSize: "0.9em", marginTop: "0.2em" }}
              >
                {lastNameError}
              </div>
            )}
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="email">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ color: "#000000" }}
          />
        </div>

        {isCareers && (
          <>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="linkedinLink">
                LinkedIn Profile Link*
              </label>
              <input
                type="url"
                id="linkedinLink"
                name="linkedinLink"
                placeholder="https://www.linkedin.com/in/your-profile"
                value={formData.linkedinLink}
                onChange={handleChange}
                required
                style={{ color: "#000000" }}
              />
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="resumeLink">
                Google Drive Resume Link*
              </label>
              <input
                type="url"
                id="resumeLink"
                name="resumeLink"
                placeholder="https://drive.google.com/your-resume-link"
                value={formData.resumeLink}
                onChange={handleChange}
                required
                style={{ color: "#000000" }}
              />
            </div>
          </>
        )}

        {!isCareers && (
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="reason">
              Reason for Inquiry*
            </label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              style={{ color: "#000000" }}
            >
              <option value="">Select a reason</option>
              <option value="Sales">Sales</option>
              <option value="Partnership Opportunities">
                Partnership Opportunities
              </option>
              <option value="Investment">Investment</option>
              <option value="Technical Support">Technical Support</option>
              <option value="General Information">General Information</option>
              <option value="Careers">Careers</option>
            </select>
          </div>
        )}

        {!isCareers && (
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="affiliation">
              Affiliation*
            </label>
            <input
              type="text"
              id="affiliation"
              name="affiliation"
              placeholder="Enter your affiliation"
              value={formData.affiliation}
              onChange={handleChange}
              required
              style={{ color: "#000000" }}
            />
          </div>
        )}

        <div className={styles.fieldGroup} style={{ marginBottom: "0.25rem" }}>
          <label className={styles.label} htmlFor="message">
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here (max 250 words)"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              color: "#000000",
              fontFamily: "inherit",
              fontSize: "inherit",
            }}
          />
          <div className={styles.wordCount}>
            {wordCount}/{MAX_WORDS} words
          </div>
        </div>

        {/* Turnstile widget - always render container */}
        <div
          ref={turnstileRef}
          style={{ margin: '0 0 1rem 0', minHeight: '65px', display: 'block' }}
        ></div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
        {/* Status Message - moved below the button for consistency */}
        {submitStatus.message && (
          <div
            className={`${styles.statusMessage} ${styles[submitStatus.type]}`}
          >
            {submitStatus.message}
          </div>
        )}
      </form>
    </section>
  );
}

export default ContactForm;
