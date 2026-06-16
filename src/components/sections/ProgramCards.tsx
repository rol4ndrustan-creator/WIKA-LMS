"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteContent, type Program } from "@/data/siteContent";

function ProgramCard({ program, index }: { program: Program; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-sm aspect-[3/4] cursor-pointer"
    >
      {/* Image */}
      {imgError ? (
        <div className="absolute inset-0 bg-gradient-to-b from-forest/40 to-ink" />
      ) : (
        <img
          src={program.image}
          alt={program.alt}
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ filter: "saturate(0.6) brightness(0.7)" }}
        />
      )}

      {/* Permanent dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />

      {/* Hover overlay reveal */}
      <div className="absolute inset-0 bg-[#003B13]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Category tag */}
      <div className="absolute top-5 left-5 z-10">
        <span className="text-[9px] uppercase tracking-[0.3em] text-gold border border-gold/40 px-2 py-1 rounded-full bg-ink/40 backdrop-blur-sm">
          {program.category}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
        <h3 className="font-display text-2xl md:text-3xl text-warm-white leading-tight">
          {program.title}
        </h3>

        {/* Description — slides up on hover */}
        <div className="overflow-hidden">
          <p className="mt-3 text-fog/75 text-sm leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            {program.description}
          </p>
        </div>

        <a
          href={program.href}
          className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold group-hover:text-warm-white transition-colors duration-300"
        >
          {program.cta}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

export default function ProgramCards() {
  return (
    <section id="programs" className="relative w-full py-28 overflow-hidden">
      <div className="section-divider mb-20" />

      {/* Batik pattern background hint */}
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
            Choose Your Path
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-6xl text-gold-gradient">
            Every Journey Needs a Direction
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-fog/65 text-base md:text-lg leading-relaxed">
            Explore programs designed to shape clarity, character, and capability — wherever you are in your leadership journey.
          </p>
        </motion.div>

        {/* Program cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {siteContent.programs.map((program, i) => (
            <ProgramCard key={program.id} program={program} index={i} />
          ))}
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
}
