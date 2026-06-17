"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Room } from "@/lib/rooms";
import CTAButton from "@/components/CTAButton";

type RoomExperienceModalProps = {
  room: Room | null;
  onClose: () => void;
};

export default function RoomExperienceModal({ room, onClose }: RoomExperienceModalProps) {
  return (
    <AnimatePresence>
      {room && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end md:items-center justify-center px-0 md:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={room.experienceTitle}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full md:max-w-2xl max-h-[88vh] overflow-y-auto rounded-t-3xl md:rounded-3xl border border-[rgba(201,164,92,0.35)] bg-[rgba(10,8,6,0.92)] p-7 md:p-10 shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-bronze/40 text-fog hover:border-gold hover:text-gold transition-colors duration-300"
            >
              ✕
            </button>

            <span className="text-xs uppercase tracking-[0.35em] text-bronze">
              {room.title}
            </span>
            <h3 className="font-display text-3xl md:text-4xl text-gold-gradient mt-2 mb-6">
              {room.experienceTitle}
            </h3>

            <ul className="space-y-3 mb-8">
              {room.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm md:text-base text-fog leading-relaxed">
                  <span className="mt-1 text-gold">◆</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl border border-gold/20 bg-gold/5 p-5 mb-8">
              <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Best For</h4>
              <p className="text-sm text-fog leading-relaxed">{room.bestFor}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <CTAButton href="#inquiry" onClick={onClose}>
                Konsultasikan Ruang Ini
              </CTAButton>
              <button
                type="button"
                onClick={onClose}
                className="text-xs uppercase tracking-[0.25em] text-fog hover:text-gold transition-colors duration-300"
              >
                Lanjutkan Menjelajah
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
