"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-10-01T00:00:00Z").getTime();

function split(distance: number) {
  const clamped = Math.max(distance, 0);
  return {
    Days: Math.floor(clamped / 86_400_000),
    Hours: Math.floor((clamped / 3_600_000) % 24),
    Minutes: Math.floor((clamped / 60_000) % 60),
    Seconds: Math.floor((clamped / 1000) % 60),
  };
}

export default function Countdown() {
  const [remaining, setRemaining] = useState<ReturnType<typeof split> | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(split(TARGET - Date.now()));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = remaining ?? { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 };

  return (
    <div
      className="grid w-full max-w-xl grid-cols-4 gap-px overflow-hidden rounded-2xl border border-line bg-line transition-opacity duration-700"
      style={{ opacity: remaining ? 1 : 0 }}
      aria-live="off"
    >
      {Object.entries(units).map(([label, value]) => (
        <div key={label} className="bg-white px-3 py-6 text-center sm:px-6">
          <div className="font-sans text-3xl font-light tabular-nums tracking-tight sm:text-4xl">
            {String(value).padStart(2, "0")}
          </div>
          <div className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-muted">{label}</div>
        </div>
      ))}
    </div>
  );
}
