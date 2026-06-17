export type JourneyStop = {
  id: string;
  label: string;
  philosophy?: string;
};

export const journeyStops: JourneyStop[] = [
  { id: "forest-gate", label: "Forest Entrance", philosophy: "Beginning" },
  { id: "destination", label: "Tentang Wikasatrian" },
  { id: "philosophy", label: "The Path", philosophy: "Reflection" },
  { id: "pendopo", label: "Pendopo", philosophy: "Wisdom" },
  { id: "facilities", label: "Facilities" },
  { id: "virtual-tour", label: "Virtual Tour" },
  { id: "leadership", label: "Leadership Development" },
  { id: "academy", label: "Corporate Academy" },
  { id: "retreat", label: "Executive Retreat" },
  { id: "consulting", label: "Corporate Consulting" },
  { id: "assessment", label: "Assessment Center" },
  { id: "innovation", label: "Innovation Center" },
  { id: "programs", label: "Program Packages" },
  { id: "stories", label: "Success Stories" },
  { id: "why", label: "Why Wikasatrian" },
  { id: "imagine", label: "Imagine" },
  { id: "inquiry", label: "Begin Your Journey" },
];
