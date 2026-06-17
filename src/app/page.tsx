"use client";

import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import SoundscapeToggle from "@/components/SoundscapeToggle";
import JourneyNav from "@/components/JourneyNav";
import Footer from "@/components/Footer";
import Opening from "@/components/sections/Opening";
import ForestGate from "@/components/sections/ForestGate";
import Destination from "@/components/sections/Destination";
import PhilosophyJourney from "@/components/sections/PhilosophyJourney";
import PhilosophyValues from "@/components/sections/PhilosophyValues";
import Pendopo from "@/components/sections/Pendopo";
import Facilities from "@/components/sections/Facilities";
import VirtualTour from "@/components/sections/VirtualTour";
import LeadershipDevelopment from "@/components/sections/LeadershipDevelopment";
import CorporateAcademy from "@/components/sections/CorporateAcademy";
import ExecutiveRetreat from "@/components/sections/ExecutiveRetreat";
import CorporateConsulting from "@/components/sections/CorporateConsulting";
import AssessmentCenter from "@/components/sections/AssessmentCenter";
import InnovationCenter from "@/components/sections/InnovationCenter";
import ProgramPackages from "@/components/sections/ProgramPackages";
import SuccessStories from "@/components/sections/SuccessStories";
import WhyWikasatrian from "@/components/sections/WhyWikasatrian";
import ImagineSection from "@/components/sections/ImagineSection";
import InquiryExperience from "@/components/sections/InquiryExperience";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <main className="relative w-full">
      <SmoothScroll />
      <Opening onEnter={() => setEntered(true)} />

      {entered && (
        <>
          <JourneyNav />
          <SoundscapeToggle />
        </>
      )}

      <ForestGate />
      <Destination />
      <PhilosophyJourney />
      <PhilosophyValues />
      <Pendopo />
      <Facilities />
      <VirtualTour />
      <LeadershipDevelopment />
      <CorporateAcademy />
      <ExecutiveRetreat />
      <CorporateConsulting />
      <AssessmentCenter />
      <InnovationCenter />
      <ProgramPackages />
      <SuccessStories />
      <WhyWikasatrian />
      <ImagineSection />
      <InquiryExperience />
      <Footer />
    </main>
  );
}
