"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import BatikDivider from "@/components/decorations/BatikDivider";

type Room = {
  id: string;
  name: string;
  tagline: string;
  image: string;
  capacity: string;
  area: string;
  setup: string;
  features: string[];
};

const rooms: Room[] = [
  {
    id: "giri-wijaya",
    name: "Ruang Giri Wijaya",
    tagline: "Pusat Aktivitas Besar & Auditorium",
    image: "/images/wikasatrian/giri-wijaya-1.jpg",
    capacity: "300 orang",
    area: "450 m²",
    setup: "Theater, Classroom, Banquet",
    features: ["Sistem audio-visual modern", "Pencahayaan alami melimpah", "Konfigurasi tempat duduk fleksibel"],
  },
  {
    id: "giri-sasana",
    name: "Ruang Giri Sasana",
    tagline: "Pusat Pelatihan & Seminar",
    image: "/images/wikasatrian/giri-sasana-1.jpg",
    capacity: "200 orang",
    area: "300 m²",
    setup: "Meeting, Training, Workshop",
    features: ["Akustik ruang terkalibrasi", "Furnitur kayu khas Jawa", "Suasana hangat dan fokus"],
  },
  {
    id: "giri-unggul",
    name: "Ruang Giri Unggul",
    tagline: "Ruang Kelas Pertemuan Multifungsi",
    image: "/images/wikasatrian/giri-unggul.jpg",
    capacity: "100 orang",
    area: "200 m²",
    setup: "Meeting, Training, Workshop",
    features: ["Pencahayaan alami", "Tata letak kelas fleksibel", "Cocok untuk diskusi kelompok kecil"],
  },
  {
    id: "giri-budaya",
    name: "Ruang Giri Budaya",
    tagline: "Kelas Diskusi & Kegiatan Seni dan Kebudayaan",
    image: "/images/wikasatrian/giri-budaya.jpg",
    capacity: "80 orang",
    area: "150 m²",
    setup: "Gathering, Seni, Workshop",
    features: ["Dekorasi budaya Nusantara otentik", "Suasana intim dan reflektif", "Ideal untuk simbolisasi budaya"],
  },
  {
    id: "area-outdoor",
    name: "Area Outdoor",
    tagline: "Perkemahan & Wana Krena",
    image: "/images/wikasatrian/area-outdoor.jpg",
    capacity: "150 orang",
    area: "Lahan terbuka",
    setup: "Perkemahan, Outbound, Team Building, Gathering",
    features: ["Dikelilingi hutan asri", "Api unggun & camping ground", "Pengalaman immersive di alam"],
  },
  {
    id: "ruang-kebugaran",
    name: "Ruang Kebugaran",
    tagline: "Sehat, Bugar, Produktif",
    image: "/images/wikasatrian/ruang-kebugaran.jpg",
    capacity: "30 orang",
    area: "120 m²",
    setup: "Gym, Indoor Pool, Yoga & Relaksasi",
    features: ["Kolam renang indoor", "Peralatan kebugaran lengkap", "Area relaksasi pemandangan hutan"],
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="relative bg-gradient-to-b from-ink via-[#150f0a] to-ink py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Fasilitas Wikasatrian"
          title="Ruang yang Membentuk Pengalaman"
          subtitle="Setiap ruang dirancang untuk satu tujuan: menjadikan perjalanan kepemimpinan Anda nyata, imersif, dan tak terlupakan."
        />

        <BatikDivider className="my-14" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              id={room.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: (index % 2) * 0.1 }}
              className="group rounded-2xl border border-bronze/25 bg-ink/30 overflow-hidden backdrop-blur-sm hover:border-gold/50 transition-colors duration-500"
            >
              <div className="relative h-56 md:h-64 w-full overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              </div>

              <div className="p-7">
                <span className="text-xs uppercase tracking-[0.3em] text-bronze">
                  {room.tagline}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-warm-white mt-2 mb-4">
                  {room.name}
                </h3>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-fog mb-5 uppercase tracking-wide">
                  <span>Kapasitas: <span className="text-gold">{room.capacity}</span></span>
                  <span>Luas: <span className="text-gold">{room.area}</span></span>
                </div>

                <p className="text-sm text-fog mb-4">
                  <span className="text-bronze">Setup:</span> {room.setup}
                </p>

                <ul className="space-y-2 text-sm text-fog">
                  {room.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-gold mt-1">◆</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
