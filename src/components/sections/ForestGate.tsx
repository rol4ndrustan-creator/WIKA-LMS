"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import MountainRange from "@/components/decorations/MountainRange";
import Gunungan from "@/components/decorations/Gunungan";
import { siteContent } from "@/data/siteContent";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

export default function ForestGate() {
  const ref = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const mountainsY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const fogY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const { hero } = siteContent;

  return (
    <section
      id="forest-gate"
      ref={ref}
      className="relative h-[140vh] w-full overflow-hidden bg-gradient-to-b from-[#11140f] via-bark to-ink"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Real photo background layer — shown when image loads */}
        {!imgError && (
          <motion.div style={{ y: imgY }} className="absolute inset-0 w-full h-[110%]">
            <img
              src={hero.backgroundImage}
              alt="Forest path leading to Wikasatrian"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-center"
              style={{ filter: "brightness(0.35) saturate(0.7)" }}
            />
            {/* Dark green forest overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#003B13]/60 via-[#0b0b0a]/30 to-[#0b0b0a]/90" />
          </motion.div>
        )}

        {/* 3D sparkles layer on top */}
        <HeroScene />

        <motion.div
          style={{ y: mountainsY }}
          className="absolute bottom-0 left-0 w-full text-forest"
        >
          <MountainRange className="w-full h-[40vh] md:h-[50vh]" />
        </motion.div>

        <motion.div style={{ y: fogY }} className="absolute inset-0 fog-overlay" />

        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6"
        >
          <Gunungan className="h-28 md:h-40 text-bronze/70 mb-6" />
          <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-bronze mb-4">
            The Journey Begins
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-gold-gradient leading-tight">
            Welcome to Wikasatrian
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-fog leading-relaxed">
            Step through the gate of the forest. Morning mist, the call of
            distant birds, and a path of stone lead you toward the Pendopo —
            the heart of leadership.
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="mt-16 flex flex-col items-center gap-2 text-fog/60"
          >
            <span className="text-[10px] uppercase tracking-[0.35em]">Scroll to walk</span>
            <span className="h-8 w-px bg-bronze/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
