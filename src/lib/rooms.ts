export type Room = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  altImage?: string;
  capacity: string;
  functions: string[];
  shortDescription: string;
  experienceTitle: string;
  highlights: string[];
  bestFor: string;
};

export const rooms: Room[] = [
  {
    id: "giri-wijaya",
    title: "Ruang Giri Wijaya",
    subtitle: "Pusat Aktivitas Besar & Auditorium",
    image: "/images/wikasatrian/giri-wijaya-1.jpg",
    altImage: "/images/wikasatrian/giri-wijaya-2.jpg",
    capacity: "±500 orang",
    functions: ["Meeting", "Training", "Seminar", "Workshop", "Auditorium"],
    shortDescription:
      "Giri Wijaya adalah ruang utama untuk aktivitas berskala besar seperti seminar, pelatihan, workshop, dan kegiatan auditorium.",
    experienceTitle: "Pengalaman Ruang Giri Wijaya",
    highlights: [
      "Auditorium besar untuk sesi pembukaan, seminar, dan keynote",
      "Mendukung kegiatan formal dengan nuansa hangat dan natural",
      "Cocok untuk leadership gathering dan pembelajaran berskala besar",
      "Dapat digunakan untuk presentasi, diskusi panel, dan acara institusi",
    ],
    bestFor: "Seminar besar, leadership forum, townhall, workshop besar, dan auditorium session.",
  },
  {
    id: "giri-sasana",
    title: "Ruang Giri Sasana",
    subtitle: "Pusat Pelatihan & Seminar",
    image: "/images/wikasatrian/giri-sasana-1.jpg",
    altImage: "/images/wikasatrian/giri-sasana-2.jpg",
    capacity: "±200 orang",
    functions: ["Meeting", "Training", "Seminar", "Workshop"],
    shortDescription:
      "Giri Sasana dirancang untuk pelatihan, seminar, diskusi, dan kegiatan pembelajaran yang lebih fokus.",
    experienceTitle: "Pengalaman Ruang Giri Sasana",
    highlights: [
      "Cocok untuk pelatihan intensif dan seminar",
      "Suasana ruang mendukung konsentrasi dan interaksi",
      "Dapat digunakan untuk diskusi kelompok dan sesi presentasi",
      "Nuansa budaya memberikan pengalaman belajar yang lebih berkesan",
    ],
    bestFor: "Training, seminar, leadership class, workshop, dan focused group discussion.",
  },
  {
    id: "giri-unggul",
    title: "Ruang Giri Unggul",
    subtitle: "Ruang Kelas Pertemuan Multifungsi",
    image: "/images/wikasatrian/giri-unggul.jpg",
    capacity: "±200 orang",
    functions: ["Meeting", "Class", "Seminar", "Workshop", "Remote"],
    shortDescription:
      "Giri Unggul adalah ruang kelas multifungsi yang cocok untuk meeting, kelas pelatihan, workshop, dan kegiatan kolaboratif.",
    experienceTitle: "Pengalaman Ruang Giri Unggul",
    highlights: [
      "Layout kelas yang fleksibel untuk berbagai format kegiatan",
      "Cocok untuk pembelajaran, diskusi, dan kolaborasi",
      "Mendukung aktivitas workshop yang produktif",
      "Suasana ruang membantu peserta tetap fokus dan nyaman",
    ],
    bestFor: "Classroom training, workshop, product briefing, collaboration session, dan remote-enabled meeting.",
  },
  {
    id: "giri-budaya",
    title: "Ruang Giri Budaya",
    subtitle: "Kelas Diskusi & Kegiatan Seni dan Kebudayaan",
    image: "/images/wikasatrian/giri-budaya.jpg",
    capacity: "±50–80 orang",
    functions: ["Diskusi", "Kelas Budaya", "Seni & Budaya", "Workshop"],
    shortDescription:
      "Giri Budaya menghadirkan suasana budaya yang kuat untuk diskusi, refleksi, pembelajaran nilai, dan kegiatan seni.",
    experienceTitle: "Pengalaman Ruang Giri Budaya",
    highlights: [
      "Menghadirkan suasana budaya Indonesia yang kuat",
      "Cocok untuk diskusi reflektif dan pembelajaran nilai",
      "Mendukung kegiatan seni, budaya, dan storytelling",
      "Memberikan pengalaman belajar yang lebih emosional dan bermakna",
    ],
    bestFor: "Cultural session, reflective discussion, value-based leadership, creative workshop, dan team reflection.",
  },
  {
    id: "area-outdoor",
    title: "Area Outdoor",
    subtitle: "Perkemahan & Wana Arena",
    image: "/images/wikasatrian/area-outdoor.jpg",
    capacity: "±50–80 orang",
    functions: ["Perkemahan", "Team Building", "Outbound", "Gathering", "Leadership Camp"],
    shortDescription:
      "Area Outdoor memberikan pengalaman pembelajaran di alam terbuka melalui aktivitas team building, leadership camp, dan gathering.",
    experienceTitle: "Pengalaman Area Outdoor",
    highlights: [
      "Pembelajaran berbasis alam terbuka",
      "Cocok untuk team building dan leadership challenge",
      "Mendukung aktivitas campfire, bonding, dan refleksi",
      "Memberikan pengalaman yang lebih hidup dan membangun kebersamaan",
    ],
    bestFor: "Leadership camp, team building, outbound, gathering, campfire session, dan nature-based learning.",
  },
  {
    id: "ruang-kebugaran",
    title: "Ruang Kebugaran & Relaksasi",
    subtitle: "Sehat, Bugar, Produktif",
    image: "/images/wikasatrian/ruang-kebugaran.jpg",
    capacity: "Flexible",
    functions: ["Fitness", "Pool", "Relaxation", "Recovery"],
    shortDescription:
      "Ruang Kebugaran & Relaksasi mendukung keseimbangan fisik dan mental peserta selama mengikuti program.",
    experienceTitle: "Pengalaman Kebugaran & Relaksasi",
    highlights: [
      "Area pendukung untuk menjaga kebugaran peserta",
      "Kolam renang dan fasilitas relaksasi untuk recovery",
      "Membantu peserta tetap segar selama program berlangsung",
      "Cocok sebagai fasilitas tambahan untuk program multi-day",
    ],
    bestFor: "Wellness session, post-training recovery, informal bonding, relaxation, dan participant refreshment.",
  },
];
