"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import BatikDivider from "@/components/decorations/BatikDivider";

const values = [
  {
    symbol: "Gunungan",
    title: "Beginning",
    description:
      "Every journey starts with a single step into the unknown — the gateway between the ordinary and the extraordinary.",
  },
  {
    symbol: "Pendopo",
    title: "Wisdom",
    description:
      "An open hall where leaders gather, listen, and learn — wisdom is shared, not commanded.",
  },
  {
    symbol: "Forest",
    title: "Reflection",
    description:
      "Among the trees, the noise fades. True leadership begins with stillness and self-awareness.",
  },
  {
    symbol: "River",
    title: "Adaptation",
    description:
      "Water finds its way around every obstacle — leaders who adapt, endure and flow forward.",
  },
  {
    symbol: "Mountain",
    title: "Growth",
    description:
      "The summit is never reached in a single climb. Growth is steady, deliberate, and earned.",
  },
  {
    symbol: "Wayang",
    title: "Character",
    description:
      "Behind every shadow play is a story of virtue and struggle — character is the script we choose to live.",
  },
  {
    symbol: "Light",
    title: "Hope",
    description:
      "As morning light breaks through the canopy, hope illuminates the path for those who follow.",
  },
];

export default function PhilosophyJourney() {
  return (
    <section
      id="philosophy"
      className="relative bg-ink py-28 md:py-36 px-6 batik-pattern"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="The Path of Stones"
          title="Every place carries a leadership value"
          subtitle="As you walk the stone path toward the Pendopo, each marker reveals a principle that shapes the way Wikasatrian builds leaders."
        />

        <BatikDivider className="my-14" />

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-bronze/40 to-transparent -translate-x-1/2" />
          <ol className="flex flex-col gap-10 md:gap-16">
            {values.map((value, index) => (
              <motion.li
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <span className="text-xs uppercase tracking-[0.35em] text-bronze">
                    {value.symbol}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl mt-2 mb-3 text-warm-white">
                    {value.title}
                  </h3>
                  <p className="text-fog leading-relaxed max-w-md mx-auto md:mx-0">
                    {value.description}
                  </p>
                </div>
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-bark/40 font-display text-xl text-gold">
                  {index + 1}
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
