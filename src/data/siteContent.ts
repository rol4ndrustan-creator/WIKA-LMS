/**
 * Wikasatrian — Central Content Configuration
 *
 * HOW TO UPDATE IMAGES:
 * 1. Upload your image file to /public/images/wikasatrian/
 * 2. Update the "image" path below to match the filename
 * 3. The website will automatically display the new image
 *
 * IMAGE SIZES (recommended):
 * - Hero / full-bleed backgrounds: 1920×1080px or wider
 * - Program cards: 800×600px
 * - Facilitator portraits: 600×800px (portrait orientation)
 * - Gallery photos: 800×600px or 600×800px (mixed works well)
 * - Building / 360 preview: 1920×1080px
 */

export const siteContent = {
  // ─── OPENING SCREEN ──────────────────────────────────────────────────────
  opening: {
    lines: [
      "Every great leader has a journey.",
      "WIKASATRIAN",
      "Leadership begins with a journey.",
    ],
    // REPLACE: Upload your intro/atmospheric forest image here
    backgroundImage: "/images/wikasatrian/intro-bg.jpg",
    cta: "Enter Experience",
  },

  // ─── FOREST GATE / HERO ──────────────────────────────────────────────────
  hero: {
    eyebrow: "The Journey Begins",
    title: "Welcome to Wikasatrian",
    subtitle:
      "Step through the gate of the forest. Morning mist, the call of distant birds, and a path of stone lead you toward the Pendopo — the heart of leadership.",
    // REPLACE: Upload a forest path / jungle journey photo here
    backgroundImage: "/images/wikasatrian/hero-forest.jpg",
    scrollLabel: "Scroll to walk",
  },

  // ─── BUILDING REVEAL ─────────────────────────────────────────────────────
  building: {
    eyebrow: "The Destination",
    title: "Wikasatrian",
    subtitle:
      "A hidden sanctuary where leaders are shaped, tested, and transformed. Nestled in the heart of nature, this is where the journey leads.",
    // REPLACE: Upload Wikasatrian building exterior photo here
    image: "/images/wikasatrian/building.jpg",
    alt: "Wikasatrian — a place of leadership transformation",
    // Hotspot labels overlaid on the building image (positions are percentages)
    hotspots: [
      { label: "Entrance", x: "50%", y: "72%" },
      { label: "Main Hall", x: "34%", y: "48%" },
      { label: "Learning Area", x: "66%", y: "44%" },
      { label: "Reflection Garden", x: "20%", y: "62%" },
    ],
  },

  // ─── 360 VIRTUAL TOUR ────────────────────────────────────────────────────
  virtualTour: {
    eyebrow: "Explore the Space",
    title: "Experience Wikasatrian",
    subtitle:
      "Walk through the environment where learning, reflection, and leadership transformation take place.",
    // REPLACE: Upload your 360° interior preview image here
    image: "/images/wikasatrian/tour-360.jpg",
    alt: "Wikasatrian interior — where leadership unfolds",
    cta: "Begin Your Journey",
    ctaHref: "#inquiry",
  },

  // ─── PROGRAM CARDS ───────────────────────────────────────────────────────
  programs: [
    {
      id: "leadership",
      title: "Leadership Development",
      description:
        "A journey to strengthen clarity, character, and leadership capability through experiential learning.",
      // REPLACE: Upload leadership program photo here
      image: "/images/wikasatrian/program-leadership.jpg",
      alt: "Leadership Development Program",
      cta: "Explore Program",
      href: "#leadership",
      category: "Core Program",
    },
    {
      id: "executive",
      title: "Executive Program",
      description:
        "Designed for senior leaders ready to lead at scale and transform organizations from within.",
      // REPLACE: Upload executive program photo here
      image: "/images/wikasatrian/program-executive.jpg",
      alt: "Executive Program",
      cta: "Explore Program",
      href: "#retreat",
      category: "Executive",
    },
    {
      id: "team",
      title: "Team Building",
      description:
        "Forge trust, alignment, and collective capability through meaningful experiential learning.",
      // REPLACE: Upload team building activity photo here
      image: "/images/wikasatrian/program-team-building.jpg",
      alt: "Team Building Program",
      cta: "Explore Program",
      href: "#academy",
      category: "Group Experience",
    },
    {
      id: "transformation",
      title: "Corporate Transformation",
      description:
        "Holistic organizational change guided by seasoned leadership and culture consultants.",
      // REPLACE: Upload transformation / consulting related photo here
      image: "/images/wikasatrian/program-transformation.jpg",
      alt: "Corporate Transformation Program",
      cta: "Explore Program",
      href: "#consulting",
      category: "Consulting",
    },
  ],

  // ─── FACILITATORS / LEADERSHIP GUIDES ────────────────────────────────────
  facilitators: {
    eyebrow: "Meet the Guides",
    title: "The People Behind Every Journey",
    subtitle:
      "Discover the people who guide each journey with experience, wisdom, and practical leadership insight.",
    people: [
      {
        name: "Ahmad Wijaya",
        title: "Senior Leadership Facilitator",
        specialization: "Organizational Behavior & Strategic Leadership",
        // REPLACE: Upload portrait photo here (portrait orientation recommended)
        image: "/images/wikasatrian/leader-01.jpg",
        alt: "Ahmad Wijaya — Senior Leadership Facilitator",
      },
      {
        name: "Sari Kusuma",
        title: "Executive Coach",
        specialization: "Executive Presence & Communication",
        // REPLACE: Upload portrait photo here
        image: "/images/wikasatrian/leader-02.jpg",
        alt: "Sari Kusuma — Executive Coach",
      },
      {
        name: "Budi Santoso",
        title: "Corporate Transformation Lead",
        specialization: "Change Management & Culture Transformation",
        // REPLACE: Upload portrait photo here
        image: "/images/wikasatrian/leader-03.jpg",
        alt: "Budi Santoso — Corporate Transformation Lead",
      },
      {
        name: "Dewi Rahayu",
        title: "Assessment Specialist",
        specialization: "Talent Assessment & Human Potential",
        // REPLACE: Upload portrait photo here
        image: "/images/wikasatrian/leader-04.jpg",
        alt: "Dewi Rahayu — Assessment Specialist",
      },
    ],
  },

  // ─── GALLERY ─────────────────────────────────────────────────────────────
  gallery: {
    eyebrow: "Moments from the Journey",
    title: "Where Learning Comes Alive",
    subtitle:
      "See how learning unfolds through experience, collaboration, and reflection at Wikasatrian.",
    cta: "Begin Your Own Journey",
    ctaHref: "#inquiry",
    images: [
      {
        title: "Outdoor Leadership",
        // REPLACE: Upload gallery photo (featured / largest image)
        image: "/images/wikasatrian/gallery-01.jpg",
        alt: "Outdoor leadership activity at Wikasatrian",
        featured: true,
      },
      {
        title: "Leadership Workshop",
        // REPLACE: Upload gallery photo
        image: "/images/wikasatrian/gallery-02.jpg",
        alt: "Leadership workshop session",
      },
      {
        title: "Reflection & Dialogue",
        // REPLACE: Upload gallery photo
        image: "/images/wikasatrian/gallery-03.jpg",
        alt: "Reflection and dialogue moment",
      },
      {
        title: "Executive Retreat",
        // REPLACE: Upload gallery photo
        image: "/images/wikasatrian/gallery-04.jpg",
        alt: "Executive retreat experience",
      },
      {
        title: "Team Expedition",
        // REPLACE: Upload gallery photo
        image: "/images/wikasatrian/gallery-05.jpg",
        alt: "Team expedition at Wikasatrian",
      },
      {
        title: "Learning in Nature",
        // REPLACE: Upload gallery photo
        image: "/images/wikasatrian/gallery-06.jpg",
        alt: "Learning experience in nature",
      },
    ],
  },
} as const;

export type SiteContent = typeof siteContent;
export type Program = (typeof siteContent.programs)[number];
export type Facilitator = (typeof siteContent.facilitators.people)[number];
export type GalleryImage = (typeof siteContent.gallery.images)[number];
