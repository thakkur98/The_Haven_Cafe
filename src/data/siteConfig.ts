export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  whatsappNumber: string;
  whatsappCallUrl: string;
  email: string;
  address: string;
  googleMapsUrl: string;
  hours: {
    cafe: string;
    dining: string;
    frontDesk: string;
  };
  socials: {
    instagram: string;
    facebook: string;
    tripadvisor: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "The Haven",
  tagline: "Artisan Cafe, Gourmet Dining & Boutique Stay",
  description: "A sanctuary where the aroma of single-origin coffee meets culinary craftsmanship and restful boutique rooms. Located amidst serene greens.",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210", // Plain digits with country code for wa.me
  whatsappCallUrl: "https://wa.me/919876543210",
  email: "stay@thehavenretreat.com",
  address: "Hill View Estate, Forest Lane, Near Riverbank, Retreat Valley, 403516",
  googleMapsUrl: "https://maps.google.com/?q=The+Haven+Retreat",
  hours: {
    cafe: "07:30 AM – 10:30 PM (Daily)",
    dining: "12:30 PM – 03:30 PM (Lunch) | 07:00 PM – 11:30 PM (Dinner)",
    frontDesk: "24/7 Front Desk (Check-in: 02:00 PM | Check-out: 11:00 AM)",
  },
  socials: {
    instagram: "https://instagram.com/thehaven.retreat",
    facebook: "https://facebook.com/thehavenretreat",
    tripadvisor: "https://tripadvisor.com",
  },
};

/**
 * Helper to build pre-filled WhatsApp links
 */
export function getWhatsAppLink(message: string, phoneNumber: string = siteConfig.whatsappNumber): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encoded}`;
}
