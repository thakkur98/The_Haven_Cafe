import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/common/WhatsAppWidget";
import { MobileBottomBar } from "@/components/common/MobileBottomBar";
import { siteConfig } from "@/data/siteConfig";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Cafe, Gourmet Dining & Boutique Stay`,
  description: siteConfig.description,
  keywords: [
    "Boutique hotel",
    "Cafe",
    "Specialty coffee",
    "Gourmet dining",
    "Weekend getaway",
    "Bed and breakfast",
    "Room booking",
    "Private dining",
  ],
  openGraph: {
    title: `${siteConfig.name} - Cafe, Dining & Stay`,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/logo-mark.svg",
    shortcut: "/logo-mark.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF7F2] text-[#221F1E] font-sans">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <WhatsAppWidget />
        <MobileBottomBar />
      </body>
    </html>
  );
}
