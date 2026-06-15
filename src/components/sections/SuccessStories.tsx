"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import BatikDivider from "@/components/decorations/BatikDivider";

const industries = [
  "Government",
  "BUMN",
  "Private Companies",
  "Education",
  "Manufacturing",
  "Energy",
  "Financial Services",
];

const stats = [
  { value: "150+", label: "Organizations Transformed" },
  { value: "25,000+", label: "Leaders Developed" },
  { value: "18", label: "Years of Experience" },
  { value: "7", label: "Industry Sectors Served" },
];

export default function SuccessStories() {
  return (
    <section
      id="stories"
      className="relative bg-gradient-to-b from-ink via-bark/50 to-ink py-28 md:py-36 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Footprints Along the Path"
          title="Trusted Across Industries"
          subtitle="From government institutions to private enterprises, Wikasatrian has walked alongside organizations through their leadership transformation journeys."
        />

        <BatikDivider className="my-14" />

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {industries.map((industry, index) => (
            <motion.span
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-full border border-bronze/40 px-6 py-2 text-sm uppercase tracking-[0.2em] text-fog hover:border-gold hover:text-gold transition-colors duration-300"
            >
              {industry}
            </motion.span>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="text-center rounded-2xl border border-bronze/25 bg-bark/20 p-6 md:p-8"
            >
              <p className="font-display text-4xl md:text-5xl text-gold-gradient mb-2">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-fog">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
