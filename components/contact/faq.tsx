"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, CircleHelp, MessageCircle, ShieldCheck } from "lucide-react";


const faqs = [
  {
    question: "What healthcare services does DocMarine provide?",
    answer:
      "DocMarine Health Services provides a range of medical and occupational healthcare solutions, including offshore medical services, occupational health assessments, general medical services, emergency preparedness and response, and medical equipment and supplies.",
  },
  {
    question: "Do you provide medical support for offshore and marine operations?",
    answer:
      "Yes. We provide specialized healthcare support for offshore platforms, vessels, marine operations, and other remote working environments. Services can include medic deployment, medical support, emergency response, crew medical assessments, and MEDEVAC coordination.",
  },
  {
    question: "Can DocMarine support corporate occupational health programs?",
    answer:
      "Yes. Our occupational health services can support organizations with pre-employment medical examinations, periodic and statutory assessments, fitness-to-work evaluations, drug and alcohol testing programs, health surveillance, and workplace wellness initiatives.",
  },
  {
    question: "Do you supply and maintain medical equipment?",
    answer:
      "Yes. We supply certified medical equipment and consumables for healthcare facilities, emergency response teams, offshore clinics, corporate medical facilities, and other operational environments. We can also support equipment maintenance and offshore clinic setup.",
  },
  {
    question: "Can you provide standby medical support for projects?",
    answer:
      "Yes. DocMarine can provide standby medical support for projects, high-risk operations, events, and other situations where dedicated emergency medical preparedness is required. Requirements can be assessed based on the nature, duration, location, and risk profile of the project.",
  },
  {
    question: "How can I request a service or medical equipment?",
    answer:
      "You can contact our team through the enquiry form on this page, email us directly, or call our office. For equipment or service enquiries, providing details about your requirements will help us respond with the most appropriate solution.",
  },
  {
    question: "Does DocMarine provide customized healthcare solutions?",
    answer:
      "Yes. Healthcare requirements differ between organizations and operating environments. We work with clients to understand their workforce, operational conditions, medical requirements, and objectives before recommending an appropriate solution.",
  },
];


export const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-sky-100/60 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-100/50 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-sky-500" />

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-600">
              Frequently Asked Questions
            </p>

            <span className="h-px w-10 bg-sky-500" />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Have questions?
            <span className="block text-sky-500">
              We have answers.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Find quick answers to some of the questions clients commonly ask
            about our healthcare services, medical support, and equipment
            solutions.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_25px_70px_rgba(15,23,42,0.12)] sm:p-9 lg:sticky lg:top-28"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-400">
                <CircleHelp className="h-6 w-6" />
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
                Still need help?
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Let&apos;s talk about
                <span className="block text-sky-400">
                  your requirements.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Every organization has different healthcare needs. If you
                cannot find the answer you are looking for, our team is ready
                to understand your requirements and help you identify the
                right solution.
              </p>

              <div className="mt-8 space-y-4 border-t border-white/10 pt-7">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                    <ShieldCheck className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Professional support
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Healthcare solutions built around your operational needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                    <MessageCircle className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Direct communication
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Tell us what you need and our team will take it from
                      there.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#contact-form"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-[0_12px_35px_rgba(14,165,233,0.25)]"
              >
                Ask Us a Question

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-3"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-sky-200 bg-sky-50/50 shadow-[0_12px_35px_rgba(14,165,233,0.06)]"
                      : "border-slate-200 bg-white hover:border-sky-200 hover:shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7 sm:py-6"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold transition-colors ${
                          isOpen
                            ? "bg-sky-500 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`text-sm font-bold leading-6 transition-colors sm:text-base ${
                          isOpen ? "text-slate-950" : "text-slate-800"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 border-sky-200 bg-sky-100 text-sky-600"
                          : "border-slate-200 bg-slate-50 text-slate-500"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <div className="border-t border-sky-100 px-6 pb-6 pt-5 sm:px-7 sm:pb-7">
                          <p className="pl-11 text-sm leading-7 text-slate-600">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-12 flex max-w-6xl items-start gap-3 border-t border-slate-200 px-2 pt-6"
        >
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />

          <p className="text-xs leading-6 text-slate-500">
            Service availability, equipment specifications, and project
            requirements may vary. Our team can provide specific guidance
            based on your operational and healthcare requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
};