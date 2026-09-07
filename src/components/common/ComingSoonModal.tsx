"use client";

import React from "react";
import { X, Sparkles, MessageSquare, Coffee, Utensils } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  category?: string;
}

export const ComingSoonModal = ({
  isOpen,
  onClose,
  title = "Seasonal Menu & Online Ordering",
  category = "Menu",
}: ComingSoonModalProps) => {
  if (!isOpen) return null;

  const handleWhatsAppChat = () => {
    const msg = `👋 *INQUIRY - THE LOCAL ROOST CAFE & STAY*
----------------------------------------
📍 *Topic:* ${title} (${category})
Hi Team, I was browsing your website and would like to know the current menu options, prices, or specials for my visit!`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#221F1E]/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] w-full max-w-md rounded-3xl shadow-2xl border border-[#E8E2D8] overflow-hidden">
        {/* Header Ribbon */}
        <div className="bg-[#221F1E] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/20 transition-colors text-white/80 hover:text-white"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 bg-[#C35A38]/30 border border-[#C35A38]/50 text-[#D4A373] px-3 py-1 rounded-full text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Coming Very Soon</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">
            {title}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#F7ECE8] text-[#C35A38] flex items-center justify-center mx-auto shadow-xs">
            <Utensils className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h4 className="font-serif text-lg font-bold text-[#221F1E]">
              Crafting Something Special
            </h4>
            <p className="text-xs sm:text-sm text-[#221F1E]/75 leading-relaxed max-w-sm mx-auto">
              Our culinary team is updating our seasonal cafe & dining selections with fresh local ingredients and specialty brews.
            </p>
          </div>

          <div className="p-3.5 bg-white rounded-2xl border border-[#E8E2D8] text-left text-xs text-[#4A5B4E] space-y-1">
            <p className="font-semibold text-[#221F1E]">
              💬 Currently Taking Orders & Inquiries via WhatsApp
            </p>
            <p className="text-[11px] text-[#221F1E]/70">
              Need today&apos;s special menu, pool party snacks, or meal pre-orders? Chat directly with our kitchen.
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={handleWhatsAppChat}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-xs sm:text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire / Order on WhatsApp</span>
            </button>
            <button
              onClick={onClose}
              className="text-xs text-[#221F1E]/60 hover:text-[#221F1E] font-medium py-1.5"
            >
              Back to Browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
