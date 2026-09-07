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
    id: "poolside-bonfire",
    title: "Poolside Evening Bonfire & Courtyard Music",
    category: "property",
    description: "As twilight sets over the Jim Corbett hills, unwind by our outdoor swimming pool with a warm crackling wood bonfire, ambient music, and piping hot snacks from The Local Roost Cafe.",
    duration: "2 Hours",
    timing: "Daily from 07:00 PM onwards",
    image: "/images/pool-courtyard.jpg",
    badge: "Guest Favorite",
  },
  {
    id: "corbett-safari",
    title: "Jim Corbett National Park Jungle Safari",
    category: "nearby",
    description: "Embark on an open 4x4 Gypsy tiger safari into the world-renowned Corbett Tiger Reserve (Bijrani, Jhirna, Dhela, or Garjiya zones). Witness Bengal tigers, wild Asian elephants, and diverse deer species.",
    duration: "3.5 Hours",
    timing: "Morning (06:00 AM) & Afternoon (02:00 PM)",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80",
    badge: "Must Experience",
  },
  {
    id: "kosi-riverbank",
    title: "Kosi Riverbank Walk & Birdwatching",
    category: "nearby",
    description: "A tranquil walk along the clear waters of the Kosi River. Breathe in fresh forest air, spot Himalayan kingfishers, and enjoy peaceful pebble shores just minutes from our property.",
    duration: "10 min drive",
    timing: "Best during early morning sunrise",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    badge: "Scenic Trail",
  },
  {
    id: "garjiya-temple",
    title: "Garjiya Devi Temple & Corbett Waterfalls",
    category: "nearby",
    description: "Visit the revered sacred rock shrine of Garjiya Devi perched atop a massive rock in the middle of Kosi River, followed by a scenic forest hike to the tumbling Corbett Falls.",
    duration: "Half-Day Trip",
    timing: "08:00 AM – 05:00 PM",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    badge: "Cultural Sight",
  },
];
