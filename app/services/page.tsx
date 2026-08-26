import { ServiceApproach } from "@/components/services/approach";
import { ServicesCTA } from "@/components/services/cta";
import { ServiceHero } from "@/components/services/hero";
import { IndustriesServed } from "@/components/services/industries";
import { ServicesOverview } from "@/components/services/overview";


export default function ServicesWa() {
  return (
    <main>
      <ServiceHero/>
      <div id="services">
        <ServicesOverview />
      </div>
      <IndustriesServed />
      <ServiceApproach />
      <ServicesCTA />
    </main>
  );
}
