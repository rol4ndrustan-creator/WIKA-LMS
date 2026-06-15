"use client";

import { useEffect, useState } from "react";
import { journeyStops } from "@/lib/journey";

export default function JourneyNav() {
  const [active, setActive] = useState(journeyStops[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    journeyStops.forEach((stop) => {
      const el = document.getElementById(stop.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Journey progress"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3"
    >
      {journeyStops.map((stop) => (
        <a
          key={stop.id}
          href={`#${stop.id}`}
          aria-label={stop.label}
          className="group relative flex items-center justify-end"
        >
          <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-full bg-ink/80 border border-bronze/40 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-warm-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {stop.label}
          </span>
          <span
            className={`h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
              active === stop.id
                ? "bg-gold border-gold scale-125"
                : "bg-transparent border-fog/50 group-hover:border-gold"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
