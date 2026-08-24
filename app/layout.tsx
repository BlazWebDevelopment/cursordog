import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import novaImage from "@/assets/nova.png";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nova.cursor.com"),
  title: "Nova — Cursor's Upcoming AI Dog",
  description:
    "Nova is an official Cursor product, arriving October 2026. An AI companion that interacts with its environment, learns from experience, and develops its own personality.",
  keywords: [
    "Nova",
    "Cursor",
    "AI dog",
    "AI companion",
    "robotics",
    "artificial intelligence",
    "October 2026",
  ],
  openGraph: {
    title: "Nova — Cursor's Upcoming AI Dog",
    description:
      "An AI companion that learns, adapts, and evolves. Coming October 2026.",
    type: "website",
    images: [novaImage.src],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova — Cursor's Upcoming AI Dog",
    description:
      "An AI companion that learns, adapts, and evolves. Coming October 2026.",
    images: [novaImage.src],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
