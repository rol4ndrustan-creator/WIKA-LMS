import ThemedSection from "./ThemedSection";

export default function CorporateConsulting() {
  return (
    <ThemedSection
      id="consulting"
      theme="strategy"
      eyebrow="Traditional Architecture · Modern Strategy Room"
      title="Corporate Consulting"
      narration="Strategy without culture is a plan without a path."
      intro="Carved wooden pillars frame a room of glass and light — where heritage meets modern strategy. Here, Wikasatrian's consultants work alongside your leadership to design transformation that fits your organization's DNA."
      reverse
      items={[
        {
          title: "Organization Development",
          description:
            "Structural and process design that aligns your organization to its strategic ambitions.",
        },
        {
          title: "Culture Transformation",
          description:
            "Programs that shift mindsets and behaviors to build a culture of accountability and performance.",
        },
        {
          title: "Leadership Transformation",
          description:
            "Enterprise-wide leadership shifts that cascade from the boardroom to the front line.",
        },
        {
          title: "Strategic Advisory",
          description:
            "Senior advisory support for organizations navigating change, growth, or transformation.",
        },
      ]}
      benefits={[
        "Clear alignment between strategy, structure, and culture",
        "Sustainable behavior change, not just policy change",
        "Reduced resistance during transformation programs",
        "Trusted advisory partnership through complex change",
      ]}
      cta={{ label: "Talk to Consultant", href: "#inquiry" }}
    />
  );
}
