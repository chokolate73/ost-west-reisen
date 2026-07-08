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

// Online tour booking.
// TODO: заменить на точную ссылку онлайн-бронирования, которую пришлёт клиент.
// Пока указывает на страницу бронирования Ost-West Logistik & Travel e.K.
export const ONLINE_BOOKING_URL = "https://www.ostwesttravel.com/buchen/anfrage";
