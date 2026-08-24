import { Capabilities } from "@/components/about/capabilities";
import { CoreValues } from "@/components/about/coreValues";
import { AboutHero } from "@/components/about/hero";
import { CompanyOverview } from "@/components/about/overview";
import { VisionMission } from "@/components/about/visionMission";
import { AboutCTA } from "./cta";

export default function AboutUs() {
  return (
    <main>
      <AboutHero />
      <div id="company-overview">
        <CompanyOverview />
      </div>
      <div id="mission">
        <VisionMission />
      </div>
      <CoreValues />
      <Capabilities />
      <AboutCTA />
    </main>
  );
}
