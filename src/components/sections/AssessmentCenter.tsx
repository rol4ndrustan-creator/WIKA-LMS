import ThemedSection from "./ThemedSection";

export default function AssessmentCenter() {
  return (
    <ThemedSection
      id="assessment"
      theme="assessment"
      eyebrow="Talent Mapping · 360 Feedback"
      title="Assessment Center"
      narration="To grow a leader, first understand them."
      intro="A quiet pavilion of mirrors and light — where every leader sees themselves clearly. Wikasatrian's assessment tools reveal strengths, gaps, and potential with precision and care."
      items={[
        {
          title: "Leadership Assessment",
          description:
            "Comprehensive evaluation of leadership competencies against role and organizational benchmarks.",
        },
        {
          title: "Talent Mapping",
          description:
            "Visualize your talent landscape to identify successors, critical roles, and development priorities.",
        },
        {
          title: "Competency Assessment",
          description:
            "Structured assessments aligned to your organization's competency framework.",
        },
        {
          title: "360 Feedback",
          description:
            "Multi-rater feedback that builds self-awareness and informs targeted development plans.",
        },
        {
          title: "Development Center",
          description:
            "Simulation-based development experiences that combine assessment with real-time coaching.",
        },
      ]}
      benefits={[
        "Objective, data-driven talent decisions",
        "Clear visibility into succession readiness",
        "Personalized development plans for every leader",
        "Reduced risk in critical role placements",
      ]}
      cta={{ label: "Explore Assessment Solutions", href: "#inquiry" }}
    />
  );
}
