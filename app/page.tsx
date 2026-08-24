import { Products } from "@/components/home/products";
import { Hero } from "../components/home/hero";
import { About } from "@/components/home/about";
import { ContactUs } from "@/components/home/contactUs";
import { Header } from "@/navigation/header";

export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <Products />
      <ContactUs/>
    </main>
  );
}
