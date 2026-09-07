"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Coffee,
  Sparkles,
  Wifi,
  Laptop,
  MessageSquare,
  Clock,
  Car,
} from "lucide-react";
import { cafeMenuCategories } from "@/data/menus";
import { ComingSoonModal } from "@/components/common/ComingSoonModal";
import { siteConfig } from "@/data/siteConfig";

export default function CafePage() {
  const [comingSoonOpen, setComingSoonOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Seasonal Cafe Menu");

  const openComingSoon = (title: string) => {
    setModalTitle(title);
    setComingSoonOpen(true);
  };

  const allItems = cafeMenuCategories.flatMap((c) => c.items);

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* 1. HERO HEADER */}
      <section className="relative isolate min-h-[430px] flex items-center py-16 sm:py-24 bg-[#221F1E] text-white px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/resort-hero.jpg"
            alt="The Local Roost Cafe Exterior"
            fill
            className="object-cover object-center opacity-75"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#221F1E]/90 via-[#221F1E]/55 to-[#221F1E]/35" />
        <div className="relative z-20 max-w-3xl mx-auto space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F0C894]">
            Artisan Stone Cafe & Roastery
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold drop-shadow-lg">
            The Local Roost Cafe
          </h1>
          <p className="text-xs sm:text-base text-white/90 font-light max-w-xl mx-auto leading-relaxed drop-shadow-md">
            Housed in our grand stone-clad facade with high arched glass windows. Fresh specialty coffees, artisanal teas, bakery bites, and hearty highway road-trip refreshments in Jim Corbett.
          </p>
          <div className="pt-2 flex items-center justify-center gap-3 text-xs text-[#F0C894] drop-shadow-md">
            <Clock className="w-4 h-4" />
            <span>Open Daily: 10:00 AM – 11:00 PM • Ample Car Parking on Premises</span>
          </div>
        </div>
      </section>

      {/* 2. THE CAFE EXPERIENCE & PARKING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-[#E8E2D8]">
            <Image
              src="/images/resort-hero.jpg"
              alt="The Local Roost Cafe Front Entrance"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C35A38]">
              A Warm Mountain Pitstop
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#221F1E]">
              Fresh Brews & Peaceful Sittings
            </h2>
            <p className="text-xs sm:text-sm text-[#221F1E]/80 leading-relaxed">
              Whether you are an in-house guest stepping out of your pool-view room for morning espresso, or a road-tripper driving into Ramnagar for wildlife safari, The Local Roost Cafe offers calm ambient vibes, fast Wi-Fi, and courteous hospitality.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F1EDE4] space-y-1.5">
                <Car className="w-5 h-5 text-[#C35A38]" />
                <h4 className="font-bold text-xs text-[#221F1E]">Spacious Parking</h4>
                <p className="text-[11px] text-[#221F1E]/70">
                  Easy parking for multiple cars right in front of the cafe.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F1EDE4] space-y-1.5">
                <Wifi className="w-5 h-5 text-[#C35A38]" />
                <h4 className="font-bold text-xs text-[#221F1E]">Free Fast Wi-Fi</h4>
                <p className="text-[11px] text-[#221F1E]/70">
                  Workation-ready high-speed fiber connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MENU PREVIEW & COMING SOON BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4A5B4E]">
            Artisan Selections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#221F1E]">
            Cafe Selections & Brews
          </h2>
          <p className="text-xs sm:text-sm text-[#221F1E]/70">
            Click any item below to view seasonal availability or order directly via WhatsApp
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openComingSoon(item.name)}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {item.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-5 space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-lg font-bold text-[#221F1E] group-hover:text-[#C35A38] transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-serif text-base font-bold text-[#C35A38] shrink-0">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="text-xs text-[#221F1E]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-[#F1EDE4] mt-3">
                <button
                  type="button"
                  className="w-full bg-[#FAF7F2] group-hover:bg-[#25D366] text-[#221F1E] group-hover:text-white border border-[#E8E2D8] group-hover:border-[#25D366] text-xs font-semibold py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white" />
                  <span>Click for Availability / WhatsApp Order</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TAKEAWAY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#E8E2D8] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C35A38]">
              Corbett Safari Snack Packs
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#221F1E]">
              Heading out for a morning Jungle Safari?
            </h3>
            <p className="text-xs text-[#221F1E]/70 max-w-md">
              WhatsApp us in advance to prepare packed coffee flasks, sandwiches, and fresh bakes ready for your early 6:00 AM Gypsy ride.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20The%20Local%20Roost%20Cafe%2C%20I%20would%20like%20to%20order%20a%20safari%20breakfast%20pack.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-6 py-3.5 rounded-full transition-all shadow-md flex items-center gap-2 shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Order on WhatsApp ({siteConfig.phone})</span>
          </a>
        </div>
      </section>

      {/* COMING SOON MODAL */}
      <ComingSoonModal
        isOpen={comingSoonOpen}
        onClose={() => setComingSoonOpen(false)}
        title={modalTitle}
        category="Cafe"
      />
    </div>
  );
}
