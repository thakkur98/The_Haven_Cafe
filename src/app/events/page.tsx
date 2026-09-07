"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Users,
  Calendar,
  PartyPopper,
  BedDouble,
  Utensils,
  MessageSquare,
  Check,
  PhoneCall,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function EventsPage() {
  const [eventType, setEventType] = useState("Birthday / Anniversary Celebration");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("20 - 40 Guests");
  const [stayNeeded, setStayNeeded] = useState("Yes, we also need rooms");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = `🥂 *PRIVATE EVENT & GATHERING INQUIRY - THE HAVEN*
----------------------------------------
👤 *Host / Organizer:* ${name || "Guest"}
📱 *Phone:* ${phone || "Not provided"}
🎉 *Event Type:* ${eventType}
📅 *Tentative Date:* ${date || "To be discussed"}
👥 *Expected Guests:* ${guests}
🛏️ *Accommodation Needed:* ${stayNeeded}
${notes ? `📝 *Custom Requirements:* ${notes}` : ""}
----------------------------------------
Hi The Haven Events Team, please share venue availability, packages, and custom catering quotes!`;

    const encoded = encodeURIComponent(msg);
    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
  };

  const spaces = [
    {
      title: "The Botanical Garden Courtyard",
      capacity: "Up to 80 Guests",
      ideal: "Alfresco dinner parties, cocktail evenings, live acoustic nights",
      desc: "An enchanting stone-paved courtyard sheltered by old mango trees and fragrant flowering frangipani. Illuminated by fairy lights and our central stone firepit.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "The Glass Dining Conservatory",
      capacity: "Up to 35 Guests",
      ideal: "Intimate birthdays, formal sit-down luncheons, family reunions",
      desc: "Floor-to-ceiling glass looking out into the lush garden. Climate controlled with bespoke banquet tables, hand-blown glassware, and curated playlists.",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Complete Property Buyout",
      capacity: "25+ Overnight Guests & 100 Day Guests",
      ideal: "Micro-weddings, founders' retreats, multi-day creative workshops",
      desc: "Total exclusivity. All 8 boutique suites, complete private access to the cafe & bakery, full kitchen team dedicated to your customized menus.",
      image: "/images/pool-courtyard.jpg",
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* 1. HERO HEADER */}
      <section className="relative py-16 sm:py-24 bg-[#221F1E] text-white px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80"
            alt="Intimate celebration"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
            Unforgettable Gatherings
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold">
            Private Events & Retreats
          </h1>
          <p className="text-xs sm:text-base text-white/80 font-light max-w-xl mx-auto leading-relaxed">
            From intimate candlelit birthdays to complete property buyouts for creative leadership summits. Tailored multi-course dining, artisanal bakes, and peaceful accommodation.
          </p>
        </div>
      </section>

      {/* 2. VENUE SPACES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C35A38]">
            Curated Settings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#221F1E]">
            Our Event Spaces
          </h2>
          <p className="text-xs sm:text-sm text-[#221F1E]/70">
            Versatile indoor and outdoor environments designed for meaningful connection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spaces.map((space, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 w-full">
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#221F1E]/80 backdrop-blur-xs text-[#D4A373] text-xs font-bold px-3 py-1 rounded-full">
                    {space.capacity}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[#221F1E]">
                    {space.title}
                  </h3>
                  <p className="text-xs text-[#C35A38] font-semibold">
                    Ideal for: {space.ideal}
                  </p>
                  <p className="text-xs text-[#221F1E]/75 leading-relaxed">
                    {space.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20The%20Haven%2C%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(
                    space.title
                  )}%20for%20an%20event.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#FAF7F2] hover:bg-[#C35A38] text-[#221F1E] hover:text-white border border-[#E8E2D8] hover:border-[#C35A38] text-xs font-semibold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#C35A38] group-hover:text-white" />
                  <span>Inquire This Space</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EVENT INQUIRY FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8E2D8] shadow-lg">
          <div className="text-center max-w-lg mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4A5B4E]">
              Custom Proposal
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#221F1E]">
              Request an Event Quote
            </h2>
            <p className="text-xs sm:text-sm text-[#221F1E]/70">
              Tell us about your upcoming celebration or gathering. We will prepare a custom proposal with catering and stay options.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#221F1E]">
                Inquiry Sent to WhatsApp!
              </h4>
              <p className="text-xs sm:text-sm text-[#221F1E]/75 max-w-sm mx-auto">
                Your event specifications have been sent. Our private dining and events manager will connect with you right away.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 bg-[#221F1E] text-white rounded-xl text-xs font-semibold hover:bg-black"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-1">
                    Event Type
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-xl px-3.5 py-2.5 text-xs text-[#221F1E]"
                  >
                    <option value="Birthday / Anniversary Celebration">
                      Birthday / Anniversary Celebration
                    </option>
                    <option value="Intimate Wedding / Engagement">
                      Intimate Wedding / Engagement
                    </option>
                    <option value="Corporate / Leadership Retreat">
                      Corporate / Leadership Retreat
                    </option>
                    <option value="Creative Workshop / Yoga Session">
                      Creative Workshop / Yoga Session
                    </option>
                    <option value="Editorial Photo / Film Shoot">
                      Editorial Photo / Film Shoot
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-1">
                    Tentative Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-xl px-3.5 py-2 text-xs text-[#221F1E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-1">
                    Estimated Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-xl px-3.5 py-2.5 text-xs text-[#221F1E]"
                  >
                    <option value="10 - 20 Guests">10 - 20 Guests</option>
                    <option value="20 - 40 Guests">20 - 40 Guests</option>
                    <option value="40 - 70 Guests">40 - 70 Guests</option>
                    <option value="70 - 100+ Guests">70 - 100+ Guests</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-1">
                    Do you need room stays?
                  </label>
                  <select
                    value={stayNeeded}
                    onChange={(e) => setStayNeeded(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-xl px-3.5 py-2.5 text-xs text-[#221F1E]"
                  >
                    <option value="Yes, we also need rooms">
                      Yes, need boutique rooms
                    </option>
                    <option value="No, dining/event only">
                      No, dining/event only
                    </option>
                    <option value="Full property buyout">
                      Full property buyout (Rooms + Dining)
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-1">
                    Organizer Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-xl px-3.5 py-2.5 text-xs text-[#221F1E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your WhatsApp number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-xl px-3.5 py-2.5 text-xs text-[#221F1E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-1">
                  Custom Preferences / Catering Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about special dietary needs, live music wishes, floral setups, or custom bakery cakes..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-xl px-3.5 py-2 text-xs text-[#221F1E]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Event Inquiry via WhatsApp</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
