"use client";

import React, { useState } from "react";
import { X, Calendar, Users, MessageSquare, Check, Sparkles } from "lucide-react";
import { roomsData } from "@/data/rooms";
import { siteConfig } from "@/data/siteConfig";

interface RoomInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomId?: string;
}

export const RoomInquiryModal = ({
  isOpen,
  onClose,
  selectedRoomId,
}: RoomInquiryModalProps) => {
  const [roomId, setRoomId] = useState(selectedRoomId || roomsData[0].id);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const selectedRoom = roomsData.find((r) => r.id === roomId) || roomsData[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `🏨 *ROOM AVAILABILITY INQUIRY - THE HAVEN*
----------------------------------------
👤 *Guest Name:* ${name || "Guest"}
📱 *Phone:* ${phone || "Not provided"}
🛏️ *Selected Room:* ${selectedRoom.name}
📅 *Check-in:* ${checkIn || "Flexible"}
📅 *Check-out:* ${checkOut || "Flexible"}
👥 *Guests:* ${adults} Adults${children !== "0" ? `, ${children} Children` : ""}
${notes ? `📝 *Special Notes:* ${notes}` : ""}
----------------------------------------
Please share rates and confirmation for these dates.`;

    const encoded = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;

    // Open WhatsApp in new tab
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
              Direct Boutique Booking
            </span>
            <h3 className="font-serif text-xl font-bold">Inquire Room Availability</h3>
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
                Inquiry Generated!
              </h4>
              <p className="text-sm text-[#221F1E]/75 max-w-sm mx-auto leading-relaxed">
                Your WhatsApp chat has opened with the inquiry details pre-filled. Simply press send to chat with our front desk manager.
              </p>
              <div className="pt-4 flex flex-col gap-2 sm:flex-row justify-center">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 border border-[#C35A38] text-[#C35A38] rounded-xl text-xs font-semibold hover:bg-[#F7ECE8]"
                >
                  Edit Details
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 bg-[#221F1E] text-white rounded-xl text-xs font-semibold hover:bg-black"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Room Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#221F1E]/80 mb-1">
                  Select Room / Suite
                </label>
                <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full bg-white border border-[#E8E2D8] rounded-xl px-3.5 py-2.5 text-sm text-[#221F1E] focus:outline-hidden focus:ring-2 focus:ring-[#C35A38]"
                >
                  {roomsData.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} (from ₹{room.startingPrice.toLocaleString()}/night)
                    </option>
                  ))}
                </select>
              </div>

              {/* Dates Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#221F1E]/80 mb-1">
                    Check-in Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-white border border-[#E8E2D8] rounded-xl px-3 py-2 text-xs text-[#221F1E] focus:outline-hidden focus:ring-2 focus:ring-[#C35A38]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#221F1E]/80 mb-1">
                    Check-out Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-white border border-[#E8E2D8] rounded-xl px-3 py-2 text-xs text-[#221F1E] focus:outline-hidden focus:ring-2 focus:ring-[#C35A38]"
                    />
                  </div>
                </div>
              </div>

              {/* Guests Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#221F1E]/80 mb-1">
                    Adults (12+ yrs)
                  </label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="w-full bg-white border border-[#E8E2D8] rounded-xl px-3 py-2 text-xs text-[#221F1E]"
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4+">4+ Adults (Multiple Rooms)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#221F1E]/80 mb-1">
                    Children (0-11 yrs)
                  </label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    className="w-full bg-white border border-[#E8E2D8] rounded-xl px-3 py-2 text-xs text-[#221F1E]"
                  >
                    <option value="0">None</option>
                    <option value="1">1 Child</option>
                    <option value="2">2 Children</option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#221F1E]/80 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
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
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-[#E8E2D8] rounded-xl px-3 py-2 text-xs text-[#221F1E] focus:outline-hidden focus:ring-2 focus:ring-[#C35A38]"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-medium text-[#221F1E]/80 mb-1">
                  Special Notes / Inclusions
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Anniversary setup, quiet side, late check-in..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white border border-[#E8E2D8] rounded-xl px-3 py-2 text-xs text-[#221F1E] focus:outline-hidden focus:ring-2 focus:ring-[#C35A38]"
                />
              </div>

              {/* Perks Teaser */}
              <div className="p-3 bg-[#F1EDE4] rounded-xl flex items-center gap-2.5 text-xs text-[#4A5B4E]">
                <Sparkles className="w-4 h-4 text-[#C35A38] shrink-0" />
                <span>
                  <strong>Included Free:</strong> Artisan cafe breakfast & single-origin coffee daily.
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire via WhatsApp</span>
              </button>

              <p className="text-center text-[11px] text-[#221F1E]/60">
                No upfront payment needed. Directly discuss dates & lock your stay with our team.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
