// Turn the contact form on later by setting CONTACT_FORM_ENABLED=true and CONTACT_EMAIL (Resend).
export const CONTACT_FORM_ENABLED = process.env.CONTACT_FORM_ENABLED === "true";
export const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "";
