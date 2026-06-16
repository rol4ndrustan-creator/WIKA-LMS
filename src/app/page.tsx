"use client";

import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import SoundscapeToggle from "@/components/SoundscapeToggle";
import JourneyNav from "@/components/JourneyNav";
import Footer from "@/components/Footer";
import Opening from "@/components/sections/Opening";
import ForestGate from "@/components/sections/ForestGate";
import PhilosophyJourney from "@/components/sections/PhilosophyJourney";
import BuildingReveal from "@/components/sections/BuildingReveal";
import Pendopo from "@/components/sections/Pendopo";
import VirtualTour360 from "@/components/sections/VirtualTour360";
import ProgramCards from "@/components/sections/ProgramCards";
import LeadershipDevelopment from "@/components/sections/LeadershipDevelopment";
import CorporateAcademy from "@/components/sections/CorporateAcademy";
import ExecutiveRetreat from "@/components/sections/ExecutiveRetreat";
import CorporateConsulting from "@/components/sections/CorporateConsulting";
import AssessmentCenter from "@/components/sections/AssessmentCenter";
import InnovationCenter from "@/components/sections/InnovationCenter";
import SuccessStories from "@/components/sections/SuccessStories";
import FacilitatorProfiles from "@/components/sections/FacilitatorProfiles";
import WhyWikasatrian from "@/components/sections/WhyWikasatrian";
import GallerySection from "@/components/sections/GallerySection";
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

      {/* The Journey — walk from forest gate to Pendopo */}
      <ForestGate />
      <PhilosophyJourney />
      <BuildingReveal />

      {/* Navigate the space */}
      <Pendopo />
      <VirtualTour360 />

      {/* Programs — choose your path */}
      <ProgramCards />

      {/* Deep dives into each program */}
      <LeadershipDevelopment />
      <CorporateAcademy />
      <ExecutiveRetreat />
      <CorporateConsulting />
      <AssessmentCenter />
      <InnovationCenter />

      {/* Credibility + people */}
      <SuccessStories />
      <FacilitatorProfiles />
      <WhyWikasatrian />

      {/* Gallery & CTA */}
      <GallerySection />
      <ImagineSection />
      <InquiryExperience />
      <Footer />
    </main>
  );
}
