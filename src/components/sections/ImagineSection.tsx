"use client";

import { motion } from "framer-motion";
import CTAButton from "@/components/CTAButton";
import Gunungan from "@/components/decorations/Gunungan";

export default function ImagineSection() {
  return (
    <section
      id="imagine"
      className="relative bg-gradient-to-b from-bark via-[#1a120c] to-ink py-28 md:py-40 px-6 text-center overflow-hidden"
    >
      <Gunungan className="absolute left-1/2 -translate-x-1/2 top-0 h-[60vh] text-gold/5" />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-bronze">
          Before You Continue
        </span>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-gold-gradient mt-4 mb-6 leading-tight">
          What if your organization walked this journey too?
        </h2>
        <p className="text-fog text-base md:text-lg leading-relaxed mb-10">
          Imagine your leaders standing in the Pendopo. Imagine your executives
          reflecting at the mountain retreat. Imagine your culture transformed —
          not by a single training, but by a journey designed for you.
        </p>
        <CTAButton href="#inquiry">Begin Your Organization&apos;s Journey</CTAButton>
      </motion.div>
    </section>
  );
}
