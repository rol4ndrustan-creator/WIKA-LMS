"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import BatikDivider from "@/components/decorations/BatikDivider";

type Package = {
  step: string;
  name: string;
  description: string;
  duration: string;
  suitableRoom: string;
  includes: string[];
};

const packages: Package[] = [
  {
    step: "01",
    name: "Essential Journey",
    description: "Pengalaman dasar untuk pengenalan filosofi dan ruang Wikasatrian.",
    duration: "1 Hari",
    suitableRoom: "Ruang Giri Unggul",
    includes: ["Penggunaan 1 ruang fungsi", "Coffee break", "Akses area outdoor"],
  },
  {
    step: "02",
    name: "Collaborative Learning",
    description: "Dirancang untuk membangun kolaborasi dan kekompakan tim.",
    duration: "2 Hari 1 Malam",
    suitableRoom: "Ruang Giri Sasana",
    includes: ["Penginapan", "Full board meals", "2 ruang fungsi", "Fasilitator pendamping"],
  },
  {
    step: "03",
    name: "Leadership Development",
    description: "Perjalanan kepemimpinan yang mendalam dengan kurikulum terstruktur.",
    duration: "3 Hari 2 Malam",
    suitableRoom: "Ruang Giri Wijaya",
    includes: ["Penginapan premium", "Kurikulum kepemimpinan", "Asesmen individu", "Sesi refleksi budaya"],
  },
  {
    step: "04",
    name: "Camp Experience",
    description: "Petualangan luar ruang yang membangun ketahanan dan kerja tim.",
    duration: "2 Hari 1 Malam",
    suitableRoom: "Area Outdoor",
    includes: ["Camping ground", "Outbound activities", "Api unggun", "Makan ala alam terbuka"],
  },
  {
    step: "05",
    name: "Transformation Journey",
    description: "Program transformasi penuh — perjalanan kepemimpinan paling komprehensif.",
    duration: "5 Hari 4 Malam",
    suitableRoom: "Seluruh Fasilitas",
    includes: ["Seluruh fasilitas Wikasatrian", "Program custom end-to-end", "Coaching eksekutif", "Laporan transformasi"],
  },
];

export default function ProgramPackages() {
  return (
    <section id="programs" className="relative py-28 md:py-36 px-6 overflow-hidden">
      <Image
        src="/images/wikasatrian/packages-bg.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,11,10,0.92)] via-[rgba(11,11,10,0.88)] to-[rgba(11,11,10,0.96)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Paket Program Wikasatrian"
          title="Pengalaman Belajar, Bertumbuh, dan Bertransformasi"
          subtitle="Pilih perjalanan yang sesuai dengan tujuan organisasi Anda — atau rancang paket khusus bersama tim kami."
        />

        <BatikDivider className="my-14" />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: (index % 5) * 0.08 }}
              className="rounded-2xl border border-bronze/25 bg-ink/30 p-6 backdrop-blur-sm hover:border-gold/50 transition-colors duration-500 flex flex-col"
            >
              <span className="font-display text-3xl text-gold/70 mb-3">{pkg.step}</span>
              <h3 className="font-display text-xl text-warm-white mb-2">{pkg.name}</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-bronze mb-1">{pkg.duration}</p>
              <p className="text-xs text-fog/70 mb-3">Ruang: {pkg.suitableRoom}</p>
              <p className="text-sm text-fog leading-relaxed mb-4">{pkg.description}</p>
              <ul className="space-y-1.5 text-xs text-fog mb-5">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#inquiry"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-bronze/40 px-4 py-2.5 text-xs uppercase tracking-[0.15em] text-fog hover:border-gold hover:text-gold transition-colors duration-300"
              >
                Konsultasikan Program
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl border border-gold/20 bg-gold/5 p-8 mb-16 text-center"
        >
          <h4 className="text-xs uppercase tracking-[0.35em] text-gold mb-3">
            Flexible & Custom Package
          </h4>
          <p className="text-fog text-sm md:text-base max-w-2xl mx-auto">
            Setiap organisasi punya kebutuhan berbeda. Tim kami siap merancang paket khusus
            yang menyesuaikan durasi, fasilitas, dan kurikulum sesuai tujuan transformasi Anda.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <CTAButton href="#inquiry">Konsultasikan Program Anda</CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
