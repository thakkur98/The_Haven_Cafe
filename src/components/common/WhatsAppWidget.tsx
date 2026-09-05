"use client";

import React, { useState } from "react";
import { MessageCircle, PhoneCall, BedDouble, Utensils, Coffee, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      title: "Book / Inquire Room",
      desc: "Check dates & bespoke stay packages",
      icon: BedDouble,
      message: "Hi The Haven, I would like to inquire about room availability and rates.",
    },
    {
      title: "Reserve a Dining Table",
      desc: "Lunch, high tea or dinner reservations",
      icon: Utensils,
      message: "Hi The Haven, I would like to reserve a table for lunch/dinner.",
    },
    {
      title: "Cafe & Takeaway Order",
      desc: "Order fresh bakery or specialty coffee",
      icon: Coffee,
      message: "Hi The Haven Cafe, I would like to place a pickup order / check today's specials.",
    },
    {
      title: "Direct WhatsApp Voice Call",
      desc: "Speak with our duty manager directly",
      icon: PhoneCall,
      message: "Hi The Haven, I am calling regarding an urgent inquiry.",
    },
  ];

  const handleAction = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-20 md:bottom-8 right-5 z-40">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-[#F1EDE4] overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#25D366] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white text-[#25D366] flex items-center justify-center font-bold text-lg">
                  H
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-300 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h4 className="font-semibold text-sm">The Haven WhatsApp Desk</h4>
                <p className="text-[11px] text-white/90">Typically replies within 3 mins</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Select Prompts */}
          <div className="p-4 bg-[#FAF7F2]/50 space-y-2">
            <p className="text-xs text-[#221F1E]/70 font-medium mb-3">
              👋 How may we assist you today?
            </p>
            {actions.map((act, idx) => {
              const Icon = act.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleAction(act.message)}
                  className="w-full text-left p-2.5 rounded-xl border border-[#F1EDE4] bg-white hover:bg-[#F7ECE8] hover:border-[#C35A38]/30 transition-all flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] group-hover:bg-[#C35A38] group-hover:text-white flex items-center justify-center text-[#C35A38] shrink-0 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-[#221F1E] group-hover:text-[#C35A38]">
                      {act.title}
                    </span>
                    <span className="block text-[10px] text-[#221F1E]/60">
                      {act.desc}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="p-3 bg-[#F1EDE4]/50 border-t border-[#F1EDE4] text-center">
            <p className="text-[10px] text-[#221F1E]/60">
              Direct connection to front desk • No bots
            </p>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
        aria-label="Contact on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          {isOpen ? "Close" : "Chat on WhatsApp"}
        </span>
      </button>
    </div>
  );
};
