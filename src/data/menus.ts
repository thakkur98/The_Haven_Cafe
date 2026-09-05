export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tags?: ("veg" | "vegan" | "gluten-free" | "chef-special")[];
  image?: string;
  category: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
}

export const cafeMenuCategories: MenuCategory[] = [
  {
    id: "brews",
    title: "Specialty Brews & Espresso",
    subtitle: "Single-origin Arabica roasted locally in small weekly batches",
    items: [
      {
        id: "pourover",
        name: "Single-Origin Manual Pour-Over (V60)",
        description: "Floral notes of jasmine, bergamot, and sweet stone peach. Sourced from high-altitude estates.",
        price: 260,
        tags: ["vegan", "gluten-free", "chef-special"],
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
        category: "brews",
      },
      {
        id: "cortado",
        name: "Spanish Cortado & Oat Latte",
        description: "Equal parts double ristretto and velvety steamed oat milk in a tempered glass.",
        price: 240,
        tags: ["veg", "vegan"],
        category: "brews",
      },
      {
        id: "coldbrew-citrus",
        name: "24-Hour Cascara Citrus Cold Brew",
        description: "Steeped slowly for 24 hours with organic valencia orange peel and sparkling mineral finish.",
        price: 280,
        tags: ["vegan", "gluten-free", "chef-special"],
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80",
        category: "brews",
      },
      {
        id: "cardamom-flatwhite",
        name: "Cardamom & Raw Honey Flat White",
        description: "Velvety micro-foam infused with green cardamom pods and raw forest honey.",
        price: 270,
        tags: ["veg"],
        category: "brews",
      },
    ],
  },
  {
    id: "bakes",
    title: "Artisan Bakery & Pastries",
    subtitle: "Freshly baked each morning at 6:30 AM using French cultured butter and sourdough starters",
    items: [
      {
        id: "almond-croissant",
        name: "Twice-Baked Almond Frangipane Croissant",
        description: "Flaky 72-layer butter pastry filled with rich almond cream and toasted flaked almonds.",
        price: 260,
        tags: ["veg", "chef-special"],
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
        category: "bakes",
      },
      {
        id: "sourdough-focaccia",
        name: "Rosemary & Sun-Dried Tomato Sourdough Focaccia",
        description: "Wild fermented sourdough bread loaded with sea salt flakes, Kalamata olives, and fresh rosemary.",
        price: 220,
        tags: ["vegan"],
        category: "bakes",
      },
      {
        id: "pistachio-eclair",
        name: "Bronte Pistachio & White Chocolate Choux",
        description: "Crisp choux bun filled with roasted Sicilian pistachio mousseline and sea salt.",
        price: 310,
        tags: ["veg"],
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
        category: "bakes",
      },
    ],
  },
  {
    id: "brunch",
    title: "All-Day Brunch & Bowls",
    subtitle: "Wholesome, clean ingredients sourced straight from regional farmers",
    items: [
      {
        id: "avocado-tartine",
        name: "Poached Egg & Hass Avocado Tartine",
        description: "Toasted sourdough with crushed avocado, organic microgreens, chili crisp, feta, and two free-range eggs.",
        price: 390,
        tags: ["veg", "chef-special"],
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
        category: "brunch",
      },
      {
        id: "acai-superbowl",
        name: "Amazonian Berry & Chia Smoothie Bowl",
        description: "Organic acai blended with banana, topped with house almond granola, dragon fruit, and raw cacao nibs.",
        price: 360,
        tags: ["vegan", "gluten-free"],
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80",
        category: "brunch",
      },
      {
        id: "shakshuka",
        name: "Spiced Heirloom Shakshuka with Labneh",
        description: "Slow-simmered bell pepper and cumin tomato sugo with baked farm eggs, creamy garlic labneh, and flatbread.",
        price: 420,
        tags: ["veg"],
        category: "brunch",
      },
    ],
  },
];

export const diningMenuCategories: MenuCategory[] = [
  {
    id: "starters",
    title: "Small Plates & Appetizers",
    subtitle: "Designed to share and ignite the palate for dinner",
    items: [
      {
        id: "burrata-heirloom",
        name: "Artisan Burrata & Smoked Peach Carpaccio",
        description: "Creamy local burrata with grilled valley peaches, aged balsamic reduction, basil oil, and pine nuts.",
        price: 520,
        tags: ["veg", "gluten-free", "chef-special"],
        image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=600&q=80",
        category: "starters",
      },
      {
        id: "truffle-mushroom-crostini",
        name: "Wild Forest Mushroom & Truffle Crostini",
        description: "Sautéed morel and portobello mushrooms on crisp sourdough with black truffle mascarpone cream.",
        price: 480,
        tags: ["veg"],
        category: "starters",
      },
      {
        id: "fire-grilled-prawns",
        name: "Charcoal Tiger Prawns with Chili-Garlic Butter",
        description: "Fresh coast prawns grilled over wood charcoal, glazed with smoked paprika butter and charred lemon.",
        price: 680,
        tags: ["gluten-free", "chef-special"],
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
        category: "starters",
      },
    ],
  },
  {
    id: "mains",
    title: "Chef's Signature Mains & Wood-Fire",
    subtitle: "Hearty, slow-cooked plates celebrating regional terroir and seasonal harvest",
    items: [
      {
        id: "saffron-risotto",
        name: "Kashmiri Saffron & Roasted Butternut Risotto",
        description: "Acquerello carnaroli rice simmered in vegetable broth with fragrant saffron, roasted squash, and aged parmesan.",
        price: 640,
        tags: ["veg", "gluten-free"],
        image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80",
        category: "mains",
      },
      {
        id: "slow-braised-lamb",
        name: "12-Hour Slow Braised Lamb Shank with Herb Polenta",
        description: "Fork-tender lamb shank braised with root vegetables and rosemary jus, resting over creamy mascarpone polenta.",
        price: 920,
        tags: ["gluten-free", "chef-special"],
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        category: "mains",
      },
      {
        id: "pan-seared-seabass",
        name: "Wild Sea Bass with Fennel Broth & Caper Emulsion",
        description: "Crispy skin sea bass fillet over crushed baby potatoes, sautéed samphire, and citrus-infused fennel broth.",
        price: 880,
        tags: ["gluten-free", "chef-special"],
        category: "mains",
      },
      {
        id: "gnocchi-sage",
        name: "Handmade Ricotta Gnocchi with Brown Butter Sage",
        description: "Pillowy handmade potato and sheep milk ricotta gnocchi tossed in nutty brown butter, crisp sage, and toasted hazelnuts.",
        price: 580,
        tags: ["veg"],
        category: "mains",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts & Nightcaps",
    subtitle: "Decadent, handcrafted sweet finishes paired with house mocktails and digestifs",
    items: [
      {
        id: "smoked-chocolate-tart",
        name: "Smoked Valrhona 70% Chocolate Ganache Tart",
        description: "Dark chocolate shortcrust pastry with salted caramel center, edible gold flake, and house espresso gelato.",
        price: 380,
        tags: ["veg", "chef-special"],
        image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=600&q=80",
        category: "desserts",
      },
      {
        id: "basque-cheesecake",
        name: "Burnt Basque Cheesecake with Fig Compote",
        description: "Caramelized crust with an ultra-creamy, molten core, served with wild spiced black fig reduction.",
        price: 350,
        tags: ["veg"],
        category: "desserts",
      },
    ],
  },
];
