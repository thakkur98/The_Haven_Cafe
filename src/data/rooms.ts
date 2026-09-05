export interface Room {
  id: string;
  name: string;
  category: "suite" | "cottage" | "penthouse" | "nook";
  tagline: string;
  description: string;
  size: string;
  capacity: string;
  bedType: string;
  startingPrice: number;
  badge?: string;
  inclusions: string[];
  amenities: string[];
  images: string[];
}

export const roomsData: Room[] = [
  {
    id: "canopy-balcony-suite",
    name: "The Canopy Balcony Suite",
    category: "suite",
    tagline: "Private forest-facing balcony with morning sun and bird songs",
    description: "Designed for couples and slow travelers seeking stillness. Features an expansive open balcony overlooking lush canopy, warm oak accents, a sun-drenched reading lounge, and an en-suite rain shower.",
    size: "450 sq.ft",
    capacity: "2 Adults + 1 Child",
    bedType: "Plush King Bed (100% Organic Linen)",
    startingPrice: 5800,
    badge: "Guest Favorite",
    inclusions: [
      "Artisan Breakfast included at The Cafe",
      "Complimentary Single-Origin Pour-over Kit",
      "High-Speed Fiber Wi-Fi (150 Mbps)",
      "Evening Turndown Service with Herbal Tea",
    ],
    amenities: [
      "Private Covered Balcony",
      "Rain Shower & Artisanal Botanicals",
      "Smart 50-inch 4K TV",
      "Mini Bar with Local Snacks & Kombucha",
      "Silent AC & Room Climate Control",
      "Ergonomic Work Desk",
    ],
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "garden-cottage-villa",
    name: "The Garden Cottage Villa",
    category: "cottage",
    tagline: "Detached stone cottage nestled inside our fragrant botanical courtyard",
    description: "Our standalone garden cottage gives you total seclusion. Open French doors into your private herb garden patio, soak in the handcrafted terrazzo bathtub, and unwind to tranquil ambient fountain waters.",
    size: "550 sq.ft",
    capacity: "2-3 Adults or Family",
    bedType: "California King Bed + Daybed",
    startingPrice: 7200,
    badge: "Private Patio",
    inclusions: [
      "Artisan Breakfast with Fresh Bakery Baskets",
      "Freshly Pressed Seasonal Juices Daily",
      "Dedicated High-Speed Wi-Fi",
      "Private Garden Dining Service upon Request",
    ],
    amenities: [
      "Standalone Terrazzo Soaking Tub",
      "Private Enclosed Courtyard Garden",
      "Espresso Machine & Aeropress Bar",
      "Handcrafted Teak Furniture",
      "Luxury Bathrobes & Kimonos",
      "Marshall Bluetooth Speaker",
    ],
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "horizon-sky-penthouse",
    name: "The Horizon Sky Penthouse",
    category: "penthouse",
    tagline: "Top-floor panoramic glass suite with sunset deck and soaking tub",
    description: "The crown jewel of The Haven. Sweeping floor-to-ceiling glass reveals breathtaking valley sunsets. Includes a private terrace with lounge recliners, open sky viewing, and customized Butler service.",
    size: "720 sq.ft",
    capacity: "2-4 Adults",
    bedType: "Custom Grand King Bed + Sofa Lounge",
    startingPrice: 9500,
    badge: "Signature Luxury",
    inclusions: [
      "All-Inclusive Cafe Breakfast & Sunset Mocktails",
      "Priority Table Reservation at Dining Room",
      "Welcome Wine & Artisan Cheese Platter",
      "Complimentary Laundry Service (4 items/day)",
    ],
    amenities: [
      "Private Wrap-around Sunset Terrace",
      "Panoramic Outdoor Jacuzzi/Tub",
      "Full Living Room & Dining Nook",
      "Vinyl Record Player with Curated Classics",
      "Dyson Supersonic Hair Dryer",
      "High-speed 250 Mbps Dedicated Network",
    ],
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "writers-cozy-nook",
    name: "The Writer's Garden Nook",
    category: "nook",
    tagline: "Compact, quiet, and hyper-functional for solo thinkers and creative souls",
    description: "Tailored for remote workers, writers, and solo retreats. Positioned near the cafe library, this peaceful nook offers an ergonomic workstation, garden vistas, warm brass lighting, and unlimited drip brew from the cafe.",
    size: "310 sq.ft",
    capacity: "1-2 Adults",
    bedType: "Queen Size Memory Foam Bed",
    startingPrice: 3900,
    badge: "Solo / Workation Friendly",
    inclusions: [
      "Artisan Cafe Breakfast + Unlimited Drip Coffee",
      "High-Speed Fiber Wi-Fi with Power Backup",
      "Daily Access to Co-Working Lounge",
    ],
    amenities: [
      "Ergonomic Desk & Herman Miller Chair",
      "Warm Reading Lamp & Bookshelf",
      "Acoustic Soundproofing",
      "Smart TV & Casting",
      "En-suite Modern Shower",
    ],
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];
