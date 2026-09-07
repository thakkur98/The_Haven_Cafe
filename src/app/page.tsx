"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Coffee,
  BedDouble,
  Sparkles,
  Wifi,
  Trees,
  Sun,
  Star,
  ArrowRight,
  ShieldCheck,
  Calendar,
  MessageSquare,
  Waves,
  Car,
} from "lucide-react";
import { QuickAvailabilityBar } from "@/components/forms/QuickAvailabilityBar";
import { RoomInquiryModal } from "@/components/forms/RoomInquiryModal";
import { TableReservationModal } from "@/components/forms/TableReservationModal";
import { ComingSoonModal } from "@/components/common/ComingSoonModal";
import { roomsData } from "@/data/rooms";
import { siteConfig } from "@/data/siteConfig";

export default function HomePage() {
  const [roomModalOpen, setRoomModalOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>();
  const [tableModalOpen, setTableModalOpen] = useState(false);
  const [comingSoonOpen, setComingSoonOpen] = useState(false);
  const [comingSoonTitle, setComingSoonTitle] = useState("Seasonal Cafe Menu");

  const openRoomModal = (roomId?: string) => {
    setSelectedRoomId(roomId);
    setRoomModalOpen(true);
  };

  const openComingSoon = (title: string) => {
    setComingSoonTitle(title);
    setComingSoonOpen(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-8 pb-14 text-center overflow-hidden">
        {/* Real Property Photo Hero */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/images/resort-hero.jpg"
            alt="The Local Roost Cafe & Stay Front Facade"
            fill
            priority
            className="object-cover object-center brightness-[0.82]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#221F1E]/75 via-[#221F1E]/45 to-[#FAF7F2]"></div>
        </div>

        {/* Hero Copy */}
        <div className="max-w-4xl mx-auto pt-10 sm:pt-16 space-y-6 text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
            <span>Jim Corbett, Uttarakhand • 15 All-Pool-View Rooms</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            The Local Roost <br />
            <span className="italic font-normal text-[#D4A373]">Cafe & Stay</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-white/90 font-light leading-relaxed">
            Escape to the foothills of Jim Corbett. Unwind in 15 boutique pool-view rooms, take a dip in our sparkling swimming pool, enjoy artisan bakes and coffee at our stone-built cafe, and relax on our green courtyard lawn.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => openRoomModal()}
              className="w-full sm:w-auto bg-[#C35A38] hover:bg-[#A84A2C] text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <BedDouble className="w-4 h-4" />
              <span>Inquire Stay on WhatsApp</span>
            </button>
            <button
              onClick={() => openComingSoon("The Local Roost Cafe Menu")}
              className="w-full sm:w-auto bg-white/90 hover:bg-white text-[#221F1E] font-semibold text-sm px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Coffee className="w-4 h-4 text-[#C35A38]" />
              <span>The Cafe & Menu (Coming Soon)</span>
            </button>
          </div>
        </div>

        {/* Floating Quick Availability Bar */}
        <div className="w-full pt-10 sm:pt-14">
          <QuickAvailabilityBar />
        </div>
      </section>

      {/* 2. THE THREE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C35A38]">
            Experience The Local Roost
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#221F1E]">
            A Secluded Haven in Ramnagar, Jim Corbett
          </h2>
          <p className="text-xs sm:text-sm text-[#221F1E]/70">
            Conveniently located near Corbett Wild Flower Resort and Spa, surrounded by mountain air and peaceful village trails.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: 15 Pool View Rooms */}
          <div className="bg-[#F1EDE4] rounded-3xl overflow-hidden border border-[#E8E2D8] hover:shadow-xl transition-all group flex flex-col justify-between">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src="/images/room-pool-view.jpg"
                alt="15 Deluxe Pool View Rooms"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#221F1E] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
                <BedDouble className="w-3.5 h-3.5 text-[#C35A38]" />
                <span>15 Rooms • All Pool View</span>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#221F1E]">
                  Deluxe Pool View Rooms
                </h3>
                <p className="text-xs sm:text-sm text-[#221F1E]/75 mt-2 leading-relaxed">
                  Every single room opens directly to stunning views of our swimming pool and lawn. Modern warm interiors, plush bedding, silent AC, and private sit-out balconies.
                </p>
              </div>
              <div className="pt-2 flex items-center justify-between border-t border-[#E8E2D8]/60">
                <span className="text-xs font-semibold text-[#4A5B4E]">Opening Rates: Coming Soon</span>
                <Link
                  href="/rooms"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C35A38] group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore Rooms</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pillar 2: Swimming Pool & Lawn */}
          <div className="bg-[#F1EDE4] rounded-3xl overflow-hidden border border-[#E8E2D8] hover:shadow-xl transition-all group flex flex-col justify-between">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src="/images/pool-courtyard.jpg"
                alt="Swimming Pool and Courtyard Lawn"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#221F1E] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
                <Waves className="w-3.5 h-3.5 text-[#C35A38]" />
                <span>Pool & Lawn</span>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#221F1E]">
                  Swimming Pool & Courtyard
                </h3>
                <p className="text-xs sm:text-sm text-[#221F1E]/75 mt-2 leading-relaxed">
                  Dip into our crystal-clear outdoor swimming pool with submerged lighting. Lounge on the green manicured lawn or gather for an evening bonfire under starry skies.
                </p>
              </div>
              <div className="pt-2 flex items-center justify-between border-t border-[#E8E2D8]/60">
                <span className="text-xs font-semibold text-[#4A5B4E]">Pool Access Included</span>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C35A38] group-hover:translate-x-1 transition-transform"
                >
                  <span>View Photos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pillar 3: The Artisan Cafe */}
          <div className="bg-[#F1EDE4] rounded-3xl overflow-hidden border border-[#E8E2D8] hover:shadow-xl transition-all group flex flex-col justify-between">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src="/images/resort-hero.jpg"
                alt="The Local Roost Cafe"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#221F1E] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5 text-[#C35A38]" />
                <span>The Cafe</span>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#221F1E]">
                  The Local Roost Cafe
                </h3>
                <p className="text-xs sm:text-sm text-[#221F1E]/75 mt-2 leading-relaxed">
                  Our grand stone facade cafe serves aromatic coffees, fresh refreshments, and regional bites. A warm hangout with ample parking for road trips and stay guests.
                </p>
              </div>
              <div className="pt-2 flex items-center justify-between border-t border-[#E8E2D8]/60">
                <span className="text-xs font-semibold text-[#4A5B4E]">Open Daily 7:30 AM</span>
                <button
                  onClick={() => openComingSoon("The Local Roost Menu")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C35A38] group-hover:translate-x-1 transition-transform"
                >
                  <span>Menu (Coming Soon)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED ROOMS SHOWCASE */}
      <section className="bg-[#F1EDE4]/70 py-16 sm:py-20 border-y border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C35A38]">
                Accommodations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#221F1E] mt-1">
                15 Rooms • 100% Pool View
              </h2>
              <p className="text-xs sm:text-sm text-[#221F1E]/70 max-w-xl mt-2">
                No matter which room you book, you wake up to the view of our sparkling swimming pool, green lawn, and Jim Corbett morning breezes.
              </p>
            </div>
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 bg-[#221F1E] hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-all self-start md:self-auto"
            >
              <span>View Room Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roomsData.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#E8E2D8] flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full">
                    <Image
                      src={room.images[0]}
                      alt={room.name}
                      fill
                      className="object-cover"
                    />
                    {room.badge && (
                      <span className="absolute top-3 right-3 bg-[#221F1E]/80 backdrop-blur-xs text-[#D4A373] text-[11px] font-bold px-3 py-1 rounded-full">
                        {room.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center text-xs text-[#4A5B4E] font-medium">
                      <span>{room.capacity}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#221F1E]">
                      {room.name}
                    </h3>
                    <p className="text-xs text-[#221F1E]/75 line-clamp-2 leading-relaxed">
                      {room.description}
                    </p>
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {room.amenities.slice(0, 3).map((a, i) => (
                        <span
                          key={i}
                          className="bg-[#FAF7F2] text-[#221F1E]/70 text-[10px] font-medium px-2 py-0.5 rounded-md border border-[#E8E2D8]"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#F1EDE4] mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#221F1E]/60 block uppercase">
                      Opening Rates
                    </span>
                    <span className="font-serif text-lg font-bold text-[#C35A38]">
                      Coming Soon
                    </span>
                  </div>
                  <button
                    onClick={() => openRoomModal(room.id)}
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all shadow-xs flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. KEY RESORT AMENITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#E8E2D8] rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4A5B4E]">
              Property Features
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#221F1E]">
              Everything for a Relaxing Corbett Getaway
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8]/60 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#F7ECE8] text-[#C35A38] flex items-center justify-center mx-auto">
                <Waves className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-xs text-[#221F1E]">Swimming Pool</h4>
              <p className="text-[10px] text-[#221F1E]/60">All 15 rooms pool-view</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8]/60 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#F7ECE8] text-[#C35A38] flex items-center justify-center mx-auto">
                <Coffee className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-xs text-[#221F1E]">The Roost Cafe</h4>
              <p className="text-[10px] text-[#221F1E]/60">Artisan stone facade</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8]/60 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#F7ECE8] text-[#C35A38] flex items-center justify-center mx-auto">
                <Trees className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-xs text-[#221F1E]">Courtyard Lawn</h4>
              <p className="text-[10px] text-[#221F1E]/60">Open-air relaxation</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8]/60 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#F7ECE8] text-[#C35A38] flex items-center justify-center mx-auto">
                <Car className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-xs text-[#221F1E]">Free Parking</h4>
              <p className="text-[10px] text-[#221F1E]/60">Spacious secure parking</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8]/60 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#F7ECE8] text-[#C35A38] flex items-center justify-center mx-auto">
                <Wifi className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-xs text-[#221F1E]">Free Wi-Fi</h4>
              <p className="text-[10px] text-[#221F1E]/60">High-speed connectivity</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8]/60 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#F7ECE8] text-[#C35A38] flex items-center justify-center mx-auto">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-xs text-[#221F1E]">24/7 Reception</h4>
              <p className="text-[10px] text-[#221F1E]/60">On-site host support</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCATION & LANDMARK CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#221F1E] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#D4A373] font-bold">
              Prime Jim Corbett Location
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Near Corbett Wild Flower Resort And Spa
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl">
              {siteConfig.address}. Easy drive from Ramnagar railway station and safari entry gates with ample car parking space on premises.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C35A38] hover:bg-[#A84A2C] text-white text-xs font-semibold px-6 py-3.5 rounded-full text-center transition-all shadow-md"
            >
              Open in Google Maps
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20The%20Local%20Roost%2C%20I%20am%20driving%20to%20your%20property%20and%20need%20directions.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-6 py-3.5 rounded-full text-center border border-white/20 transition-all"
            >
              Ask Directions on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 6. PHOTO GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C35A38]">
              Resort Visuals
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#221F1E]">
              Glimpses of The Local Roost
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-xs font-semibold text-[#4A5B4E] hover:underline"
          >
            View Full Resort Gallery →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative h-64 rounded-2xl overflow-hidden group border border-[#E8E2D8]">
            <Image
              src="/images/resort-hero.jpg"
              alt="The Local Roost facade"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-sm">
              Cafe Facade
            </span>
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden group border border-[#E8E2D8]">
            <Image
              src="/images/pool-courtyard.jpg"
              alt="Pool and 15 rooms"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-sm">
              Pool & 15 Rooms
            </span>
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden group border border-[#E8E2D8]">
            <Image
              src="/images/room-pool-view.jpg"
              alt="Deluxe Room Interior"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-sm">
              Deluxe Room
            </span>
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden group border border-[#E8E2D8]">
            <Image
              src="/images/exterior-courtyard.jpg"
              alt="Courtyard and parking"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-sm">
              Courtyard & Parking
            </span>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#C35A38] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#FAF7F2]/80 font-bold">
              Direct Host Booking
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Plan Your Stay at The Local Roost
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-lg">
              Speak directly with our front desk on WhatsApp ({siteConfig.phone}) to check dates, reserve pool-view rooms, or organize Corbett safari packages.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20The%20Local%20Roost%2C%20I%20would%20like%20to%20inquire%20about%20room%20availability.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-[#FAF7F2] text-[#C35A38] font-bold text-xs px-6 py-3.5 rounded-full text-center shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => openRoomModal()}
              className="bg-[#221F1E] hover:bg-black text-white font-bold text-xs px-6 py-3.5 rounded-full text-center shadow-md transition-all flex items-center justify-center gap-2"
            >
              <BedDouble className="w-4 h-4 text-[#D4A373]" />
              <span>Inquire 15 Pool Rooms</span>
            </button>
          </div>
        </div>
      </section>

      {/* MODALS */}
      <RoomInquiryModal
        isOpen={roomModalOpen}
        onClose={() => setRoomModalOpen(false)}
        selectedRoomId={selectedRoomId}
      />
      <TableReservationModal
        isOpen={tableModalOpen}
        onClose={() => setTableModalOpen(false)}
      />
      <ComingSoonModal
        isOpen={comingSoonOpen}
        onClose={() => setComingSoonOpen(false)}
        title={comingSoonTitle}
      />
    </div>
  );
}
