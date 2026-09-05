export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "rooms" | "cafe" | "dining" | "property";
  imageUrl: string;
  aspect: "landscape" | "portrait" | "square";
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    title: "Canopy Balcony Suite Sunlit Morning",
    category: "rooms",
    imageUrl: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
    aspect: "landscape",
  },
  {
    id: "g-2",
    title: "Latte Art & Morning Sourdough Croissant",
    category: "cafe",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
    aspect: "square",
  },
  {
    id: "g-3",
    title: "Candlelit Garden Dining Tables",
    category: "dining",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    aspect: "landscape",
  },
  {
    id: "g-4",
    title: "Garden Villa Soaking Tub",
    category: "rooms",
    imageUrl: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80",
    aspect: "portrait",
  },
  {
    id: "g-5",
    title: "Artisan Burrata & Smoked Peaches",
    category: "dining",
    imageUrl: "https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=1000&q=80",
    aspect: "square",
  },
  {
    id: "g-6",
    title: "Courtyard Bonfire at Twilight",
    category: "property",
    imageUrl: "https://images.unsplash.com/photo-1525811902-f2342640856e?auto=format&fit=crop&w=1000&q=80",
    aspect: "landscape",
  },
  {
    id: "g-7",
    title: "Handcrafted Pour-Over Bar",
    category: "cafe",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80",
    aspect: "portrait",
  },
  {
    id: "g-8",
    title: "Horizon Sky Penthouse Sunset View",
    category: "rooms",
    imageUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
    aspect: "landscape",
  },
  {
    id: "g-9",
    title: "12-Hour Slow Braised Lamb Shank",
    category: "dining",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    aspect: "square",
  },
];
