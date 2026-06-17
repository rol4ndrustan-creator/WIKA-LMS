"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export default function VirtualTour() {
  const [open, setOpen] = useState(false);

  return (
    <section id="virtual-tour" className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      <Image
        src="/images/wikasatrian/tour-360.jpg"
        alt="Wikasatrian virtual tour"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[rgba(10,8,6,0.65)]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-bronze">
            Pengalaman Digital
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-gold-gradient mt-3 mb-6">
            Rasakan Pengalaman Digital Wikasatrian
          </h2>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-3 rounded-full bg-gold/90 text-ink border border-gold px-8 py-4 text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500"
          >
            Mulai Jelajahi
            <span aria-hidden="true">→</span>
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-end md:items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full md:max-w-lg rounded-t-3xl md:rounded-3xl border border-[rgba(201,164,92,0.35)] bg-[rgba(10,8,6,0.92)] p-7 md:p-10"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-bronze/40 text-fog hover:border-gold hover:text-gold transition-colors duration-300"
              >
                ✕
              </button>

              <h3 className="font-display text-2xl md:text-3xl text-gold-gradient mb-6">
                Rasakan Pengalaman Digital Wikasatrian
              </h3>

              <ul className="space-y-3 mb-8 text-sm md:text-base text-fog leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">◆</span>
                  <span>Jelajahi ruang secara visual</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">◆</span>
                  <span>Pilih ruangan sesuai kebutuhan program</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">◆</span>
                  <span>Rasakan suasana Wikasatrian sebelum berkonsultasi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">◆</span>
                  <span>Hubungi tim untuk tur langsung atau konsultasi program</span>
                </li>
              </ul>

              <CTAButton href="#inquiry" onClick={() => setOpen(false)}>
                Hubungi Tim Kami
              </CTAButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
