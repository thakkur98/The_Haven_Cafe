"use client";

import React from "react";
import Link from "next/link";
import { Utensils, BedDouble, Navigation, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const MobileBottomBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8E2D8] py-2 px-3 shadow-lg">
      <div className="grid grid-cols-4 gap-1 text-center">
        <Link
          href="/dining"
          className="flex flex-col items-center justify-center p-1 rounded-lg text-[#221F1E] hover:text-[#C35A38] transition-colors"
        >
          <Utensils className="w-5 h-5 text-[#C35A38]" />
          <span className="text-[10px] font-medium mt-1">Menu</span>
        </Link>

        <Link
          href="/rooms"
          className="flex flex-col items-center justify-center p-1 rounded-lg text-[#221F1E] hover:text-[#C35A38] transition-colors"
        >
          <BedDouble className="w-5 h-5 text-[#C35A38]" />
          <span className="text-[10px] font-medium mt-1">Stay</span>
        </Link>

        <a
          href={siteConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1 rounded-lg text-[#221F1E] hover:text-[#4A5B4E] transition-colors"
        >
          <Navigation className="w-5 h-5 text-[#4A5B4E]" />
          <span className="text-[10px] font-medium mt-1">Directions</span>
        </a>

        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20The%20Haven%2C%20I%20have%20an%20inquiry.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1 rounded-lg text-[#1b7a3d] hover:text-[#25D366] transition-colors"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#25D366] rounded-full"></span>
          </div>
          <span className="text-[10px] font-medium mt-1">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
