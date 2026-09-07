export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  phone: string;
  whatsappNumber: string;
  whatsappCallUrl: string;
  email: string;
  address: string;
  landmark: string;
  googleMapsUrl: string;
  totalRooms: number;
  allRoomsPoolView: boolean;
  amenities: string[];
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
  name: "The Local Roost Cafe & Stay",
  shortName: "The Local Roost",
  tagline: "Boutique Pool-View Stay & Artisan Cafe in Jim Corbett",
  description: "A serene getaway in Jim Corbett featuring 15 all-pool-view rooms, a sparkling swimming pool, lush party lawn, expansive parking, and an artisanal stone-built cafe.",
  phone: "+91 79003 45101",
  whatsappNumber: "917900345101",
  whatsappCallUrl: "https://wa.me/917900345101",
  email: "stay@thelocalroost.com",
  address: "Jim Corbett, Neeripur, Chhoi, Ramnagar, Uttarakhand 244715",
  landmark: "Near Corbett Wild Flower Resort And Spa",
  googleMapsUrl: "https://maps.app.goo.gl/K6GSV4NkGn1rDA99A?g_st=iw",
  totalRooms: 15,
  allRoomsPoolView: true,
  amenities: [
    "Swimming Pool",
    "15 All-Pool-View Rooms",
    "Artisan Stone Cafe",
    "Spacious Party Lawn",
    "Dedicated Free Parking",
    "High-Speed Free Wi-Fi",
    "24/7 Reception Desk",
    "Power Backup",
  ],
  hours: {
    cafe: "07:30 AM – 10:30 PM (Daily)",
    dining: "12:30 PM – 03:30 PM (Lunch) | 07:00 PM – 11:30 PM (Dinner)",
    frontDesk: "24/7 Front Desk (Check-in: 01:00 PM | Check-out: 11:00 AM)",
  },
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
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
