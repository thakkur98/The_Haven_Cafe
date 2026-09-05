import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#221F1E] text-[#FAF7F2] pt-16 pb-24 md:pb-12 border-t border-[#332E2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#3D3735]">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C35A38] text-white flex items-center justify-center font-serif text-xl font-bold">
                H
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                The Haven
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/70 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#332E2C] hover:bg-[#C35A38] flex items-center justify-center text-xs transition-colors"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#332E2C] hover:bg-[#C35A38] flex items-center justify-center text-xs transition-colors"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href={siteConfig.socials.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#332E2C] hover:bg-[#C35A38] flex items-center justify-center text-xs transition-colors"
                aria-label="Tripadvisor"
              >
                TA
              </a>
            </div>
          </div>

          {/* Hours of Operation Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4A373] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4A373]" />
              Operating Hours
            </h4>
            <div className="space-y-2.5 text-xs text-[#FAF7F2]/80">
              <div className="border-b border-[#332E2C] pb-2">
                <span className="block font-medium text-white">The Artisan Cafe & Bakery</span>
                <span className="text-[#FAF7F2]/60">{siteConfig.hours.cafe}</span>
              </div>
              <div className="border-b border-[#332E2C] pb-2">
                <span className="block font-medium text-white">Gourmet Dining Room</span>
                <span className="text-[#FAF7F2]/60">{siteConfig.hours.dining}</span>
              </div>
              <div>
                <span className="block font-medium text-white">Boutique Stay & Reception</span>
                <span className="text-[#FAF7F2]/60">{siteConfig.hours.frontDesk}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4A373]">
              Quick Exploration
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/75">
              <li>
                <Link href="/rooms" className="hover:text-[#D4A373] transition-colors">
                  Boutique Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/cafe" className="hover:text-[#D4A373] transition-colors">
                  Specialty Coffee & Bakery Menu
                </Link>
              </li>
              <li>
                <Link href="/dining" className="hover:text-[#D4A373] transition-colors">
                  Dinner Table Reservations
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#D4A373] transition-colors">
                  Private Gatherings & Celebrations
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-[#D4A373] transition-colors">
                  Local Guide & Nature Activities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#D4A373] transition-colors">
                  Atmosphere & Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4A373]">
              Get in Touch
            </h4>
            <div className="space-y-2 text-xs text-[#FAF7F2]/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C35A38] shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C35A38] shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] font-medium"
                >
                  WhatsApp: +{siteConfig.whatsappNumber}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C35A38] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </p>
            </div>
            <div className="pt-2">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#D4A373] hover:underline"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF7F2]/50 gap-4">
          <p>© {new Date().getFullYear()} The Haven. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              House Rules & Policies
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Inquiry Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
