"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import BatikDivider from "@/components/decorations/BatikDivider";

const values = [
  { label: "Ketuhanan", glyph: "◆" },
  { label: "Kemanusiaan", glyph: "◆" },
  { label: "Alam", glyph: "◆" },
  { label: "Budhi Luhur", glyph: "✦" },
  { label: "Learning", glyph: "◇" },
  { label: "Leadership", glyph: "◇" },
  { label: "Transformation", glyph: "◇" },
];

export default function PhilosophyValues() {
  return (
    <section id="philosophy-values" className="relative bg-ink py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Nilai Dasar"
          title="Fondasi Wikasatrian"
          subtitle="Tujuh nilai yang menjadi akar dari setiap program dan ruang di Wikasatrian."
        />

        <BatikDivider className="my-12" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {values.map((value, index) => (
            <motion.div
              key={value.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.06 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-bronze/25 bg-bark/20 px-4 py-7 text-center hover:border-gold/50 transition-colors duration-500"
            >
              <span className="text-2xl text-gold">{value.glyph}</span>
              <span className="font-display text-base md:text-lg text-warm-white">
                {value.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
