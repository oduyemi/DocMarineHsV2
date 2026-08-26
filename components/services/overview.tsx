"use client";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BriefcaseMedical,
  Check,
  ChevronRight,
  HeartPulse,
  ShieldCheck,
  Siren,
  Stethoscope,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: HeartPulse,
    title: "Offshore Medical Services",
    shortTitle: "Offshore Medical",
    description:
      "Comprehensive medical support for offshore platforms, vessels, and remote operations where dependable healthcare and rapid response are essential.",
    items: [
      "Offshore medic deployment and management",
      "Platform and vessel medical support services",
      "Emergency medical response and stabilization",
      "Medical evacuation (MEDEVAC) coordination",
      "Crew medical assessments and monitoring",
    ],
    featured: true,
  },
  {
    number: "02",
    icon: BriefcaseMedical,
    title: "Occupational Health Services",
    shortTitle: "Occupational Health",
    description:
      "Workforce health solutions designed to assess medical fitness, monitor occupational risks, and promote healthier working environments.",
    items: [
      "Pre-employment medical examinations",
      "Periodic and statutory medical assessments",
      "Fitness-to-work evaluations",
      "Drug and alcohol testing programs",
      "Health surveillance and workplace wellness initiatives",
    ],
  },
  {
    number: "03",
    icon: Stethoscope,
    title: "General Medical Services",
    shortTitle: "General Medical",
    description:
      "Professional clinical and preventive healthcare services tailored to corporate organizations and their workforce.",
    items: [
      "Primary healthcare delivery",
      "Corporate clinic management",
      "Medical consultancy services",
      "Preventive healthcare programs",
      "Executive health screening",
    ],
  },
  {
    number: "04",
    icon: Siren,
    title: "Emergency Preparedness & Response",
    shortTitle: "Emergency Response",
    description:
      "Structured emergency medical planning and response support designed to improve preparedness and protect people during critical incidents.",
    items: [
      "Emergency medical planning",
      "First aid and emergency response training",
      "Standby medical support for projects and high-risk operations",
      "Incident management and crisis support",
    ],
  },
  {
    number: "05",
    icon: Wrench,
    title: "Medical Equipment & Supplies",
    shortTitle: "Equipment & Supplies",
    description:
      "Reliable medical equipment, consumables, procurement, and inventory solutions supporting healthcare operations from setup through ongoing service.",
    items: [
      "Supply and maintenance of certified medical equipment",
      "Procurement of medical consumables",
      "Offshore clinic setup and commissioning",
      "Medical inventory management solutions",
    ],
  },
];

export const ServicesOverview = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-0 h-[500px] w-[500px] rounded-full bg-sky-100/70 blur-[120px]" />
        <div className="absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-50 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-sky-500" />

              <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-600">
                What We Do
              </p>
            </div>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Healthcare services
              <span className="block text-sky-500">
                built around operations.
              </span>
            </h2>
          </div>

          <div className="lg:pl-10">
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              From routine workforce healthcare to complex offshore medical
              operations and emergency response, DocMarine brings together the
              people, expertise, planning, and resources required to support
              demanding environments.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
        >
          <div className="grid grid-cols-2 sm:grid-cols-5">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <a
                  key={service.number}
                  href={`#service-${service.number}`}
                  className={`group flex items-center gap-3 px-4 py-4 transition-colors duration-300 hover:bg-white sm:px-5 ${
                    index !== services.length - 1
                      ? "border-b border-slate-200 sm:border-b-0 sm:border-r"
                      : ""
                  } ${
                    index === 1
                      ? "sm:border-r"
                      : ""
                  }`}
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-sky-500 shadow-sm ring-1 ring-slate-200 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white group-hover:ring-sky-500">
                    <Icon className="h-4 w-4" />
                  </div>

                  <span className="text-[11px] font-bold leading-4 text-slate-600 transition-colors group-hover:text-slate-950">
                    {service.shortTitle}
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-8 space-y-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            if (service.featured) {
              return (
                <motion.article
                  key={service.number}
                  id={`service-${service.number}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden rounded-[2rem] border border-sky-200 bg-slate-950 text-white shadow-[0_25px_80px_rgba(15,23,42,0.12)]"
                >
                  {/* Featured glow */}

                  <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-500/15 blur-[100px]" />

                  <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />

                  <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">
                    {/* Left */}

                    <div className="p-8 sm:p-10 lg:p-12">
                      <div className="flex items-start justify-between gap-5">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/20">
                          <Icon className="h-7 w-7" />
                        </div>

                        <span className="text-xs font-bold tracking-[0.25em] text-sky-400/60">
                          {service.number}
                        </span>
                      </div>

                      <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400">
                        Core Service
                      </p>

                      <h3 className="mt-3 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                        {service.title}
                      </h3>

                      <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                        {service.description}
                      </p>

                      <Link
                        href="/contact"
                        className="group/cta mt-8 inline-flex items-center gap-2 text-sm font-bold text-sky-400 transition-colors hover:text-cyan-300"
                      >
                        Discuss your requirements

                        <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
                      </Link>
                    </div>

                    <div className="border-t border-white/10 bg-white/[0.025] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                      <div className="flex items-center gap-3">
                        <div className="h-px w-8 bg-sky-400" />

                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                          Service Scope
                        </p>
                      </div>

                      <div className="mt-7 space-y-3">
                        {service.items.map((item, itemIndex) => (
                          <motion.div
                            key={item}
                            initial={{
                              opacity: 0,
                              x: 12,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: 0.12 + itemIndex * 0.06,
                            }}
                            className="group/item flex items-start gap-4 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-4 transition-all duration-300 hover:border-sky-400/20 hover:bg-sky-400/[0.05]"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-400">
                              <Check
                                className="h-3 w-3"
                                strokeWidth={3}
                              />
                            </span>

                            <span className="text-sm leading-6 text-slate-300 transition-colors group-hover/item:text-white">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            }

            return (
              <motion.article
                key={service.number}
                id={`service-${service.number}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(index * 0.05, 0.2),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition-all duration-300 hover:border-sky-200 hover:shadow-[0_20px_60px_rgba(14,165,233,0.08)]"
              >
                <div className="grid lg:grid-cols-[auto_0.75fr_1.25fr] lg:items-center">
                  <div className="hidden px-8 lg:block">
                    <span className="text-xs font-extrabold tracking-[0.2em] text-slate-300 transition-colors group-hover:text-sky-400">
                      {service.number}
                    </span>
                  </div>

                  <div className="flex items-start gap-5 p-7 sm:p-8 lg:py-9 lg:pl-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-500 ring-1 ring-sky-100 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white group-hover:ring-sky-500">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 lg:hidden">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-sky-500">
                          {service.number}
                        </span>

                        <span className="h-px w-5 bg-sky-200" />
                      </div>

                      <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl lg:mt-0">
                        {service.title}
                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 bg-slate-50/60 p-7 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
                    <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2.5"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-sky-500"
                            strokeWidth={2.5}
                          />

                          <span className="text-xs leading-5 text-slate-600">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                        Service area {service.number}
                      </span>

                      <ChevronRight className="h-4 w-4 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-sky-500" />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="relative mt-12 overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/20">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <p className="text-lg font-bold">
                  Need a healthcare solution tailored to your operation?
                </p>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  Tell us about your workforce, location, operational
                  requirements, or project and our team can help determine
                  the right level of medical support.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-sky-400 hover:shadow-[0_15px_40px_rgba(14,165,233,0.25)]"
            >
              Talk to DocMarine

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <div className="mt-7 flex items-start gap-3 px-2">
          <Activity className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />

          <p className="text-xs leading-6 text-slate-400">
            Our services are structured around professional standards,
            operational requirements, workforce wellbeing, safety, and
            continuity of care.
          </p>
        </div>
      </div>
    </section>
  );
};