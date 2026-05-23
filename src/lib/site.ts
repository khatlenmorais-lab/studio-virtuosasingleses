export const PHONE = "5548996792528";
export function createWhatsAppUrl(message = "Olá! Gostaria de agendar um horário no Virtuosas Studio de Beleza.") {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = createWhatsAppUrl();
export const BOOKING_URL = WHATSAPP_URL; // Substitua pelo Calendly/Booksy quando disponível
export const ADDRESS = "Rod. Armando Calil Bulos, 5560 – Sala 3, Florianópolis, SC";
export const MAPS_URL =
  "https://maps.google.com/?q=Rod.+Armando+Calil+Bulos,+5560+Sala+3,+Florianópolis";
export const INSTAGRAM_URL = "https://instagram.com";
