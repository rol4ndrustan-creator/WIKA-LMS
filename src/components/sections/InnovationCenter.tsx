import ThemedSection from "./ThemedSection";

export default function InnovationCenter() {
  return (
    <ThemedSection
      id="innovation"
      theme="glass"
      eyebrow="Glass Building · Modern Technology"
      title="Innovation Center"
      narration="Tradition gives us roots. Innovation gives us wings."
      intro="A glass pavilion rises at the edge of the forest — where heritage meets the future. Here, Wikasatrian explores how technology and research shape the next generation of leadership."
      reverse
      items={[
        {
          title: "Digital Learning",
          description:
            "Blended and digital-first learning experiences that scale across geographies and time zones.",
        },
        {
          title: "AI in Leadership Development",
          description:
            "AI-powered insights, simulations, and personalization that accelerate leadership growth.",
        },
        {
          title: "Future Leadership",
          description:
            "Research-backed frameworks that anticipate the leadership demands of tomorrow's workplace.",
        },
        {
          title: "Research & Future Workforce",
          description:
            "Ongoing research into workforce trends, informing how organizations prepare for what's next.",
        },
      ]}
      benefits={[
        "Scalable digital learning across the enterprise",
        "Data-informed leadership development decisions",
        "Future-ready talent strategies",
        "Continuous innovation in learning delivery",
      ]}
      cta={{ label: "Explore Innovation Solutions", href: "#inquiry" }}
    />
  );
}
