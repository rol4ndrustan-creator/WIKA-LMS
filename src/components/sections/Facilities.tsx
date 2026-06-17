"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import BatikDivider from "@/components/decorations/BatikDivider";
import RoomExperienceModal from "@/components/RoomExperienceModal";
import { rooms } from "@/lib/rooms";

export default function Facilities() {
  const [selectedId, setSelectedId] = useState(rooms[0].id);
  const [experienceId, setExperienceId] = useState<string | null>(null);

  const selectedRoom = rooms.find((room) => room.id === selectedId) ?? rooms[0];
  const experienceRoom = rooms.find((room) => room.id === experienceId) ?? null;

  return (
    <section id="facilities" className="relative bg-gradient-to-b from-ink via-[#150f0a] to-ink py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Jelajahi Wikasatrian"
          title="Ruang yang Membentuk Pengalaman"
          subtitle="Pilih ruang untuk melihat suasananya, lalu rasakan pengalaman lengkap yang ditawarkan setiap tempat."
        />

        <BatikDivider className="my-14" />

        <div className="rounded-3xl border border-[rgba(201,164,92,0.35)] overflow-hidden">
          <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRoom.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={selectedRoom.image}
                  alt={selectedRoom.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,8,6,0.92)] via-[rgba(10,8,6,0.25)] to-transparent" />

            <motion.div
              key={`${selectedRoom.id}-panel`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute bottom-0 left-0 w-full p-6 md:p-10"
            >
              <div className="max-w-2xl rounded-2xl border border-[rgba(201,164,92,0.35)] bg-[rgba(10,8,6,0.72)] backdrop-blur-md p-6 md:p-8">
                <span className="text-xs uppercase tracking-[0.3em] text-bronze">
                  {selectedRoom.subtitle}
                </span>
                <h3 className="font-display text-3xl md:text-4xl text-warm-white mt-2 mb-4">
                  {selectedRoom.title}
                </h3>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-fog mb-4 uppercase tracking-wide">
                  <span>
                    Kapasitas: <span className="text-gold">{selectedRoom.capacity}</span>
                  </span>
                  <span>Fungsi: <span className="text-gold">{selectedRoom.functions.join(", ")}</span></span>
                </div>

                <p className="text-sm md:text-base text-fog leading-relaxed mb-6">
                  {selectedRoom.shortDescription}
                </p>

                <button
                  type="button"
                  onClick={() => setExperienceId(selectedRoom.id)}
                  className="inline-flex items-center gap-3 rounded-full bg-gold/90 text-ink border border-gold px-7 py-3.5 text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500"
                >
                  Rasakan Pengalaman Ruang
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </motion.div>
          </div>

          <div className="flex gap-2 overflow-x-auto bg-[rgba(10,8,6,0.85)] px-4 py-4 md:px-6 md:justify-center scrollbar-none">
            {rooms.map((room) => (
              <button
                key={room.id}
                type="button"
                onClick={() => setSelectedId(room.id)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-xs md:text-sm uppercase tracking-[0.15em] transition-colors duration-300 ${
                  room.id === selectedRoom.id
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-bronze/30 text-fog hover:border-gold/60 hover:text-warm-white"
                }`}
              >
                {room.title.replace("Ruang ", "").replace("Area ", "")}
              </button>
            ))}
          </div>
        </div>
      </div>

      <RoomExperienceModal room={experienceRoom} onClose={() => setExperienceId(null)} />
    </section>
  );
}
