"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import RoomExperienceModal from "@/components/RoomExperienceModal";
import FunctionIcon from "@/components/decorations/FunctionIcon";
import { rooms } from "@/lib/rooms";

type View = "lobby" | string;

const transitionLabels: Record<string, string> = {
  "giri-wijaya": "Memasuki Ruang Giri Wijaya...",
  "giri-sasana": "Memasuki Ruang Giri Sasana...",
  "giri-unggul": "Memasuki Ruang Giri Unggul...",
  "giri-budaya": "Memasuki Ruang Giri Budaya...",
  outdoor: "Menuju Area Outdoor...",
  "kebugaran-relaksasi": "Menuju Ruang Kebugaran & Relaksasi...",
};

const easing = [0.22, 1, 0.36, 1] as const;

export default function Facilities() {
  const [view, setView] = useState<View>("lobby");
  const [experienceId, setExperienceId] = useState<string | null>(null);
  const [transitioning, setTransitioning] = useState<string | null>(null);

  const activeRoom = rooms.find((room) => room.id === view) ?? null;
  const experienceRoom = rooms.find((room) => room.id === experienceId) ?? null;
  const activeIndex = activeRoom ? rooms.findIndex((room) => room.id === activeRoom.id) : -1;

  function goTo(target: View) {
    if (target === view) return;
    const label = target === "lobby" ? "Kembali ke Lobi Utama..." : transitionLabels[target];
    setTransitioning(label ?? null);
    window.setTimeout(() => {
      setView(target);
      setTransitioning(null);
    }, 650);
  }

  function goToOffset(offset: number) {
    if (activeIndex === -1) return;
    const nextIndex = (activeIndex + offset + rooms.length) % rooms.length;
    goTo(rooms[nextIndex].id);
  }

  return (
    <section
      id="facilities"
      className="room-explorer relative h-[100vh] min-h-[640px] w-full overflow-hidden bg-[#0E0B08]"
    >
      <AnimatePresence mode="wait">
        {view === "lobby" ? (
          <LobbyView key="lobby" onSelectRoom={goTo} />
        ) : (
          activeRoom && (
            <RoomView
              key={activeRoom.id}
              room={activeRoom}
              onBackToLobby={() => goTo("lobby")}
              onPrev={() => goToOffset(-1)}
              onNext={() => goToOffset(1)}
              onSelectRoom={goTo}
              onOpenExperience={() => setExperienceId(activeRoom.id)}
            />
          )
        )}
      </AnimatePresence>

      <AnimatePresence>
        {transitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-[100] flex items-center justify-center bg-[#0E0B08]"
          >
            <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-[#C9A45C]">
              {transitioning}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <RoomExperienceModal room={experienceRoom} onClose={() => setExperienceId(null)} />
    </section>
  );
}

function LobbyView({ onSelectRoom }: { onSelectRoom: (id: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: easing }}
      className="absolute inset-0"
    >
      <motion.div
        initial={{ scale: 1.03 }}
        animate={{ scale: 1.07 }}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0"
      >
        <Image src="/images/lobby.jpg" alt="Lobi Utama Wikasatrian" fill priority className="object-cover" sizes="100vw" />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(5,4,3,0.88), rgba(5,4,3,0.20), rgba(5,4,3,0.72)), linear-gradient(to top, rgba(5,4,3,0.92), transparent 58%)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: easing }}
          className="max-w-xl mb-10"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#C9A45C]">
            Jelajahi Wikasatrian
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-gold-gradient mt-3 mb-4">
            Lobi Utama Wikasatrian
          </h2>
          <p className="text-sm md:text-base text-[#B8AA95] leading-relaxed">
            Mulai perjalanan Anda dari lobi utama dan pilih ruang yang ingin dijelajahi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easing }}
          className="flex flex-wrap justify-center gap-3 max-w-3xl"
        >
          {rooms.map((room) => (
            <button
              key={room.id}
              type="button"
              onClick={() => onSelectRoom(room.id)}
              className="group flex flex-col items-start gap-1 rounded-xl border border-[rgba(201,164,92,0.35)] bg-[rgba(8,6,4,0.55)] backdrop-blur-sm px-4 py-3 text-left transition-all duration-300 hover:border-[#C9A45C] hover:bg-[rgba(8,6,4,0.75)]"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A45C]">
                {room.shortTitle}
              </span>
              <span className="text-xs text-[#B8AA95] group-hover:text-[#F4EBDD] transition-colors duration-300">
                {room.capacity}
              </span>
            </button>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

function RoomView({
  room,
  onBackToLobby,
  onPrev,
  onNext,
  onSelectRoom,
  onOpenExperience,
}: {
  room: (typeof rooms)[number];
  onBackToLobby: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelectRoom: (id: string) => void;
  onOpenExperience: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: easing }}
      className="absolute inset-0"
    >
      <motion.div
        initial={{ scale: 1.03 }}
        animate={{ scale: 1.07 }}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0"
      >
        <Image
          src={room.image}
          alt={room.title}
          fill
          priority
          className="object-cover"
          style={{ filter: "brightness(0.72) contrast(1.05) saturate(0.95)" }}
          sizes="100vw"
        />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(5,4,3,0.88), rgba(5,4,3,0.20), rgba(5,4,3,0.72)), linear-gradient(to top, rgba(5,4,3,0.92), transparent 58%)",
        }}
      />

      {/* Left sidebar (desktop) */}
      <div className="hidden md:flex absolute left-0 top-0 h-full w-[130px] flex-col items-center justify-between border-r border-[rgba(201,164,92,0.2)] bg-[rgba(8,6,4,0.45)] backdrop-blur-sm py-6 z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="font-display text-lg text-[#C9A45C]">W</span>
          <button
            type="button"
            onClick={onBackToLobby}
            className="flex flex-col items-center gap-1 text-[#B8AA95] hover:text-[#C9A45C] transition-colors duration-300"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(201,164,92,0.35)] text-xs">
              ⌂
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em]">Lobi</span>
          </button>
        </div>

        <div className="flex flex-col items-center gap-1 text-center px-2">
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#C9A45C]">Jelajahi Wikasatrian</span>
          <span className="text-[10px] text-[#F4EBDD] mt-1">{room.shortTitle}</span>
        </div>

        <button
          type="button"
          onClick={onBackToLobby}
          className="text-[9px] uppercase tracking-[0.2em] text-[#B8AA95] hover:text-[#C9A45C] transition-colors duration-300 rotate-0"
        >
          Kembali ke Lobi
        </button>
      </div>

      {/* Mobile top bar */}
      <div className="md:hidden absolute top-0 left-0 w-full flex items-center justify-between px-4 py-3 bg-[rgba(8,6,4,0.55)] backdrop-blur-sm z-20">
        <span className="font-display text-sm text-[#C9A45C]">Wikasatrian</span>
        <button
          type="button"
          onClick={onBackToLobby}
          className="text-[10px] uppercase tracking-[0.2em] text-[#B8AA95] hover:text-[#C9A45C] transition-colors duration-300"
        >
          ⌂ Lobi Utama
        </button>
      </div>

      {/* Lower-left title overlay */}
      <motion.div
        key={`${room.id}-title`}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: easing }}
        className="absolute left-6 md:left-[150px] bottom-24 md:bottom-28 z-10 max-w-md"
      >
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A45C]">Ruang</span>
        <h2 className="font-display text-3xl md:text-5xl text-[#F4EBDD] leading-tight mt-1 mb-2">
          {room.displayHeading}
        </h2>
        <p className="text-xs md:text-sm text-[#B8AA95] mb-3">{room.subtitle}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] md:text-xs text-[#B8AA95] uppercase tracking-wide">
          <span>Kapasitas: <span className="text-[#C9A45C]">{room.capacity}</span></span>
          <span>Best For: <span className="text-[#C9A45C]">{room.bestFor.split(",")[0]}</span></span>
        </div>
      </motion.div>

      {/* Right floating info panel */}
      <motion.div
        key={`${room.id}-panel`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: easing }}
        className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 z-10 w-[380px] max-h-[74vh] overflow-y-auto rounded-[20px] border border-[rgba(201,164,92,0.35)] bg-[rgba(8,6,4,0.72)] backdrop-blur-md p-5"
      >
        <RoomPanelContent room={room} onOpenExperience={onOpenExperience} onBackToLobby={onBackToLobby} />
      </motion.div>

      {/* Mobile bottom sheet */}
      <motion.div
        key={`${room.id}-mobile-panel`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: easing }}
        className="md:hidden absolute left-3 right-3 bottom-20 z-10 max-h-[42vh] overflow-y-auto rounded-2xl border border-[rgba(201,164,92,0.35)] bg-[rgba(8,6,4,0.78)] backdrop-blur-md p-4"
      >
        <RoomPanelContent room={room} onOpenExperience={onOpenExperience} onBackToLobby={onBackToLobby} compact />
      </motion.div>

      {/* Bottom room navigator */}
      <div className="absolute bottom-3 md:bottom-5 left-0 w-full flex items-center justify-center px-3 z-20">
        <div className="flex items-center gap-2 rounded-full border border-[rgba(201,164,92,0.35)] bg-[rgba(8,6,4,0.72)] backdrop-blur-md px-2 py-1.5 max-w-full overflow-x-auto scrollbar-none">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Ruang sebelumnya"
            className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full text-[#B8AA95] hover:text-[#C9A45C] transition-colors duration-300"
          >
            ‹
          </button>
          {rooms.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => onSelectRoom(r.id)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-[10px] md:text-xs uppercase tracking-[0.12em] transition-all duration-300 ${
                r.id === room.id
                  ? "bg-[#C9A45C]/15 text-[#C9A45C] shadow-[0_0_14px_rgba(201,164,92,0.35)] border border-[#C9A45C]/60"
                  : "text-[#B8AA95] hover:text-[#F4EBDD] border border-transparent"
              }`}
            >
              {r.shortTitle}
            </button>
          ))}
          <button
            type="button"
            onClick={onNext}
            aria-label="Ruang selanjutnya"
            className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full text-[#B8AA95] hover:text-[#C9A45C] transition-colors duration-300"
          >
            ›
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function RoomPanelContent({
  room,
  onOpenExperience,
  onBackToLobby,
  compact,
}: {
  room: (typeof rooms)[number];
  onOpenExperience: () => void;
  onBackToLobby: () => void;
  compact?: boolean;
}) {
  return (
    <div>
      <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#C9A45C] mb-2">Tentang Ruang</h4>
      <h3 className="font-display text-lg md:text-xl text-[#F4EBDD] mb-2">{room.title}</h3>
      <p className={`text-xs md:text-[13px] text-[#B8AA95] leading-relaxed mb-4 ${compact ? "line-clamp-3" : ""}`}>
        {room.description}
      </p>

      <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#C9A45C] mb-2">Fungsi Utama</h4>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {room.functions.map((fn) => (
          <span
            key={fn}
            className="flex items-center gap-1.5 rounded-full border border-[rgba(201,164,92,0.25)] px-2.5 py-1 text-[10px] text-[#B8AA95]"
          >
            <FunctionIcon label={fn} className="h-3 w-3 text-[#C9A45C]" />
            {fn}
          </span>
        ))}
      </div>

      {!compact && (
        <>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#C9A45C] mb-2">Filosofi Desain</h4>
          <ul className="space-y-2 mb-5">
            {room.designPhilosophy.map((item) => (
              <li key={item.title} className="text-xs text-[#B8AA95] leading-relaxed">
                <span className="text-[#F4EBDD]">{item.title}</span> — {item.description}
              </li>
            ))}
          </ul>
        </>
      )}

      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={onOpenExperience}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B8893A] text-[#17110C] px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] hover:bg-[#C9A45C] transition-colors duration-300"
        >
          Rasakan Pengalaman Ruang
          <span aria-hidden="true">→</span>
        </button>
        <button
          type="button"
          onClick={onBackToLobby}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(201,164,92,0.35)] px-5 py-2 text-[11px] uppercase tracking-[0.18em] text-[#B8AA95] hover:text-[#C9A45C] hover:border-[#C9A45C] transition-colors duration-300"
        >
          Kembali ke Lobi Utama
        </button>
      </div>
    </div>
  );
}
