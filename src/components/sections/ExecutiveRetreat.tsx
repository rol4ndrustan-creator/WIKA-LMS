import ThemedSection from "./ThemedSection";

export default function ExecutiveRetreat() {
  return (
    <ThemedSection
      id="retreat"
      theme="mountain"
      eyebrow="Mountain · Pine Forest · Fire Pit"
      title="Executive Retreat"
      narration="Above the clouds, leaders think clearly again."
      intro="The air is thinner here. Pine forests stretch toward the mountain ridge, and a fire pit glows beneath the night sky. This is where boards and executive teams step away from the noise to realign on what matters most."
      items={[
        {
          title: "Executive Retreat",
          description:
            "Immersive multi-day experiences designed for senior leadership teams to reconnect and recalibrate.",
        },
        {
          title: "Board Retreat",
          description:
            "Facilitated sessions for boards and shareholders to align on governance, vision, and long-term strategy.",
        },
        {
          title: "Strategic Alignment",
          description:
            "Cross-functional workshops that translate strategy into shared priorities and commitments.",
        },
        {
          title: "Leadership Reflection",
          description:
            "Guided reflection journeys that help leaders reconnect with purpose, values, and resilience.",
        },
      ]}
      benefits={[
        "Aligned executive teams with shared direction",
        "Renewed energy and clarity at the top",
        "Stronger trust and candor among senior leaders",
        "Strategic decisions grounded in shared understanding",
      ]}
      cta={{ label: "Book Executive Discussion", href: "#inquiry" }}
    />
  );
}
