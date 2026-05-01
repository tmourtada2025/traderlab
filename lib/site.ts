// Locale-neutral site facts. All text strings live in dictionaries.ts.

export const SITE = {
  name: "TraderLab",
  whatsappNumber: "96134224498", // E.164 without "+"
  whatsappDisplay: "+961 3 422 498",
  scheduleShort: "MWF · 18:00–20:00 GMT+3",
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
