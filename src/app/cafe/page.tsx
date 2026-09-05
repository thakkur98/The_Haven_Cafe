"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Coffee,
  Sparkles,
  Wifi,
  Laptop,
  MessageSquare,
  ArrowRight,
  Download,
  Flame,
  Clock,
} from "lucide-react";
import { cafeMenuCategories, MenuItem } from "@/data/menus";
import { siteConfig } from "@/data/siteConfig";

export default function CafePage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [dietaryFilter, setDietaryFilter] = useState<string>("all");

  const allItems = cafeMenuCategories.flatMap((c) => c.items);

  const filteredItems = allItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesDietary =
      dietaryFilter === "all" || (item.tags && item.tags.includes(dietaryFilter as any));
    return matchesCategory && matchesDietary;
  });

  const handleOrderWhatsApp = (itemName: string) => {
    const msg = `☕ *CAFE PICKUP / ORDER INQUIRY*
----------------------------------------
Hi The Haven Cafe, I'd like to check availability / order:
*${itemName}*
Please let me know when it can be ready for pickup!`;
    const encoded = encodeURIComponent(msg);
    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* 1. HERO HEADER */}
      <section className="relative py-16 sm:py-24 bg-[#221F1E] text-white px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=80"
            alt="Artisan Cafe Ambiance"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
            Small Batch Roastery & Bakes
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold">
            The Cafe & Bakery
          </h1>
          <p className="text-xs sm:text-base text-white/80 font-light max-w-xl mx-auto leading-relaxed">
            Single-origin coffees roasted weekly, 72-layer cultured butter croissants, wild-fermented sourdough, and sun-lit corners made for deep focus and slow mornings.
          </p>
          <div className="pt-2 flex items-center justify-center gap-3 text-xs text-[#D4A373]">
            <Clock className="w-4 h-4" />
            <span>Open Daily: 07:30 AM – 10:30 PM • Walk-ins Always Welcome</span>
          </div>
        </div>
      </section>

      {/* 2. THE COFFEE PHILOSOPHY & WORKATION PERKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80"
              alt="Pour-over coffee brewing"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C35A38]">
              The Craft Behind Every Cup
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#221F1E]">
              From High-Altitude Farms to Your Cup
            </h2>
            <p className="text-xs sm:text-sm text-[#221F1E]/80 leading-relaxed">
              We partner directly with sustainable estates in the Western Ghats and Coorg to source hand-picked 100% Arabica cherries. Each lot is custom profile-roasted in our on-site micro-roastery to highlight bright floral notes, delicate fruit acidity, and deep chocolate sweetness.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F1EDE4] space-y-1.5">
                <Laptop className="w-5 h-5 text-[#C35A38]" />
                <h4 className="font-bold text-xs text-[#221F1E]">Workation Friendly</h4>
                <p className="text-[11px] text-[#221F1E]/70">
                  Dedicated power sockets at every booth and quiet reading tables.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F1EDE4] space-y-1.5">
                <Wifi className="w-5 h-5 text-[#C35A38]" />
                <h4 className="font-bold text-xs text-[#221F1E]">Fiber Internet</h4>
                <p className="text-[11px] text-[#221F1E]/70">
                  Seamless 150 Mbps network with backup generators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE DIGITAL MENU WITH FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4A5B4E]">
            Freshly Prepared
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#221F1E]">
            The Cafe Menu
          </h2>
          <p className="text-xs sm:text-sm text-[#221F1E]/70">
            Select items to order for pickup or table service via WhatsApp
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#E8E2D8] pb-6">
          <div className="flex items-center flex-wrap gap-2">
            {[
              { label: "All Items", value: "all" },
              { label: "Brews & Espresso", value: "brews" },
              { label: "Bakery & Pastries", value: "bakes" },
              { label: "All-Day Brunch", value: "brunch" },
            ].map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat.value
                    ? "bg-[#C35A38] text-white shadow-xs"
                    : "bg-white text-[#221F1E] border border-[#E8E2D8] hover:bg-[#F1EDE4]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dietary Tags Filter */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-[11px] text-[#221F1E]/60 uppercase font-semibold mr-1">
              Diet:
            </span>
            {[
              { label: "All", value: "all" },
              { label: "🌿 Veg", value: "veg" },
              { label: "🌱 Vegan", value: "vegan" },
              { label: "🌾 Gluten-Free", value: "gluten-free" },
              { label: "⚡ Chef Special", value: "chef-special" },
            ].map((tag) => (
              <button
                key={tag.value}
                onClick={() => setDietaryFilter(tag.value)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                  dietaryFilter === tag.value
                    ? "bg-[#4A5B4E] text-white"
                    : "bg-[#F1EDE4] text-[#221F1E]/75 hover:bg-[#E8E2D8]"
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {item.image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-5 space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-lg font-bold text-[#221F1E]">
                      {item.name}
                    </h3>
                    <span className="font-serif text-base font-bold text-[#C35A38] shrink-0">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="text-xs text-[#221F1E]/75 leading-relaxed">
                    {item.description}
                  </p>
                  {item.tags && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {item.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="bg-[#FAF7F2] text-[#4A5B4E] border border-[#E8E2D8] text-[10px] uppercase font-semibold px-2 py-0.5 rounded-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-[#F1EDE4] mt-3">
                <button
                  onClick={() => handleOrderWhatsApp(item.name)}
                  className="w-full bg-[#FAF7F2] hover:bg-[#25D366] text-[#221F1E] hover:text-white border border-[#E8E2D8] hover:border-[#25D366] text-xs font-semibold py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 group"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white" />
                  <span>Order / Pickup on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TAKEAWAY & PRE-ORDER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#E8E2D8] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C35A38]">
              Quick Takeaway & Sourdough Pre-orders
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#221F1E]">
              Hosting at home or heading out for a drive?
            </h3>
            <p className="text-xs text-[#221F1E]/70 max-w-md">
              WhatsApp us 30 minutes in advance to pack hot single-origin flasks, whole sourdough loaves, and pastry boxes ready for swift pickup.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20The%20Haven%20Cafe%2C%20I%20would%20like%20to%20place%20a%20takeaway%20order.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-6 py-3.5 rounded-full transition-all shadow-md flex items-center gap-2 shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Pre-order on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
