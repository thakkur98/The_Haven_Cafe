export interface Room {
  id: string;
  name: string;
  category: "pool-view" | "balcony" | "patio";
  tagline: string;
  description: string;
  capacity: string;
  bedType: string;
  badge?: string;
  totalUnits?: number;
  inclusions: string[];
  amenities: string[];
  images: string[];
}

export const roomsData: Room[] = [
  {
    id: "deluxe-pool-view-room",
    name: "Deluxe Pool View Room",
    category: "pool-view",
    tagline: "15 boutique rooms overlooking our sparkling swimming pool & lush lawn",
    description: "Every room at The Local Roost features direct, unobstructed views of our crystal-blue swimming pool and landscaped courtyard. Enjoy warm contemporary interiors, plush king bedding, ambient mood lighting, a private sit-out balcony or patio, and modern en-suite rain shower facilities.",
    capacity: "2 Adults + 1 Child",
    bedType: "Plush King Size Bed",
    badge: "All 15 Rooms Pool View",
    totalUnits: 15,
    inclusions: [
      "Direct Swimming Pool View from Private Sit-out",
      "Complimentary Morning Breakfast included at The Cafe",
      "Unlimited Access to the Outdoor Swimming Pool",
      "High-Speed Fiber Wi-Fi (150 Mbps)",
      "Dedicated Secure Parking on Premises",
      "24/7 Front Desk & Room Service Assistance",
    ],
    amenities: [
      "Private Pool-Facing Balcony / Patio",
      "Swimming Pool Access",
      "En-suite Rain Shower & Toiletries",
      "Smart 43-inch LED TV",
      "Silent Air Conditioning & Climate Control",
      "Electric Kettle with Tea/Coffee Station",
      "24/7 Hot & Cold Water",
      "Power Backup Generator",
    ],
    images: [
      "/images/room-pool-view.jpg",
      "/images/pool-courtyard.jpg",
      "/images/resort-hero.jpg",
    ],
  },
  {
    id: "first-floor-balcony-room",
    name: "First Floor Pool Balcony Room",
    category: "balcony",
    tagline: "Elevated vantage point with sunrise breezes over the pool & lawn",
    description: "Located on the upper deck with elevated views spanning the entire pool courtyard, surrounding trees, and Ramnagar valley skyline. Features an intimate wooden railing balcony ideal for morning tea and evening conversations.",
    capacity: "2 Adults + 1 Child",
    bedType: "Plush King Size Bed",
    badge: "Upper Deck View",
    totalUnits: 8,
    inclusions: [
      "Panoramic Upper Deck Pool & Lawn View",
      "Complimentary Cafe Breakfast",
      "Swimming Pool Access",
      "High-Speed Fiber Wi-Fi",
      "Dedicated Free Parking",
    ],
    amenities: [
      "Private Elevated Balcony",
      "Swimming Pool Access",
      "Rain Shower & Fresh Linen",
      "Smart LED TV",
      "Air Conditioning",
      "Tea & Coffee Station",
      "Workation Desk Corner",
    ],
    images: [
      "/images/room-pool-view.jpg",
      "/images/pool-courtyard.jpg",
    ],
  },
  {
    id: "ground-floor-pool-patio",
    name: "Ground Floor Pool Patio Room",
    category: "patio",
    tagline: "Step straight out onto the lush lawn and poolside deck",
    description: "Step right from your room onto the manicured green lawn and poolside loungers. Perfect for families, children, and travelers who love effortless zero-staircase access to the swimming pool and outdoor cafe tables.",
    capacity: "2 Adults + 1 Child",
    bedType: "Plush King Size Bed",
    badge: "Direct Lawn & Pool Access",
    totalUnits: 7,
    inclusions: [
      "Zero-Staircase Walkout to Pool & Lawn",
      "Complimentary Cafe Breakfast",
      "Swimming Pool Access",
      "High-Speed Fiber Wi-Fi",
      "Dedicated Free Parking",
    ],
    amenities: [
      "Ground Floor Garden Patio",
      "Immediate Pool Proximity",
      "Spacious Rain Shower",
      "Smart LED TV",
      "Air Conditioning",
      "Tea & Coffee Setup",
      "Child & Senior Friendly",
    ],
    images: [
      "/images/room-pool-view.jpg",
      "/images/pool-courtyard.jpg",
    ],
  },
];
