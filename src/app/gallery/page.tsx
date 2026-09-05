"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryItems, GalleryItem } from "@/data/gallery";
import { X, ZoomIn, Camera } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* 1. HERO HEADER */}
      <section className="relative py-16 sm:py-24 bg-[#221F1E] text-white px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
            Visual Moments
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold">
            Atmosphere & Gallery
          </h1>
          <p className="text-xs sm:text-base text-white/80 font-light max-w-xl mx-auto leading-relaxed">
            Sunlit courtyards, artisan bread baking before dawn, intimate candlelit tables, and quiet balcony suites overlooking the forest canopy.
          </p>
        </div>
      </section>

      {/* 2. FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {[
            { label: "All Photos", value: "all" },
            { label: "Boutique Rooms", value: "rooms" },
            { label: "The Cafe & Brews", value: "cafe" },
            { label: "Dining & Plates", value: "dining" },
            { label: "Courtyard & Nights", value: "property" },
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

      {/* 3. MASONRY / GRID GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group border border-[#E8E2D8]"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm font-semibold">{item.title}</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INSTAGRAM CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#E8E2D8] max-w-2xl mx-auto space-y-4">
          <Camera className="w-8 h-8 text-[#C35A38] mx-auto" />
          <h3 className="font-serif text-2xl font-bold text-[#221F1E]">
            Tag @thehaven.retreat in your stories
          </h3>
          <p className="text-xs text-[#221F1E]/75">
            Share your morning pour-overs and cozy evenings. We regularly feature our favorite guest snapshots on our main feed.
          </p>
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#221F1E] hover:bg-black text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-all"
          >
            Visit Instagram Profile
          </a>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#221F1E] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative h-[65vh] w-full">
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 text-center bg-[#221F1E] text-white">
              <p className="font-serif text-base font-semibold">{selectedImage.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
