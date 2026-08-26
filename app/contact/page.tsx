import { ContactCTA } from "@/components/contact/cta";
import { ContactFAQ } from "@/components/contact/faq";
import { ContactForm } from "@/components/contact/form";
import { ContactHero } from "@/components/contact/hero";
import { ContactMethods } from "@/components/contact/method";



export default function ContactWa() {
  return (
    <main>
      <ContactHero/>
      <ContactMethods/>
      <div id="contact-form">
        <ContactForm />
      </div>
      <ContactFAQ />
      <ContactCTA />
    </main>
  );
}
