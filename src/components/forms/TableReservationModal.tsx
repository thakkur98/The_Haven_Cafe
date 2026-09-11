"use client";

import React, { useState } from "react";
import { X, Calendar, Utensils, MessageSquare, Check, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface TableReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultVenue?: "dining" | "cafe";
}

export const TableReservationModal = ({
  isOpen,
  onClose,
  defaultVenue = "dining",
}: TableReservationModalProps) => {
  const [venue, setVenue] = useState(defaultVenue);
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("Dinner (08:00 PM)");
  const [guests, setGuests] = useState("2");
  const [seating, setSeating] = useState("Garden Courtyard");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [occasion, setOccasion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `🍽️ *TABLE RESERVATION INQUIRY - THE HAVEN*
----------------------------------------
📍 *Venue:* ${venue === "cafe" ? "The Local Roost Cafe" : "Gourmet Dining Room"}
👤 *Name:* ${name || "Guest"}
📱 *Phone:* ${phone || "Not provided"}
📅 *Date:* ${date || "Today"}
⏰ *Slot / Time:* ${timeSlot}
👥 *Guests:* ${guests} People
🌿 *Preferred Seating:* ${seating}
${occasion ? `🎉 *Occasion / Dietary Notes:* ${occasion}` : ""}
----------------------------------------
Please confirm table availability for our party.`;

    const encoded = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#221F1E]/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] w-full max-w-lg rounded-2xl shadow-2xl border border-[#F1EDE4] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#221F1E] text-white p-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#D4A373] font-semibold">
              Culinary Reservation
            </span>
            <h3 className="font-serif text-xl font-bold">Reserve a Table</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 transition-colors text-white/80 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#221F1E]">
                Table Request Sent!
              </h4>
              <p className="text-sm text-[#221F1E]/75 max-w-sm mx-auto leading-relaxed">
                Your WhatsApp chat has opened with the table booking details. Our restaurant host will confirm your table shortly.
              </p>
              <div className="pt-4 flex flex-col gap-2 sm:flex-row justify-center">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 border border-[#C35A38] text-[#C35A38] rounded-xl text-xs font-semibold hover:bg-[#F7ECE8]"
                >
                  Change Details
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 bg-[#221F1E] text-white rounded-xl text-xs font-semibold hover:bg-black"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Venue Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-1">
                  Choose Dining Experience
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setVenue("dining")}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all border ${
                      venue === "dining"
                        ? "bg-[#C35A38] text-white border-[#C35A38]"
                        : "bg-white text-[#221F1E] border-[#E8E2D8] hover:bg-[#F1EDE4]"
                    }`}
                  >
                    Gourmet Dining Room
                  </button>
                  <button
                    type="button"
                    onClick={() => setVenue("cafe")}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all border ${
                      venue === "cafe"
                        ? "bg-[#C35A38] text-white border-[#C35A38]"
                        : "bg-white text-[#221F1E] border-[#E8E2D8] hover:bg-[#F1EDE4]"
                    }`}
                  >
                    The Local Roost Cafe
                  </button>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#221F1E]/80 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white border border-[#E8E2D8] rounded-xl px-3 py-2 text-xs text-[#221F1E] focus:outline-hidden focus:ring-2 focus:ring-[#C35A38]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#221F1E]/80 mb-1">
                    Time / Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-white border border-[#E8E2D8] rounded-xl px-3 py-2 text-xs text-[#221F1E]"
                  >
                    <option value="Breakfast (08:30 AM)">Breakfast (08:30 AM)</option>
                    <option value="Lunch (01:00 PM)">Lunch (01:00 PM)</option>
                    <option value="High Tea (04:30 PM)">High Tea (04:30 PM)</option>
                    <option value="Sunset Hour (06:30 PM)">Sunset Hour (06:30 PM)</option>
                    <option value="Dinner (08:00 PM)">Dinner (08:00 PM)</option>
                    <option value="Late Dinner (09:30 PM)">Late Dinner (09:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Guests & Seating */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#221F1E]/80 mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-white border border-[#E8E2D8] rounded-xl px-3 py-2 text-xs text-[#221F1E]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Guests (Table for 2)</option>
                    <option value="3-4">3 - 4 Guests</option>
                    <option value="5-8">5 - 8 Guests</option>
                    <option value="9+">9+ (Group / Party)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#221F1E]/80 mb-1">
                    Seating Area
                  </label>
                  <select
                    value={seating}
                    onChange={(e) => setSeating(e.target.value)}
                    className="w-full bg-white border border-[#E8E2D8] rounded-xl px-3 py-2 text-xs text-[#221F1E]"
                  >
                    <option value="Garden Courtyard">Lush Garden Courtyard</option>
                    <option value="Indoor AC Dining">Indoor AC Dining</option>
                    <option value="Rooftop Sunset Terrace">Rooftop Sunset Terrace</option>
                    <option value="Cafe Library Corner">Cafe Library Nook</option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#221F1E]/80 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-[#E8E2D8] rounded-xl px-3 py-2 text-xs text-[#221F1E] focus:outline-hidden focus:ring-2 focus:ring-[#C35A38]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#221F1E]/80 mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your WhatsApp number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-[#E8E2D8] rounded-xl px-3 py-2 text-xs text-[#221F1E] focus:outline-hidden focus:ring-2 focus:ring-[#C35A38]"
                  />
                </div>
              </div>

              {/* Occasion / Dietary Notes */}
              <div>
                <label className="block text-xs font-medium text-[#221F1E]/80 mb-1">
                  Occasion or Dietary Preferences
                </label>
                <input
                  type="text"
                  placeholder="e.g. Birthday celebration, Vegan, Nut allergy, Candlelight..."
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full bg-white border border-[#E8E2D8] rounded-xl px-3 py-2 text-xs text-[#221F1E] focus:outline-hidden focus:ring-2 focus:ring-[#C35A38]"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Reserve Table on WhatsApp</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
