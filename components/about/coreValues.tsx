"use client";

import { motion } from "framer-motion";
import {
  Award,
  Handshake,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
  ArrowUpRight,
} from "lucide-react";

const values = [
  {
    title: "Professionalism",
    short: "We show up prepared.",
    description:
      "We uphold high professional standards in every engagement, service, and decision.",
    icon: Award,
  },
  {
    title: "Integrity",
    short: "We do what is right.",
    description:
      "We act with honesty, transparency, accountability, and respect in everything we do.",
    icon: HeartHandshake,
  },
  {
    title: "Safety First",
    short: "People come first.",
    description:
      "Safety is fundamental to our operations, protecting patients, personnel, clients, and communities.",
    icon: ShieldCheck,
    featured: true,
  },
  {
    title: "Excellence",
    short: "Good enough is never enough.",
    description:
      "We continuously pursue dependable, high-quality healthcare services that exceed expectations.",
    icon: Sparkles,
  },
  {
    title: "Innovation",
    short: "We keep finding better ways.",
    description:
      "We embrace better ideas, modern technologies, and smarter approaches to healthcare delivery.",
    icon: Lightbulb,
  },
  {
    title: "Teamwork",
    short: "Better together.",
    description:
      "We collaborate across disciplines and with our clients to achieve stronger outcomes.",
    icon: Users,
  },
  {
    title: "Client Satisfaction",
    short: "We listen before we act.",
    description:
      "We understand operational needs and remain committed to creating meaningful client value.",
    icon: Handshake,
  },
];

export const CoreValues = () => {
  return (
    <section
      id="core-values"
      className="relative overflow-hidden bg-slate-50 py-24 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-sky-200/30 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cyan-200/30 blur-[110px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =======================================================
            INTRO
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          {/* Eyebrow */}

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-sky-500" />

              <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-600">
                What Guides Us
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              The way we work
              <span className="block text-sky-600">
                matters.
              </span>
            </h2>
          </div>

          {/* Intro copy */}

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-lg leading-8 text-slate-600">
              Healthcare is ultimately about people. Our values shape how we
              treat patients, support our teams, work with clients, and respond
              when the situation demands our very best.
            </p>
          </div>
        </motion.div>

        {/* =======================================================
            HUMAN STATEMENT / VISUAL PANEL
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="relative mt-16 overflow-hidden rounded-[2rem] bg-slate-950"
        >
          {/* Image */}

          <div className="absolute inset-0">
            <img
              src="/images/about/medecine.jpg"
              alt="Healthcare professionals working together"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-slate-950/75" />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
          </div>

          {/* Decorative glow */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />

          <div className="relative grid min-h-[360px] items-end lg:min-h-[400px] lg:grid-cols-[1fr_auto]">

            <div className="max-w-2xl p-8 sm:p-12 lg:p-14">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-sky-400 backdrop-blur">
                <HeartHandshake className="h-6 w-6" />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                Our philosophy
              </p>

              <h3 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                Behind every operation
                <span className="block text-sky-400">
                  is a person who matters.
                </span>
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                From a medical professional on duty to a worker far from
                home, we never lose sight of the people behind the operation.
              </p>
            </div>

            {/* Quote-style side panel */}

            <div className="hidden border-l border-white/10 px-10 py-12 lg:block">
              <p className="text-5xl font-black text-white/10">
                “
              </p>

              <p className="max-w-[180px] text-sm font-medium leading-6 text-slate-300">
                Professional care starts with genuine responsibility for
                people.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            VALUES
        ======================================================= */}

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {values.map((value, index) => {
            const Icon = value.icon;

            if (value.featured) {
              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[2rem] bg-sky-600 p-8 text-white shadow-[0_20px_60px_rgba(14,165,233,0.18)] lg:row-span-2 lg:p-10"
                >
                  {/* Glow */}

                  <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />

                  <div className="relative flex h-full flex-col">

                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
                        <Icon className="h-7 w-7" />
                      </div>

                      <ArrowUpRight className="h-5 w-5 text-white/50 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>

                    <div className="mt-12">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-100">
                        Our priority
                      </p>

                      <h3 className="mt-3 text-3xl font-extrabold tracking-tight">
                        {value.title}
                      </h3>

                      <p className="mt-4 text-lg font-medium leading-7 text-white">
                        {value.short}
                      </p>

                      <p className="mt-5 text-sm leading-7 text-sky-100">
                        {value.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-16">
                      <div className="h-px bg-white/20" />

                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-100">
                          DMHS Principle
                        </span>

                        <div className="flex gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-white" />
                          <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            }

            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-[0_18px_50px_rgba(14,165,233,0.10)]"
              >
                {/* Number */}

                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-xs font-bold tabular-nums text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-bold tracking-tight text-slate-900">
                  {value.title}
                </h3>

                {/* Human short statement */}

                <p className="mt-2 text-sm font-semibold text-sky-600">
                  {value.short}
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {value.description}
                </p>

                <div className="mt-6 h-px w-8 bg-sky-500 transition-all duration-300 group-hover:w-14" />
              </motion.article>
            );
          })}
        </div>

        {/* =======================================================
            CLOSING STATEMENT
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div className="flex flex-col gap-6 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:flex-row sm:items-center sm:p-8">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sky-400">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                Values are seen in what we do.
              </p>

              <p className="mt-1 max-w-4xl text-sm leading-7 text-slate-500">
                They influence how our people prepare, communicate, make
                decisions, respond to pressure, and care for the people we
                serve.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};