import ThemedSection from "./ThemedSection";

export default function LeadershipDevelopment() {
  return (
    <ThemedSection
      id="leadership"
      theme="wood"
      eyebrow="Pendopo · Wayang · Reflection Pool"
      title="Leadership Development"
      narration="A leader is not born. A leader is forged through experience."
      intro="Beneath the carved beams of the Pendopo, leaders at every level discover who they are and who they can become. Our programs blend timeless principles with modern frameworks to build leadership that lasts."
      items={[
        {
          title: "Leadership Development",
          description:
            "Foundational programs that build self-awareness, communication, and decision-making for emerging leaders.",
        },
        {
          title: "Manager Development",
          description:
            "Equip frontline and middle managers with the coaching, delegation, and performance management skills your organization depends on.",
        },
        {
          title: "Future Leader Program",
          description:
            "A structured journey for high-potential talent to accelerate readiness for greater responsibility.",
        },
        {
          title: "Executive Development",
          description:
            "Refine strategic thinking, influence, and enterprise leadership for senior executives and directors.",
        },
        {
          title: "Corporate Leadership",
          description:
            "Organization-wide leadership standards that align every level of management to a shared philosophy.",
        },
      ]}
      benefits={[
        "Stronger succession pipeline and leadership bench strength",
        "Improved employee engagement under capable managers",
        "Consistent leadership language across the organization",
        "Faster decision-making and accountability at every level",
      ]}
      caseStudy={{
        title: "Building a Leadership Bench for a National Energy Company",
        description:
          "A multi-tier leadership development journey lifted internal promotion rates and reduced critical-role vacancy time across regional operations.",
      }}
      cta={{ label: "Discuss Your Leadership Challenge", href: "#inquiry" }}
    />
  );
}
