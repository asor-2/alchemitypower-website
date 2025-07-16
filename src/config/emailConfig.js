export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "Mx1r5JKxAiat8cMWs",
  SERVICE_ID: "service_yrbvrz8",
  TEMPLATES: {
    CONTACT: "template_qv74f1k", // Replace with your actual template ID
    CAREERS: "template_1l41558", // Replace with your actual template ID
  },
};

export const EMAIL_TEMPLATES = {
  CONTACT: {
    subject: "New Contact Form Submission",
    template: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> {{firstName}} {{lastName}}</p>
      <p><strong>Email:</strong> {{email}}</p>
      <p><strong>Message:</strong></p>
      <p>{{message}}</p>
    `,
  },
  CAREERS: {
    subject: "New Job Application",
    template: `
      <h2>New Job Application</h2>
      <p><strong>Name:</strong> {{firstName}} {{lastName}}</p>
      <p><strong>Email:</strong> {{email}}</p>
      <p><strong>Message:</strong></p>
      <p>{{message}}</p>
      <p><strong>Resume:</strong> {{resume}}</p>
    `,
  },
};
