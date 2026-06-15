export default function BatikDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="section-divider flex-1 max-w-[120px]" />
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-gold">
        <circle cx="14" cy="14" r="3" fill="currentColor" />
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
      </svg>
      <span className="section-divider flex-1 max-w-[120px]" />
    </div>
  );
}
