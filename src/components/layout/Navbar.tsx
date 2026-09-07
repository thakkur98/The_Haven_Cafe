"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCall, Menu, X, Coffee, BedDouble, Waves } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "15 Pool View Rooms", href: "/rooms" },
    { name: "The Cafe", href: "/cafe" },
    { name: "Lawn & Events", href: "/events" },
    { name: "Corbett Experiences", href: "/experiences" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact & Location", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#F1EDE4] py-3"
            : "bg-[#FAF7F2]/85 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Tagline */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#C35A38] text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm transition-transform group-hover:scale-105">
              LR
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#221F1E] block">
                The Local Roost
              </span>
              <span className="block text-[10px] tracking-widest uppercase font-sans text-[#4A5B4E] font-semibold">
                Cafe & Stay • Jim Corbett
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-semibold tracking-wide transition-colors hover:text-[#C35A38] ${
                    isActive
                      ? "text-[#C35A38] font-bold underline underline-offset-8 decoration-2 decoration-[#C35A38]"
                      : "text-[#221F1E]/80"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Live WhatsApp Call */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20The%20Local%20Roost%2C%20I%20would%20like%20to%20connect%20with%20your%20reception.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#1b7a3d] border border-[#25D366]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
              </span>
              <PhoneCall className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp: +91 79003 45101</span>
            </a>

            <Link
              href="/rooms"
              className="bg-[#C35A38] hover:bg-[#A84A2C] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-xs transition-all hover:shadow"
            >
              Book Stay
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366]/15 text-[#1b7a3d] border border-[#25D366]/30"
              aria-label="WhatsApp"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#221F1E] hover:bg-[#F1EDE4] transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#221F1E]/60 backdrop-blur-xs flex justify-end">
          <div className="w-4/5 max-w-sm bg-[#FAF7F2] h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#F1EDE4]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#C35A38] text-white flex items-center justify-center font-serif font-bold text-sm">
                    LR
                  </div>
                  <div>
                    <span className="font-serif font-bold text-base text-[#221F1E] block">
                      The Local Roost
                    </span>
                    <span className="text-[10px] text-[#4A5B4E] block">
                      Cafe & Stay • Jim Corbett
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-md text-[#221F1E]/60 hover:text-[#221F1E]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Pillars Banner */}
              <div className="grid grid-cols-3 gap-2 my-5 p-2 bg-[#F1EDE4] rounded-xl text-center">
                <Link href="/rooms" className="p-2 hover:bg-white rounded-lg transition-colors flex flex-col items-center">
                  <Waves className="w-4 h-4 text-[#C35A38] mb-1" />
                  <span className="text-[10px] font-medium text-[#221F1E]">Pool Rooms</span>
                </Link>
                <Link href="/cafe" className="p-2 hover:bg-white rounded-lg transition-colors flex flex-col items-center">
                  <Coffee className="w-4 h-4 text-[#C35A38] mb-1" />
                  <span className="text-[10px] font-medium text-[#221F1E]">Cafe</span>
                </Link>
                <Link href="/contact" className="p-2 hover:bg-white rounded-lg transition-colors flex flex-col items-center">
                  <BedDouble className="w-4 h-4 text-[#C35A38] mb-1" />
                  <span className="text-[10px] font-medium text-[#221F1E]">Location</span>
                </Link>
              </div>

              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-[#C35A38] text-white"
                          : "text-[#221F1E] hover:bg-[#F1EDE4]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-[#F1EDE4] space-y-3">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20The%20Local%20Roost%2C%20I%20want%20to%20inquire%20about%20a%20booking.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-lg text-sm font-semibold shadow-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>WhatsApp: +91 79003 45101</span>
              </a>
              <p className="text-center text-[11px] text-[#221F1E]/60">
                Jim Corbett, Ramnagar • 24/7 Front Desk
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
