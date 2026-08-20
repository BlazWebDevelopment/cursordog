import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rex.cursor.com"),
  title: "Rex — Cursor's Upcoming AI Dog",
  description:
    "Rex is an official Cursor product, arriving October 2026. An AI companion that interacts with its environment, learns from experience, and develops its own personality.",
  keywords: [
    "Rex",
    "Cursor",
    "AI dog",
    "AI companion",
    "robotics",
    "artificial intelligence",
    "October 2026",
  ],
  openGraph: {
    title: "Rex — Cursor's Upcoming AI Dog",
    description:
      "An AI companion that learns, adapts, and evolves. Coming October 2026.",
    type: "website",
    images: ["/rex.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rex — Cursor's Upcoming AI Dog",
    description:
      "An AI companion that learns, adapts, and evolves. Coming October 2026.",
    images: ["/rex.png"],
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
