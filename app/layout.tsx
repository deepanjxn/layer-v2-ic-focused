import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/blocks/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Layer",
  description: "Layer — built for modern teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Grid rail lines */}
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 10 }}>
          <div style={{ position: 'fixed', left: 'calc(50% - 720px)', top: 0, width: '1px', height: '100%', background: '#EEEEEE', pointerEvents: 'none' }} />
          <div style={{ position: 'fixed', right: 'calc(50% - 720px)', top: 0, width: '1px', height: '100%', background: '#EEEEEE', pointerEvents: 'none' }} />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
