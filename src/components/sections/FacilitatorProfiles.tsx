"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteContent, type Facilitator } from "@/data/siteContent";

function ProfileCard({ person, index }: { person: Facilitator; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-sm"
    >
      {/* Portrait image — B&W treatment */}
      <div className="aspect-[3/4] relative overflow-hidden bg-ink">
        {imgError ? (
          <div className="absolute inset-0 bg-gradient-to-b from-forest/20 to-ink flex items-end p-6">
            <span className="text-[10px] uppercase tracking-widest text-fog/30">Portrait</span>
          </div>
        ) : (
          <img
            src={person.image}
            alt={person.alt}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            style={{ filter: "grayscale(80%) brightness(0.75) contrast(1.1)" }}
          />
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#003B13]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-3 p-6">
          <span className="text-xs uppercase tracking-[0.3em] text-fog/80">
            {person.specialization}
          </span>
        </div>

        {/* Green dot accent */}
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-forest border border-gold/30 group-hover:bg-gold transition-colors duration-300" />
      </div>

      {/* Name & title */}
      <div className="pt-5 pb-2">
        <h3 className="font-display text-xl text-warm-white">{person.name}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-bronze">{person.title}</p>
        <p className="mt-2 text-sm text-fog/55 leading-relaxed">{person.specialization}</p>
      </div>
    </motion.div>
  );
}

export default function FacilitatorProfiles() {
  const { facilitators } = siteContent;

  return (
    <section id="facilitators" className="relative w-full py-28 overflow-hidden">
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
            {facilitators.eyebrow}
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-6xl text-gold-gradient">
            {facilitators.title}
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-fog/65 text-base md:text-lg leading-relaxed">
            {facilitators.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {facilitators.people.map((person, i) => (
            <ProfileCard key={person.name} person={person} index={i} />
          ))}
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
}
