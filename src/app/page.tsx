"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Coffee,
  BedDouble,
  UtensilsCrossed,
  Sparkles,
  Wifi,
  Trees,
  Sun,
  Star,
  ArrowRight,
  ShieldCheck,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { QuickAvailabilityBar } from "@/components/forms/QuickAvailabilityBar";
import { RoomInquiryModal } from "@/components/forms/RoomInquiryModal";
import { TableReservationModal } from "@/components/forms/TableReservationModal";
import { roomsData } from "@/data/rooms";
import { siteConfig } from "@/data/siteConfig";

export default function HomePage() {
  const [roomModalOpen, setRoomModalOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>();
  const [tableModalOpen, setTableModalOpen] = useState(false);

  const openRoomModal = (roomId?: string) => {
    setSelectedRoomId(roomId);
    setRoomModalOpen(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-center overflow-hidden">
        {/* Ambient Background Image with Overlay */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
            alt="The Haven Retreat Ambiance"
            fill
            priority
            className="object-cover object-center scale-105 transform brightness-[0.88]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#221F1E]/60 via-[#221F1E]/40 to-[#FAF7F2]"></div>
        </div>

        {/* Hero Copy */}
        <div className="max-w-4xl mx-auto pt-12 sm:pt-20 space-y-6 text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
            <span>Artisan Roastery • Gourmet Dining • Boutique Stay</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Where Culinary Craft <br />
            <span className="italic font-normal text-[#D4A373]">Meets Restful Retreat</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-lg text-white/90 font-light leading-relaxed">
            Slow down in our secluded sanctuary. Wake up to single-origin pour-overs, spend afternoons in our leafy botanical cafe, and dine under candlelit canopies before retreating to artisan suites.
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
              onClick={() => setTableModalOpen(true)}
              className="w-full sm:w-auto bg-white/90 hover:bg-white text-[#221F1E] font-semibold text-sm px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <UtensilsCrossed className="w-4 h-4 text-[#C35A38]" />
              <span>Reserve Dining Table</span>
            </button>
          </div>
        </div>

        {/* Floating Quick Availability Bar */}
        <div className="w-full pt-12 sm:pt-16">
          <QuickAvailabilityBar />
        </div>
      </section>

      {/* 2. THE THREE PILLARS (STAY, SIP, DINE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C35A38]">
            The Three Pillars of The Haven
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#221F1E]">
            A Thoughtful Harmony of Life & Leisure
          </h2>
          <p className="text-sm text-[#221F1E]/70">
            Whether dropping by for a morning espresso, a four-course anniversary dinner, or a week-long creative retreat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Stay */}
          <div className="bg-[#F1EDE4] rounded-3xl overflow-hidden border border-[#E8E2D8] hover:shadow-xl transition-all group flex flex-col justify-between">
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
                alt="Boutique Room"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#221F1E] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
                <BedDouble className="w-3.5 h-3.5 text-[#C35A38]" />
                <span>Boutique Stay</span>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#221F1E]">
                  Sanctuary Suites & Villas
                </h3>
                <p className="text-xs sm:text-sm text-[#221F1E]/75 mt-2 leading-relaxed">
                  Only 8 curated rooms crafted with reclaimed teak, open rain showers, and private forest balconies. Complimentary cafe breakfast included every morning.
                </p>
              </div>
              <div className="pt-2 flex items-center justify-between border-t border-[#E8E2D8]/60">
                <span className="text-xs font-semibold text-[#4A5B4E]">From ₹3,900 / night</span>
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

          {/* Pillar 2: Cafe */}
          <div className="bg-[#F1EDE4] rounded-3xl overflow-hidden border border-[#E8E2D8] hover:shadow-xl transition-all group flex flex-col justify-between">
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
                alt="Artisan Cafe"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#221F1E] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5 text-[#C35A38]" />
                <span>The Cafe & Bakery</span>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#221F1E]">
                  Single-Origin & Wild Ferment
                </h3>
                <p className="text-xs sm:text-sm text-[#221F1E]/75 mt-2 leading-relaxed">
                  Freshly ground Arabica, precision manual brews, flaky twice-baked almond croissants, and tranquil sunny workspaces with high-speed fiber Wi-Fi.
                </p>
              </div>
              <div className="pt-2 flex items-center justify-between border-t border-[#E8E2D8]/60">
                <span className="text-xs font-semibold text-[#4A5B4E]">Opens 07:30 AM Daily</span>
                <Link
                  href="/cafe"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C35A38] group-hover:translate-x-1 transition-transform"
                >
                  <span>View Cafe Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pillar 3: Dining */}
          <div className="bg-[#F1EDE4] rounded-3xl overflow-hidden border border-[#E8E2D8] hover:shadow-xl transition-all group flex flex-col justify-between">
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Dining Room"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#221F1E] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#C35A38]" />
                <span>Gourmet Dining Room</span>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#221F1E]">
                  Wood-Fire & Terroir Plates
                </h3>
                <p className="text-xs sm:text-sm text-[#221F1E]/75 mt-2 leading-relaxed">
                  Seasonal dinner menus celebrating organic ingredients. Handmade pasta, slow-braised cuts, and wood-charred seafood paired with house botanicals.
                </p>
              </div>
              <div className="pt-2 flex items-center justify-between border-t border-[#E8E2D8]/60">
                <span className="text-xs font-semibold text-[#4A5B4E]">Lunch & Dinner</span>
                <Link
                  href="/dining"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C35A38] group-hover:translate-x-1 transition-transform"
                >
                  <span>View Dining Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
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
                Boutique Living
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#221F1E] mt-1">
                Curated Spaces for Slow Living
              </h2>
              <p className="text-xs sm:text-sm text-[#221F1E]/70 max-w-xl mt-2">
                Every room includes our complimentary artisan cafe breakfast, single-origin pour-over kit, high-speed fiber Wi-Fi, and organic botanical bath amenities.
              </p>
            </div>
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 bg-[#221F1E] hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-all self-start md:self-auto"
            >
              <span>View All 4 Room Types</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roomsData.slice(0, 3).map((room) => (
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
                    <div className="flex items-center justify-between text-xs text-[#4A5B4E] font-medium">
                      <span>{room.size}</span>
                      <span>•</span>
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
                    <span className="text-[10px] text-[#221F1E]/60 block uppercase">Starting from</span>
                    <span className="font-serif text-lg font-bold text-[#C35A38]">
                      ₹{room.startingPrice.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-[#221F1E]/60"> / night</span>
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

      {/* 4. PROPERTY AMENITIES & CONVENIENCES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#E8E2D8] rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4A5B4E]">
              Thoughtful Amenities
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#221F1E]">
              Everything for a Seamless Stay
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8]/60 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#F7ECE8] text-[#C35A38] flex items-center justify-center mx-auto">
                <Coffee className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-xs text-[#221F1E]">Artisan Breakfast</h4>
              <p className="text-[10px] text-[#221F1E]/60">Complimentary at cafe</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8]/60 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#F7ECE8] text-[#C35A38] flex items-center justify-center mx-auto">
                <Wifi className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-xs text-[#221F1E]">High-Speed Fiber</h4>
              <p className="text-[10px] text-[#221F1E]/60">150+ Mbps everywhere</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8]/60 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#F7ECE8] text-[#C35A38] flex items-center justify-center mx-auto">
                <Trees className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-xs text-[#221F1E]">Botanical Gardens</h4>
              <p className="text-[10px] text-[#221F1E]/60">Outdoor seating & trail</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8]/60 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#F7ECE8] text-[#C35A38] flex items-center justify-center mx-auto">
                <Sun className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-xs text-[#221F1E]">Evening Bonfire</h4>
              <p className="text-[10px] text-[#221F1E]/60">Nightly acoustic hours</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8]/60 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#F7ECE8] text-[#C35A38] flex items-center justify-center mx-auto">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-xs text-[#221F1E]">24/7 Front Desk</h4>
              <p className="text-[10px] text-[#221F1E]/60">On-site team & security</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8]/60 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#F7ECE8] text-[#C35A38] flex items-center justify-center mx-auto">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-xs text-[#221F1E]">Pet Friendly</h4>
              <p className="text-[10px] text-[#221F1E]/60">In garden cottages</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GUEST REVIEWS & SOCIAL PROOF */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#221F1E] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2 text-[#D4A373]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D4A373]" />
              ))}
              <span className="text-xs font-semibold text-white ml-2">
                4.9 / 5 Rating on Google & TripAdvisor (650+ reviews)
              </span>
            </div>

            <blockquote className="font-serif text-xl sm:text-3xl font-light leading-relaxed italic text-white/95">
              &quot;The rare place that excels equally at specialty coffee, Michelin-caliber evening dining, and genuine boutique serenity. Waking up to fresh pour-overs on the forest balcony was sublime.&quot;
            </blockquote>

            <div className="pt-2">
              <p className="font-bold text-sm text-white">Ananya & Siddharth Verma</p>
              <p className="text-xs text-[#D4A373]">Stayed at The Canopy Balcony Suite • 3 Nights</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INSTAGRAM / VIBE GALLERY SNEAK-PEEK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C35A38]">
              Live The Experience
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#221F1E]">
              Moments at The Haven
            </h2>
          </div>
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#4A5B4E] hover:underline"
          >
            Follow @thehaven.retreat on Instagram →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-60 rounded-2xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80"
              alt="Cold brew coffee"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-60 rounded-2xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80"
              alt="Garden bathtub"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-60 rounded-2xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=600&q=80"
              alt="Burrata dining plate"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-60 rounded-2xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1525811902-f2342640856e?auto=format&fit=crop&w=600&q=80"
              alt="Courtyard bonfire"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#C35A38] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#FAF7F2]/80 font-bold">
              Direct Host Communication
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Plan Your Visit or Stay With Us
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-lg">
              No automated bots. Connect directly with our front desk or head chef on WhatsApp for custom dates, dietary menus, or special anniversary arrangements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20The%20Haven%2C%20I%20am%20planning%20a%20visit%20and%20would%20like%20to%20know%20more.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-[#FAF7F2] text-[#C35A38] font-bold text-xs px-6 py-3.5 rounded-full text-center shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Chat with Manager</span>
            </a>
            <button
              onClick={() => openRoomModal()}
              className="bg-[#221F1E] hover:bg-black text-white font-bold text-xs px-6 py-3.5 rounded-full text-center shadow-md transition-all flex items-center justify-center gap-2"
            >
              <BedDouble className="w-4 h-4 text-[#D4A373]" />
              <span>Inquire Room Rates</span>
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
    </div>
  );
}
