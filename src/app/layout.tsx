import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

// Import for Script the Swipper
import Script from "next/script";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taveira Portifolio",
  description: "Made by DevTaveira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Script for Swiper */}
      <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js" />
      <body className={`${lexend.className}`}>{children}</body>
    </html>
  );
}
