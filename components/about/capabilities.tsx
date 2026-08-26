"use client";
import { motion } from "framer-motion";
import {
  Activity,
  Anchor,
  ArrowRight,
  BriefcaseMedical,
  Building2,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  Siren,
  Stethoscope,
  Waves,
  Workflow,
  Cross
} from "lucide-react";


const capabilities = [
  {
    number: "01",
    icon: HeartPulse,
    title: "Occupational Health",
    description:
      "Keeping workforces medically fit, healthy, and ready for demanding operations.",
    tags: ["Workforce Health", "Medical Fitness", "Wellbeing"],
  },
  {
    number: "02",
    icon: Siren,
    title: "Emergency Response",
    description:
      "Prepared medical response for situations where speed, coordination, and expertise matter.",
    tags: ["Emergency Care", "Response", "Preparedness"],
  },
  {
    number: "03",
    icon: Stethoscope,
    title: "Clinical Medical Services",
    description:
      "Qualified medical professionals providing dependable clinical support in complex environments.",
    tags: ["Clinical Care", "Medical Personnel"],
  },
  {
    number: "04",
    icon: Anchor,
    title: "Offshore & Marine Healthcare",
    description:
      "Healthcare support adapted to vessels, offshore platforms, and remote locations.",
    tags: ["Offshore", "Marine", "Remote"],
  },
  {
    number: "05",
    icon: Building2,
    title: "Industrial Healthcare",
    description:
      "Workforce healthcare designed around industrial operations, HSE, and risk awareness.",
    tags: ["Industrial", "HSE", "Workforce"],
  },
  {
    number: "06",
    icon: BriefcaseMedical,
    title: "Corporate Healthcare",
    description:
      "Tailored healthcare solutions aligned with the needs and objectives of corporate clients.",
    tags: ["Corporate", "Consulting", "Healthcare"],
  },
];


const environments = [
  {
    icon: Waves,
    title: "Offshore",
    subtitle: "Remote medical support",
    image: "/images/about/capabilities/offshore.jpg",
  },
  {
    icon: Anchor,
    title: "Marine",
    subtitle: "Healthcare at sea",
    image: "/images/about/capabilities/marine.jpg",
  },
  {
    icon: Activity,
    title: "Energy",
    subtitle: "Workforce protection",
    image: "/images/about/capabilities/workforce.jpg",
  },
  {
    icon: Building2,
    title: "Industrial",
    subtitle: "HSE & occupational health",
    image: "/images/about/capabilities/hse.jpg",
  },
];


export const Capabilities = () => {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-slate-950 py-24 text-white lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_85%_85%,rgba(14,165,233,0.10),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />
      <div className="pointer-events-none absolute -left-48 top-1/3 h-[32rem] w-[32rem] rounded-full bg-sky-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-48 bottom-0 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-sky-400" />

              <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-400">
                What We Do
              </p>
            </div>

            <h2 className="mt-6 text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
              Healthcare for the places
              <span className="block text-sky-400">
                where work gets demanding.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-400 lg:ml-auto lg:text-lg">
            From offshore platforms and vessels to industrial workplaces,
            DocMarine brings together medical expertise, occupational health,
            emergency preparedness, and practical operational support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {environments.map((environment, index) => {
              const Icon = environment.icon;

              return (
                <motion.div
                  key={environment.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="group relative h-56 overflow-hidden rounded-2xl border border-white/10"
                >
                  <img
                    src={environment.image}
                    alt={`${environment.title} healthcare operations`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-sky-300" />

                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300">
                            Environment
                          </p>
                        </div>

                        <h3 className="mt-2 text-xl font-bold text-white">
                          {environment.title}
                        </h3>

                        <p className="mt-1 text-xs text-white/60">
                          {environment.subtitle}
                        </p>
                      </div>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-sm transition-colors group-hover:bg-sky-500">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.15,
          }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-[2rem] border border-sky-400/20 bg-white/[0.045]"
        >
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[340px] overflow-hidden lg:min-h-[430px]">
              <img
                src="/images/about/capabilities/occupational.jpg"
                alt="Healthcare professional supporting occupational health"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-slate-950/70 lg:bg-gradient-to-r" />
              <div className="absolute left-6 top-6 rounded-xl border border-white/15 bg-slate-950/70 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <HeartPulse className="h-4 w-4 text-sky-400" />

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/50">
                      Featured Capability
                    </p>

                    <p className="mt-0.5 text-xs font-semibold text-white">
                      Occupational Health
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />

                  <span className="text-xs font-medium text-white/70">
                    Workforce wellbeing & medical readiness
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/20">
                    <HeartPulse className="h-6 w-6" />
                  </div>

                  <span className="text-xs font-bold tracking-[0.2em] text-sky-400/50">
                    01
                  </span>
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
                  Core Capability
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Occupational Health
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                  We help organizations protect workforce wellbeing, maintain
                  medical fitness, and create healthier working environments
                  through practical occupational healthcare support.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {[
                    "Medical Fitness",
                    "Workforce Health",
                    "Wellbeing",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs text-slate-400"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.slice(1).map((capability, index) => {
            const Icon = capability.icon;

            return (
              <motion.article
                key={capability.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="
                  group relative overflow-hidden
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.035]
                  p-7
                  transition-all duration-300
                  hover:border-sky-400/20
                  hover:bg-white/[0.055]
                "
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-sky-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-sky-400 ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-sky-400/10 group-hover:ring-sky-400/20">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-xs font-bold tracking-[0.2em] text-slate-600">
                      {capability.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-bold text-white">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {capability.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {capability.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.025] px-2.5 py-1 text-[10px] font-medium text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 h-px w-8 bg-sky-400/50 transition-all duration-300 group-hover:w-14" />
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035]"
        >
          <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/20">
              <Workflow className="h-6 w-6" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />

                <p className="text-sm font-bold text-white">
                  One healthcare partner. Multiple operational needs.
                </p>
              </div>

              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-400">
                Our services are designed to work together — giving
                organizations access to medical expertise, occupational health,
                emergency preparedness, and operational support through one
                dependable healthcare partner.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                <span className="h-px w-8 bg-sky-400/40" />
                <span className="h-2 w-2 rounded-full bg-sky-400/50" />
                <span className="h-px w-8 bg-sky-400/20" />
                <span className="h-2 w-2 rounded-full bg-sky-400/20" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-7 flex items-start gap-3 px-2">
          <Cross
            className="mt-0.5 h-4 w-4 shrink-0 text-sky-400"
          />

          <p className="max-w-4xl text-xs leading-6 text-slate-500">
            Our healthcare capabilities are delivered with a focus on
            professional standards, operational realities, workforce
            wellbeing, safety, and dependable service.
          </p>
        </div>
      </div>
    </section>
  );
};