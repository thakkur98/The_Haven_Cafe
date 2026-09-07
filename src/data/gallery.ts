export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "rooms" | "cafe" | "pool" | "property";
  imageUrl: string;
  aspect: "landscape" | "portrait" | "square";
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    title: "The Local Roost Cafe - Grand Stone Facade at Twilight",
    category: "cafe",
    imageUrl: "/images/resort-hero.jpg",
    aspect: "landscape",
  },
  {
    id: "g-2",
    title: "Swimming Pool & 15 Pool-View Rooms Courtyard",
    category: "pool",
    imageUrl: "/images/pool-courtyard.jpg",
    aspect: "landscape",
  },
  {
    id: "g-3",
    title: "Deluxe Pool View Room Interior & Plush Bedding",
    category: "rooms",
    imageUrl: "/images/room-pool-view.jpg",
    aspect: "landscape",
  },
  {
    id: "g-4",
    title: "Paved Parking & Architectural Stone Arches",
    category: "property",
    imageUrl: "/images/exterior-courtyard.jpg",
    aspect: "landscape",
  },
  {
    id: "g-5",
    title: "Evening Illumination by the Pool Deck",
    category: "pool",
    imageUrl: "/images/pool-courtyard.jpg",
    aspect: "landscape",
  },
  {
    id: "g-6",
    title: "The Local Roost - Cafe Entrance & Outdoor Lawn",
    category: "property",
    imageUrl: "/images/resort-hero.jpg",
    aspect: "landscape",
  },
];
