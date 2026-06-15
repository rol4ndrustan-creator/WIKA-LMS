"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import BatikDivider from "@/components/decorations/BatikDivider";
import WayangSilhouette from "@/components/decorations/WayangSilhouette";

const pillars = [
  {
    title: "Our Philosophy",
    description:
      "Leadership rooted in Indonesian wisdom — character, humility, and service before authority.",
  },
  {
    title: "Our Methodology",
    description:
      "A proven blend of experiential learning, assessment, coaching, and consulting tailored to each organization.",
  },
  {
    title: "Our Ecosystem",
    description:
      "An integrated network of academy, retreat, assessment, and innovation — designed to work together, not in isolation.",
  },
  {
    title: "Our People",
    description:
      "Experienced facilitators and consultants who have walked the journey with leaders across every industry.",
  },
];

export default function WhyWikasatrian() {
  return (
    <section id="why" className="relative bg-ink py-28 md:py-36 px-6 overflow-hidden">
      <WayangSilhouette className="absolute -right-10 top-10 h-[80vh] text-bronze/10 hidden lg:block" />
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Wikasatrian"
          subtitle="Many organizations offer training. Few offer a journey. Here is what makes Wikasatrian different."
        />

        <BatikDivider className="my-14" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="rounded-2xl border border-bronze/25 bg-bark/20 p-8 backdrop-blur-sm"
            >
              <h3 className="font-display text-2xl md:text-3xl text-gold mb-3">
                {pillar.title}
              </h3>
              <p className="text-fog leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
