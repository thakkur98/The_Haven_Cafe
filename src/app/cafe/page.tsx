"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Coffee,
  Sparkles,
  Wifi,
  Laptop,
  MessageSquare,
  Music2,
  Clock,
  Car,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function CafePage() {
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
            The Local Roost Cafe
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

      {/* 3. CAFE EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4A5B4E]">
            A Feel-Good Cafe Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#221F1E]">
            Come for the mood, stay for the moments
          </h2>
          <p className="text-xs sm:text-sm text-[#221F1E]/70">
            Our opening menu is being shaped around slow mornings, refreshing evenings, and easy conversations by the pool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: Coffee, title: "Signature Drinks", text: "Specialty coffee, chilled pours, refreshing coolers, and comforting cups made for long, easy afternoons." },
            { icon: Sparkles, title: "Cocktails & Evening Sips", text: "Thoughtful cocktails, zero-proof options, and relaxed sundowner moments as the property lights up." },
            { icon: Music2, title: "Live Music & Good Energy", text: "Unwind with acoustic evenings, gentle playlists, friendly conversations, and memorable stays by the pool." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white border border-[#E8E2D8] rounded-2xl p-6 space-y-3 shadow-2xs">
              <Icon className="w-7 h-7 text-[#C35A38]" />
              <h3 className="font-serif text-xl font-bold text-[#221F1E]">{title}</h3>
              <p className="text-xs text-[#221F1E]/70 leading-relaxed">{text}</p>
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

    </div>
  );
}
