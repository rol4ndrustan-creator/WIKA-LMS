"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
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
          className="fixed inset-0 z-[110] flex items-end md:items-center justify-center px-0 md:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-[rgba(8,6,4,0.82)] backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={room.experienceTitle}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full md:max-w-xl max-h-[88vh] overflow-y-auto rounded-t-3xl md:rounded-3xl border border-[rgba(201,164,92,0.35)] bg-[rgba(8,6,4,0.92)] shadow-2xl"
          >
            <div className="relative h-36 md:h-44 w-full overflow-hidden rounded-t-3xl">
              <Image src={room.image} alt={room.title} fill className="object-cover opacity-60" sizes="600px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,6,4,0.96)] via-[rgba(8,6,4,0.3)] to-[rgba(8,6,4,0.5)]" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-bronze/40 bg-[rgba(8,6,4,0.6)] text-fog hover:border-gold hover:text-gold transition-colors duration-300"
              >
                ✕
              </button>
              <span className="absolute left-5 bottom-3 text-[11px] uppercase tracking-[0.3em] text-bronze">
                {room.title}
              </span>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="font-display text-2xl md:text-3xl text-gold-gradient mb-3">
                {room.experienceTitle}
              </h3>
              <p className="text-sm text-fog leading-relaxed mb-6">{room.experienceNarrative}</p>

              <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold mb-2.5">Keunggulan</h4>
              <ul className="space-y-2 mb-6">
                {room.keyHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5 text-sm text-fog leading-relaxed">
                    <span className="mt-0.5 text-gold text-xs">◆</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold mb-2.5">Aktivitas yang Disarankan</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {room.suggestedActivities.map((activity) => (
                  <span
                    key={activity}
                    className="rounded-full border border-bronze/30 px-3 py-1.5 text-xs text-fog/90"
                  >
                    {activity}
                  </span>
                ))}
              </div>

              <div className="rounded-2xl border border-gold/20 bg-gold/5 p-4 mb-7">
                <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold mb-1.5">Best For</h4>
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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
