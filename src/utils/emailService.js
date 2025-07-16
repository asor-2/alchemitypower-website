import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailConfig";

export const sendEmail = async (templateId, templateParams) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      templateId,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY,
    );
    return { success: true, data: response };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
};
