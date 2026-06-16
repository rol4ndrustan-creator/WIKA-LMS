"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const { opening } = siteContent;
const lines = opening.lines as readonly string[];

export default function Opening({ onEnter }: { onEnter: () => void }) {
  const [step, setStep] = useState(0);
  const [closing, setClosing] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleNext = () => {
    if (step < lines.length - 1) {
      setStep((s) => s + 1);
    }
  };

  const handleEnter = () => {
    setClosing(true);
    setTimeout(onEnter, 1100);
  };

  return (
    <AnimatePresence>
      {!closing && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Optional real photo background */}
          {!imgError && (
            <img
              src={opening.backgroundImage}
              alt=""
              aria-hidden="true"
              onError={() => setImgError(true)}
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ filter: "brightness(0.18) saturate(0.5)" }}
            />
          )}

          {/* drifting fog layers */}
          <motion.div
            className="absolute inset-0 batik-pattern opacity-40"
            animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -inset-40 bg-gradient-to-t from-bark/40 via-transparent to-transparent blur-3xl"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <div
            className="relative z-10 flex flex-col items-center text-center px-6 cursor-pointer select-none"
            onClick={handleNext}
            role="button"
            tabIndex={0}
          >
            <AnimatePresence mode="wait">
              {step < lines.length - 1 ? (
                <motion.p
                  key={step}
                  initial={{ opacity: 0, letterSpacing: "0.4em" }}
                  animate={{ opacity: 1, letterSpacing: "0.15em" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  className="text-sm md:text-lg uppercase text-fog/80 tracking-[0.3em]"
                >
                  {lines[step]}
                </motion.p>
              ) : (
                <motion.div
                  key="final"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center gap-6"
                >
                  <h1 className="font-display text-6xl md:text-8xl tracking-[0.2em] text-gold-gradient">
                    WIKASATRIAN
                  </h1>
                  <p className="text-sm md:text-base uppercase tracking-[0.35em] text-fog/70">
                    {lines[2]}
                  </p>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEnter();
                    }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="mt-6 rounded-full border border-gold px-10 py-4 text-xs md:text-sm uppercase tracking-[0.35em] text-gold hover:bg-gold hover:text-ink transition-colors duration-500"
                  >
                    {opening.cta}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {step < lines.length - 1 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="mt-10 text-[10px] uppercase tracking-[0.3em] text-fog/40"
              >
                tap to continue
              </motion.span>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
