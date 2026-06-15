"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import BatikDivider from "@/components/decorations/BatikDivider";

const destinations = [
  { id: "leadership", label: "Leadership Development", desc: "Pendopo · Wayang · Reflection Pool" },
  { id: "academy", label: "Corporate Academy", desc: "Customized Learning Roadmaps" },
  { id: "retreat", label: "Executive Retreat", desc: "Mountain · Pine Forest · Fire Pit" },
  { id: "consulting", label: "Corporate Consulting", desc: "Strategy Room · Transformation" },
  { id: "assessment", label: "Assessment Center", desc: "Talent Mapping · 360 Feedback" },
  { id: "innovation", label: "Innovation Center", desc: "Glass Building · AI · Future Skills" },
  { id: "stories", label: "Success Stories", desc: "Government · BUMN · Private Sector" },
];

export default function Pendopo() {
  return (
    <section
      id="pendopo"
      className="relative bg-gradient-to-b from-ink via-bark/60 to-ink py-28 md:py-36 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="The Heart of the Journey"
          title="You have arrived at the Pendopo"
          subtitle="An open wooden hall beneath ancient beams. From here, choose the building you wish to explore — each holds a different facet of Wikasatrian's leadership ecosystem."
        />

        <BatikDivider className="my-14" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map((dest, index) => (
            <motion.a
              key={dest.id}
              href={`#${dest.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-bronze/30 bg-bark/30 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-gold/60"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-bronze">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl md:text-3xl mt-3 mb-2 text-warm-white group-hover:text-gold transition-colors duration-500">
                {dest.label}
              </h3>
              <p className="text-sm text-fog">{dest.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Enter →
              </span>
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl group-hover:bg-gold/20 transition-colors duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
