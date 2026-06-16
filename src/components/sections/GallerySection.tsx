"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteContent, type GalleryImage } from "@/data/siteContent";

function GalleryItem({
  item,
  index,
  featured,
}: {
  item: GalleryImage;
  index: number;
  featured?: boolean;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-sm ${
        featured ? "row-span-2 col-span-1 md:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "aspect-[4/3]" : "aspect-square"}`}>
        {imgError ? (
          <div
            className={`absolute inset-0 ${
              featured
                ? "bg-gradient-to-br from-forest/30 via-[#0a120a] to-ink"
                : "bg-gradient-to-b from-[#0a0f0a] to-ink"
            }`}
          />
        ) : (
          <img
            src={item.image}
            alt={item.alt}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            style={{
              filter: featured
                ? "grayscale(30%) brightness(0.65) contrast(1.05)"
                : "grayscale(55%) brightness(0.6) contrast(1.08)",
            }}
          />
        )}

        {/* Featured warm gold/green overlay */}
        {featured && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#003B13]/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        )}

        {/* Standard dark overlay */}
        {!featured && (
          <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/20 transition-colors duration-400" />
        )}

        {/* Title on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <p className="text-xs uppercase tracking-[0.25em] text-warm-white/90">{item.title}</p>
        </div>

        {/* Nusantara ornament corner on featured */}
        {featured && (
          <div className="absolute top-4 right-4 opacity-30 pointer-events-none">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="#d4af37" strokeWidth="0.8" />
              <circle cx="16" cy="16" r="8" stroke="#d4af37" strokeWidth="0.6" />
              <circle cx="16" cy="16" r="3" fill="#d4af37" opacity="0.6" />
              <line x1="16" y1="2" x2="16" y2="6" stroke="#d4af37" strokeWidth="0.6" />
              <line x1="16" y1="26" x2="16" y2="30" stroke="#d4af37" strokeWidth="0.6" />
              <line x1="2" y1="16" x2="6" y2="16" stroke="#d4af37" strokeWidth="0.6" />
              <line x1="26" y1="16" x2="30" y2="16" stroke="#d4af37" strokeWidth="0.6" />
            </svg>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  const { gallery } = siteContent;
  const featured = gallery.images.find((img) => "featured" in img && img.featured);
  const rest = gallery.images.filter((img) => !("featured" in img && img.featured));

  return (
    <section id="gallery" className="relative w-full py-28 overflow-hidden">
      <div className="section-divider mb-20" />

      <div className="absolute inset-0 batik-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-bronze">
            {gallery.eyebrow}
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-6xl text-gold-gradient">
            {gallery.title}
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-fog/65 text-base md:text-lg leading-relaxed">
            {gallery.subtitle}
          </p>
        </motion.div>

        {/* Gallery grid — featured image spans 2 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {featured && <GalleryItem item={featured} index={0} featured />}
          {rest.map((item, i) => (
            <GalleryItem key={item.image} item={item} index={i + 1} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-14 text-center"
        >
          <a
            href={gallery.ctaHref}
            className="inline-block rounded-full border border-gold px-10 py-4 text-xs uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-ink transition-colors duration-500"
          >
            {gallery.cta}
          </a>
        </motion.div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
}
