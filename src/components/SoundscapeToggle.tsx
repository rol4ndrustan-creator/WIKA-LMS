"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Ambient soundscape toggle. Looks for /audio/ambience.mp3 — if the asset
 * isn't present yet, the toggle simply stays silent without erroring.
 */
export default function SoundscapeToggle() {
  const [enabled, setEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/audio/ambience.mp3");
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;
    return () => {
      audio.pause();
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (enabled) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        /* autoplay restrictions — user gesture already provided here */
      });
    }
    setEnabled(!enabled);
  };

  return (
    <button
      onClick={toggle}
      aria-label={enabled ? "Mute ambience" : "Play ambience"}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-bronze/50 bg-ink/60 backdrop-blur px-4 py-2 text-xs uppercase tracking-[0.2em] text-warm-white/80 hover:border-gold hover:text-gold transition-colors duration-300"
    >
      <span
        className={`relative flex h-2 w-2 rounded-full ${
          enabled ? "bg-gold" : "bg-fog/50"
        }`}
      >
        {enabled && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" />
        )}
      </span>
      {enabled ? "Sound On" : "Sound Off"}
    </button>
  );
}
