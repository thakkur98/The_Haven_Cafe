"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  BedDouble,
  Users,
  Maximize2,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  Clock,
  Dog,
  Coffee,
} from "lucide-react";
import { roomsData, Room } from "@/data/rooms";
import { RoomInquiryModal } from "@/components/forms/RoomInquiryModal";
import { siteConfig } from "@/data/siteConfig";

export default function RoomsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>();

  const filteredRooms =
    activeCategory === "all"
      ? roomsData
      : roomsData.filter((r) => r.category === activeCategory);

  const openInquiry = (roomId: string) => {
    setSelectedRoomId(roomId);
    setModalOpen(true);
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* 1. HERO HEADER */}
      <section className="relative py-16 sm:py-24 bg-[#221F1E] text-white px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-35">
          <Image
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1800&q=80"
            alt="Boutique Rooms Ambiance"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
            Curated Sanctuaries
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold">
            Boutique Rooms & Suites
          </h1>
          <p className="text-xs sm:text-base text-white/80 font-light max-w-xl mx-auto leading-relaxed">
            Crafted with natural stone, warm teak, and organic linens. Every stay includes our signature artisan breakfast at The Cafe and single-origin pour-over coffee.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY FILTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-2">
          {[
            { label: "All Accommodations", value: "all" },
            { label: "Suites", value: "suite" },
            { label: "Garden Cottages", value: "cottage" },
            { label: "Penthouse", value: "penthouse" },
            { label: "Solo & Workation", value: "nook" },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat.value
                  ? "bg-[#C35A38] text-white shadow-sm"
                  : "bg-white text-[#221F1E] border border-[#E8E2D8] hover:bg-[#F1EDE4]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. DETAILED ROOMS LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredRooms.map((room, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={room.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-sm hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Images Grid / Main Showcase */}
              <div
                className={`lg:col-span-6 relative min-h-[320px] sm:min-h-[420px] ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={room.images[0]}
                  alt={room.name}
                  fill
                  className="object-cover"
                />
                {room.badge && (
                  <span className="absolute top-4 left-4 bg-[#221F1E]/80 backdrop-blur-xs text-[#D4A373] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    {room.badge}
                  </span>
                )}
                {/* Secondary Image Thumbnails on Desktop */}
                {room.images.length > 1 && (
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    {room.images.slice(1, 3).map((img, i) => (
                      <div
                        key={i}
                        className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-white shadow-md"
                      >
                        <Image
                          src={img}
                          alt={`${room.name} preview`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Room Content */}
              <div
                className={`lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="space-y-4">
                  {/* Meta pills */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#4A5B4E] font-medium">
                    <span className="flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5" />
                      {room.size}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {room.capacity}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <BedDouble className="w-3.5 h-3.5" />
                      {room.bedType}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#221F1E]">
                    {room.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#221F1E]/60 italic">
                    &ldquo;{room.tagline}&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm text-[#221F1E]/80 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Complimentary Inclusions */}
                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#C35A38] mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Complimentary Inclusions
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#221F1E]/85">
                      {room.inclusions.map((inc, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#4A5B4E] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Room Amenities */}
                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#221F1E]/60 mb-2">
                      Key Amenities
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {room.amenities.map((amenity, i) => (
                        <span
                          key={i}
                          className="bg-[#FAF7F2] border border-[#E8E2D8] px-2.5 py-1 rounded-md text-[11px] text-[#221F1E]/80 font-medium"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action / Price Bar */}
                <div className="pt-6 border-t border-[#F1EDE4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#221F1E]/60 font-medium">
                      Starting Rate
                    </span>
                    <span className="font-serif text-2xl font-bold text-[#C35A38]">
                      ₹{room.startingPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-[#221F1E]/60"> / night + taxes</span>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => openInquiry(room.id)}
                      className="flex-1 sm:flex-none bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs px-6 py-3 rounded-full transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Check Dates on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 4. STAY PERKS & HOUSE POLICIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#E8E2D8] rounded-3xl p-8 sm:p-12">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4A5B4E]">
              Guest Care & House Rules
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#221F1E]">
              Booking Information & Guidelines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E2D8] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F7ECE8] text-[#C35A38] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#221F1E]">
                Timings & Front Desk
              </h4>
              <p className="text-xs text-[#221F1E]/75 leading-relaxed">
                Check-in is from <strong>02:00 PM</strong> onwards. Check-out is until <strong>11:00 AM</strong>. Early check-in or late check-out is subject to availability and can be requested directly on WhatsApp.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E2D8] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F7ECE8] text-[#C35A38] flex items-center justify-center">
                <Coffee className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#221F1E]">
                Artisan Breakfast Included
              </h4>
              <p className="text-xs text-[#221F1E]/75 leading-relaxed">
                All confirmed room bookings include complimentary breakfast at our cafe between <strong>07:30 AM – 11:00 AM</strong>, including specialty coffee, fresh bakery baskets, and choice of farm brunch mains.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E2D8] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F7ECE8] text-[#C35A38] flex items-center justify-center">
                <Dog className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#221F1E]">
                Pet-Friendly Cottages
              </h4>
              <p className="text-xs text-[#221F1E]/75 leading-relaxed">
                Our standalone <strong>Garden Cottage Villas</strong> welcome friendly pets. We provide pet food bowls and fresh bedding upon request. Please inform our desk during WhatsApp booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FLOATING BOTTOM INQUIRY MODAL */}
      <RoomInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedRoomId={selectedRoomId}
      />
    </div>
  );
}
