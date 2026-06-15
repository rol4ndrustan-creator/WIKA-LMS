export default function Gunungan({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M100 4 C108 40 150 70 170 110 C188 145 192 190 178 236 H22 C8 190 12 145 30 110 C50 70 92 40 100 4 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M100 30 C104 56 128 78 142 108 C154 134 158 168 150 200 H50 C42 168 46 134 58 108 C72 78 96 56 100 30 Z"
        fill="none"
        stroke="rgba(245,241,232,0.25)"
        strokeWidth="1.5"
      />
      <circle cx="100" cy="70" r="6" fill="rgba(245,241,232,0.35)" />
    </svg>
  );
}
