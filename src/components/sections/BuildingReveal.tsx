"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteContent } from "@/data/siteContent";

export default function BuildingReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.08, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.85, 0.5, 0.65]);

  const { building } = siteContent;

  return (
    <section
      id="building-reveal"
      ref={ref}
      className="relative w-full overflow-hidden"
    >
      {/* Decorative top border */}
      <div className="section-divider" />

      <div className="relative min-h-screen flex flex-col">
        {/* Eyebrow + Title above image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center pt-24 pb-10 px-6"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-bronze">
            {building.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl text-gold-gradient">
            {building.title}
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-fog/70 text-base md:text-lg leading-relaxed">
            {building.subtitle}
          </p>
        </motion.div>

        {/* Building image with hotspots */}
        <div className="relative flex-1 min-h-[60vh] md:min-h-[75vh] overflow-hidden">
          <motion.div style={{ scale: imgScale }} className="absolute inset-0 origin-center">
            {imgError ? (
              <div className="w-full h-full bg-gradient-to-b from-[#0a1a0a] via-forest/30 to-ink" />
            ) : (
              <img
                src={building.image}
                alt={building.alt}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-center"
              />
            )}
          </motion.div>

          {/* Dark overlay */}
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"
          />

          {/* Leaf silhouette decorative overlays */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute -left-8 top-0 w-1/3 h-full opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse at left center, rgba(47,79,62,0.8) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute -right-8 top-0 w-1/3 h-full opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse at right center, rgba(47,79,62,0.8) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Hotspot labels */}
          {building.hotspots.map((spot, i) => (
            <motion.div
              key={spot.label}
              className="absolute z-10"
              style={{ left: spot.x, top: spot.y, transform: "translate(-50%,-50%)" }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.7 }}
            >
              <div className="flex items-center gap-2 group cursor-default">
                {/* Pulsing dot */}
                <div className="relative flex items-center justify-center">
                  <span className="absolute inline-flex h-4 w-4 rounded-full bg-gold/30 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
                </div>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-warm-white/90 bg-ink/60 backdrop-blur-sm px-2 py-1 rounded whitespace-nowrap border border-gold/20">
                  {spot.label}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Bottom gradient fade to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ink to-transparent" />
        </div>
      </div>

      <div className="section-divider" />
    </section>
  );
}
