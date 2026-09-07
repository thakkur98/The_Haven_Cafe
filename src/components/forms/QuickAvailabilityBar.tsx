"use client";

import React, { useState } from "react";
import { Calendar, Users, BedDouble, DoorOpen, MessageCircle, ArrowRight } from "lucide-react";
import { roomsData } from "@/data/rooms";
import { siteConfig } from "@/data/siteConfig";

export const QuickAvailabilityBar = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("Any Suite or Cottage");
  const [rooms, setRooms] = useState("1");
  const [guests, setGuests] = useState("2");

  const maxGuests = Number(rooms) * 2;

  const handleInquire = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = `🏨 *ROOM AVAILABILITY INQUIRY - QUICK BAR*
----------------------------------------
🛏️ *Preference:* ${roomType}
📅 *Dates:* ${checkIn ? `${checkIn} to ${checkOut}` : "Looking for upcoming dates"}
🛏️ *Rooms:* ${rooms}
👥 *Guests:* ${guests} (maximum 2 guests per room)
----------------------------------------
Hi The Haven, please share available rooms & rates for these dates!`;

    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full p-3 sm:p-4 shadow-xl border border-[#F1EDE4]">
      <form
        onSubmit={handleInquire}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center"
      >
        {/* Check-In / Out */}
        <div className="flex items-center gap-3 px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-[#F1EDE4]">
          <Calendar className="w-5 h-5 text-[#C35A38] shrink-0" />
          <div className="w-full grid grid-cols-2 gap-2">
            <label className="min-w-0">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#221F1E]/60">
                Check-in
              </span>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => {
                  const nextCheckIn = e.target.value;
                  setCheckIn(nextCheckIn);
                  if (checkOut && nextCheckIn > checkOut) {
                    setCheckOut("");
                  }
                }}
                className="w-full bg-transparent text-[#221F1E] font-medium focus:outline-hidden text-xs"
              />
            </label>
            <label className="min-w-0">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#221F1E]/60">
                Check-out
              </span>
              <input
                type="date"
                value={checkOut}
                min={checkIn || undefined}
                onChange={(e) => setCheckOut(e.target.value)}
                disabled={!checkIn}
                className="w-full bg-transparent text-[#221F1E] font-medium focus:outline-hidden text-xs disabled:cursor-not-allowed disabled:opacity-50"
              />
            </label>
          </div>
        </div>

        {/* Room Type */}
        <div className="flex items-center gap-3 px-3 py-1.5 border-b sm:border-b-0 lg:border-r border-[#F1EDE4]">
          <BedDouble className="w-5 h-5 text-[#C35A38] shrink-0" />
          <div className="w-full">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-[#221F1E]/60">
              Accommodation
            </span>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full bg-transparent text-xs text-[#221F1E] font-medium focus:outline-hidden"
            >
              <option value="Any Suite or Cottage">Any Room / Cottage</option>
              {roomsData.map((r) => (
                <option key={r.id} value={r.name}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Number of Rooms */}
        <div className="flex items-center gap-3 px-3 py-1.5 border-b sm:border-b-0 lg:border-r border-[#F1EDE4]">
          <DoorOpen className="w-5 h-5 text-[#C35A38] shrink-0" />
          <div className="w-full">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-[#221F1E]/60">
              Rooms
            </span>
            <select
              value={rooms}
              onChange={(e) => {
                const nextRooms = e.target.value;
                setRooms(nextRooms);
                if (Number(guests) > Number(nextRooms) * 2) {
                  setGuests(String(Number(nextRooms) * 2));
                }
              }}
              className="w-full bg-transparent text-xs text-[#221F1E] font-medium focus:outline-hidden"
            >
              <option value="1">1 Room</option>
              <option value="2">2 Rooms</option>
              <option value="3">3 Rooms</option>
              <option value="4">4 Rooms</option>
              <option value="5">5 Rooms</option>
            </select>
          </div>
        </div>

        {/* Guests */}
        <div className="flex items-center gap-3 px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-[#F1EDE4]">
          <Users className="w-5 h-5 text-[#C35A38] shrink-0" />
          <div className="w-full">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-[#221F1E]/60">
              Guests
            </span>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-transparent text-xs text-[#221F1E] font-medium focus:outline-hidden"
            >
              {Array.from({ length: maxGuests }, (_, index) => {
                const guestCount = index + 1;
                return (
                  <option key={guestCount} value={String(guestCount)}>
                    {guestCount} {guestCount === 1 ? "Guest" : "Guests"}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-[#C35A38] hover:bg-[#A84A2C] text-white py-3 px-5 rounded-xl sm:rounded-full font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Check on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
    </div>
  );
};
