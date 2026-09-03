import { Products } from "@/components/home/products";
import { Hero } from "../components/home/hero";
import { About } from "@/components/home/about";
import { ContactUs } from "@/components/home/contactUs";
import { WhyChooseUs } from "@/components/home/why";
import { HomeCTA } from "@/components/home/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <WhyChooseUs />
      <Products />
      <ContactUs/>
      <HomeCTA />
    </main>
  );
}
