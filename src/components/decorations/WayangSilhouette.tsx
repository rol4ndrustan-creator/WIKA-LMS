export default function WayangSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g fill="currentColor" opacity="0.85">
        <ellipse cx="110" cy="58" rx="26" ry="32" />
        <path d="M84 50 C70 30 96 10 110 18 C124 10 150 30 136 50 C148 46 156 64 142 74 L78 74 C64 64 72 46 84 50 Z" />
        <path d="M70 90 C70 110 80 150 70 200 L60 290 H86 L100 190 L114 290 H140 L132 200 C124 150 150 110 150 90 C150 70 120 64 110 64 C100 64 70 70 70 90 Z" />
        <path d="M70 110 C40 120 18 150 10 190 L26 198 C36 168 54 144 74 132 Z" />
        <path d="M150 110 C180 120 200 150 208 190 L192 198 C182 168 164 144 144 132 Z" />
      </g>
    </svg>
  );
}
