"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Compass,
  Clock,
  MapPin,
  Sparkles,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { experiencesData, Experience } from "@/data/experiences";
import { siteConfig } from "@/data/siteConfig";

export default function ExperiencesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? experiencesData
      : experiencesData.filter((e) => e.category === activeCategory);

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* 1. HERO HEADER */}
      <section className="relative py-16 sm:py-24 bg-[#221F1E] text-white px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=80"
            alt="Nature Trail"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
            Unwind & Discover
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold">
            Experiences & Local Guide
          </h1>
          <p className="text-xs sm:text-base text-white/80 font-light max-w-xl mx-auto leading-relaxed">
            From morning coffee cupping in our roastery greenhouse to twilight bonfires and secluded river walks. Enrich your stay with curated moments.
          </p>
        </div>
      </section>

      {/* 2. FILTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {[
            { label: "All Experiences", value: "all" },
            { label: "On-Property Rituals", value: "property" },
            { label: "Nearby Destinations", value: "nearby" },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat.value
                  ? "bg-[#C35A38] text-white shadow-xs"
                  : "bg-white text-[#221F1E] border border-[#E8E2D8] hover:bg-[#F1EDE4]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. EXPERIENCES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.badge && (
                    <span className="absolute top-4 left-4 bg-[#221F1E]/85 backdrop-blur-xs text-[#D4A373] text-[11px] font-bold px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#4A5B4E] font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>
                    <span>•</span>
                    <span>{item.timing}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#221F1E]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#221F1E]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#F1EDE4] mt-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20The%20Haven%2C%20I%20am%20interested%20in%20arranging%20the%20${encodeURIComponent(
                    item.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#FAF7F2] hover:bg-[#4A5B4E] text-[#221F1E] hover:text-white border border-[#E8E2D8] hover:border-[#4A5B4E] text-xs font-semibold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#4A5B4E] group-hover/btn:text-white" />
                  <span>Ask Concierge on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CONCIERGE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#E8E2D8] rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C35A38]">
              Personalized Itineraries
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#221F1E]">
              Need airport transfers or customized day trails?
            </h3>
            <p className="text-xs sm:text-sm text-[#221F1E]/70 max-w-lg">
              Our front desk concierge will organize private cabs, picnic breakfast hampers from our cafe, and bicycles for scenic countryside exploration.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20The%20Haven%20Concierge%2C%20I%20would%20like%20assistance%20planning%20my%20stay%20itinerary.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-7 py-3.5 rounded-full transition-all shadow-md flex items-center gap-2 shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat with Concierge</span>
          </a>
        </div>
      </section>
    </div>
  );
}
