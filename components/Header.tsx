"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Overview", href: "#overview" },
  { label: "Collaboration", href: "#collaboration" },
  { label: "Meet SebX", href: "#meet" },
  { label: "Vision", href: "#vision" },
  { label: "Launch", href: "#launch" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-white/80 backdrop-blur-xl"
          : "border-b border-transparent bg-white/0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-2.5">
          <Image
            src="/cursor-logo.png"
            alt="Cursor"
            width={64}
            height={64}
            priority
            className="h-7 w-7 rounded-md object-cover"
          />
          <span className="text-[15px] font-medium tracking-tight">SebX</span>
          <span className="hidden text-[15px] text-muted sm:inline">/</span>
          <span className="hidden text-[13.5px] text-muted transition-colors group-hover:text-ink lg:inline">
            SpaceX &times; Cursor &times; Neuralink
          </span>
          <span className="hidden text-[15px] text-muted transition-colors group-hover:text-ink sm:inline lg:hidden">
            Neuro Dog
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#launch"
          className="rounded-full bg-ink px-4 py-2 text-[13.5px] font-medium text-white transition-all duration-300 hover:opacity-80 active:scale-[0.97]"
        >
          Q1 2027
        </a>
      </div>
    </header>
  );
}
