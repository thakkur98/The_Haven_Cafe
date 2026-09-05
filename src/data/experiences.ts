export interface Experience {
  id: string;
  title: string;
  category: "property" | "nearby";
  description: string;
  duration: string;
  timing: string;
  image: string;
  badge?: string;
}

export const experiencesData: Experience[] = [
  {
    id: "coffee-cupping",
    title: "Morning Coffee Cupping & Brewing Masterclass",
    category: "property",
    description: "Join our head roaster in the cafe greenhouse for a sensory exploration of 4 regional Indian single-origins. Learn grind science, brewing ratios, and palate notes.",
    duration: "60 mins",
    timing: "Daily at 08:30 AM",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
    badge: "Included for Stay Guests",
  },
  {
    id: "sunset-bonfire",
    title: "Sunset Courtyard Bonfire & Acoustic Hours",
    category: "property",
    description: "As twilight settles over the valley, gather by our stone firepit with warm botanical teas, mulled cider, toasted artisanal marshmallows, and light acoustic melodies.",
    duration: "2 hours",
    timing: "Every Evening at 06:30 PM",
    image: "https://images.unsplash.com/photo-1525811902-f2342640856e?auto=format&fit=crop&w=800&q=80",
    badge: "Daily Social",
  },
  {
    id: "botanical-foraging",
    title: "Chef's Garden Foraging & Herb Picking Walk",
    category: "property",
    description: "Walk through our organic microgreens and kitchen herb beds with Chef Dev. Pick fresh rosemary, edible marigolds, and heirloom mint used in tonight's dining plates.",
    duration: "45 mins",
    timing: "Tue, Thu, Sat at 04:30 PM",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    badge: "Interactive",
  },
  {
    id: "riverbank-trail",
    title: "Riverbank Canopy Nature Trail",
    category: "nearby",
    description: "A gentle 2 km walking path along the babbling retreat river. Dense bamboo groves, migratory kingfishers, and natural pebble bathing spots.",
    duration: "10 min walk",
    timing: "Best early morning & late afternoon",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    badge: "Nearby Gem",
  },
  {
    id: "heritage-village",
    title: "Old Stone Crafts Village & Pottery Stalls",
    category: "nearby",
    description: "Explore century-old cobblestone lanes, observe generational potters shaping terracotta pottery, and visit rustic handloom weavers.",
    duration: "15 min drive",
    timing: "10:00 AM – 06:00 PM",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
    badge: "Cultural Tour",
  },
  {
    id: "valley-viewpoint",
    title: "Valley Mist Sunrise Peak",
    category: "nearby",
    description: "A panoramic cliff edge overlooking the mountain ranges. Concierge can arrange a packed picnic breakfast basket from the cafe for your morning hike.",
    duration: "25 min drive",
    timing: "05:30 AM – 07:30 AM",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    badge: "Must Visit",
  },
];
