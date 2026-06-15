"use client";

import { motion } from "framer-motion";
import CTAButton from "@/components/CTAButton";
import BatikDivider from "@/components/decorations/BatikDivider";

export type ThemeKey = "wood" | "mountain" | "strategy" | "glass" | "academy" | "assessment";

const themeStyles: Record<ThemeKey, { bg: string; accent: string }> = {
  wood: { bg: "from-bark via-[#1c120c] to-ink", accent: "text-bronze" },
  academy: { bg: "from-[#1a1410] via-bark to-ink", accent: "text-gold" },
  mountain: { bg: "from-forest/40 via-ink to-ink", accent: "text-forest" },
  strategy: { bg: "from-[#10130f] via-bark/70 to-ink", accent: "text-bronze" },
  assessment: { bg: "from-ink via-[#16120a] to-ink", accent: "text-gold" },
  glass: { bg: "from-[#0c1412] via-ink to-ink", accent: "text-fog" },
};

type ThemedSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  narration: string;
  intro: string;
  items: { title: string; description: string }[];
  benefits?: string[];
  caseStudy?: { title: string; description: string };
  cta: { label: string; href: string };
  theme: ThemeKey;
  reverse?: boolean;
};

export default function ThemedSection({
  id,
  eyebrow,
  title,
  narration,
  intro,
  items,
  benefits,
  caseStudy,
  cta,
  theme,
  reverse,
}: ThemedSectionProps) {
  const styles = themeStyles[theme];

  return (
    <section
      id={id}
      className={`relative bg-gradient-to-b ${styles.bg} py-28 md:py-36 px-6`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={`flex flex-col gap-6 max-w-3xl ${reverse ? "ml-auto text-right" : ""}`}
        >
          <span className={`text-xs md:text-sm uppercase tracking-[0.35em] ${styles.accent}`}>
            {eyebrow}
          </span>
          <p className="font-display text-2xl md:text-3xl italic text-warm-white/90">
            &ldquo;{narration}&rdquo;
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-gold-gradient leading-tight">
            {title}
          </h2>
          <p className="text-fog text-base md:text-lg leading-relaxed">{intro}</p>
        </motion.div>

        <BatikDivider className="my-14" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: (index % 4) * 0.07 }}
              className="rounded-2xl border border-bronze/25 bg-ink/30 p-7 backdrop-blur-sm hover:border-gold/50 transition-colors duration-500"
            >
              <h3 className="font-display text-xl md:text-2xl text-warm-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-fog leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {benefits && benefits.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="mb-16 rounded-2xl border border-gold/20 bg-gold/5 p-8"
          >
            <h4 className="text-xs uppercase tracking-[0.35em] text-gold mb-4">
              Business Benefits
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-fog text-sm md:text-base">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <span className="text-gold mt-1">◆</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {caseStudy && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="mb-16 rounded-2xl border border-bronze/25 p-8"
          >
            <h4 className="text-xs uppercase tracking-[0.35em] text-bronze mb-3">
              Case Study
            </h4>
            <h5 className="font-display text-2xl text-warm-white mb-2">
              {caseStudy.title}
            </h5>
            <p className="text-fog leading-relaxed">{caseStudy.description}</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <CTAButton href={cta.href}>{cta.label}</CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
