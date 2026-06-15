"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  onClick?: () => void;
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  onClick,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm md:text-base tracking-[0.2em] uppercase transition-all duration-500 border";

  const styles =
    variant === "primary"
      ? "bg-gold/90 text-ink border-gold hover:bg-gold hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]"
      : "bg-transparent text-warm-white border-bronze/60 hover:border-gold hover:text-gold";

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Link href={href} onClick={onClick} className={`${base} ${styles}`}>
        {children}
        <span aria-hidden="true">→</span>
      </Link>
    </motion.div>
  );
}
