// WhatsApp utility functions for booking and chat
// Centralized WhatsApp integration for consistent user experience

export const WHATSAPP_NUMBER = "+62 811-2656-869";
export const WHATSAPP_NUMBER_FORMATTED = "+62 811-2656-869";
export const WHATSAPP_NUMBER_CLEAN = "628112656869";

// Standardized CTA text across the system
export const CTA_TEXT = {
  PRIMARY: "Book Now",
  WHATSAPP: "Book via WhatsApp",
  QUICK_BOOK: "Quick Book",
  CALL: "Call Now",
} as const;

export interface BookingDetails {
  treatment?: string;
  people?: string;
  hours?: string;
  date?: string;
  time?: string;
  firstName?: string;
  lastName?: string;
  villa?: string;
  message?: string;
}

export function generateWhatsAppURL(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER_CLEAN}?text=${encodedMessage}`;
}

export function generateBookingMessage(details: BookingDetails): string {
  let message = "🌸 *UBUD VILLA MASSAGE* 🌸\n\n";
  message += "Hi! I'd like to book a massage treatment:\n\n";
  
  if (details.treatment) {
    message += `💆‍♀️ *Treatment:* ${details.treatment}\n`;
  }
  
  if (details.people) {
    message += `👥 *Number of People:* ${details.people}\n`;
  }
  
  if (details.hours) {
    message += `⏰ *Hours of Massage:* ${details.hours}\n`;
  }
  
  if (details.date) {
    message += `📅 *Preferred Date:* ${details.date}\n`;
  }
  
  if (details.time) {
    message += `🕐 *Preferred Time:* ${details.time}\n`;
  }
  
  if (details.firstName || details.lastName) {
    message += `👤 *Name:* ${details.firstName} ${details.lastName}\n`;
  }
  
  if (details.villa) {
    message += `🏡 *Villa Location:* ${details.villa}\n`;
  }
  
  if (details.message) {
    message += `📝 *Special Requests:* ${details.message}\n`;
  }
  
  message += "\nPlease confirm availability and pricing. Thank you! 🙏";
  
  return message;
}

export function generateQuickBookingMessage(treatment: string, date: string, time: string): string {
  let message = "🌸 *UBUD VILLA MASSAGE* 🌸\n\n";
  message += "Hi! I'd like to make a quick booking:\n\n";
  message += `💆‍♀️ *Treatment:* ${treatment}\n`;
  message += `📅 *Date:* ${date}\n`;
  message += `⏰ *Time:* ${time}\n\n`;
  message += "Please confirm availability and send me the details. Thank you! 🙏";
  
  return message;
}

export function generateGeneralInquiryMessage(): string {
  return "Hi! I would like to book a massage at my villa in Ubud.";
}

export function generateAreaInquiryMessage(areaName: string): string {
  return `Hi! I'd like to book a massage in ${areaName}. Can you provide more information?`;
}

export function generateTreatmentInquiryMessage(treatmentName: string): string {
  return `Hi! I'd like to book a ${treatmentName}. Can you provide more information?`;
}

export function openWhatsApp(message: string): void {
  const url = generateWhatsAppURL(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}