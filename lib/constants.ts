/**
 * Global application constants and configuration.
 * Single source of truth for email, social links, and contact information.
 */

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "abiyaraj7@gmail.com";

export const SITE_CONFIG = {
  name: "Abiya S",
  title: "Senior Software Developer & Full Stack Specialist",
  email: CONTACT_EMAIL,
  phone: "+91 9488521731",
  location: "Nagercoil, Tamil Nadu, India",
  company: "Resbee Info Tech",
  experienceYears: "3+",
  githubUrl: "https://github.com/AbiyaRaj/AbiyaRaj",
  linkedinUrl: "https://www.linkedin.com/in/abiya-selvaraj-0b7a0428a",
};
