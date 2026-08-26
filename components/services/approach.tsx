"use client";
import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  ClipboardCheck,
  HeartPulse,
  Radio,
  ShieldCheck,
  Siren,
  Workflow,
} from "lucide-react";

const approachSteps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Assess",
    description:
      "We understand the workforce, operational environment, medical risks, and specific requirements of each client.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Prepare",
    description:
      "Medical plans, personnel, equipment, supplies, and response procedures are aligned before operations begin.",
  },
  {
    number: "03",
    icon: Radio,
    title: "Deploy",
    description:
      "Qualified medical support and appropriate resources are positioned where they are needed, including remote and offshore locations.",
  },
  {
    number: "04",
    icon: HeartPulse,
    title: "Respond",
    description:
      "When an incident occurs, our teams support rapid assessment, stabilization, coordination, and escalation of care.",
  },
];

const commitments = [
  "Qualified medical personnel",
  "Operationally focused planning",
  "Emergency preparedness",
  "Safety-conscious delivery",
  "Responsive client support",
  "Integrated healthcare solutions",
];


export const ServiceApproach = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(2,6,23,0.65)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-sky-400" />

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-sky-400">
                Our Approach
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Prepared for the
              <span className="block text-sky-400">
                moments that matter.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-400 lg:ml-auto lg:text-lg">
            Effective healthcare in demanding environments requires more than
            medical expertise. It requires preparation, coordination,
            responsiveness, and an understanding of the operation itself.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400 ring-1 ring-emerald-400/20">
                <Activity className="h-5 w-5" />

                <span className="absolute -right-1 -top-1 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Medical readiness is an operational priority.
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Planning today helps teams respond confidently tomorrow.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              Preparedness focused
            </div>
          </div>
        </motion.div>

        <div className="relative mt-10">
          <div className="pointer-events-none absolute left-[7%] right-[7%] top-12 hidden h-px bg-gradient-to-r from-sky-400/10 via-sky-400/40 to-sky-400/10 lg:block" />

          <div className="grid gap-5 lg:grid-cols-4">
            {approachSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-7 transition-all duration-300 hover:border-sky-400/20 hover:bg-slate-900"
                >
                  <div className="flex items-center justify-between">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-400 shadow-[0_0_30px_rgba(56,189,248,0.08)] transition-all duration-300 group-hover:bg-sky-400/15">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-xs font-bold tracking-[0.2em] text-slate-600">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>

                  <div className="mt-7 h-px w-8 bg-sky-400/50 transition-all duration-300 group-hover:w-14" />
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-12 grid gap-8 overflow-hidden rounded-[2rem] border border-sky-400/15 bg-gradient-to-br from-sky-500/[0.10] via-white/[0.035] to-transparent p-7 sm:p-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-10"
        >
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/20">
              <Workflow className="h-5 w-5" />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
              Integrated Delivery
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              One healthcare partner.
              <span className="block text-slate-400">
                Multiple operational needs.
              </span>
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Our services can be structured around individual requirements or
              integrated into a broader healthcare and occupational health
              program.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {commitments.map((commitment) => (
              <div
                key={commitment}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3.5"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-400" />

                <span className="text-sm font-medium text-slate-300">
                  {commitment}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 flex items-start gap-3 px-2">
          <Siren className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />

          <p className="max-w-4xl text-xs leading-6 text-slate-500">
            Our approach is designed to support safer operations, workforce
            wellbeing, medical preparedness, and continuity of care across
            demanding work environments.
          </p>
        </div>
      </div>
    </section>
  );
};