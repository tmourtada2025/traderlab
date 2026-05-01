// Single source of truth for site-wide config.
// Change values here and they update everywhere.

export const SITE = {
  name: "TraderLab",
  tagline: "Forex Academy",
  whatsappNumber: "96134224498", // E.164 without "+", used in wa.me links
  whatsappDisplay: "+961 3 422 498",
  location: {
    line1: "Spot Mall, Choueifat",
    line2: "1st Floor",
    country: "Lebanon",
    full: "Spot Mall, Choueifat — 1st Floor",
  },
  schedule: {
    days: "MWF",
    time: "6:00–8:00 PM",
    timezone: "GMT+3",
    full: "MWF · 6:00–8:00 PM (GMT+3)",
    short: "MWF · 18:00–20:00 GMT+3",
  },
};

/**
 * Build a wa.me link with a pre-filled message.
 * Encodes spaces and special chars correctly.
 */
export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Course-specific reservation message.
 */
export function reserveMessage(courseTitle: string): string {
  return `Hi TraderLab, I'd like to reserve a seat in "${courseTitle}". My name is ___.`;
}

/**
 * Generic enrollment / general inquiry message.
 */
export const GENERAL_INQUIRY_MSG =
  "Hi TraderLab, I'd like to learn more about your forex courses.";
