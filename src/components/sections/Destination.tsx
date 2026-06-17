"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Destination() {
  return (
    <section id="destination" className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <Image
        src="/images/building.jpg"
        alt="Wikasatrian building"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,8,6,0.92)] via-[rgba(10,8,6,0.45)] to-[rgba(10,8,6,0.2)]" />

      <div className="relative z-10 flex h-full items-end px-6 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl rounded-2xl border border-[rgba(201,164,92,0.35)] bg-[rgba(10,8,6,0.72)] backdrop-blur-md p-7 md:p-10 mx-auto"
        >
          <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-bronze">
            Tentang Wikasatrian
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-gold-gradient mt-3 mb-5">
            Sebuah Destinasi Kepemimpinan
          </h2>
          <p className="text-fog text-base md:text-lg leading-relaxed">
            Wikasatrian menghadirkan lingkungan pembelajaran yang menyatu
            dengan alam, budaya, dan pengalaman kepemimpinan. Setiap ruang
            dirancang untuk mendukung refleksi, kolaborasi, pembelajaran,
            dan transformasi.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
