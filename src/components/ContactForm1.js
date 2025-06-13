import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    reason: '',
    affiliation: '',    
    message: '',
  });

  const [wordCount, setWordCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'message') {
      const words = value.trim().split(/\s+/).filter(word => word.length > 0);
      const currentWordCount = value.trim() === '' ? 0 : words.length;
      
      if (currentWordCount <= 250) {
        setWordCount(currentWordCount);
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      }
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (wordCount > 250) {
      setSubmitStatus({
        type: 'error',
        message: 'Message cannot exceed 250 words'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        reason: formData.reason,
        affiliation: formData.affiliation,
        message: formData.message,
      };

      await emailjs.send(
        'service_yrbvrz8',
        'template_qv74f1k',
        templateParams,
        'Mx1r5JKxAiat8cMWs'
      );

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will be in touch shortly.'
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        reason: '',
        affiliation: '',
        message: '',
      });
      setWordCount(0);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.section}>
      <form name={isCareers ? "careers-form" : "contact-form"} 
          onSubmit={handleSubmit} 
          className={styles.form} 
          netlify-honeypot="bot-field" 
          data-netlify="true"
          data-netlify-recaptcha="true">

        <p className={styles.hidden}>
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>


        {/* Name Field Group */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="firstName">Name*</label>
          <div className={styles.nameGroup}>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              placeholder="First Name" 
              value={formData.firstName} 
              onChange={handleChange} 
              required 
              style={{ color: '#000000' }}
              disabled={isSubmitting}
            />
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              value={formData.lastName} 
              onChange={handleChange} 
              required 
              style={{ color: '#000000' }}
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Email Field Group */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="email">Email*</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email address" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            style={{ color: '#000000' }}
            disabled={isSubmitting}
          />
        </div>

        {/* Reason Field Group */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="reason">Reason for Inquiry*</label>
          <select 
            id="reason" 
            name="reason" 
            value={formData.reason} 
            onChange={handleChange} 
            required
            disabled={isSubmitting}
          >
            <option value="" disabled>Select a reason for inquiry...</option>
            <option value="sales">Sales</option>
            <option value="partnership">Partnership Opportunities</option>
            <option value="investment">Investment</option>
            <option value="support">Technical Support</option>
            <option value="general">General Information</option>
            <option value="careers">Careers</option>
          </select>
        </div>

        {/* Affiliation Field Group */}
        <div className={styles.fieldGroup}>
           <label className={styles.label} htmlFor="affiliation">Affiliation</label>
           <input 
             type="text" 
             id="affiliation" 
             name="affiliation" 
             placeholder="Enter your affiliation" 
             value={formData.affiliation} 
             onChange={handleChange} 
             style={{ color: '#000000' }}
             disabled={isSubmitting}
           />
        </div>

        {/* Message Field Group */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="message">Message*</label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Type your message here (max 250 words)"
            value={formData.message} 
            onChange={handleChange} 
            required 
            maxLength={2000}
            style={{ 
              color: '#000000',
              fontFamily: 'inherit',
              fontSize: 'inherit'
            }}
            disabled={isSubmitting}
          />
          <div className={styles.wordCount}>
            {wordCount}/250 words
          </div>
        </div>

        {submitStatus.message && (
          <div className={`${styles.statusMessage} ${styles[submitStatus.type]}`}>
            {submitStatus.message}
          </div>
        )}

        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </section>
  );
}
export default ContactForm;       