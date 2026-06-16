export type JourneyStop = {
  id: string;
  label: string;
  philosophy?: string;
};

export const journeyStops: JourneyStop[] = [
  { id: "forest-gate", label: "Forest Entrance", philosophy: "Beginning" },
  { id: "philosophy", label: "The Path", philosophy: "Reflection" },
  { id: "building-reveal", label: "Wikasatrian", philosophy: "Destination" },
  { id: "pendopo", label: "Pendopo", philosophy: "Wisdom" },
  { id: "virtual-tour", label: "Explore Space" },
  { id: "programs", label: "Programs" },
  { id: "leadership", label: "Leadership Development" },
  { id: "academy", label: "Corporate Academy" },
  { id: "retreat", label: "Executive Retreat" },
  { id: "consulting", label: "Corporate Consulting" },
  { id: "assessment", label: "Assessment Center" },
  { id: "innovation", label: "Innovation Center" },
  { id: "stories", label: "Success Stories" },
  { id: "facilitators", label: "The Guides" },
  { id: "why", label: "Why Wikasatrian" },
  { id: "gallery", label: "Gallery" },
  { id: "imagine", label: "Imagine" },
  { id: "inquiry", label: "Begin Your Journey" },
];
