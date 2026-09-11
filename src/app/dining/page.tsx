"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  UtensilsCrossed,
  Sparkles,
  Calendar,
  Clock,
  Wine,
  Flame,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { diningMenuCategories } from "@/data/menus";
import { TableReservationModal } from "@/components/forms/TableReservationModal";
import { siteConfig } from "@/data/siteConfig";

export default function DiningPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* 1. HERO HEADER */}
      <section className="relative py-16 sm:py-24 bg-[#221F1E] text-white px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80"
            alt="Candlelit Dining Room"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
            Wood-Fire & Terroir Cuisine
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold">
            The Dining Room
          </h1>
          <p className="text-xs sm:text-base text-white/80 font-light max-w-xl mx-auto leading-relaxed">
            Slow-cooked regional delicacies, fresh garden herbs, artisanal cheeses, and open charcoal grills served in our romantic garden courtyard or air-conditioned dining lounge.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#C35A38] hover:bg-[#A84A2C] text-white font-semibold text-xs px-7 py-3.5 rounded-full shadow-lg transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Table on WhatsApp</span>
            </button>
            <span className="text-xs text-white/70">
              Lunch: 12:30 PM – 3:30 PM • Dinner: 7:00 PM – 11:30 PM
            </span>
          </div>
        </div>
      </section>

      {/* 2. CHEF'S CULINARY PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C35A38]">
              Terroir & Technique
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#221F1E]">
              Honest Ingredients, Elevated with Fire
            </h2>
            <p className="text-xs sm:text-sm text-[#221F1E]/80 leading-relaxed">
              Our kitchen is guided by seasonality and respect for local growers. We make our ricotta fresh in-house, roll handmade pasta daily, and braise heritage cuts over low wood embers for up to 12 hours.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F1EDE4] space-y-1">
                <Flame className="w-5 h-5 text-[#C35A38]" />
                <h4 className="font-bold text-xs text-[#221F1E]">Wood-Fired Grills</h4>
                <p className="text-[11px] text-[#221F1E]/70">
                  Smoked over local tamarind & applewood charcoal.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F1EDE4] space-y-1">
                <Sparkles className="w-5 h-5 text-[#C35A38]" />
                <h4 className="font-bold text-xs text-[#221F1E]">Estate Herb Garden</h4>
                <p className="text-[11px] text-[#221F1E]/70">
                  Rosemary, edible flowers & mint picked minutes before plating.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
              alt="Slow braised culinary plate"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. DINING EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4A5B4E]">
            A Table Worth Gathering Around
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#221F1E]">
            Drinks, Dinner & Live Evenings
          </h2>
          <p className="text-xs sm:text-sm text-[#221F1E]/70">
            Expect expressive drinks, seasonal plates, cocktails, and live music in an atmosphere designed for unhurried celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: Wine, title: "Cocktails & Sundowners", text: "Bright, easy-drinking cocktails and thoughtful zero-proof pours for golden-hour conversations." },
            { icon: UtensilsCrossed, title: "Seasonal Dinner Plates", text: "A changing kitchen shaped by local ingredients, comforting flavours, and generous table sharing." },
            { icon: Sparkles, title: "Live Music Evenings", text: "Settle in for acoustic sets, warm service, and a dining room that feels lively without feeling loud." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white border border-[#E8E2D8] rounded-2xl p-6 space-y-3 shadow-2xs">
              <Icon className="w-7 h-7 text-[#C35A38]" />
              <h3 className="font-serif text-xl font-bold text-[#221F1E]">{title}</h3>
              <p className="text-xs text-[#221F1E]/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. RESERVATION CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#221F1E] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#D4A373] font-bold">
              Guaranteed Seating
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Planning a Romantic Dinner or Group Feast?
            </h3>
            <p className="text-xs sm:text-sm text-white/75 max-w-lg">
              We seat a limited number of guests each evening to maintain an unhurried, intimate dining tempo. Weekend reservations are recommended 24 hours in advance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs px-7 py-3.5 rounded-full text-center shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book Table via WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <TableReservationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultVenue="dining"
      />
    </div>
  );
}
