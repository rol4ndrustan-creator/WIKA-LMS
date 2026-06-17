type FunctionIconProps = {
  label: string;
  className?: string;
};

const paths: Record<string, string> = {
  meeting: "M4 6h16M4 12h16M4 18h10",
  training: "M12 3l8 4-8 4-8-4 8-4zM4 11v5l8 4 8-4v-5",
  seminar: "M12 3l8 4-8 4-8-4 8-4zM4 11v5l8 4 8-4v-5M12 11v8",
  workshop: "M14.7 6.3a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4L7 19H4v-3L14.7 6.3z",
  auditorium: "M4 19V9l8-5 8 5v10M9 19v-5h6v5",
  class: "M4 5h16v10H4zM8 19h8M12 15v4",
  diskusi: "M5 5h14v9H9l-4 4z",
  "kelas budaya": "M5 5h14v9H9l-4 4z",
  "seni & budaya": "M12 3c4 3 6 6 6 9a6 6 0 1 1-12 0c0-3 2-6 6-9z",
  perkemahan: "M4 19l8-14 8 14H4zM9.5 19l2.5-4.5 2.5 4.5",
  "team building": "M8 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM16 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 19c0-2.5 2.5-4 6-4s6 1.5 6 4M10 19c0-2.5 2.5-4 6-4s6 1.5 6 4",
  outbound: "M4 19l8-14 8 14H4zM9.5 19l2.5-4.5 2.5 4.5",
  gathering: "M8 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM16 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 19c0-2.5 2.5-4 6-4s6 1.5 6 4M10 19c0-2.5 2.5-4 6-4s6 1.5 6 4",
  "leadership camp": "M4 19l8-14 8 14H4zM9.5 19l2.5-4.5 2.5 4.5",
  fitness: "M6 12h2M16 12h2M8 12h8M5 9v6M19 9v6",
  pool: "M3 17c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0M5 13V6h14v7",
  relaxation: "M12 3c4 3 6 6 6 9a6 6 0 1 1-12 0c0-3 2-6 6-9z",
  recovery: "M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 9v4l3 2",
  remote: "M9 18h6M5 14h14V6H5v8zM10 18h4",
};

function normalize(label: string) {
  return label.toLowerCase().trim();
}

export default function FunctionIcon({ label, className }: FunctionIconProps) {
  const d = paths[normalize(label)] ?? "M12 4v16M4 12h16";

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
