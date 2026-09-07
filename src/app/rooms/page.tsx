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
  Clock,
  Waves,
  Car,
  Wifi,
} from "lucide-react";
import { roomsData, Room } from "@/data/rooms";
import { RoomInquiryModal } from "@/components/forms/RoomInquiryModal";
import { siteConfig } from "@/data/siteConfig";

export default function RoomsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>();

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
            src="/images/pool-courtyard.jpg"
            alt="The Local Roost Swimming Pool and Rooms"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
            15 Boutique Rooms • 100% Pool View
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold">
            Deluxe Pool View Rooms
          </h1>
          <p className="text-xs sm:text-base text-white/80 font-light max-w-xl mx-auto leading-relaxed">
            Every single room at The Local Roost overlooks our sparkling outdoor swimming pool and lush courtyard lawn. Complete with private sit-out balconies, king bedding, and free cafe breakfast.
          </p>
        </div>
      </section>

      {/* 2. HIGHLIGHT BANNER: 15 POOL-VIEW ROOMS GUARANTEE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F1EDE4] rounded-3xl p-6 sm:p-8 border border-[#E8E2D8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#C35A38] text-white flex items-center justify-center shrink-0">
              <Waves className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#221F1E]">
                All 15 Rooms Offer Swimming Pool Views
              </h3>
              <p className="text-xs text-[#221F1E]/75 mt-0.5">
                Whether choosing ground floor pool patios or first floor balconies, you enjoy panoramic poolside views and fresh Jim Corbett air.
              </p>
            </div>
          </div>
          <button
            onClick={() => openInquiry("deluxe-pool-view-room")}
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs px-6 py-3 rounded-full transition-all shadow-md flex items-center gap-2 shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Check Dates (+91 79003 45101)</span>
          </button>
        </div>
      </section>

      {/* 3. DETAILED ROOMS LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {roomsData.map((room, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={room.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-sm hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Images Grid */}
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
                  <span className="absolute top-4 left-4 bg-[#221F1E]/85 backdrop-blur-xs text-[#D4A373] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    {room.badge}
                  </span>
                )}
                {/* Secondary Image Thumbnail */}
                {room.images.length > 1 && (
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    {room.images.slice(1, 3).map((img, i) => (
                      <div
                        key={i}
                        className="relative w-20 h-16 rounded-xl overflow-hidden border-2 border-white shadow-md"
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

                  {/* Inclusions */}
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
                      Amenities
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
                      <span>Inquire on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 4. POLICIES & GUIDELINES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#E8E2D8] rounded-3xl p-8 sm:p-12">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4A5B4E]">
              Guest Care & Guidelines
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#221F1E]">
              Stay Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E2D8] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F7ECE8] text-[#C35A38] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#221F1E]">
                Check-in & Check-out
              </h4>
              <p className="text-xs text-[#221F1E]/75 leading-relaxed">
                Check-in is from <strong>01:00 PM</strong> onwards. Check-out is until <strong>11:00 AM</strong>. Early check-in or late check-out is subject to availability and can be requested via WhatsApp.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E2D8] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F7ECE8] text-[#C35A38] flex items-center justify-center">
                <Waves className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#221F1E]">
                Swimming Pool Rules
              </h4>
              <p className="text-xs text-[#221F1E]/75 leading-relaxed">
                The outdoor swimming pool is open from <strong>07:00 AM – 08:00 PM</strong> daily. Proper swimwear is required. Complimentary pool towels are provided.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E2D8] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F7ECE8] text-[#C35A38] flex items-center justify-center">
                <Car className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#221F1E]">
                Parking & Wi-Fi
              </h4>
              <p className="text-xs text-[#221F1E]/75 leading-relaxed">
                Spacious dedicated parking on premises for cars and SUVs. High-speed free Wi-Fi is available across all rooms, cafe, and pool courtyard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <RoomInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedRoomId={selectedRoomId}
      />
    </div>
  );
}
