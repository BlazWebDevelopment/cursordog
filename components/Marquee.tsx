const ITEMS = [
  "SpaceX × Cursor × Neuralink",
  "The Neuro Dog",
  "Learns from experience",
  "Develops personality",
  "Reads the room",
  "Responds to people",
  "Moves in the real world",
  "Evolves with its owner",
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-line py-5">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent"
        aria-hidden="true"
      />
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {track.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10">
            <span className="text-[13px] uppercase tracking-[0.2em] text-muted">{item}</span>
            <span className="h-1 w-1 rounded-full bg-neutral-300" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
