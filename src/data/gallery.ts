export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "rooms" | "cafe" | "pool" | "property" | "nearby";
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
    id: "nearby-1",
    title: "Hanuman Dham, Chhoi",
    category: "nearby",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe0nwaUKBL0eriMyDFmRxC6YcLng5RpQVVk8itkfqErDcKANg5mQeZ1pQ&s=10",
    aspect: "landscape",
  },
  {
    id: "nearby-2",
    title: "Corbett Waterfall",
    category: "nearby",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIb41c8ZF3xIh3-jF79a8kHrp3OUKhFCOkfhu3f__ZNNy81EQPN3t735L&s=10",
    aspect: "landscape",
  },
  {
    id: "nearby-3",
    title: "Garjiya Devi Mandir",
    category: "nearby",
    imageUrl: "https://www.uttarakhand.org.in/wp-content/uploads/2015/04/DSC_1228-1024x683.jpg",
    aspect: "landscape",
  },
  {
    id: "nearby-4",
    title: "Ramganga River View",
    category: "nearby",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQScfByahPp2JYV9dj22zfTpmhPDZcLx4tFOEtuUA9WAg&s",
    aspect: "landscape",
  },
];
