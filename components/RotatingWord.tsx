"use client";

import { useEffect, useState } from "react";

const TYPE_SPEED = 65;
const DELETE_SPEED = 32;
const HOLD = 1500;

export default function RotatingWord({
  words,
  startDelay = 0,
}: {
  words: string[];
  startDelay?: number;
}) {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;

    const word = words[index];

    if (!deleting && typed === word) {
      const timer = setTimeout(() => setDeleting(true), HOLD);
      return () => clearTimeout(timer);
    }

    if (deleting && typed === "") {
      setDeleting(false);
      setIndex((current) => (current + 1) % words.length);
      return;
    }

    const timer = setTimeout(
      () =>
        setTyped((current) =>
          deleting ? word.slice(0, current.length - 1) : word.slice(0, current.length + 1)
        ),
      deleting ? DELETE_SPEED : TYPE_SPEED
    );

    return () => clearTimeout(timer);
  }, [typed, deleting, index, words, started]);

  return (
    <span className="inline-flex items-baseline">
      <span className="text-ink">{typed}</span>
      <span className="animate-caret ml-[3px] inline-block h-[0.85em] w-[2px] translate-y-[0.06em] bg-ink" />
    </span>
  );
}
