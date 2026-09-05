"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  ExternalLink,
  Car,
  Check,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Room Stay Inquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formatted = `💬 *DIRECT INQUIRY - THE HAVEN*
----------------------------------------
👤 *Name:* ${name || "Guest"}
📱 *Phone:* ${phone || "Not provided"}
✉️ *Email:* ${email || "Not provided"}
📌 *Inquiry Topic:* ${topic}
📝 *Message:*
${message || "Hi, I have an inquiry about The Haven."}
----------------------------------------`;

    const encoded = encodeURIComponent(formatted);
    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* 1. HERO HEADER */}
      <section className="relative py-16 sm:py-24 bg-[#221F1E] text-white px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
            We&apos;re Here For You
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold">
            Contact & Location
          </h1>
          <p className="text-xs sm:text-base text-white/80 font-light max-w-xl mx-auto leading-relaxed">
            Reach out directly to our hosts. Whether you have questions regarding room availability, table reservations, directions, or special arrangements.
          </p>
        </div>
      </section>

      {/* 2. HOURS MATRIX & DIRECT ACTION CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Phone & WhatsApp */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E2D8] shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 text-[#1b7a3d] flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-[#25D366]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#221F1E]">
                WhatsApp Direct Desk
              </h3>
              <p className="text-xs text-[#221F1E]/70 leading-relaxed">
                Fastest way to get room confirmations, menu recommendations, and immediate answers from our duty manager.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F1EDE4] space-y-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20The%20Haven%2C%20I%20have%20a%20question.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full bg-[#FAF7F2] hover:bg-[#F1EDE4] text-[#221F1E] text-xs font-semibold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 border border-[#E8E2D8]"
              >
                <Phone className="w-3.5 h-3.5 text-[#C35A38]" />
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>
          </div>

          {/* Card 2: Hours */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E2D8] shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F7ECE8] text-[#C35A38] flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#221F1E]">
                Operational Hours
              </h3>
              <div className="space-y-2.5 text-xs text-[#221F1E]/80">
                <div className="border-b border-[#F1EDE4] pb-2">
                  <span className="block font-semibold text-[#221F1E]">The Artisan Cafe & Bakery</span>
                  <span className="text-[#221F1E]/60">{siteConfig.hours.cafe}</span>
                </div>
                <div className="border-b border-[#F1EDE4] pb-2">
                  <span className="block font-semibold text-[#221F1E]">Gourmet Dining Room</span>
                  <span className="text-[#221F1E]/60">{siteConfig.hours.dining}</span>
                </div>
                <div>
                  <span className="block font-semibold text-[#221F1E]">Boutique Stay & Reception</span>
                  <span className="text-[#221F1E]/60">{siteConfig.hours.frontDesk}</span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-[#F1EDE4]">
              <span className="text-[11px] text-[#4A5B4E] font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Front desk is staffed 24 hours a day
              </span>
            </div>
          </div>

          {/* Card 3: Address & Directions */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E2D8] shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF0EC] text-[#4A5B4E] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#221F1E]">
                Property Location
              </h3>
              <p className="text-xs text-[#221F1E]/80 leading-relaxed">
                {siteConfig.address}
              </p>
              <div className="flex items-center gap-2 text-xs text-[#4A5B4E] pt-1">
                <Car className="w-4 h-4 text-[#C35A38]" />
                <span>Complimentary valet parking available on-site</span>
              </div>
            </div>
            <div className="pt-4 border-t border-[#F1EDE4]">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#221F1E] hover:bg-black text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INQUIRY FORM & MAP PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E2D8] shadow-sm">
            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C35A38]">
                Send an Inquiry
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#221F1E]">
                Leave Us a Message
              </h2>
              <p className="text-xs text-[#221F1E]/70">
                We will dispatch your message directly to our management team on WhatsApp.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#221F1E]">
                  Message Dispatched!
                </h4>
                <p className="text-xs text-[#221F1E]/75 max-w-sm mx-auto">
                  Your WhatsApp has opened with the formatted inquiry. Our team will assist you immediately.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 border border-[#C35A38] text-[#C35A38] rounded-xl text-xs font-semibold hover:bg-[#F7ECE8]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#221F1E]/80 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Liam Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-xl px-3.5 py-2.5 text-xs text-[#221F1E] focus:outline-hidden focus:ring-2 focus:ring-[#C35A38]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#221F1E]/80 mb-1">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-xl px-3.5 py-2.5 text-xs text-[#221F1E] focus:outline-hidden focus:ring-2 focus:ring-[#C35A38]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#221F1E]/80 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-xl px-3.5 py-2.5 text-xs text-[#221F1E] focus:outline-hidden focus:ring-2 focus:ring-[#C35A38]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#221F1E]/80 mb-1">
                      Inquiry Topic
                    </label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-xl px-3.5 py-2.5 text-xs text-[#221F1E]"
                    >
                      <option value="Room Stay Inquiry">Room Stay Inquiry</option>
                      <option value="Table Reservation">Table Reservation</option>
                      <option value="Private Event & Gathering">Private Event & Gathering</option>
                      <option value="Cafe Sourdough & Bulk Pickup">Cafe Sourdough & Bulk Pickup</option>
                      <option value="General Feedback / Press">General Feedback / Press</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#221F1E]/80 mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you're looking for, preferred dates, or questions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-xl px-3.5 py-2.5 text-xs text-[#221F1E] focus:outline-hidden focus:ring-2 focus:ring-[#C35A38]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* Map Preview & Location Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#221F1E] text-white rounded-3xl p-6 sm:p-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
                Getting Here
              </span>
              <h3 className="font-serif text-2xl font-bold">
                A Scenic Journey
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Located 45 minutes from the central airport and 20 minutes from the railway junction. Follow the riverbank road shaded by ancient banyan groves.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Nearest Airport:</span>
                  <span className="font-semibold text-white">Retreat Valley International (42 km)</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Railway Station:</span>
                  <span className="font-semibold text-white">Central Junction (18 km)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Parking:</span>
                  <span className="font-semibold text-[#D4A373]">Free Dedicated Valet Parking</span>
                </div>
              </div>
            </div>

            {/* Visual Map Container */}
            <div className="relative h-64 rounded-3xl overflow-hidden border border-[#E8E2D8] shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                alt="Map and landscape preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#221F1E]/50 flex flex-col items-center justify-center text-center p-4">
                <MapPin className="w-8 h-8 text-[#C35A38] mb-2" />
                <span className="font-serif text-white font-bold text-base">
                  The Haven Estate
                </span>
                <span className="text-white/80 text-xs mt-1 max-w-xs">
                  Riverbank & Forest View Lane, Retreat Valley
                </span>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 bg-white text-[#221F1E] text-xs font-bold px-4 py-2 rounded-full hover:bg-[#FAF7F2] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Open Interactive Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
