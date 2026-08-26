"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Crosshair,
  Globe2,
  Lightbulb,
  ShieldCheck,
  Target,
} from "lucide-react";

const missionPoints = [
  {
    icon: ShieldCheck,
    title: "Professionalism",
    text: "Maintaining high standards across every aspect of healthcare delivery.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Embracing modern approaches and technologies that improve outcomes.",
  },
  {
    icon: Target,
    title: "Operational Excellence",
    text: "Delivering dependable healthcare solutions that support continuity and performance.",
  },
];

export const VisionMission = () => {
  return (
    <section
      id="vision-mission"
      className="relative overflow-hidden bg-slate-50 py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-48 top-20 h-[32rem] w-[32rem] rounded-full bg-sky-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-48 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cyan-100/50 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-sky-500" />

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-600">
              Our Direction
            </p>
          </div>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Driven by purpose.
            <span className="block text-sky-600">
              Guided by responsibility.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Our vision and mission define the standard we aspire to achieve
            and the principles that guide how we serve our clients,
            healthcare professionals, and the workforces entrusted to us.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_25px_70px_rgba(15,23,42,0.18)] sm:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl transition-transform duration-700 group-hover:scale-110" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="pointer-events-none absolute right-8 top-8 hidden h-28 w-28 rounded-full border border-white/10 sm:block">
              <div className="absolute inset-4 rounded-full border border-white/10" />

              <div className="absolute inset-0 flex items-center justify-center">
                <Globe2 className="h-7 w-7 text-sky-400/70" />
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                  <Compass className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                    Our Vision
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Where we are going
                  </p>
                </div>
              </div>

              <blockquote className="mt-12 max-w-xl text-2xl font-semibold leading-[1.45] tracking-tight text-white sm:text-3xl">
                “To be the preferred provider of integrated healthcare and
                occupational medical services for the offshore, marine, and
                energy industries in Africa.”
              </blockquote>

              {/* Bottom */}
              <div className="mt-12 flex items-center gap-3 border-t border-white/10 pt-6">
                <span className="h-2 w-2 rounded-full bg-sky-400" />

                <p className="text-sm text-slate-400">
                  Building healthier and more resilient industries across
                  Africa.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-50 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                  <Crosshair className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-600">
                    Our Mission
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    How we get there
                  </p>
                </div>
              </div>

              <p className="mt-12 text-xl font-semibold leading-[1.6] tracking-tight text-slate-900 sm:text-2xl">
                To deliver world-class medical services through
                <span className="text-sky-600"> professionalism</span>,
                <span className="text-sky-600"> innovation</span>,
                <span className="text-sky-600"> safety</span>, and
                <span className="text-sky-600"> operational excellence</span>
                while promoting healthier and more productive workforces.
              </p>

              <div className="mt-10 space-y-3">
                {missionPoints.map((point, index) => {
                  const Icon = point.icon;

                  return (
                    <motion.div
                      key={point.title}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.25 + index * 0.08,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/70 p-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-sky-600 shadow-sm">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900">
                          {point.title}
                        </p>

                        <p className="mt-0.5 text-xs leading-5 text-slate-500">
                          {point.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.article>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-8 overflow-hidden rounded-2xl border border-sky-100 bg-sky-50"
        >
          <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm">
                <ArrowRight className="h-4 w-4" />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">
                  From vision to execution
                </p>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
                  Every service we provide is designed to move us closer to
                  our vision while maintaining the safety, professionalism,
                  and operational discipline our clients expect.
                </p>
              </div>
            </div>

            <div className="hidden shrink-0 sm:block">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                <span className="h-px w-10 bg-sky-200" />
                <span className="h-2 w-2 rounded-full bg-sky-600" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};