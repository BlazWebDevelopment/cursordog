import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import sebxImage from "@/assets/sebx.jpg";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sebx.cursor.com"),
  title: "SebX — The Neuro Dog by SpaceX × Cursor × Neuralink",
  description:
    "SebX is the Neuro Dog, built by SpaceX, Cursor, and Neuralink, arriving October 2026. An AI companion with a rocket-grade body, an AI core, and a neural link to its owner.",
  keywords: [
    "SebX",
    "Neuro Dog",
    "SpaceX",
    "Cursor",
    "Neuralink",
    "AI dog",
    "AI companion",
    "robotics",
    "artificial intelligence",
    "October 2026",
  ],
  openGraph: {
    title: "SebX — The Neuro Dog by SpaceX × Cursor × Neuralink",
    description:
      "An AI companion that learns, adapts, and evolves. Coming October 2026.",
    type: "website",
    images: [sebxImage.src],
  },
  twitter: {
    card: "summary_large_image",
    title: "SebX — The Neuro Dog by SpaceX × Cursor × Neuralink",
    description:
      "An AI companion that learns, adapts, and evolves. Coming October 2026.",
    images: [sebxImage.src],
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
