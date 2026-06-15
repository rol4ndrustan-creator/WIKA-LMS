export default function MountainRange({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 400"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 320 L180 180 L340 280 L520 100 L700 260 L900 140 L1100 300 L1280 160 L1440 280 V400 H0 Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M0 360 L220 250 L420 340 L640 200 L860 330 L1080 230 L1300 350 L1440 280 V400 H0 Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}
