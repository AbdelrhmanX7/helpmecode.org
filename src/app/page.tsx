"use client";
import HeroSection from "@/components/Hero";
import {
  OurPrograms,
  WhyOurPlatformWorks,
} from "@/components/HomePage/OurPrograms/page";
import OurTeam from "@/components/HomePage/OurTeam/page";
import Statistics from "@/components/HomePage/Statistics/page";
import { ReactLenis } from "@studio-freight/react-lenis";
import SuggestionSection from "@/components/HomePage/Suggestion";

export default function Home() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <main className="">
        <div className="flex min-h-screen flex-col">
          <HeroSection />

          <Statistics />

          <OurPrograms />
          <WhyOurPlatformWorks />

          <OurTeam />

          <SuggestionSection />
        </div>
      </main>
    </ReactLenis>
  );
}
