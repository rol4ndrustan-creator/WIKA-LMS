"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Gunungan from "@/components/decorations/Gunungan";

type FormData = {
  organization: string;
  industry: string;
  companySize: string;
  challenges: string[];
  timeline: string;
  expectation: string;
  contactName: string;
  phone: string;
  email: string;
};

const initialData: FormData = {
  organization: "",
  industry: "",
  companySize: "",
  challenges: [],
  timeline: "",
  expectation: "",
  contactName: "",
  phone: "",
  email: "",
};

const industries = [
  "Government",
  "BUMN",
  "Private Company",
  "Education",
  "Manufacturing",
  "Energy",
  "Financial Services",
  "Other",
];

const sizes = ["< 100 employees", "100 – 500", "500 – 2,000", "2,000 – 10,000", "10,000+"];

const challengeOptions = [
  "Leadership Development",
  "Organizational Transformation",
  "Culture Change",
  "Training & Capability",
  "Strategic Consulting",
];

const timelines = ["Immediate (within 1 month)", "1 – 3 months", "3 – 6 months", "Exploring options"];

const totalSteps = 8;

export default function InquiryExperience() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [leadId, setLeadId] = useState<string | null>(null);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const toggleChallenge = (option: string) => {
    setData((prev) => ({
      ...prev,
      challenges: prev.challenges.includes(option)
        ? prev.challenges.filter((c) => c !== option)
        : [...prev.challenges, option],
    }));
  };

  const next = () => setStep((s) => Math.min(s + 1, totalSteps - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const canProceed = () => {
    switch (step) {
      case 1:
        return data.organization.trim().length > 1 && data.industry !== "";
      case 2:
        return data.companySize !== "";
      case 3:
        return data.challenges.length > 0;
      case 4:
        return data.timeline !== "";
      case 6:
        return (
          data.contactName.trim().length > 1 &&
          data.phone.trim().length > 5 &&
          data.email.includes("@")
        );
      default:
        return true;
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      const json = await res.json();
      setLeadId(json.leadId);
      setStep(totalSteps - 1);
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="inquiry"
      className="relative bg-gradient-to-b from-ink via-bark/40 to-ink py-28 md:py-36 px-6 overflow-hidden"
    >
      <Gunungan className="absolute right-0 bottom-0 h-[50vh] text-bronze/5" />
      <div className="relative z-10 max-w-2xl mx-auto">
        {step < totalSteps - 1 && (
          <div className="mb-12">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-bronze mb-3">
              <span>Begin Your Journey</span>
              <span>
                {step + 1} / {totalSteps - 1}
              </span>
            </div>
            <div className="h-1 w-full rounded-full bg-bark/60 overflow-hidden">
              <motion.div
                className="h-full bg-gold"
                animate={{ width: `${((step + 1) / (totalSteps - 1)) * 100}%` }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === 0 && (
            <Step key="0">
              <h2 className="font-display text-4xl md:text-5xl text-gold-gradient mb-4">
                Welcome.
              </h2>
              <p className="text-fog leading-relaxed mb-8">
                You have walked through the forest, the Pendopo, and the
                mountain retreat. Now, tell us about your organization — and
                let&apos;s discover what your leadership journey could look like.
              </p>
              <PrimaryButton onClick={next}>Begin</PrimaryButton>
            </Step>
          )}

          {step === 1 && (
            <Step key="1">
              <Heading title="Tell us about your organization" />
              <Field
                label="Organization Name"
                value={data.organization}
                onChange={(v) => update("organization", v)}
                placeholder="e.g. PT Nusantara Sejahtera"
              />
              <Label>Industry</Label>
              <div className="grid grid-cols-2 gap-3 mt-2 mb-8">
                {industries.map((industry) => (
                  <OptionPill
                    key={industry}
                    label={industry}
                    selected={data.industry === industry}
                    onClick={() => update("industry", industry)}
                  />
                ))}
              </div>
              <Nav onBack={back} onNext={next} disabled={!canProceed()} />
            </Step>
          )}

          {step === 2 && (
            <Step key="2">
              <Heading title="What is the size of your organization?" />
              <div className="flex flex-col gap-3 mb-8">
                {sizes.map((size) => (
                  <OptionRow
                    key={size}
                    label={size}
                    selected={data.companySize === size}
                    onClick={() => update("companySize", size)}
                  />
                ))}
              </div>
              <Nav onBack={back} onNext={next} disabled={!canProceed()} />
            </Step>
          )}

          {step === 3 && (
            <Step key="3">
              <Heading title="What is your main challenge?" subtitle="Select all that apply" />
              <div className="flex flex-col gap-3 mb-8">
                {challengeOptions.map((option) => (
                  <OptionRow
                    key={option}
                    label={option}
                    selected={data.challenges.includes(option)}
                    onClick={() => toggleChallenge(option)}
                  />
                ))}
              </div>
              <Nav onBack={back} onNext={next} disabled={!canProceed()} />
            </Step>
          )}

          {step === 4 && (
            <Step key="4">
              <Heading title="What is your timeline?" />
              <div className="flex flex-col gap-3 mb-8">
                {timelines.map((timeline) => (
                  <OptionRow
                    key={timeline}
                    label={timeline}
                    selected={data.timeline === timeline}
                    onClick={() => update("timeline", timeline)}
                  />
                ))}
              </div>
              <Nav onBack={back} onNext={next} disabled={!canProceed()} />
            </Step>
          )}

          {step === 5 && (
            <Step key="5">
              <Heading
                title="What does success look like?"
                subtitle="Tell us your expectations — optional but helpful"
              />
              <textarea
                value={data.expectation}
                onChange={(e) => update("expectation", e.target.value)}
                placeholder="e.g. We want to build a stronger pipeline of future leaders within two years..."
                rows={5}
                className="w-full rounded-xl border border-bronze/30 bg-ink/40 px-4 py-3 text-warm-white placeholder:text-fog/40 focus:border-gold focus:outline-none mb-8 resize-none"
              />
              <Nav onBack={back} onNext={next} disabled={!canProceed()} />
            </Step>
          )}

          {step === 6 && (
            <Step key="6">
              <Heading title="How can we reach you?" />
              <Field
                label="Contact Person"
                value={data.contactName}
                onChange={(v) => update("contactName", v)}
                placeholder="Full Name"
              />
              <Field
                label="Phone / WhatsApp"
                value={data.phone}
                onChange={(v) => update("phone", v)}
                placeholder="+62..."
              />
              <Field
                label="Email"
                value={data.email}
                onChange={(v) => update("email", v)}
                placeholder="name@company.com"
                type="email"
              />
              <Nav onBack={back} onNext={next} disabled={!canProceed()} />
            </Step>
          )}

          {step === 7 && (
            <Step key="7">
              {leadId ? (
                <SuccessMessage leadId={leadId} />
              ) : (
                <>
                  <Heading title="Review your journey" subtitle="Almost there." />
                  <div className="rounded-2xl border border-bronze/25 bg-bark/20 p-6 mb-8 text-sm text-fog space-y-2">
                    <SummaryRow label="Organization" value={data.organization} />
                    <SummaryRow label="Industry" value={data.industry} />
                    <SummaryRow label="Company Size" value={data.companySize} />
                    <SummaryRow label="Challenges" value={data.challenges.join(", ")} />
                    <SummaryRow label="Timeline" value={data.timeline} />
                    <SummaryRow label="Contact" value={`${data.contactName} · ${data.phone} · ${data.email}`} />
                  </div>
                  {error && <p className="text-sm text-red-400 mb-4">{error}</p>}
                  <div className="flex items-center gap-4">
                    <SecondaryButton onClick={back}>Back</SecondaryButton>
                    <PrimaryButton onClick={handleSubmit} disabled={submitting}>
                      {submitting ? "Sending..." : "Submit Inquiry"}
                    </PrimaryButton>
                  </div>
                </>
              )}
            </Step>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Step({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Heading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h3 className="font-display text-3xl md:text-4xl text-warm-white mb-2">{title}</h3>
      {subtitle && <p className="text-fog text-sm">{subtitle}</p>}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs uppercase tracking-[0.25em] text-bronze">{children}</label>;
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="mb-6">
      <Label>{label}</Label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-bronze/30 bg-ink/40 px-4 py-3 text-warm-white placeholder:text-fog/40 focus:border-gold focus:outline-none"
      />
    </div>
  );
}

function OptionPill({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-4 py-3 text-sm text-left transition-colors duration-300 ${
        selected
          ? "border-gold bg-gold/10 text-gold"
          : "border-bronze/30 text-fog hover:border-gold/60 hover:text-warm-white"
      }`}
    >
      {label}
    </button>
  );
}

function OptionRow({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-between rounded-xl border px-5 py-4 text-left transition-colors duration-300 ${
        selected
          ? "border-gold bg-gold/10 text-gold"
          : "border-bronze/30 text-fog hover:border-gold/60 hover:text-warm-white"
      }`}
    >
      <span>{label}</span>
      <span
        className={`h-4 w-4 rounded-full border ${
          selected ? "border-gold bg-gold" : "border-fog/40"
        }`}
      />
    </button>
  );
}

function Nav({
  onBack,
  onNext,
  disabled,
}: {
  onBack: () => void;
  onNext: () => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <SecondaryButton onClick={onBack}>Back</SecondaryButton>
      <PrimaryButton onClick={onNext} disabled={disabled}>
        Continue
      </PrimaryButton>
    </div>
  );
}

function PrimaryButton({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      className={`rounded-full px-8 py-3 text-sm uppercase tracking-[0.25em] transition-all duration-300 ${
        disabled
          ? "bg-bronze/20 text-fog/40 cursor-not-allowed"
          : "bg-gold text-ink hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
      }`}
    >
      {children}
    </motion.button>
  );
}

function SecondaryButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-bronze/40 px-8 py-3 text-sm uppercase tracking-[0.25em] text-fog hover:border-gold hover:text-gold transition-colors duration-300"
    >
      {children}
    </button>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-bronze">{label}</span>
      <span className="text-right text-warm-white">{value || "—"}</span>
    </div>
  );
}

function SuccessMessage({ leadId }: { leadId: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="text-center py-10"
    >
      <span className="text-xs uppercase tracking-[0.4em] text-bronze">
        Lead ID: {leadId}
      </span>
      <h3 className="font-display text-4xl md:text-5xl text-gold-gradient mt-4 mb-6">
        Congratulations.
      </h3>
      <p className="text-fog leading-relaxed max-w-md mx-auto mb-8">
        Your leadership journey has begun. Our consultant will contact you
        shortly to discuss the next steps for your organization. Meanwhile,
        feel free to continue exploring Wikasatrian.
      </p>
      <a
        href="#forest-gate"
        className="inline-flex items-center gap-3 rounded-full border border-gold px-8 py-4 text-xs uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-ink transition-colors duration-500"
      >
        Continue Exploring ↑
      </a>
    </motion.div>
  );
}
