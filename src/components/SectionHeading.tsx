"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${alignment} max-w-3xl mx-auto gap-4`}
    >
      {eyebrow && (
        <span className="text-xs md:text-sm tracking-[0.35em] uppercase text-bronze">
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-tight ${
          light ? "text-ink" : "text-warm-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            light ? "text-bark/80" : "text-fog"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
