import ThemedSection from "./ThemedSection";

export default function CorporateAcademy() {
  return (
    <ThemedSection
      id="academy"
      theme="academy"
      eyebrow="Customized Learning Roadmaps"
      title="Corporate Academy"
      narration="Capability is not bought. It is grown, season by season."
      intro="Walk into a hall built for growth. Wikasatrian designs a learning ecosystem unique to your organization — mapping today's capability gaps to tomorrow's strategic needs."
      reverse
      items={[
        {
          title: "Customized Learning",
          description:
            "Programs designed around your industry, culture, and business priorities — never off-the-shelf.",
        },
        {
          title: "Corporate Academy",
          description:
            "A structured internal academy model that scales learning across departments and regions.",
        },
        {
          title: "Future Skill",
          description:
            "Curated curricula on digital fluency, data literacy, and the human skills that future-proof your workforce.",
        },
        {
          title: "Learning Roadmap",
          description:
            "Phased, multi-year roadmaps that connect individual development to organizational milestones.",
        },
        {
          title: "Capability Development",
          description:
            "Continuous capability-building cycles — design, deliver, measure, and refine.",
        },
      ]}
      benefits={[
        "Learning directly tied to business KPIs",
        "Scalable academy model across business units",
        "Higher training ROI through targeted design",
        "A culture of continuous capability building",
      ]}
      cta={{ label: "Request Custom Program", href: "#inquiry" }}
    />
  );
}
