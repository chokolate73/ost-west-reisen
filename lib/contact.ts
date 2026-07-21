// Single source of truth for the site's contact details.
// The site (Kontaktstelle / booking point) is operated by
// Ost-West Logistik & Travel e.K. — see /impressum.

// Phone number as shown on touragent.de (Ost-West Logistik & Travel e.K.).
export const PHONE = "0221 27253591";

// Ready-to-use tel: href derived from PHONE.
export const PHONE_TEL = `tel:${PHONE.replace(/[^\d+]/g, "")}`;

// Main e-mail for enquiries / bookings.
export const EMAIL = "info@ostwesttravel.de";
export const EMAIL_MAILTO = `mailto:${EMAIL}`;

// Formspree endpoint that receives contact-form submissions.
// The form ID is public by design (it is called from the browser).
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjezoww";

// Online tour booking — Ost-West Logistik (Filiale "owl"), russische Version.
export const ONLINE_BOOKING_URL =
  "https://ostwest-reisen.eu/xml_ws/?aktuell=0&istransport=2&filial=owl&lang=r";
