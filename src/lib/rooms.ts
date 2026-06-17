export type Room = {
  id: string;
  title: string;
  shortTitle: string;
  displayHeading: string;
  subtitle: string;
  image: string;
  alternateImage?: string;
  capacity: string;
  functions: string[];
  bestFor: string;
  description: string;
  designPhilosophy: { title: string; description: string }[];
  experienceTitle: string;
  experienceNarrative: string;
  keyHighlights: string[];
  suggestedActivities: string[];
};

export const rooms: Room[] = [
  {
    id: "giri-wijaya",
    title: "Ruang Giri Wijaya",
    shortTitle: "Giri Wijaya",
    displayHeading: "GIRI WIJAYA",
    subtitle: "Pusat Aktivitas Besar & Auditorium",
    image: "/images/giri-wijaya-1.jpg",
    alternateImage: "/images/giri-wijaya-2.jpg",
    capacity: "±500 orang",
    functions: ["Meeting", "Training", "Seminar", "Workshop", "Auditorium"],
    bestFor: "Seminar besar, leadership forum, townhall, workshop besar, dan auditorium session.",
    description:
      "Giri Wijaya adalah gedung utama Wikasatrian dengan desain unik yang berfungsi sebagai pusat aktivitas besar dan auditorium. Dirancang untuk menghadirkan pengalaman belajar dan berdiskusi yang mendalam, meningkatkan fokus, kenyamanan, serta menghasilkan dampak maksimal dalam setiap kegiatan.",
    designPhilosophy: [
      { title: "Raga Semar", description: "Melambangkan kebijaksanaan, keterbukaan, dan kepemimpinan yang melayani." },
      { title: "Kapal Pinisi", description: "Melambangkan keberanian, ketangguhan, dan kemampuan berlayar menuju tujuan besar." },
      { title: "Ruang Berkembang", description: "Struktur melingkar dan terbuka menciptakan suasana belajar yang inklusif, interaktif, dan harmonis." },
      { title: "Ketenangan & Fokus", description: "Pencahayaan alami, material kayu, dan nuansa hangat mendukung konsentrasi dan kenyamanan optimal." },
    ],
    experienceTitle: "Pengalaman Ruang Giri Wijaya",
    experienceNarrative:
      "Rasakan pengalaman auditorium utama yang menghadirkan kegiatan berskala besar secara elegan, tertata, dan tetap dekat dengan suasana alam Wikasatrian.",
    keyHighlights: [
      "Auditorium besar untuk seminar dan keynote",
      "Cocok untuk kegiatan formal dan institusional",
      "Mendukung presentasi, diskusi panel, dan townhall",
      "Nuansa ruang luas, hangat, dan natural",
    ],
    suggestedActivities: ["Opening ceremony", "Leadership keynote", "Townhall meeting", "Seminar besar", "Panel discussion"],
  },
  {
    id: "giri-sasana",
    title: "Ruang Giri Sasana",
    shortTitle: "Giri Sasana",
    displayHeading: "GIRI SASANA",
    subtitle: "Pusat Pelatihan & Seminar",
    image: "/images/giri-sasana-1.jpg",
    alternateImage: "/images/giri-sasana-2.jpg",
    capacity: "±200 orang",
    functions: ["Meeting", "Training", "Seminar", "Workshop"],
    bestFor: "Training, seminar, leadership class, workshop, dan focused group discussion.",
    description:
      "Giri Sasana dirancang untuk pelatihan, seminar, diskusi, dan kegiatan pembelajaran yang lebih fokus. Ruang ini menghadirkan suasana yang lebih intim untuk mendorong interaksi, konsentrasi, dan kedekatan antar peserta.",
    designPhilosophy: [
      { title: "Interaksi Terarah", description: "Tata ruang mendukung dialog, diskusi, dan pembelajaran aktif." },
      { title: "Fokus Pembelajaran", description: "Suasana ruang membantu peserta menjaga konsentrasi selama sesi berlangsung." },
      { title: "Nuansa Hangat", description: "Material dan pencahayaan menciptakan pengalaman belajar yang nyaman." },
      { title: "Fleksibilitas Kegiatan", description: "Dapat digunakan untuk seminar, workshop, pelatihan, dan sesi refleksi." },
    ],
    experienceTitle: "Pengalaman Ruang Giri Sasana",
    experienceNarrative:
      "Rasakan suasana pelatihan yang lebih fokus, dekat, dan reflektif dengan dukungan ruang yang fleksibel untuk berbagai format pembelajaran.",
    keyHighlights: [
      "Cocok untuk pelatihan intensif dan seminar",
      "Mendukung diskusi kelompok dan sesi presentasi",
      "Suasana ruang membantu peserta tetap fokus",
      "Nuansa budaya memberikan pengalaman belajar yang berkesan",
    ],
    suggestedActivities: ["Leadership class", "Training session", "Workshop", "Group reflection", "Seminar"],
  },
  {
    id: "giri-unggul",
    title: "Ruang Giri Unggul",
    shortTitle: "Giri Unggul",
    displayHeading: "GIRI UNGGUL",
    subtitle: "Ruang Kelas Pertemuan Multifungsi",
    image: "/images/giri-unggul.jpg",
    capacity: "±200 orang",
    functions: ["Meeting", "Class", "Seminar", "Workshop", "Remote"],
    bestFor: "Classroom training, workshop, product briefing, collaboration session, dan remote-enabled meeting.",
    description:
      "Giri Unggul adalah ruang kelas pertemuan multifungsi yang dapat disesuaikan untuk berbagai kegiatan korporasi seperti meeting, training, seminar, dan workshop. Ruang ini mendukung pembelajaran yang rapi, produktif, dan kolaboratif.",
    designPhilosophy: [
      { title: "Kapasitas Hingga 200 Orang", description: "Mendukung kegiatan kelas dan pertemuan berskala menengah." },
      { title: "Tata Ruang Fleksibel", description: "Konfigurasi dapat disesuaikan dengan format acara." },
      { title: "Teknologi Modern", description: "Mendukung presentasi, proyeksi, dan kebutuhan pembelajaran." },
      { title: "Akses Mudah", description: "Lokasi strategis dan nyaman untuk peserta." },
    ],
    experienceTitle: "Pengalaman Ruang Giri Unggul",
    experienceNarrative:
      "Rasakan pengalaman ruang kelas modern yang mendukung interaksi, produktivitas, dan pembelajaran terstruktur dalam suasana Wikasatrian yang tenang.",
    keyHighlights: [
      "Layout kelas fleksibel",
      "Cocok untuk pembelajaran dan kolaborasi",
      "Mendukung workshop yang produktif",
      "Suasana nyaman untuk sesi kelas dan diskusi",
    ],
    suggestedActivities: ["Classroom training", "Product briefing", "Collaboration session", "Workshop", "Remote-enabled meeting"],
  },
  {
    id: "giri-budaya",
    title: "Ruang Giri Budaya",
    shortTitle: "Giri Budaya",
    displayHeading: "GIRI BUDAYA",
    subtitle: "Kelas Diskusi & Kegiatan Seni dan Kebudayaan",
    image: "/images/giri-budaya.jpg",
    capacity: "±50–80 orang",
    functions: ["Diskusi", "Kelas Budaya", "Seni & Budaya", "Workshop"],
    bestFor: "Cultural session, reflective discussion, value-based leadership, creative workshop, dan team reflection.",
    description:
      "Giri Budaya adalah ruang khusus yang didedikasikan untuk kelas diskusi, kegiatan seni, dan pengembangan budaya. Ruang ini menghadirkan suasana yang memperdalam refleksi, memperkaya wawasan, serta menanamkan nilai-nilai budaya bangsa.",
    designPhilosophy: [
      { title: "Eksplorasi Kreatif", description: "Mendorong berbagai kegiatan seni dan budaya yang produktif." },
      { title: "Ruang Untuk Tradisi", description: "Menyediakan ruang untuk memahami simbol, nilai, dan warisan budaya." },
      { title: "Partisipatif & Interaktif", description: "Mendorong peserta untuk berdiskusi dan terlibat aktif." },
      { title: "Pelestarian Budaya", description: "Menghadirkan pengalaman yang dekat dengan nilai Nusantara." },
    ],
    experienceTitle: "Pengalaman Ruang Giri Budaya",
    experienceNarrative:
      "Rasakan pengalaman belajar yang lebih dalam melalui suasana budaya, seni, dan refleksi yang membantu peserta memahami nilai dan makna kepemimpinan.",
    keyHighlights: [
      "Suasana budaya Indonesia yang kuat",
      "Cocok untuk diskusi reflektif dan pembelajaran nilai",
      "Mendukung kegiatan seni, budaya, dan storytelling",
      "Memberikan pengalaman belajar yang emosional dan bermakna",
    ],
    suggestedActivities: ["Cultural reflection", "Value-based leadership", "Storytelling session", "Creative workshop", "Team reflection"],
  },
  {
    id: "outdoor",
    title: "Area Outdoor",
    shortTitle: "Outdoor",
    displayHeading: "OUTDOOR",
    subtitle: "Perkemahan & Wana Arena",
    image: "/images/area-outdoor.jpg",
    capacity: "±50–80 orang",
    functions: ["Perkemahan", "Team Building", "Outbound", "Gathering", "Leadership Camp"],
    bestFor: "Leadership camp, team building, outbound, gathering, campfire session, dan nature-based learning.",
    description:
      "Area Outdoor merupakan kawasan pembelajaran di alam terbuka yang dirancang untuk menghadirkan pengalaman belajar yang lebih dekat dengan alam. Area ini cocok untuk team building, leadership camp, outbound, gathering, dan aktivitas reflektif.",
    designPhilosophy: [
      { title: "Menyatu dengan Alam Terbuka", description: "Menghadirkan suasana sejuk, asri, dan reflektif." },
      { title: "Wana Arena", description: "Area terbuka untuk kegiatan outdoor dan tantangan kelompok." },
      { title: "Campfire Experience", description: "Mendukung sesi malam, kebersamaan, dan refleksi." },
      { title: "Sahabat Semesta", description: "Membantu peserta memahami kepemimpinan melalui pengalaman langsung." },
    ],
    experienceTitle: "Pengalaman Area Outdoor",
    experienceNarrative:
      "Rasakan pembelajaran di alam terbuka yang menggabungkan tantangan, kebersamaan, refleksi, dan pengalaman langsung untuk membangun kepemimpinan.",
    keyHighlights: [
      "Pembelajaran berbasis alam terbuka",
      "Cocok untuk team building dan leadership challenge",
      "Mendukung aktivitas campfire, bonding, dan refleksi",
      "Membangun kebersamaan melalui pengalaman langsung",
    ],
    suggestedActivities: ["Leadership camp", "Team building", "Outbound", "Gathering", "Campfire reflection"],
  },
  {
    id: "kebugaran-relaksasi",
    title: "Ruang Kebugaran & Relaksasi",
    shortTitle: "Kebugaran",
    displayHeading: "KEBUGARAN & RELAKSASI",
    subtitle: "Sehat, Bugar, Produktif",
    image: "/images/ruang-kebugaran.jpg",
    capacity: "Fleksibel",
    functions: ["Fitness", "Pool", "Relaxation", "Recovery"],
    bestFor: "Wellness session, post-training recovery, informal bonding, relaxation, dan participant refreshment.",
    description:
      "Ruang Kebugaran & Relaksasi dirancang untuk mendukung gaya hidup sehat dan seimbang. Fasilitas ini membantu peserta menjaga energi, relaksasi, dan kebugaran selama mengikuti rangkaian program.",
    designPhilosophy: [
      { title: "Peralatan Lengkap & Modern", description: "Mendukung kebutuhan olahraga dan kebugaran." },
      { title: "Relaksasi & Pemulihan", description: "Membantu peserta memulihkan energi." },
      { title: "Kolam Renang", description: "Fasilitas pendukung untuk relaksasi dan keseimbangan." },
      { title: "Kesehatan & Produktivitas", description: "Menjaga kondisi fisik dan mental selama program." },
    ],
    experienceTitle: "Pengalaman Kebugaran & Relaksasi",
    experienceNarrative:
      "Rasakan fasilitas pendukung yang membantu peserta menjaga energi, relaksasi, dan keseimbangan selama mengikuti rangkaian program.",
    keyHighlights: [
      "Area pendukung untuk menjaga kebugaran peserta",
      "Kolam renang dan fasilitas relaksasi untuk recovery",
      "Membantu peserta tetap segar selama program berlangsung",
      "Cocok sebagai fasilitas tambahan untuk program multi-day",
    ],
    suggestedActivities: ["Wellness session", "Swimming", "Post-training recovery", "Informal bonding", "Relaxation"],
  },
];
