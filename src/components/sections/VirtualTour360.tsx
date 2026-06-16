"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteContent } from "@/data/siteContent";

export default function VirtualTour360() {
  const ref = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const { virtualTour } = siteContent;

  return (
    <section id="virtual-tour" ref={ref} className="relative w-full py-4 overflow-hidden">
      <div className="section-divider" />

      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Parallax background image */}
        <motion.div style={{ y: imgY }} className="absolute inset-0 w-full h-[115%] -top-[8%]">
          {imgError ? (
            <div className="w-full h-full bg-gradient-to-br from-[#0e1a1a] via-forest/20 to-ink" />
          ) : (
            <img
              src={virtualTour.image}
              alt={virtualTour.alt}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-center"
              style={{ filter: "brightness(0.45) saturate(0.75)" }}
            />
          )}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-ink/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-ink/50" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs uppercase tracking-[0.4em] text-bronze">
              {virtualTour.eyebrow}
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-6xl text-gold-gradient leading-snug">
              {virtualTour.title}
            </h2>
            <p className="mt-6 text-fog/75 text-base md:text-lg leading-relaxed">
              {virtualTour.subtitle}
            </p>

            {/* Navigation arrows — decorative, prepared for future 360 integration */}
            <div className="mt-10 flex items-center justify-center gap-8">
              <button
                aria-label="Previous view"
                className="w-12 h-12 rounded-full border border-bronze/40 flex items-center justify-center text-bronze hover:border-gold hover:text-gold transition-colors duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Center hotspot indicator */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-gold/10 animate-ping" />
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="3" fill="#d4af37" />
                    <path d="M11 2v3M11 17v3M2 11h3M17 11h3" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-fog/50">360°</span>
              </div>

              <button
                aria-label="Next view"
                className="w-12 h-12 rounded-full border border-bronze/40 flex items-center justify-center text-bronze hover:border-gold hover:text-gold transition-colors duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* CTA */}
            <motion.a
              href={virtualTour.ctaHref}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              whileHover={{ scale: 1.04 }}
              className="mt-10 inline-block rounded-full border border-gold px-10 py-4 text-xs uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-ink transition-colors duration-500"
            >
              {virtualTour.cta}
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="section-divider" />
    </section>
  );
}
